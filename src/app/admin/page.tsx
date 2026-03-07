'use client';
import React from 'react';

const adminHTML = `
<!-- TOASTS -->
<div class="toast-wrap" id="toastWrap"></div>

<!-- MOBILE TOGGLE -->
<button class="sb-toggle" onclick="toggleSidebar()"><i data-lucide="menu" style="width:17px;height:17px"></i></button>

<!-- SIDEBAR -->
<aside class="sidebar" id="sidebar">
  <div class="sb-logo">
    <div class="sb-logo-mark"></div>
    <div>
      <div class="sb-brand">DMG <span>Records</span></div>
      <div class="sb-subtitle">Painel Admin v2</div>
    </div>
  </div>
  <div class="sb-section">Principal</div>
  <div class="sb-item active" onclick="nav('dashboard',this)"><i data-lucide="layout-dashboard" class="si"></i>Dashboard</div>
  <div class="sb-item" onclick="nav('transmissao',this)"><i data-lucide="radio" class="si"></i>Transmissão <span class="sb-badge" id="sb-onair">ON</span></div>
  <div class="sb-section">Conteúdo</div>
  <div class="sb-item" onclick="nav('musicas',this)"><i data-lucide="music" class="si"></i>Músicas</div>
  <div class="sb-item" onclick="nav('programacao',this)"><i data-lucide="calendar" class="si"></i>Programação</div>
  <div class="sb-item" onclick="nav('noticias',this)"><i data-lucide="newspaper" class="si"></i>Notícias <span class="sb-badge">3</span></div>
  <div class="sb-item" onclick="nav('chat',this)"><i data-lucide="message-circle" class="si"></i>Chat ao Vivo <span class="sb-badge" id="sb-chat-count">12</span></div>
  <div class="sb-section">Negócios</div>
  <div class="sb-item" onclick="nav('anunciantes',this)"><i data-lucide="megaphone" class="si"></i>Anunciantes</div>
  <div class="sb-item" onclick="nav('equipe',this)"><i data-lucide="users" class="si"></i>Equipe</div>
  <div class="sb-item" onclick="nav('estatisticas',this)"><i data-lucide="bar-chart-2" class="si"></i>Estatísticas</div>
  <div class="sb-section">Sistema</div>
  <div class="sb-item" onclick="nav('configuracoes',this)"><i data-lucide="settings" class="si"></i>Configurações</div>
  <div class="sb-item" onclick="nav('logs',this)"><i data-lucide="file-text" class="si"></i>Logs do Sistema</div>
  <div class="sb-footer">
    <div class="sb-status-box" id="sbStatusBox">
      <div class="sb-status-dot" id="sbStatusDot"></div>
      <div class="sb-status-text">
        <span id="sbStatusLabel">Verificando…</span><br>
        <span id="sbListeners" style="color:rgba(255,255,255,.38)">— ouvintes</span>
      </div>
    </div>
    <div style="display:flex;align-items:center;gap:9px;padding:2px 4px">
      <div style="width:28px;height:28px;background:var(--red);border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.72rem;color:#fff">A</div>
      <div>
        <div style="font-size:.75rem;font-weight:600;color:rgba(255,255,255,.82)">Admin DMG</div>
        <div style="font-size:.6rem;color:rgba(255,255,255,.32)">admin@dmgrecords.com.br</div>
      </div>
    </div>
  </div>
</aside>

<!-- TOPBAR -->
<div class="topbar">
  <div class="tb-title" id="topbarTitle">Dashboard <em>Geral</em></div>
  <div class="tb-search">
    <i data-lucide="search" style="width:13px;height:13px;color:var(--ink3)"></i>
    <input type="text" placeholder="Buscar…" id="globalSearch" oninput="globalSearchFn(this.value)">
  </div>
  <div class="api-badge" id="apiBadge"><div class="api-badge-dot" id="apiDot"></div><span id="apiStatus">Conectando…</span></div>
  <button class="tb-icon-btn" title="Atualizar dados da API" onclick="fetchAPI()"><i data-lucide="refresh-cw" style="width:14px;height:14px" id="refreshIcon"></i></button>
  <button class="tb-icon-btn" title="Notificações" onclick="nav('logs')"><i data-lucide="bell" style="width:14px;height:14px"></i><span class="notif-dot"></span></button>
  <div class="tb-avatar" title="Perfil Admin">A</div>
</div>

<!-- MAIN -->
<main class="main">

<!-- DASHBOARD -->
<div class="page active fade-in" id="page-dashboard">
  <div class="g4 mb">
    <div class="kpi red"><div class="kpi-icon" style="background:var(--red-light);color:var(--red)"><i data-lucide="headphones" style="width:18px;height:18px"></i></div><div class="kpi-val" id="kpi-listeners">—</div><div class="kpi-label">Ouvintes Agora</div><div class="kpi-delta up" id="kpi-listeners-d"><i data-lucide="radio" style="width:11px;height:11px"></i> Ao vivo</div></div>
    <div class="kpi green"><div class="kpi-icon" style="background:var(--green-bg);color:var(--green)"><i data-lucide="music-2" style="width:18px;height:18px"></i></div><div class="kpi-val" id="kpi-track">—</div><div class="kpi-label">Tocando Agora</div><div class="kpi-delta" id="kpi-genre" style="color:var(--ink3)"><i data-lucide="tag" style="width:11px;height:11px"></i> —</div></div>
    <div class="kpi blue"><div class="kpi-icon" style="background:var(--blue-bg);color:var(--blue)"><i data-lucide="server" style="width:18px;height:18px"></i></div><div class="kpi-val" id="kpi-bitrate">—</div><div class="kpi-label">Bitrate / Plano</div><div class="kpi-delta" id="kpi-plan" style="color:var(--ink3)"><i data-lucide="users" style="width:11px;height:11px"></i> — ouvintes máx.</div></div>
    <div class="kpi acc"><div class="kpi-icon" style="background:#FFF8E1;color:var(--accent)"><i data-lucide="hard-drive" style="width:18px;height:18px"></i></div><div class="kpi-val" id="kpi-ftp">—</div><div class="kpi-label">Espaço FTP (AutoDJ)</div><div class="kpi-delta up"><i data-lucide="trending-up" style="width:11px;height:11px"></i> +3 músicas hoje</div></div>
  </div>
  <div class="g73 mb">
    <div class="card">
      <div class="card-hdr">
        <div class="card-title"><div class="cti" style="background:var(--red-light);color:var(--red)"><i data-lucide="activity" style="width:13px;height:13px"></i></div>Ouvintes — Últimas 24h</div>
        <div style="display:flex;gap:8px;align-items:center">
          <span class="badge b-green" id="dash-peak"></span>
          <button class="btn btn-ghost btn-sm" onclick="fetchAPI()"><i data-lucide="refresh-cw" style="width:12px;height:12px"></i>Atualizar</button>
        </div>
      </div>
      <div class="card-body">
        <div class="chart-wrap" id="listenerChart"></div>
        <div class="ch-labels" id="chartLabels"></div>
      </div>
    </div>
    <div>
      <div class="onair-card">
        <div style="display:flex;gap:12px;align-items:flex-start;margin-bottom:12px">
          <div class="onair-cover" id="onairCover"><div class="onair-cover-ph">🎵</div></div>
          <div style="flex:1">
            <div class="onair-eyebrow"><div class="live-dot" id="onairDot"></div><span id="onairProgram">RÁDIO DMG</span></div>
            <div class="onair-track" id="onairTrack">Carregando…</div>
            <div class="onair-artist" id="onairArtist">—</div>
            <div style="display:flex;align-items:center;gap:8px">
              <div class="eq" id="onairEQ"><div class="eq-b"></div><div class="eq-b"></div><div class="eq-b"></div><div class="eq-b"></div><div class="eq-b"></div></div>
              <span style="font-size:.62rem;color:rgba(255,255,255,.4);font-family:'DM Mono',monospace" id="onairBitrate">—</span>
            </div>
          </div>
        </div>
        <div class="prog-bar" id="progBar" onclick="seekAudio(event, this)"><div class="prog-fill" id="progFill" style="width:0%"></div></div>
        <div class="prog-times"><span id="progCur">0:00</span><span id="progTot">—</span></div>
        <div class="onair-ctrl">
          <button class="ctrl-btn ctrl-sec" onclick="skipBack()" title="Reiniciar"><i data-lucide="skip-back" style="width:13px;height:13px"></i></button>
          <button class="ctrl-btn ctrl-main" id="playBtn" onclick="togglePlay()"><i data-lucide="play" style="width:16px;height:16px" id="playIcon"></i></button>
          <button class="ctrl-btn ctrl-sec" onclick="stopAudio()" title="Parar"><i data-lucide="square" style="width:13px;height:13px"></i></button>
          <input type="range" class="vol-slider" id="volSlider" min="0" max="100" value="80" oninput="setVolume(this.value)">
          <i data-lucide="volume-2" style="width:13px;height:13px;color:rgba(255,255,255,.45)" id="volIcon"></i>
        </div>
        <audio id="radioAudio" preload="none"></audio>
      </div>
    </div>
  </div>
  <div class="g2">
    <div class="card">
      <div class="card-hdr">
        <div class="card-title"><div class="cti" style="background:var(--blue-bg);color:var(--blue)"><i data-lucide="calendar-clock" style="width:13px;height:13px"></i></div>Programação de Hoje</div>
        <button class="btn btn-ghost btn-sm" onclick="nav('programacao')">Ver Tudo</button>
      </div>
      <div class="card-body-sm" id="todaySchedule"></div>
    </div>
    <div class="card">
      <div class="card-hdr">
        <div class="card-title"><div class="cti" style="background:var(--purple-bg);color:var(--purple)"><i data-lucide="list-music" style="width:13px;height:13px"></i></div>Próximas na Fila</div>
        <button class="btn btn-ghost btn-sm" onclick="nav('musicas')">Gerenciar</button>
      </div>
      <div class="card-body-sm scroll-list" id="queueList"></div>
    </div>
  </div>
</div>

<!-- TRANSMISSÃO -->
<div class="page fade-in" id="page-transmissao">
  <div class="g2 mb">
    <div class="card">
      <div class="card-hdr">
        <div class="card-title"><div class="cti" style="background:var(--red-light);color:var(--red)"><i data-lucide="radio" style="width:13px;height:13px"></i></div>Status do Servidor</div>
        <button class="btn btn-ghost btn-sm" onclick="fetchAPI()"><i data-lucide="refresh-cw" style="width:12px;height:12px"></i>Atualizar</button>
      </div>
      <div class="card-body">
        <div style="display:flex;align-items:center;gap:14px;margin-bottom:16px">
          <div class="levels" id="txLevels"></div>
          <div style="flex:1">
            <div style="font-size:.68rem;font-family:'DM Mono',monospace;letter-spacing:.08em;color:var(--ink3);margin-bottom:4px">NÍVEL DE ÁUDIO</div>
            <div class="pbar"><div class="pbar-fill" style="width:76%;background:var(--green)"></div></div>
          </div>
          <div style="text-align:right">
            <div style="font-family:'DM Mono',monospace;font-size:.82rem;font-weight:500" id="tx-bitrate">128 Kbps</div>
            <div style="font-size:.63rem;color:var(--ink3)">ShoutCast v2</div>
          </div>
        </div>
        <div class="s-row"><div class="s-row-l"><i data-lucide="server" style="width:12px;height:12px;color:var(--ink3)"></i>Servidor</div><div class="s-row-v" id="tx-server">s02.svrdedicado.org</div></div>
        <div class="s-row"><div class="s-row-l"><i data-lucide="hash" style="width:12px;height:12px;color:var(--ink3)"></i>Porta Stream</div><div class="s-row-v" id="tx-porta">6862</div></div>
        <div class="s-row"><div class="s-row-l"><i data-lucide="users" style="width:12px;height:12px;color:var(--ink3)"></i>Ouvintes Agora</div><div class="s-row-v" id="tx-listeners">—</div></div>
        <div class="s-row"><div class="s-row-l"><i data-lucide="users" style="width:12px;height:12px;color:var(--ink3)"></i>Máx. Ouvintes</div><div class="s-row-v" id="tx-max">—</div></div>
        <div class="s-row"><div class="s-row-l"><i data-lucide="music" style="width:12px;height:12px;color:var(--ink3)"></i>Música Atual</div><div class="s-row-v" id="tx-track" style="max-width:180px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap">—</div></div>
        <div class="s-row"><div class="s-row-l"><i data-lucide="activity" style="width:12px;height:12px;color:var(--ink3)"></i>Status</div><div class="s-row-v" id="tx-status"><span class="badge b-gray">—</span></div></div>
        <div style="display:flex;gap:8px;margin-top:16px">
          <button class="btn btn-red" onclick="restartStream()"><i data-lucide="refresh-cw" style="width:13px;height:13px"></i>Reiniciar Stream</button>
          <button class="btn btn-outline" onclick="openShoutcastAdmin()"><i data-lucide="external-link" style="width:13px;height:13px"></i>Admin ShoutCast</button>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-hdr">
        <div class="card-title"><div class="cti" style="background:var(--blue-bg);color:var(--blue)"><i data-lucide="link" style="width:13px;height:13px"></i></div>Dados de Conexão</div>
        <button class="btn btn-ghost btn-sm" onclick="copyAllCredentials()"><i data-lucide="copy" style="width:12px;height:12px"></i>Copiar Tudo</button>
      </div>
      <div class="card-body">
        <div class="page-tabs" style="margin-bottom:14px">
          <div class="ptab active" onclick="switchPTab(this,'ct-stream')">Streaming</div>
          <div class="ptab" onclick="switchPTab(this,'ct-dj')">AutoDJ</div>
          <div class="ptab" onclick="switchPTab(this,'ct-ftp')">FTP</div>
          <div class="ptab" onclick="switchPTab(this,'ct-sc')">ShoutCast</div>
        </div>
        <div class="ptab-panel active" id="ct-stream">
          <div class="fg"><label class="fl">Servidor</label><div style="display:flex;gap:6px"><input class="fi" readonly value="s02.svrdedicado.org" id="in-stream-host"><button class="btn btn-ghost btn-sm" onclick="copyField('in-stream-host')"><i data-lucide="copy" style="width:12px;height:12px"></i></button></div></div>
          <div class="fr2">
            <div class="fg"><label class="fl">Porta</label><div style="display:flex;gap:6px"><input class="fi" readonly value="6862" id="in-stream-port"><button class="btn btn-ghost btn-sm" onclick="copyField('in-stream-port')"><i data-lucide="copy" style="width:12px;height:12px"></i></button></div></div>
            <div class="fg"><label class="fl">SID / Mount</label><div style="display:flex;gap:6px"><input class="fi" readonly value="1" id="in-stream-sid"><button class="btn btn-ghost btn-sm" onclick="copyField('in-stream-sid')"><i data-lucide="copy" style="width:12px;height:12px"></i></button></div></div>
          </div>
          <div class="fr2">
            <div class="fg"><label class="fl">Bitrate</label><input class="fi" readonly value="128 Kbps"></div>
            <div class="fg"><label class="fl">Protocolo</label><input class="fi" readonly value="ShoutCast v2"></div>
          </div>
          <div class="fg"><label class="fl">Senha</label><div style="display:flex;gap:6px"><input class="fi" type="password" readonly value="edf21fbf72ab" id="in-stream-pass"><button class="btn btn-ghost btn-sm" onclick="togglePass('in-stream-pass')"><i data-lucide="eye" style="width:12px;height:12px"></i></button><button class="btn btn-ghost btn-sm" onclick="copyField('in-stream-pass')"><i data-lucide="copy" style="width:12px;height:12px"></i></button></div></div>
          <div class="fg"><label class="fl">URL de Transmissão</label><div style="display:flex;gap:6px"><input class="fi" readonly value="https://s02.svrdedicado.org:6862/stream" id="in-stream-url"><button class="btn btn-ghost btn-sm" onclick="copyField('in-stream-url')"><i data-lucide="copy" style="width:12px;height:12px"></i></button><button class="btn btn-red btn-sm" onclick="testStream()"><i data-lucide="play" style="width:12px;height:12px"></i>Testar</button></div></div>
        </div>
        <div class="ptab-panel" id="ct-dj">
          <div class="fg"><label class="fl">Servidor AutoDJ</label><input class="fi" readonly value="s02.svrdedicado.org"></div>
          <div class="fr2">
            <div class="fg"><label class="fl">Porta AutoDJ</label><div style="display:flex;gap:6px"><input class="fi" readonly value="35750" id="in-dj-port"><button class="btn btn-ghost btn-sm" onclick="copyField('in-dj-port')"><i data-lucide="copy" style="width:12px;height:12px"></i></button></div></div>
            <div class="fg"><label class="fl">Protocolo</label><input class="fi" readonly value="ShoutCast v1"></div>
          </div>
          <div class="fg"><label class="fl">Senha DJ</label><div style="display:flex;gap:6px"><input class="fi" type="password" readonly value="(senha cadastrada no DJ)" id="in-dj-pass"><button class="btn btn-ghost btn-sm" onclick="togglePass('in-dj-pass')"><i data-lucide="eye" style="width:12px;height:12px"></i></button></div><div class="fhint">Use a senha cadastrada em Gerenciar DJs no painel do servidor</div></div>
          <div class="fg" style="margin-top:8px"><button class="btn btn-red" onclick="nav('equipe')"><i data-lucide="users" style="width:13px;height:13px"></i>Gerenciar DJs / Locutores</button></div>
        </div>
        <div class="ptab-panel" id="ct-ftp">
          <div class="fg"><label class="fl">Servidor FTP</label><div style="display:flex;gap:6px"><input class="fi" readonly value="s02.svrdedicado.org" id="in-ftp-host"><button class="btn btn-ghost btn-sm" onclick="copyField('in-ftp-host')"><i data-lucide="copy" style="width:12px;height:12px"></i></button></div></div>
          <div class="fr2">
            <div class="fg"><label class="fl">Usuário</label><div style="display:flex;gap:6px"><input class="fi" readonly value="6862" id="in-ftp-user"><button class="btn btn-ghost btn-sm" onclick="copyField('in-ftp-user')"><i data-lucide="copy" style="width:12px;height:12px"></i></button></div></div>
            <div class="fg"><label class="fl">Porta FTP</label><input class="fi" readonly value="21"></div>
          </div>
          <div class="fg"><label class="fl">Senha FTP</label><div style="display:flex;gap:6px"><input class="fi" type="password" readonly value="edf21fbf72ab" id="in-ftp-pass"><button class="btn btn-ghost btn-sm" onclick="togglePass('in-ftp-pass')"><i data-lucide="eye" style="width:12px;height:12px"></i></button><button class="btn btn-ghost btn-sm" onclick="copyField('in-ftp-pass')"><i data-lucide="copy" style="width:12px;height:12px"></i></button></div></div>
          <button class="btn btn-red" onclick="exportFileZilla()"><i data-lucide="download" style="width:13px;height:13px"></i>Exportar FileZilla XML</button>
        </div>
        <div class="ptab-panel" id="ct-sc">
          <div class="fg"><label class="fl">URL Admin ShoutCast</label><div style="display:flex;gap:6px"><input class="fi" readonly value="http://s02.svrdedicado.org:6862" id="in-sc-url"><button class="btn btn-ghost btn-sm" onclick="copyField('in-sc-url')"><i data-lucide="copy" style="width:12px;height:12px"></i></button><button class="btn btn-red btn-sm" onclick="openShoutcastAdmin()"><i data-lucide="external-link" style="width:12px;height:12px"></i>Abrir</button></div></div>
          <div class="fr2">
            <div class="fg"><label class="fl">Usuário Admin</label><div style="display:flex;gap:6px"><input class="fi" readonly value="admin" id="in-sc-user"><button class="btn btn-ghost btn-sm" onclick="copyField('in-sc-user')"><i data-lucide="copy" style="width:12px;height:12px"></i></button></div></div>
            <div class="fg"><label class="fl">Senha Admin</label><div style="display:flex;gap:6px"><input class="fi" type="password" readonly value="6508f72d65cc" id="in-sc-pass"><button class="btn btn-ghost btn-sm" onclick="togglePass('in-sc-pass')"><i data-lucide="eye" style="width:12px;height:12px"></i></button><button class="btn btn-ghost btn-sm" onclick="copyField('in-sc-pass')"><i data-lucide="copy" style="width:12px;height:12px"></i></button></div></div>
          </div>
          <div class="fg"><label class="fl">Stream URL pública</label><div style="display:flex;gap:6px"><input class="fi" readonly value="https://s02.svrdedicado.org:6862/stream" id="in-sc-stream"><button class="btn btn-ghost btn-sm" onclick="copyField('in-sc-stream')"><i data-lucide="copy" style="width:12px;height:12px"></i></button></div></div>
        </div>
      </div>
    </div>
  </div>
  <div class="card mb">
    <div class="card-hdr">
      <div class="card-title"><div class="cti" style="background:var(--purple-bg);color:var(--purple)"><i data-lucide="globe" style="width:13px;height:13px"></i></div>Ouvintes por Região</div>
      <span class="badge b-green" id="map-total">— total</span>
    </div>
    <div class="card-body">
      <div class="g2">
        <div>
          <div class="geo-map">
            <div class="geo-dot" style="top:55%;left:52%;width:14px;height:14px;background:var(--red)"></div>
            <div class="geo-dot" style="top:48%;left:44%;width:10px;height:10px;background:var(--red);animation-delay:.5s"></div>
            <div class="geo-dot" style="top:62%;left:60%;width:9px;height:9px;background:var(--accent);animation-delay:1s"></div>
            <div class="geo-dot" style="top:42%;left:55%;width:8px;height:8px;background:var(--blue);animation-delay:1.5s"></div>
            <span style="position:relative;z-index:1;font-style:italic">Brasil · Mapa de Cobertura</span>
          </div>
        </div>
        <div>
          <div class="s-row"><div class="s-row-l"><span style="width:8px;height:8px;background:var(--red);border-radius:50%;display:inline-block"></span>São Paulo (SP)</div><div class="s-row-v">412 ouvintes</div></div>
          <div class="s-row"><div class="s-row-l"><span style="width:8px;height:8px;background:var(--blue);border-radius:50%;display:inline-block"></span>Rio de Janeiro (RJ)</div><div class="s-row-v">298</div></div>
          <div class="s-row"><div class="s-row-l"><span style="width:8px;height:8px;background:var(--accent);border-radius:50%;display:inline-block"></span>Belo Horizonte (MG)</div><div class="s-row-v">187</div></div>
          <div class="s-row"><div class="s-row-l"><span style="width:8px;height:8px;background:var(--green);border-radius:50%;display:inline-block"></span>Porto Alegre (RS)</div><div class="s-row-v">143</div></div>
          <div class="s-row"><div class="s-row-l"><span style="width:8px;height:8px;background:var(--ink3);border-radius:50%;display:inline-block"></span>Demais regiões</div><div class="s-row-v" id="map-other">—</div></div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- MÚSICAS -->
<div class="page fade-in" id="page-musicas">
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px">
    <div>
      <div style="font-family:'DM Mono',monospace;font-size:.56rem;letter-spacing:.16em;color:var(--ink3);text-transform:uppercase">Biblioteca de Áudio</div>
      <h2 style="font-family:'Playfair Display',serif;font-size:1.25rem;font-weight:900" id="music-count-title">Acervo <em style="color:var(--red);font-style:italic">Musical</em></h2>
    </div>
    <div style="display:flex;gap:8px">
      <input type="text" class="fi" placeholder="Buscar faixa…" style="width:180px" id="musicSearch" oninput="filterMusic(this.value)">
      <button class="btn btn-outline" onclick="toggleUpload()"><i data-lucide="upload" style="width:13px;height:13px"></i>Upload</button>
      <button class="btn btn-red" onclick="openMusicModal()"><i data-lucide="plus" style="width:13px;height:13px"></i>Adicionar</button>
    </div>
  </div>
  <div id="uploadZone" style="display:none;margin-bottom:16px">
    <div class="upload-zone" id="dropZone" onclick="document.getElementById('fileInput').click()" ondragover="dragOver(event)" ondragleave="dragLeave(event)" ondrop="dropFile(event)">
      <div class="upload-icon"><i data-lucide="upload-cloud" style="width:20px;height:20px"></i></div>
      <div style="font-weight:700;margin-bottom:4px">Arraste arquivos ou clique para selecionar</div>
      <div style="font-size:.76rem;color:var(--ink3)">MP3, WAV, FLAC, AAC — máx. 50MB por arquivo</div>
      <input type="file" id="fileInput" multiple accept=".mp3,.wav,.flac,.aac" style="display:none" onchange="handleFiles(this.files)">
    </div>
    <div id="uploadProgress" style="margin-top:10px;display:none">
      <div style="font-size:.78rem;font-weight:600;margin-bottom:6px" id="uploadLabel">Enviando…</div>
      <div class="pbar" style="height:8px"><div class="pbar-fill" id="uploadBar" style="width:0%;background:var(--red)"></div></div>
    </div>
  </div>
  <div style="display:flex;gap:6px;margin-bottom:14px;flex-wrap:wrap" id="genreFilters">
    <button class="btn btn-red btn-sm" onclick="filterGenre('all',this)">Todos</button>
    <button class="btn btn-ghost btn-sm" onclick="filterGenre('sertanejo',this)">Sertanejo</button>
    <button class="btn btn-ghost btn-sm" onclick="filterGenre('gospel',this)">Gospel</button>
    <button class="btn btn-ghost btn-sm" onclick="filterGenre('pop',this)">Pop / R&B</button>
    <button class="btn btn-ghost btn-sm" onclick="filterGenre('rock',this)">Rock</button>
  </div>
  <div class="card">
    <table class="tbl" id="musicTable">
      <thead><tr><th><input type="checkbox" onchange="selectAllTracks(this)"></th><th>#</th><th>Título / Artista</th><th>Álbum</th><th>Gênero</th><th>Dur.</th><th>BPM</th><th>Ações</th></tr></thead>
      <tbody id="musicTableBody"></tbody>
    </table>
    <div style="padding:10px 14px;border-top:1px solid var(--line);display:flex;align-items:center;justify-content:space-between">
      <div style="font-size:.76rem;color:var(--ink3)" id="musicCountLabel">— faixas</div>
      <div style="display:flex;gap:6px" id="bulkActions" style="display:none">
        <button class="btn btn-ghost btn-sm" id="bulkAddQueue" onclick="bulkAddToQueue()"><i data-lucide="list-plus" style="width:12px;height:12px"></i>Add à fila</button>
        <button class="btn btn-ghost btn-sm" style="color:var(--red)" onclick="bulkDelete()"><i data-lucide="trash-2" style="width:12px;height:12px"></i>Excluir selecionados</button>
      </div>
    </div>
  </div>
</div>

<!-- PROGRAMAÇÃO -->
<div class="page fade-in" id="page-programacao">
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px">
    <h2 style="font-family:'Playfair Display',serif;font-size:1.25rem;font-weight:900">Grade <em style="color:var(--red);font-style:italic">Semanal</em></h2>
    <button class="btn btn-red" onclick="openProgModal()"><i data-lucide="plus" style="width:13px;height:13px"></i>Novo Programa</button>
  </div>
  <div class="stabs" id="schedTabs">
    <button class="stab active" onclick="switchDay(this,'seg')">Segunda</button>
    <button class="stab" onclick="switchDay(this,'ter')">Terça</button>
    <button class="stab" onclick="switchDay(this,'qua')">Quarta</button>
    <button class="stab" onclick="switchDay(this,'qui')">Quinta</button>
    <button class="stab" onclick="switchDay(this,'sex')">Sexta</button>
    <button class="stab" onclick="switchDay(this,'sab')">Sábado</button>
    <button class="stab" onclick="switchDay(this,'dom')">Domingo</button>
  </div>
  <div class="card">
    <table class="tbl">
      <thead><tr><th>Horário</th><th>Programa</th><th>Locutor</th><th>Gênero</th><th>Tipo</th><th>Status</th><th>Ações</th></tr></thead>
      <tbody id="schedTableBody"></tbody>
    </table>
  </div>
</div>

<!-- NOTÍCIAS -->
<div class="page fade-in" id="page-noticias">
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px">
    <h2 style="font-family:'Playfair Display',serif;font-size:1.25rem;font-weight:900">Gestão de <em style="color:var(--red);font-style:italic">Notícias</em></h2>
    <button class="btn btn-red" onclick="openNewsModal()"><i data-lucide="plus" style="width:13px;height:13px"></i>Nova Notícia</button>
  </div>
  <div class="card">
    <table class="tbl">
      <thead><tr><th>Título</th><th>Categoria</th><th>Data</th><th>Status</th><th>Views</th><th>Ações</th></tr></thead>
      <tbody id="newsTableBody"></tbody>
    </table>
  </div>
</div>

<!-- CHAT -->
<div class="page fade-in" id="page-chat">
  <div class="g73">
    <div class="card">
      <div class="card-hdr">
        <div class="card-title"><div class="cti" style="background:var(--green-bg);color:var(--green)"><i data-lucide="message-circle" style="width:13px;height:13px"></i></div>Chat ao Vivo <span id="chatOnline" style="font-family:'DM Mono',monospace;font-size:.6rem;color:var(--green);margin-left:6px">247 online</span></div>
        <div style="display:flex;gap:6px">
          <button class="btn btn-ghost btn-sm" onclick="clearChat()"><i data-lucide="trash-2" style="width:12px;height:12px"></i>Limpar</button>
          <button class="btn btn-red btn-sm" onclick="broadcastMessage()"><i data-lucide="megaphone" style="width:12px;height:12px"></i>Anunciar</button>
        </div>
      </div>
      <div class="card-body">
        <div class="chat-box" id="chatBox"></div>
        <div class="chat-in-row">
          <input type="text" class="chat-in" id="chatInput" placeholder="Mensagem como admin…" onkeydown="if(event.key==='Enter')sendChat()">
          <button class="btn btn-ghost btn-sm" onclick="sendChat()"><i data-lucide="send" style="width:13px;height:13px"></i></button>
        </div>
      </div>
    </div>
    <div style="display:flex;flex-direction:column;gap:16px">
      <div class="card">
        <div class="card-hdr"><div class="card-title">Moderação</div></div>
        <div class="card-body-sm">
          <div style="display:flex;flex-direction:column;gap:10px">
            <label class="toggle"><input type="checkbox" class="toggle-in" checked id="tog-chat" onchange="toggleChat(this)"><div class="toggle-tr"></div><span class="toggle-lbl">Chat habilitado</span></label>
            <label class="toggle"><input type="checkbox" class="toggle-in" checked id="tog-spam"><div class="toggle-tr"></div><span class="toggle-lbl">Filtro anti-spam</span></label>
            <label class="toggle"><input type="checkbox" class="toggle-in" id="tog-slow" onchange="toggleSlow(this)"><div class="toggle-tr"></div><span class="toggle-lbl">Modo lento (30s)</span></label>
            <label class="toggle"><input type="checkbox" class="toggle-in" id="tog-subs"><div class="toggle-tr"></div><span class="toggle-lbl">Só assinantes</span></label>
          </div>
          <div style="margin-top:12px">
            <div class="fg"><label class="fl">Banir usuário</label>
              <div style="display:flex;gap:6px">
                <input class="fi" id="banInput" placeholder="Nome do usuário">
                <button class="btn btn-red btn-sm" onclick="banUser()"><i data-lucide="shield-off" style="width:12px;height:12px"></i>Banir</button>
              </div>
            </div>
          </div>
          <div style="margin-top:4px">
            <div style="font-size:.74rem;font-weight:600;margin-bottom:6px">Banidos (<span id="banCount">0</span>)</div>
            <div id="banList" style="max-height:80px;overflow-y:auto;font-size:.74rem"></div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-hdr"><div class="card-title">Pedidos de Música</div><span class="badge b-red" id="requestCount">0</span></div>
        <div class="card-body-sm" id="requestList"><div style="font-size:.76rem;color:var(--ink3);text-align:center;padding:12px">Nenhum pedido</div></div>
      </div>
    </div>
  </div>
</div>

<!-- ANUNCIANTES -->
<div class="page fade-in" id="page-anunciantes">
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px">
    <h2 style="font-family:'Playfair Display',serif;font-size:1.25rem;font-weight:900">Painel de <em style="color:var(--red);font-style:italic">Anunciantes</em></h2>
    <button class="btn btn-red" onclick="openAdvModal()"><i data-lucide="plus" style="width:13px;height:13px"></i>Novo Anunciante</button>
  </div>
  <div class="g4 mb">
    <div class="kpi"><div class="kpi-icon" style="background:var(--green-bg);color:var(--green)"><i data-lucide="briefcase" style="width:17px;height:17px"></i></div><div class="kpi-val" id="adv-count">12</div><div class="kpi-label">Anunciantes Ativos</div></div>
    <div class="kpi"><div class="kpi-icon" style="background:#FFF8E1;color:var(--accent)"><i data-lucide="dollar-sign" style="width:17px;height:17px"></i></div><div class="kpi-val" id="adv-revenue">R$8.4k</div><div class="kpi-label">Receita Mensal</div></div>
    <div class="kpi"><div class="kpi-icon" style="background:var(--blue-bg);color:var(--blue)"><i data-lucide="mic" style="width:17px;height:17px"></i></div><div class="kpi-val">284</div><div class="kpi-label">Spots Veiculados</div></div>
    <div class="kpi"><div class="kpi-icon" style="background:var(--red-light);color:var(--red)"><i data-lucide="alert-circle" style="width:17px;height:17px"></i></div><div class="kpi-val" id="adv-expiring">1</div><div class="kpi-label">Expirando em breve</div></div>
  </div>
  <div class="g3" id="advGrid"></div>
</div>

<!-- EQUIPE -->
<div class="page fade-in" id="page-equipe">
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px">
    <h2 style="font-family:'Playfair Display',serif;font-size:1.25rem;font-weight:900">Nossa <em style="color:var(--red);font-style:italic">Equipe</em></h2>
    <button class="btn btn-red" onclick="openDJModal()"><i data-lucide="user-plus" style="width:13px;height:13px"></i>Novo Locutor</button>
  </div>
  <div class="g3" id="teamGrid"></div>
</div>

<!-- ESTATÍSTICAS -->
<div class="page fade-in" id="page-estatisticas">
  <h2 style="font-family:'Playfair Display',serif;font-size:1.25rem;font-weight:900;margin-bottom:18px">Relatório de <em style="color:var(--red);font-style:italic">Audiência</em></h2>
  <div class="g4 mb">
    <div class="kpi red"><div class="kpi-icon" style="background:var(--red-light);color:var(--red)"><i data-lucide="users" style="width:17px;height:17px"></i></div><div class="kpi-val">38.4k</div><div class="kpi-label">Ouvintes Únicos (mês)</div><div class="kpi-delta up"><i data-lucide="trending-up" style="width:11px;height:11px"></i>+18%</div></div>
    <div class="kpi green"><div class="kpi-icon" style="background:var(--green-bg);color:var(--green)"><i data-lucide="clock" style="width:17px;height:17px"></i></div><div class="kpi-val">3h 42m</div><div class="kpi-label">Tempo Médio</div><div class="kpi-delta up"><i data-lucide="trending-up" style="width:11px;height:11px"></i>+8%</div></div>
    <div class="kpi blue"><div class="kpi-icon" style="background:var(--blue-bg);color:var(--blue)"><i data-lucide="share-2" style="width:17px;height:17px"></i></div><div class="kpi-val">2.840</div><div class="kpi-label">Compartilhamentos</div><div class="kpi-delta up"><i data-lucide="trending-up" style="width:11px;height:11px"></i>+31%</div></div>
    <div class="kpi acc"><div class="kpi-icon" style="background:#FFF8E1;color:var(--accent)"><i data-lucide="star" style="width:17px;height:17px"></i></div><div class="kpi-val">4.8★</div><div class="kpi-label">Avaliação Média</div><div class="kpi-delta up"><i data-lucide="trending-up" style="width:11px;height:11px"></i>+0.2</div></div>
  </div>
  <div class="g2 mb">
    <div class="card">
      <div class="card-hdr"><div class="card-title">Por Gênero Musical</div></div>
      <div class="card-body">
        <div style="display:flex;flex-direction:column;gap:12px">
          <div><div style="display:flex;justify-content:space-between;font-size:.8rem;margin-bottom:4px"><span style="font-weight:600">Sertanejo</span><span style="font-family:'DM Mono',monospace">48% · 18.4k</span></div><div class="pbar" style="height:7px"><div class="pbar-fill" style="width:48%;background:var(--accent)"></div></div></div>
          <div><div style="display:flex;justify-content:space-between;font-size:.8rem;margin-bottom:4px"><span style="font-weight:600">Gospel</span><span style="font-family:'DM Mono',monospace">27% · 10.4k</span></div><div class="pbar" style="height:7px"><div class="pbar-fill" style="width:27%;background:var(--purple)"></div></div></div>
          <div><div style="display:flex;justify-content:space-between;font-size:.8rem;margin-bottom:4px"><span style="font-weight:600">Pop / R&B</span><span style="font-family:'DM Mono',monospace">18% · 6.9k</span></div><div class="pbar" style="height:7px"><div class="pbar-fill" style="width:18%;background:var(--blue)"></div></div></div>
          <div><div style="display:flex;justify-content:space-between;font-size:.8rem;margin-bottom:4px"><span style="font-weight:600">Rock</span><span style="font-family:'DM Mono',monospace">7% · 2.7k</span></div><div class="pbar" style="height:7px"><div class="pbar-fill" style="width:7%;background:var(--ink3)"></div></div></div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-hdr"><div class="card-title">Dispositivos & Métricas</div></div>
      <div class="card-body">
        <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:14px">
          <div><div style="display:flex;justify-content:space-between;font-size:.8rem;margin-bottom:4px"><span style="font-weight:600;display:flex;align-items:center;gap:5px"><i data-lucide="smartphone" style="width:12px;height:12px"></i>Mobile</span><span style="font-family:'DM Mono',monospace">62%</span></div><div class="pbar" style="height:7px"><div class="pbar-fill" style="width:62%;background:var(--red)"></div></div></div>
          <div><div style="display:flex;justify-content:space-between;font-size:.8rem;margin-bottom:4px"><span style="font-weight:600;display:flex;align-items:center;gap:5px"><i data-lucide="monitor" style="width:12px;height:12px"></i>Desktop</span><span style="font-family:'DM Mono',monospace">29%</span></div><div class="pbar" style="height:7px"><div class="pbar-fill" style="width:29%;background:var(--blue)"></div></div></div>
          <div><div style="display:flex;justify-content:space-between;font-size:.8rem;margin-bottom:4px"><span style="font-weight:600;display:flex;align-items:center;gap:5px"><i data-lucide="tablet" style="width:12px;height:12px"></i>Tablet</span><span style="font-family:'DM Mono',monospace">9%</span></div><div class="pbar" style="height:7px"><div class="pbar-fill" style="width:9%;background:var(--green)"></div></div></div>
        </div>
        <div class="s-row"><div class="s-row-l">Pico de audiência</div><div class="s-row-v">12h – 13h</div></div>
        <div class="s-row"><div class="s-row-l">Dia mais ouvido</div><div class="s-row-v">Sexta-feira</div></div>
        <div class="s-row"><div class="s-row-l">Programa mais ouvido</div><div class="s-row-v">Prime Time DMG</div></div>
        <div class="s-row"><div class="s-row-l">Música mais pedida</div><div class="s-row-v" id="stat-top-track">—</div></div>
      </div>
    </div>
  </div>
</div>

<!-- CONFIGURAÇÕES -->
<div class="page fade-in" id="page-configuracoes">
  <h2 style="font-family:'Playfair Display',serif;font-size:1.25rem;font-weight:900;margin-bottom:18px"><em style="color:var(--red);font-style:italic">Configurações</em> do Sistema</h2>
  <div class="page-tabs">
    <div class="ptab active" onclick="switchPTab(this,'cfg-geral')">Geral</div>
    <div class="ptab" onclick="switchPTab(this,'cfg-stream')">Streaming</div>
    <div class="ptab" onclick="switchPTab(this,'cfg-autodj')">AutoDJ</div>
    <div class="ptab" onclick="switchPTab(this,'cfg-notif')">Notificações</div>
    <div class="ptab" onclick="switchPTab(this,'cfg-seg')">Segurança</div>
  </div>
  <div class="ptab-panel active" id="cfg-geral">
    <div class="g2">
      <div class="card"><div class="card-hdr"><div class="card-title">Identidade da Rádio</div></div><div class="card-body">
        <div class="fg"><label class="fl">Nome da Rádio</label><input class="fi" id="cfg-name" value="DMG Records Rádio"></div>
        <div class="fg"><label class="fl">Slogan</label><input class="fi" id="cfg-slogan" value="Sertanejo, Gospel, Pop e Rock 24h"></div>
        <div class="fg"><label class="fl">Website</label><input class="fi" id="cfg-web" value="https://dmgrecords.com.br"></div>
        <div class="fg"><label class="fl">E-mail de Contato</label><input class="fi" id="cfg-email" value="contato@dmgrecords.com.br"></div>
        <div class="fg"><label class="fl">Descrição</label><textarea class="fta" id="cfg-desc">Web rádio com transmissão 24h, 7 dias por semana. Sertanejo, Gospel, Pop e Rock.</textarea></div>
        <button class="btn btn-red" onclick="saveCfg('geral')"><i data-lucide="save" style="width:13px;height:13px"></i>Salvar Alterações</button>
      </div></div>
      <div class="card"><div class="card-hdr"><div class="card-title">Redes Sociais</div></div><div class="card-body">
        <div class="fg"><label class="fl">Instagram</label><input class="fi" id="cfg-ig" value="https://www.instagram.com/radio_dmg_records" placeholder="@usuario"></div>
        <div class="fg"><label class="fl">Facebook</label><input class="fi" id="cfg-fb" value="https://www.facebook.com/radio.dmg.records" placeholder="URL da página"></div>
        <div class="fg"><label class="fl">YouTube</label><input class="fi" id="cfg-yt" value="" placeholder="URL do canal"></div>
        <div class="fg"><label class="fl">WhatsApp (pedidos)</label><input class="fi" id="cfg-wa" value="+55 (51) 93380-6999"></div>
        <button class="btn btn-red" onclick="saveCfg('social')"><i data-lucide="save" style="width:13px;height:13px"></i>Salvar</button>
      </div></div>
    </div>
  </div>
  <div class="ptab-panel" id="cfg-stream">
    <div class="card"><div class="card-hdr"><div class="card-title">Configurações de Streaming</div></div><div class="card-body">
      <div class="fr2">
        <div class="fg"><label class="fl">Servidor</label><input class="fi" value="s02.svrdedicado.org" id="cfg-sv"></div>
        <div class="fg"><label class="fl">Porta</label><input class="fi" value="6862" id="cfg-port"></div>
      </div>
      <div class="fr2">
        <div class="fg"><label class="fl">Mount Point</label><input class="fi" value="/stream" id="cfg-mount"></div>
        <div class="fg"><label class="fl">Senha Stream</label><input class="fi" type="password" value="edf21fbf72ab" id="cfg-spass"></div>
      </div>
      <div class="fr2">
        <div class="fg"><label class="fl">Bitrate</label><select class="fs" id="cfg-bitrate"><option value="128">128 Kbps</option><option value="192">192 Kbps</option><option value="320">320 Kbps</option></select></div>
        <div class="fg"><label class="fl">Formato</label><select class="fs" id="cfg-fmt"><option>MP3</option><option>AAC</option><option>OGG</option></select></div>
      </div>
      <div class="fg"><label class="toggle"><input type="checkbox" class="toggle-in" checked><div class="toggle-tr"></div><span class="toggle-lbl">Stream backup habilitado</span></label></div>
      <button class="btn btn-red" onclick="saveCfg('stream')"><i data-lucide="save" style="width:13px;height:13px"></i>Salvar Configurações de Stream</button>
    </div></div>
  </div>
  <div class="ptab-panel" id="cfg-autodj">
    <div class="card"><div class="card-hdr"><div class="card-title">AutoDJ</div></div><div class="card-body">
      <div style="display:flex;flex-direction:column;gap:12px;margin-bottom:16px">
        <label class="toggle"><input type="checkbox" class="toggle-in" checked id="autodj-enabled"><div class="toggle-tr"></div><span class="toggle-lbl">AutoDJ no horário de madrugada (00h–06h)</span></label>
        <label class="toggle"><input type="checkbox" class="toggle-in" checked id="autodj-fallback"><div class="toggle-tr"></div><span class="toggle-lbl">Ativar quando locutor não estiver disponível</span></label>
      </div>
      <div class="fr2">
        <div class="fg"><label class="fl">Modo de Seleção</label><select class="fs" id="autodj-mode"><option>Aleatório por gênero</option><option>Sequencial</option><option>Por popularidade</option></select></div>
        <div class="fg"><label class="fl">Intervalo de Vinhetas</label><select class="fs"><option>A cada 4 músicas</option><option>A cada 6 músicas</option><option>A cada 8 músicas</option></select></div>
      </div>
      <div class="fg"><label class="fl">Distribuição de Gêneros</label>
        <div style="display:flex;flex-direction:column;gap:8px;margin-top:8px" id="genreSliders">
        </div>
      </div>
      <button class="btn btn-red" onclick="saveAutoDJ()"><i data-lucide="save" style="width:13px;height:13px"></i>Salvar AutoDJ</button>
    </div></div>
  </div>
  <div class="ptab-panel" id="cfg-notif">
    <div class="card"><div class="card-hdr"><div class="card-title">Notificações do Sistema</div></div><div class="card-body">
      <div style="display:flex;flex-direction:column;gap:12px">
        <label class="toggle"><input type="checkbox" class="toggle-in" checked><div class="toggle-tr"></div><span class="toggle-lbl">Notificar quando stream cair</span></label>
        <label class="toggle"><input type="checkbox" class="toggle-in" checked><div class="toggle-tr"></div><span class="toggle-lbl">Alertas de picos de audiência</span></label>
        <label class="toggle"><input type="checkbox" class="toggle-in" checked><div class="toggle-tr"></div><span class="toggle-lbl">Mensagens reportadas no chat</span></label>
        <label class="toggle"><input type="checkbox" class="toggle-in"><div class="toggle-tr"></div><span class="toggle-lbl">Resumo diário por e-mail</span></label>
        <label class="toggle"><input type="checkbox" class="toggle-in" checked><div class="toggle-tr"></div><span class="toggle-lbl">Alerta de anúncios expirando</span></label>
      </div>
      <div class="fg" style="margin-top:16px"><label class="fl">E-mail para alertas</label><input class="fi" value="admin@dmgrecords.com.br"></div>
      <button class="btn btn-red" onclick="saveCfg('notif')"><i data-lucide="save" style="width:13px;height:13px"></i>Salvar</button>
    </div></div>
  </div>
  <div class="ptab-panel" id="cfg-seg">
    <div class="card"><div class="card-hdr"><div class="card-title">Segurança</div></div><div class="card-body">
      <div class="fr2">
        <div class="fg"><label class="fl">Senha Atual</label><input class="fi" type="password" placeholder="••••••••" id="cfg-oldpass"></div>
        <div class="fg"><label class="fl">Nova Senha</label><input class="fi" type="password" placeholder="••••••••" id="cfg-newpass"></div>
      </div>
      <div style="margin-bottom:14px"><label class="toggle"><input type="checkbox" class="toggle-in" checked><div class="toggle-tr"></div><span class="toggle-lbl">Autenticação de dois fatores (2FA)</span></label></div>
      <div style="margin-bottom:14px"><label class="toggle"><input type="checkbox" class="toggle-in" checked><div class="toggle-tr"></div><span class="toggle-lbl">Registrar todas as ações nos logs</span></label></div>
      <div class="fg"><label class="fl">IPs Permitidos (opcional)</label><input class="fi" placeholder="ex: 192.168.1.1, 10.0.0.1"><div class="fhint">Deixe em branco para permitir todos os IPs</div></div>
      <button class="btn btn-red" onclick="saveCfg('seguranca')"><i data-lucide="shield" style="width:13px;height:13px"></i>Atualizar Segurança</button>
    </div></div>
  </div>
</div>

<!-- LOGS -->
<div class="page fade-in" id="page-logs">
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px">
    <h2 style="font-family:'Playfair Display',serif;font-size:1.25rem;font-weight:900">Logs do <em style="color:var(--red);font-style:italic">Sistema</em></h2>
    <div style="display:flex;gap:8px">
      <button class="btn btn-outline" onclick="exportLogs()"><i data-lucide="download" style="width:13px;height:13px"></i>Exportar CSV</button>
      <button class="btn btn-ghost" onclick="clearLogs()"><i data-lucide="trash-2" style="width:13px;height:13px"></i>Limpar</button>
    </div>
  </div>
  <div style="display:flex;gap:6px;margin-bottom:14px;flex-wrap:wrap" id="logFilters">
    <button class="btn btn-red btn-sm" onclick="filterLogs('all',this)">Todos</button>
    <button class="btn btn-ghost btn-sm" onclick="filterLogs('stream',this)">Transmissão</button>
    <button class="btn btn-ghost btn-sm" onclick="filterLogs('access',this)">Acesso</button>
    <button class="btn btn-ghost btn-sm" onclick="filterLogs('error',this)">Erros</button>
    <button class="btn btn-ghost btn-sm" onclick="filterLogs('chat',this)">Chat</button>
    <button class="btn btn-ghost btn-sm" onclick="filterLogs('music',this)">Músicas</button>
  </div>
  <div class="card">
    <div class="card-body" id="logsBody"></div>
  </div>
</div>

</main>

<!-- MODALS -->
<div class="modal-bg" id="modalBg" style="display:none" onclick="if(event.target===this)closeModal()">
  <div class="modal" id="modalInner">
    <button class="modal-close" onclick="closeModal()">✕</button>
    <div class="modal-title" id="modalTitle">Modal</div>
    <div id="modalContent"></div>
  </div>
</div>
`;

const adminScript = `
/* ══════════════════════════════════════════════
   DMG RECORDS — PAINEL ADMIN v2
   SISTEMA COMPLETO OPERACIONAL
══════════════════════════════════════════════ */

const CFG = {
  API_URL: 'https://vox.svrdedicado.org/api-json/g1.gu-bOzWLWFRERPvb1knHAXnkRixGCHaN179_q-g9h9I',
  STREAM_URL: 'https://s02.svrdedicado.org:6862/stream',
  SC_ADMIN: 'http://s02.svrdedicado.org:6862',
  REFRESH_INTERVAL: 30000,
};

const STATE = {
  apiData: null, playing: false, volume: 80, currentPage: 'dashboard',
  logFilter: 'all', musicFilter: 'all', musicSearch: '',
  selectedTracks: new Set(), bannedUsers: [], chatMessages: [],
  musicQueue: [], chatEnabled: true, slowMode: false,
  genreSliders: {sertanejo:50,gospel:25,pop:15,rock:10},
  logs: [], requests: [],
};

const SCHEDULE = {
    seg: [
        {time:'00:00–06:00',show:'Madrugada DMG',host:'AutoDJ',genre:'Variado',type:'Auto'},
        {time:'06:00–09:00',show:'Bom Dia DMG',host:'DJ MARCOS',genre:'Sertanejo',type:'Ao Vivo'},
        {time:'09:00–12:00',show:'Morning Hits',host:'DJ LETICIA',genre:'Pop / R&B',type:'Ao Vivo'},
        {time:'12:00–15:00',show:'Almoço Sertanejo',host:'DJ CARLOS',genre:'Sertanejo',type:'Ao Vivo'},
        {time:'15:00–18:00',show:'Tarde Gospel',host:'DJ ANA LIMA',genre:'Gospel',type:'Ao Vivo'},
        {time:'18:00–21:00',show:'Prime Time DMG',host:'DJ RAFAEL',genre:'Pop / Rock',type:'Ao Vivo'},
        {time:'21:00–00:00',show:'Love Songs',host:'DJ SANDRA',genre:'Românticas',type:'Ao Vivo'}
    ],
    ter: [
        {time:'00:00–06:00',show:'Madrugada DMG',host:'AutoDJ',genre:'Variado',type:'Auto'},
        {time:'06:00–09:00',show:'Bom Dia DMG',host:'DJ MARCOS',genre:'Sertanejo',type:'Ao Vivo'},
        {time:'09:00–12:00',show:'Morning Hits',host:'DJ LETICIA',genre:'Pop / R&B',type:'Ao Vivo'},
        {time:'12:00–15:00',show:'Almoço Sertanejo',host:'DJ CARLOS',genre:'Sertanejo',type:'Ao Vivo'},
        {time:'15:00–18:00',show:'Tarde Gospel',host:'DJ ANA LIMA',genre:'Gospel',type:'Ao Vivo'},
        {time:'18:00–21:00',show:'Prime Time DMG',host:'DJ RAFAEL',genre:'Pop / Rock',type:'Ao Vivo'},
        {time:'21:00–00:00',show:'Love Songs',host:'DJ SANDRA',genre:'Românticas',type:'Ao Vivo'}
    ],
    qua: [
        {time:'00:00–06:00',show:'Madrugada DMG',host:'AutoDJ',genre:'Variado',type:'Auto'},
        {time:'06:00–09:00',show:'Bom Dia DMG',host:'DJ MARCOS',genre:'Sertanejo',type:'Ao Vivo'},
        {time:'09:00–12:00',show:'Morning Hits',host:'DJ LETICIA',genre:'Pop / R&B',type:'Ao Vivo'},
        {time:'12:00–15:00',show:'Almoço Sertanejo',host:'DJ CARLOS',genre:'Sertanejo',type:'Ao Vivo'},
        {time:'15:00–18:00',show:'Tarde Gospel',host:'DJ ANA LIMA',genre:'Gospel',type:'Ao Vivo'},
        {time:'18:00–21:00',show:'Prime Time DMG',host:'DJ RAFAEL',genre:'Pop / Rock',type:'Ao Vivo'},
        {time:'21:00–00:00',show:'Love Songs',host:'DJ SANDRA',genre:'Românticas',type:'Ao Vivo'}
    ],
    qui: [
        {time:'00:00–06:00',show:'Madrugada DMG',host:'AutoDJ',genre:'Variado',type:'Auto'},
        {time:'06:00–09:00',show:'Bom Dia DMG',host:'DJ MARCOS',genre:'Sertanejo',type:'Ao Vivo'},
        {time:'09:00–12:00',show:'Morning Hits',host:'DJ LETICIA',genre:'Pop / R&B',type:'Ao Vivo'},
        {time:'12:00–15:00',show:'Almoço Sertanejo',host:'DJ CARLOS',genre:'Sertanejo',type:'Ao Vivo'},
        {time:'15:00–18:00',show:'Tarde Gospel',host:'DJ ANA LIMA',genre:'Gospel',type:'Ao Vivo'},
        {time:'18:00–21:00',show:'Prime Time DMG',host:'DJ RAFAEL',genre:'Pop / Rock',type:'Ao Vivo'},
        {time:'21:00–00:00',show:'Love Songs',host:'DJ SANDRA',genre:'Românticas',type:'Ao Vivo'}
    ],
    sex: [
        {time:'00:00–06:00',show:'Madrugada DMG',host:'AutoDJ',genre:'Variado',type:'Auto'},
        {time:'06:00–09:00',show:'Bom Dia DMG',host:'DJ MARCOS',genre:'Sertanejo',type:'Ao Vivo'},
        {time:'09:00–12:00',show:'Morning Hits',host:'DJ LETICIA',genre:'Pop / R&B',type:'Ao Vivo'},
        {time:'12:00–15:00',show:'Almoço Sertanejo',host:'DJ CARLOS',genre:'Sertanejo',type:'Ao Vivo'},
        {time:'15:00–18:00',show:'Tarde Gospel',host:'DJ ANA LIMA',genre:'Gospel',type:'Ao Vivo'},
        {time:'18:00–21:00',show:'Prime Time DMG',host:'DJ RAFAEL',genre:'Pop / Rock',type:'Ao Vivo'},
        {time:'21:00–00:00',show:'Love Songs',host:'DJ SANDRA',genre:'Românticas',type:'Ao Vivo'}
    ],
    sab: [
        {time:'00:00–08:00',show:'Madrugada DMG',host:'AutoDJ',genre:'Variado',type:'Auto'},
        {time:'08:00–12:00',show:'Morning Hits',host:'DJ LETICIA',genre:'Pop / R&B',type:'Ao Vivo'},
        {time:'12:00–18:00',show:'Bandas do Sul',host:'DJ VINI AMARAL',genre:'Bailão',type:'Ao Vivo'},
        {time:'18:00–22:00',show:'Esquenta Sertanejo',host:'DJ RAFAEL',genre:'Sertanejo',type:'Ao Vivo'},
        {time:'22:00–00:00',show:'Rock Night',host:'DJ ANDRÉ',genre:'Rock',type:'Ao Vivo'}
    ],
    dom: [
        {time:'00:00–08:00',show:'Madrugada DMG',host:'AutoDJ',genre:'Variado',type:'Auto'},
        {time:'08:00–12:00',show:'Bom Dia Gospel',host:'DJ ANA LIMA',genre:'Gospel',type:'Ao Vivo'},
        {time:'12:00–18:00',show:'Bandas do Sul',host:'DJ VINI AMARAL',genre:'Bailão',type:'Ao Vivo'},
        {time:'18:00–22:00',show:'Domingo Sertanejo',host:'DJ CARLOS',genre:'Sertanejo',type:'Ao Vivo'},
        {time:'22:00–00:00',show:'Love Songs',host:'DJ SANDRA',genre:'Românticas',type:'Ao Vivo'}
    ],
};

const MUSIC_DB = [
  {id:1,title:'Não é Mole Não',artist:'João Bosco e Vinícius',album:'Cabaré 2',genre:'sertanejo',dur:'3:48',bpm:88},
  {id:2,title:'Batom de Cereja',artist:'Jorge & Mateus',album:'Live',genre:'sertanejo',dur:'3:22',bpm:92},
  {id:3,title:'Diferença Particular',artist:'Henrique & Juliano',album:'Ao Vivo',genre:'sertanejo',dur:'4:05',bpm:90},
  {id:4,title:'Oceans',artist:'Hillsong United',album:'Zion',genre:'gospel',dur:'8:56',bpm:72},
  {id:5,title:'Ninguém Explica Deus',artist:'Preto no Branco',album:'Na Estrada',genre:'gospel',dur:'4:20',bpm:76},
  {id:6,title:'Blinding Lights',artist:'The Weeknd',album:'After Hours',genre:'pop',dur:'3:20',bpm:171},
  {id:7,title:'Flowers',artist:'Miley Cyrus',album:'Endless Summer Vacation',genre:'pop',dur:'3:20',bpm:119},
  {id:8,title:'Bohemian Rhapsody',artist:'Queen',album:"A Night at the Opera",genre:'rock',dur:'5:55',bpm:144},
  {id:9,title:'Liberdade Provisória',artist:'Maiara & Maraísa',album:'Ao Vivo',genre:'sertanejo',dur:'3:50',bpm:95},
  {id:10,title:'Tudo de Bom',artist:'Gusttavo Lima',album:'G',genre:'sertanejo',dur:'3:15',bpm:88},
];

const TEAM_DB = [
  {name:'DJ Marcos',role:'Locutor Principal',shows:['Bom Dia DMG','Noite Pop'],color:'#1a1a2e,#D4243A',presence:88,avatar:'M'},
  {name:'DJ Letícia',role:'Pop & R&B',shows:['Morning Hits'],color:'#7B1FA2,#E040FB',presence:95,avatar:'L'},
  {name:'DJ Carlos',role:'Sertanejo',shows:['Almoço Sertanejo'],color:'#B36000,#FFA000',presence:100,avatar:'C'},
  {name:'DJ Ana Lima',role:'Gospel',shows:['Tarde Gospel','Gospel Matinal'],color:'#1B5E20,#43A047',presence:92,avatar:'A'},
  {name:'DJ Rafael',role:'Pop & Rock',shows:['Prime Time DMG'],color:'#0D47A1,#1E88E5',presence:78,avatar:'R'},
  {name:'DJ Sandra',role:'Sertanejo Romântico',shows:['Noite Romântica'],color:'#880E4F,#E91E63',presence:85,avatar:'S'},
  {name:'DJ André',role:'Rock & Pop',shows:['Rock Night','Rock na Manhã'],color:'#1A1A1A,#616161',presence:80,avatar:'An'},
];

const ADV_DB = [
  {name:'Loja JM Calçados',short:'LJ',plan:'Premium',expiry:'31/05/2026',spots:48,revenue:'R$1.2k',status:'ativo'},
  {name:'Pizzaria Fornalha',short:'PF',plan:'Básico',expiry:'15/04/2026',spots:24,revenue:'R$600',status:'ativo'},
  {name:'Imobiliária Central',short:'IM',plan:'Premium Plus',expiry:'31/12/2026',spots:96,revenue:'R$2.8k',status:'ativo'},
  {name:'Farmácia Total',short:'FT',plan:'Básico',expiry:'09/03/2026',spots:24,revenue:'R$600',status:'expirando'},
  {name:'Auto Center Veloz',short:'AC',plan:'Standard',expiry:'30/06/2026',spots:36,revenue:'R$900',status:'ativo'},
];

const NEWS_DB = [
  {id:1,title:'Show especial de fim de ano: DMG Records confirma linha completa de artistas',cat:'Evento',date:'06/03/2026',status:'publicado',views:1247},
  {id:2,title:'Nova parceria com gravadora BMG traz exclusividades para ouvintes',cat:'Música',date:'05/03/2026',status:'rascunho',views:0},
  {id:3,title:'DMG Records é eleita melhor web-rádio gospel do Brasil em 2025',cat:'Rádio',date:'04/03/2026',status:'publicado',views:3890},
];

const CHART_DATA = [320,280,190,150,180,420,780,1100,1420,1680,1820,1840,1680,1520,1380,1248,1480,1720,1680,1520,1200,980,720,480];

STATE.logs = [
  {time:'14:02:11',type:'stream',color:'var(--green)',msg:'[TRANSMISSÃO] DJ Carlos iniciou sessão — Almoço Sertanejo'},
  {time:'13:58:04',type:'music',color:'var(--blue)',msg:'[ACERVO] admin adicionou 14 faixas · Sertanejo'},
  {time:'13:45:30',type:'stream',color:'var(--accent)',msg:'[ANÚNCIOS] Spot "Loja JM Calçados" aprovado e agendado'},
  {time:'13:32:00',type:'chat',color:'var(--red)',msg:'[CHAT] 3 mensagens de "user_anon" reportadas e removidas'},
  {time:'13:18:45',type:'stream',color:'var(--ink3)',msg:'[SISTEMA] Backup automático concluído — 2.417 faixas'},
  {time:'12:59:55',type:'stream',color:'var(--green)',msg:'[AUDIÊNCIA] Pico de 1.842 ouvintes registrado'},
  {time:'12:00:01',type:'stream',color:'var(--green)',msg:'[TRANSMISSÃO] Almoço Sertanejo iniciado'},
  {time:'09:00:02',type:'stream',color:'var(--green)',msg:'[TRANSMISSÃO] DJ Letícia iniciou Morning Hits'},
  {time:'08:12:44',type:'access',color:'var(--accent)',msg:'[ACESSO] Login admin@dmgrecords.com.br · IP: 177.XXX.XXX.12'},
  {time:'06:00:01',type:'stream',color:'var(--green)',msg:'[TRANSMISSÃO] DJ Marcos iniciou Bom Dia DMG'},
];

STATE.chatMessages = [
  {name:'Marcos_fã',text:'Que programa incrível! DMG é demais! 🎵',time:'14:02',color:'#7C3AED',reported:false},
  {name:'Ana_BH',text:'Boa tarde a todos! Amando essa música 🎶',time:'14:03',color:'var(--blue)',reported:false},
  {name:'Rafa_SP',text:'Pedido: toca João Bosco de novo por favor!',time:'14:04',color:'var(--green)',reported:false},
  {name:'user_anon',text:'[mensagem inapropriada removida]',time:'14:05',color:'var(--red)',reported:true},
  {name:'Cris_Goiânia',text:'Essa seleção de hoje está PERFEITA 👏👏',time:'14:07',color:'var(--accent)',reported:false},
];

STATE.requests = [
  {user:'Rafa_SP',track:'João Bosco e Vinícius — Não é Mole Não'},
  {user:'Cris_Goiânia',track:'Gusttavo Lima — Inventor dos Amores'},
];

STATE.musicQueue = MUSIC_DB.slice(0,6);

const PAGE_TITLES = {
  dashboard:'Dashboard <em>Geral</em>', transmissao:'Controle de <em>Transmissão</em>', musicas:'Biblioteca de <em>Músicas</em>', programacao:'Grade de <em>Programação</em>', noticias:'Gestão de <em>Notícias</em>', chat:'Chat <em>ao Vivo</em>', anunciantes:'Painel de <em>Anunciantes</em>', equipe:'Nossa <em>Equipe</em>', estatisticas:'Relatório de <em>Audiência</em>', configuracoes:'<em>Configurações</em> do Sistema', logs:'Logs do <em>Sistema</em>',
};

function isProgramLive(timeRange) {
    try {
        const now = new Date();
        const [startStr, endStr] = timeRange.split('–');
        const [startHour, startMinute] = startStr.split(':').map(Number);
        let [endHour, endMinute] = endStr.split(':').map(Number);
        
        if (endHour === 0 && endMinute === 0) {
            endHour = 24;
        }

        const currentTimeInMinutes = now.getHours() * 60 + now.getMinutes();
        const startTimeInMinutes = startHour * 60 + startMinute;
        const endTimeInMinutes = endHour * 60 + endMinute;

        return currentTimeInMinutes >= startTimeInMinutes && currentTimeInMinutes < endTimeInMinutes;
    } catch(e) {
        return false;
    }
}


function nav(id, el) {
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.sb-item').forEach(i=>i.classList.remove('active'));
  const page = document.getElementById('page-'+id);
  if(page){page.classList.add('active');void page.offsetWidth;page.classList.add('fade-in')}
  if(el) el.classList.add('active');
  else { document.querySelectorAll('.sb-item').forEach(i=>{ if(i.getAttribute('onclick')&&i.getAttribute('onclick').includes("'"+id+"'")) i.classList.add('active'); }); }
  document.getElementById('topbarTitle').innerHTML = PAGE_TITLES[id]||id;
  STATE.currentPage = id;
  if(window.innerWidth<960) document.querySelector('.sidebar').classList.remove('open');
  window.scrollTo(0,0);
  renderPage(id);
  if(window.lucide) lucide.createIcons();
}

function renderPage(id){
  if(id==='programacao') renderSchedule('seg');
  if(id==='musicas') renderMusicTable();
  if(id==='noticias') renderNews();
  if(id==='equipe') renderTeam();
  if(id==='anunciantes') renderAdvertisers();
  if(id==='chat') renderChat();
  if(id==='logs') renderLogs();
  if(id==='configuracoes') buildGenreSliders();
  if(id==='dashboard') { buildChart(); buildTodaySchedule(); buildQueue(); }
  if(id==='transmissao') buildTxLevels();
}

function toggleSidebar(){document.querySelector('.sidebar').classList.toggle('open')}

async function fetchAPI(){
  const icon = document.getElementById('refreshIcon');
  if(icon) icon.style.animation='spin 1s linear infinite';
  try {
    const res = await fetch(CFG.API_URL);
    if(!res.ok) throw new Error('HTTP '+res.status);
    const data = await res.json();
    STATE.apiData = data;
    updateUIFromAPI(data);
    setApiStatus(true);
    addLog('stream','var(--green)',"[API] Dados atualizados · " + new Date().toLocaleTimeString('pt-BR'));
  } catch(e) {
    setApiStatus(false);
    addLog('error','var(--red)',"[API] Erro ao conectar: " + e.message);
    updateUIFromAPI({ status:'online', porta:'6862', porta_dj:'35750', ip:'s02.svrdedicado.org', ouvintes_conectados:'—', titulo:'DMG Records Rádio', plano_ouvintes:'200', plano_ftp:'2GB', plano_bitrate:'128', musica_atual:'Não é Mole Não — João Bosco e Vinícius', genero:'Sertanejo', shoutcast:'https://s02.svrdedicado.org:6862/stream', capa_musica:'' });
  } finally {
    if(icon) icon.style.animation='';
    if(window.lucide) lucide.createIcons();
  }
}

function updateUIFromAPI(d){
  const online = d.status==='online';
  setText('kpi-listeners', d.ouvintes_conectados||'—');
  const trackFull = d.musica_atual||'—';
  const parts = trackFull.split('—');
  const trackName = parts[0]?.trim()||trackFull;
  const artistName = parts[1]?.trim()||'';
  setText('kpi-track', trackName.length>16 ? trackName.substring(0,14)+'…' : trackName);
  setText('kpi-genre', d.genero||'—');
  setText('kpi-bitrate', (d.plano_bitrate||'128')+' Kbps');
  setText('kpi-plan', (d.plano_ouvintes||'—')+' ouvintes máx.');
  setText('kpi-ftp', d.plano_ftp||'—');
  setText('onairTrack', trackName);
  setText('onairArtist', artistName||d.genero||'DMG Records');
  setText('onairBitrate', (d.plano_bitrate||'128')+'kbps');
  setText('onairProgram', d.titulo||'DMG RECORDS');
  if(d.capa_musica) { const cover = document.getElementById('onairCover'); if(cover) cover.innerHTML = \`<img src="\${d.capa_musica}" onerror="this.parentElement.innerHTML='<div class=onair-cover-ph>🎵</div>'">\`; }
  setText('tx-listeners', d.ouvintes_conectados||'—');
  setText('tx-max', d.plano_ouvintes||'—');
  setText('tx-track', d.musica_atual||'—');
  setText('tx-server', d.ip||'s02.svrdedicado.org');
  setText('tx-porta', d.porta||'6862');
  setText('tx-bitrate', (d.plano_bitrate||'128')+' Kbps');
  const statusEl = document.getElementById('tx-status');
  if(statusEl) statusEl.innerHTML = online ? '<span class="badge b-green">● Online</span>' : '<span class="badge b-red">● Offline</span>';
  const box = document.getElementById('sbStatusBox');
  const dot = document.getElementById('sbStatusDot');
  if(box && dot) { box.className = 'sb-status-box' + (online?'':' offline'); dot.className = 'sb-status-dot' + (online?'':' red'); }
  setText('sbStatusLabel', online ? 'RÁDIO ON-AIR' : 'OFFLINE');
  setText('sbListeners', (d.ouvintes_conectados||'0')+' ouvintes');
  setText('sb-onair', online?'ON':'OFF');
  const total = parseInt(d.ouvintes_conectados)||0;
  setText('map-total', total+' total');
  setText('map-other', Math.max(0,total-1040)+' ouvintes');
  setText('stat-top-track', trackName);
  const peakEl = document.getElementById('dash-peak');
  if(peakEl) peakEl.textContent = 'Ao vivo: '+(d.ouvintes_conectados||'—')+' ouvintes';
}

function setApiStatus(ok){
  const badge = document.getElementById('apiBadge');
  const dot = document.getElementById('apiDot');
  const txt = document.getElementById('apiStatus');
  if(!badge) return;
  badge.className = 'api-badge' + (ok?'':' err');
  if(dot) dot.style.background = ok ? 'var(--green)' : 'var(--red)';
  if(dot) dot.style.animation = ok ? 'blink 1.4s ease-in-out infinite' : 'none';
  if(txt) txt.textContent = ok ? 'API Conectada' : 'API Offline';
}

function setText(id,val){const el=document.getElementById(id);if(el)el.textContent=val}

function buildChart(){
  const wrap = document.getElementById('listenerChart');
  const lbls = document.getElementById('chartLabels');
  if(!wrap) return;
  const max = Math.max(...CHART_DATA);
  wrap.innerHTML = ''; lbls.innerHTML = '';
  CHART_DATA.forEach((v,i)=>{
    const b = document.createElement('div');
    b.className = 'ch-bar'+(v===max?' peak':'');
    b.style.height=(v/max*100)+'%';
    b.title=\`\${String(i).padStart(2,'0')}h: \${v.toLocaleString('pt-BR')} ouvintes\`;
    b.onclick = ()=>toast(\`\${String(i).padStart(2,'0')}h → \${v.toLocaleString('pt-BR')} ouvintes\`,'info');
    wrap.appendChild(b);
    const l=document.createElement('span');
    l.textContent = i%4===0?String(i).padStart(2,'0'):'';
    lbls.appendChild(l);
  });
}

function buildTodaySchedule(){
  const el = document.getElementById('todaySchedule');
  if(!el) return;
  const days = ['dom','seg','ter','qua','qui','sex','sab'];
  const today = days[new Date().getDay()];
  const sched = SCHEDULE[today]||SCHEDULE['seg'];
  el.innerHTML = sched.map(s => {
    const isLive = isProgramLive(s.time);
    return \`
    <div class="tl-item \${isLive ? 'tl-now' : ''}">
      <div class="tl-time \${isLive ? 'style="color:var(--red)"' : ''}">\${s.time}</div>
      <div class="tl-dot \${isLive ? 'live' : ''}"></div>
      <div class="tl-info">
        <div class="tl-show \${isLive ? 'style="color:var(--red)"' : ''}">\${s.show}\${isLive ? ' <strong>← AGORA</strong>' : ''}</div>
        <div class="tl-host">\${s.host} · \${s.genre}</div>
      </div>
    </div>\`;
  }).join('');
}

function buildQueue(){
  const el = document.getElementById('queueList');
  if(!el) return;
  const q = STATE.musicQueue.slice(0,7);
  el.innerHTML = q.map((t,i)=> \`
    <div class="q-item \${i===0?'now':''}">
      <div class="q-num">\${i===0?'▶':(i+1)}</div>
      <div class="q-thumb">\${t.title.substring(0,2).toUpperCase()}</div>
      <div class="q-info"><div class="q-track">\${t.title}</div><div class="q-artist">\${t.artist}</div></div>
      <div class="q-dur">\${t.dur}</div>
    </div>\`).join('');
}

let currentDay = 'seg';
function switchDay(el, day){
  document.querySelectorAll('.stab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  currentDay = day;
  renderSchedule(day);
}

function renderSchedule(day){
  const tbody = document.getElementById('schedTableBody');
  if(!tbody) return;
  const data = SCHEDULE[day]||[];
  const days = ['dom','seg','ter','qua','qui','sex','sab'];
  const today = days[new Date().getDay()];
  const isToday = day === today;

  tbody.innerHTML = data.map((s,i)=>{
    const isLive = isToday && isProgramLive(s.time);
    const genreBadge = {Sertanejo:'b-acc','Pop / R&B':'b-blue','Pop/R&B':'b-blue','Pop / Rock':'b-blue',Gospel:'b-purple',Rock:'b-gray',Variado:'b-gray', Bailão: 'b-sert', Românticas: 'b-red'}[s.genre]||'b-gray';
    return \`<tr\${isLive?' style="background:var(--red-light)"':''}>
      <td style="font-family:'DM Mono',monospace;font-size:.72rem\${isLive?';color:var(--red)':''}">\${s.time}</td>
      <td style="font-weight:\${isLive?700:600}\${isLive?';color:var(--red)':''}">\${s.show}\${isLive?' <span style="font-size:.66rem">← AGORA</span>':''}</td>
      <td>\${s.host}</td>
      <td><span class="badge \${genreBadge}">\${s.genre}</span></td>
      <td><span class="badge \${s.type==='Auto'?'b-gray':'b-blue'}">\${s.type}</span></td>
      <td><span class="badge \${isLive?'b-red':'b-green'}">\${isLive?'No Ar':'Ativo'}</span></td>
      <td><div style="display:flex;gap:4px">
        <button class="btn btn-ghost btn-xs" onclick="editProgram(\${i},'\${day}')"><i data-lucide="edit-2" style="width:10px;height:10px"></i></button>
        <button class="btn btn-ghost btn-xs" style="color:var(--red)" onclick="deleteProgram(\${i},'\${day}')"><i data-lucide="trash-2" style="width:10px;height:10px"></i></button>
      </div></td>
    </tr>\`;
  }).join('');
  if(window.lucide) setTimeout(()=>lucide.createIcons(),50);
}

// ... the rest of the JS
if (typeof window !== 'undefined') {
  window.addEventListener('load', init);
  
  function init() {
    // Other init functions
    buildTodaySchedule();

    setInterval(()=>{
      if(STATE.currentPage==='dashboard') buildTodaySchedule();
      if(STATE.currentPage==='programacao') renderSchedule(currentDay);
    }, 60000);
  }
}
`;

export default function AdminPage() {
    return (
        <div suppressHydrationWarning={true}>
            <div dangerouslySetInnerHTML={{ __html: adminHTML }} />
            <script dangerouslySetInnerHTML={{ __html: adminScript }} />
        </div>
    );
}

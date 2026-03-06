/* ═══════════════════════════════════════════════
   DMG RECORDS — SHARED JS
   ═══════════════════════════════════════════════ */

const STREAM_URL = 'https://player.svrdedicado.org/listen/6862/radio.mp3';
let audioEl, playing = false;

/* ── INJECT NAV ─────────────────────────────── */
function injectNav(activePage) {
  const pages = [
    { href:'index.html',        label:'Início',      icon:'home' },
    { href:'programacao.html',  label:'Programação', icon:'calendar' },
    { href:'noticias.html',     label:'Notícias',    icon:'newspaper' },
    { href:'anuncie.html',      label:'Anuncie',     icon:'megaphone' },
    { href:'contato.html',      label:'Contato',     icon:'mail' },
  ];
  const links = pages.map(p =>
    `<a href="${p.href}" class="${activePage===p.href?'active':''}">${p.label}</a>`
  ).join('');

  document.getElementById('site-nav').innerHTML = `
    <div class="nav-inner">
      <a href="index.html" class="nav-logo">
        <div class="nav-logo-mark"></div>
        <span class="nav-brand">DMG <span>Records</span> Rádio</span>
      </a>
      <nav class="nav-links">${links}</nav>
      <div class="nav-right">
        <div class="nav-live"><div class="live-dot"></div>AO VIVO</div>
        <a href="contato.html" class="btn btn-red">
          <i data-lucide="mail" style="width:14px;height:14px"></i> Contato
        </a>
      </div>
    </div>`;
}

/* ── INJECT PLAYER BAR ──────────────────────── */
function injectPlayer() {
  document.getElementById('player-bar').innerHTML = `
    <div class="player-inner">
      <button class="player-play-btn" id="playBtn" onclick="togglePlay()">
        <i data-lucide="play"  id="icoPlay"  style="width:19px;height:19px;margin-left:2px"></i>
        <i data-lucide="pause" id="icoPause" style="width:19px;height:19px;display:none"></i>
      </button>
      <div class="p-track">
        <div class="p-name" id="pName">DMG Records Rádio</div>
        <div class="p-sub"  id="pSub">CLIQUE PLAY PARA OUVIR AO VIVO</div>
      </div>
      <div class="p-wave" id="pWave"></div>
      <div class="p-vol">
        <i data-lucide="volume-2" style="width:16px;height:16px"></i>
        <input type="range" class="p-vol-range" id="volR" min="0" max="100" value="80">
      </div>
      <div class="p-clock" id="pClock">00:00:00</div>
      <div class="p-onair"><div class="live-dot"></div>AO VIVO</div>
    </div>`;

  // Waveform bars
  const pw = document.getElementById('pWave');
  const bars = [];
  for (let i = 0; i < 40; i++) {
    const b = document.createElement('div');
    b.className = 'pw-bar'; b.style.height = '4px';
    pw.appendChild(b); bars.push(b);
  }
  (function anim() {
    bars.forEach((b, i) => {
      const h = playing
        ? Math.abs(Math.sin(Date.now()/160 + i*.45)) * 26 + 4
        : 4 + Math.abs(Math.sin(i*.4)) * 4;
      b.style.height = h + 'px';
      b.classList.toggle('on', playing && h > 15);
    });
    requestAnimationFrame(anim);
  })();

  // Clock
  (function tick() {
    const n = new Date();
    const t = [n.getHours(), n.getMinutes(), n.getSeconds()]
      .map(v => String(v).padStart(2,'0')).join(':');
    const el = document.getElementById('pClock');
    if (el) el.textContent = t;
    setTimeout(tick, 1000);
  })();

  document.getElementById('volR').addEventListener('input', e => {
    if (audioEl) audioEl.volume = e.target.value / 100;
  });
}

/* ── PLAYER TOGGLE ──────────────────────────── */
function togglePlay() {
  if (!audioEl) {
    audioEl = new Audio();
    audioEl.volume = document.getElementById('volR').value / 100;
  }
  if (!playing) {
    audioEl.src = STREAM_URL;
    audioEl.play().catch(() => {});
    playing = true;
    document.getElementById('icoPlay').style.display = 'none';
    document.getElementById('icoPause').style.display = 'inline-flex';
    document.getElementById('pSub').textContent = 'TRANSMISSÃO AO VIVO · DMG RECORDS';
  } else {
    audioEl.pause(); audioEl.src = '';
    playing = false;
    document.getElementById('icoPlay').style.display = 'inline-flex';
    document.getElementById('icoPause').style.display = 'none';
    document.getElementById('pSub').textContent = 'CLIQUE PLAY PARA OUVIR AO VIVO';
  }
}

/* ── INJECT FOOTER ──────────────────────────── */
function injectFooter() {
  document.getElementById('site-footer').innerHTML = `
    <div class="footer-wrap">
      <div class="footer-top">
        <div>
          <div class="footer-logo">
            <div class="footer-lmark"></div>
            <span class="footer-ltext">DMG Records Rádio</span>
          </div>
          <p class="footer-desc">Música, fé e entretenimento 24 horas por dia. A rádio que conecta artistas e ouvintes em todo o Brasil.</p>
          <div class="footer-socials">
            <div class="footer-soc icon"><i data-lucide="instagram" style="width:15px;height:15px"></i></div>
            <div class="footer-soc icon"><i data-lucide="facebook"  style="width:15px;height:15px"></i></div>
            <div class="footer-soc icon"><i data-lucide="youtube"   style="width:15px;height:15px"></i></div>
            <div class="footer-soc icon"><i data-lucide="twitter"   style="width:15px;height:15px"></i></div>
          </div>
        </div>
        <div class="footer-col">
          <div class="footer-col-title">Menu</div>
          <ul>
            <li><a href="index.html"><i data-lucide="home"      style="width:12px;height:12px"></i> Início</a></li>
            <li><a href="programacao.html"><i data-lucide="calendar"  style="width:12px;height:12px"></i> Programação</a></li>
            <li><a href="noticias.html"><i data-lucide="newspaper" style="width:12px;height:12px"></i> Notícias</a></li>
            <li><a href="anuncie.html"><i data-lucide="megaphone" style="width:12px;height:12px"></i> Anuncie</a></li>
            <li><a href="contato.html"><i data-lucide="mail"      style="width:12px;height:12px"></i> Contato</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <div class="footer-col-title">Institucional</div>
          <ul>
            <li><a href="sobre.html"><i data-lucide="info"      style="width:12px;height:12px"></i> Sobre Nós</a></li>
            <li><a href="equipe.html"><i data-lucide="users"     style="width:12px;height:12px"></i> Nossa Equipe</a></li>
            <li><a href="privacidade.html"><i data-lucide="shield"    style="width:12px;height:12px"></i> Privacidade</a></li>
            <li><a href="termos.html"><i data-lucide="file-text"  style="width:12px;height:12px"></i> Termos de Uso</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <div class="footer-col-title">Contato</div>
          <ul>
            <li><a href="https://wa.me/5500000000000"><i data-lucide="message-circle" style="width:12px;height:12px"></i> WhatsApp</a></li>
            <li><a href="mailto:contato@dmgrecords.com.br"><i data-lucide="mail" style="width:12px;height:12px"></i> E-mail</a></li>
            <li><a href="#"><i data-lucide="instagram" style="width:12px;height:12px"></i> Instagram</a></li>
            <li><a href="#"><i data-lucide="youtube"   style="width:12px;height:12px"></i> YouTube</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span class="footer-copy">© 2025 DMG Records Rádio. Todos os direitos reservados.</span>
        <span class="footer-copy" style="color:rgba(255,255,255,.28)">Transmissão ao vivo 24h</span>
      </div>
    </div>`;
}

/* ── FADE IN OBSERVER ───────────────────────── */
function initFadeIn() {
  const els = document.querySelectorAll('.fi');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('v'); io.unobserve(e.target); }
    });
  }, { threshold:.1 });
  els.forEach(el => io.observe(el));
}

/* ── COUNTERS ───────────────────────────────── */
function initCounters() {
  const cnts = document.querySelectorAll('[data-count]');
  const cio = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const el = e.target, tgt = +el.dataset.count;
        let cur = 0; const step = tgt / 50;
        const t = setInterval(() => {
          cur = Math.min(cur + step, tgt);
          el.textContent = Math.floor(cur).toLocaleString('pt-BR');
          if (cur >= tgt) clearInterval(t);
        }, 28);
        cio.unobserve(el);
      }
    });
  }, { threshold:.5 });
  cnts.forEach(c => cio.observe(c));
}

/* ── INIT ALL ───────────────────────────────── */
function dmgInit(activePage) {
  injectNav(activePage);
  injectPlayer();
  injectFooter();
  setTimeout(() => {
    lucide.createIcons();
    initFadeIn();
    initCounters();
  }, 50);
}

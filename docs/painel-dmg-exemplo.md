<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Dresbach Records — Painel Administrativo</title>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Sora:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>
:root {
  --bg: #f5f3ef;
  --surface: #ffffff;
  --surface2: #f0ede8;
  --surface3: #e8e4dc;
  --border: rgba(0,0,0,0.08);
  --border2: rgba(0,0,0,0.14);
  --text: #1a1814;
  --muted: #7a7570;
  --muted2: #b0aca5;
  --gold: #b8862a;
  --gold2: #d4a43a;
  --goldbg: rgba(184,134,42,0.08);
  --goldborder: rgba(184,134,42,0.25);
  --red: #c0392b;
  --green: #27ae60;
  --blue: #2980b9;
  --purple: #8e44ad;
  --sidebar: 240px;
  --topbar: 58px;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--text);font-family:'Sora',sans-serif;font-size:13px;line-height:1.6}
::-webkit-scrollbar{width:5px;height:5px}
::-webkit-scrollbar-track{background:transparent}
::-webkit-scrollbar-thumb{background:#ccc;border-radius:4px}
input,select,textarea,button{font-family:'Sora',sans-serif}
select option{background:white}

@keyframes fadeUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes slideIn{from{transform:translateX(-100%)}to{transform:translateX(0)}}
@keyframes blink{0%,100%{opacity:1}50%{opacity:0.4}}

.fade-up{animation:fadeUp .3s ease both}

/* ── HEADER ── */
.header {
  position: fixed; top: 0; left: 0; right: 0; height: var(--topbar);
  background: var(--text);
  display: flex; align-items: center; z-index: 200;
  border-bottom: 3px solid var(--gold);
}
.header-logo {
  width: var(--sidebar); padding: 0 22px;
  display: flex; align-items: center; gap: 10px;
  border-right: 1px solid rgba(255,255,255,0.1);
  flex-shrink: 0;
}
.header-logo .logo-glyph {
  width: 32px; height: 32px; background: var(--gold);
  border-radius: 6px; display: flex; align-items: center; justify-content: center;
  font-family: 'Bebas Neue', cursive; font-size: 18px; color: var(--text); flex-shrink: 0;
}
.header-logo .logo-text {
  font-family: 'Bebas Neue', cursive; font-size: 20px; color: white;
  letter-spacing: 1px; line-height: 1.1;
}
.header-logo .logo-sub {
  font-size: 9px; color: rgba(255,255,255,0.45); letter-spacing: 1.5px; text-transform: uppercase;
}
.header-center {
  flex: 1; display: flex; align-items: center; padding: 0 20px; gap: 12px;
}
.header-search {
  position: relative; max-width: 340px; flex: 1;
}
.header-search input {
  width: 100%; padding: 8px 14px 8px 34px;
  background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.15);
  border-radius: 8px; color: white; font-size: 12px; outline: none;
  transition: .2s;
}
.header-search input::placeholder{color:rgba(255,255,255,0.4)}
.header-search input:focus{background:rgba(255,255,255,0.15);border-color:rgba(212,164,58,0.5)}
.header-search::before{content:'🔍';position:absolute;left:11px;top:50%;transform:translateY(-50%);font-size:11px;opacity:.4}
.header-right {
  padding: 0 20px; display: flex; align-items: center; gap: 10px;
}
.h-badge {
  padding: 4px 12px; border-radius: 20px;
  background: var(--goldbg); border: 1px solid var(--goldborder);
  color: var(--gold2); font-size: 10px; font-weight: 700;
  letter-spacing: .8px; text-transform: uppercase;
}
.h-avatar {
  width: 34px; height: 34px; border-radius: 8px;
  background: var(--gold); display: flex; align-items: center;
  justify-content: center; font-family: 'Bebas Neue'; font-size: 16px; color: var(--text);
  cursor: pointer;
}
.notif-btn {
  width: 34px; height: 34px; border-radius: 8px; border: 1px solid rgba(255,255,255,.15);
  background: transparent; cursor: pointer; display: flex; align-items: center;
  justify-content: center; font-size: 15px; position: relative; transition: .15s;
}
.notif-btn:hover{background:rgba(255,255,255,.1)}
.n-dot{position:absolute;top:5px;right:5px;width:7px;height:7px;background:var(--red);border-radius:50%;border:1.5px solid var(--text)}

/* ── SIDEBAR ── */
.sidebar {
  width: var(--sidebar); background: var(--text);
  position: fixed; top: var(--topbar); left: 0; bottom: 0;
  overflow-y: auto; z-index: 100;
  border-right: 1px solid rgba(255,255,255,0.06);
  display: flex; flex-direction: column;
}
.nav-sec {
  padding: 18px 20px 6px;
  font-size: 9px; font-weight: 700; letter-spacing: 2px;
  text-transform: uppercase; color: rgba(255,255,255,0.28);
}
.nav-item {
  display: flex; align-items: center; gap: 11px;
  padding: 10px 20px; cursor: pointer;
  font-size: 12px; font-weight: 500; color: rgba(255,255,255,0.55);
  transition: .15s; border-left: 3px solid transparent;
}
.nav-item:hover{color:rgba(255,255,255,0.85);background:rgba(255,255,255,0.04)}
.nav-item.active{color:var(--gold2);border-left-color:var(--gold);background:rgba(184,134,42,0.12)}
.nav-ic{font-size:14px;width:18px;text-align:center;flex-shrink:0}
.nav-bdg{margin-left:auto;background:var(--red);color:white;font-size:9px;font-weight:700;padding:2px 7px;border-radius:12px}
.sidebar-footer {
  margin-top: auto; padding: 16px 20px;
  border-top: 1px solid rgba(255,255,255,0.08);
}
.sb-company {
  font-size: 10px; color: rgba(255,255,255,0.3);
  line-height: 1.6;
}

/* ── MAIN ── */
.main {
  margin-left: var(--sidebar);
  padding-top: var(--topbar);
  min-height: 100vh;
  display: flex; flex-direction: column;
}
.page-content {
  flex: 1; padding: 28px;
  animation: fadeUp .3s ease;
}

/* ── FOOTER ── */
.footer {
  margin-left: var(--sidebar);
  background: var(--text);
  border-top: 3px solid var(--gold);
  color: rgba(255,255,255,0.6);
}
.footer-inner {
  display: grid; grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px; padding: 40px 36px;
}
.footer-brand .fb-logo {
  font-family: 'Bebas Neue', cursive; font-size: 28px;
  color: white; letter-spacing: 1.5px; margin-bottom: 8px;
}
.footer-brand p {
  font-size: 12px; color: rgba(255,255,255,0.45);
  line-height: 1.7; max-width: 280px;
}
.footer-col h4 {
  font-size: 10px; font-weight: 700; letter-spacing: 1.5px;
  text-transform: uppercase; color: var(--gold2);
  margin-bottom: 14px;
}
.footer-col a {
  display: block; font-size: 12px; color: rgba(255,255,255,0.5);
  margin-bottom: 8px; cursor: pointer; transition: .15s;
  text-decoration: none;
}
.footer-col a:hover{color:white}
.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.08);
  padding: 16px 36px;
  display: flex; align-items: center; justify-content: space-between;
}
.footer-bottom .fb-copy {
  font-size: 11px; color: rgba(255,255,255,0.3);
}
.footer-bottom .fb-tags {
  display: flex; gap: 14px;
}
.footer-bottom .fb-tags span {
  font-size: 10px; color: rgba(255,255,255,0.25);
  letter-spacing: .5px;
}

/* ── PAGE HEADER ── */
.ph {
  display: flex; align-items: flex-start; justify-content: space-between;
  margin-bottom: 24px;
}
.ph-left h1 {
  font-family: 'Bebas Neue', cursive; font-size: 34px;
  letter-spacing: 1px; color: var(--text); line-height: 1;
}
.ph-left p {
  font-size: 12px; color: var(--muted); margin-top: 4px;
}
.ph-actions { display: flex; gap: 9px; align-items: center; }

/* ── CARDS ── */
.card {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: 12px; padding: 22px; margin-bottom: 18px;
}
.card-head {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 18px;
}
.card-title {
  font-family: 'Bebas Neue', cursive; font-size: 18px;
  letter-spacing: .5px; display: flex; align-items: center; gap: 9px;
}
.card-title .ic { color: var(--gold); }

/* ── STATS ── */
.stats-grid { display: grid; grid-template-columns: repeat(5,1fr); gap: 14px; margin-bottom: 22px; }
.stat-card {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: 12px; padding: 18px; position: relative; overflow: hidden;
}
.stat-card::after {
  content: ''; position: absolute; bottom: 0; left: 0; right: 0;
  height: 3px; background: var(--gold);
}
.stat-label { font-size: 9px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: var(--muted); margin-bottom: 6px; }
.stat-value { font-family: 'Bebas Neue', cursive; font-size: 32px; color: var(--text); line-height: 1; letter-spacing: .5px; }
.stat-sub { font-size: 11px; color: var(--muted); margin-top: 4px; }
.stat-up { color: var(--green); font-size: 11px; font-weight: 600; margin-top: 2px; }
.stat-down { color: var(--red); font-size: 11px; font-weight: 600; margin-top: 2px; }

/* ── TABLES ── */
.tbl-wrap { overflow-x: auto; }
.tbl { width: 100%; border-collapse: collapse; }
.tbl th {
  text-align: left; font-size: 9px; font-weight: 700; letter-spacing: 1.5px;
  text-transform: uppercase; color: var(--muted2);
  padding: 10px 14px; border-bottom: 2px solid var(--border2); white-space: nowrap;
  background: var(--surface2);
}
.tbl td {
  padding: 12px 14px; border-bottom: 1px solid var(--border);
  font-size: 12px; vertical-align: middle;
}
.tbl tr:last-child td { border-bottom: none; }
.tbl tbody tr:hover td { background: var(--surface2); }
.tbl .t-name { font-weight: 600; }

/* ── BADGES ── */
.badge { padding: 3px 9px; border-radius: 4px; font-size: 10px; font-weight: 700; letter-spacing: .5px; text-transform: uppercase; display: inline-block; }
.bg { background: rgba(39,174,96,.1); color: var(--green); border: 1px solid rgba(39,174,96,.25); }
.bgo { background: var(--goldbg); color: var(--gold); border: 1px solid var(--goldborder); }
.br { background: rgba(192,57,43,.1); color: var(--red); border: 1px solid rgba(192,57,43,.2); }
.bb { background: rgba(41,128,185,.1); color: var(--blue); border: 1px solid rgba(41,128,185,.2); }
.bp { background: rgba(142,68,173,.1); color: var(--purple); border: 1px solid rgba(142,68,173,.2); }
.mono { font-family: 'Courier New',monospace; font-size: 11px; background: var(--surface2); padding: 2px 7px; border-radius: 4px; border: 1px solid var(--border2); }

/* ── FORMS ── */
.fg { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.fg .full { grid-column: 1/-1; }
.fld { margin-bottom: 14px; }
.fld label { display: block; font-size: 9px; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; color: var(--muted); margin-bottom: 6px; }
.fld input,.fld select,.fld textarea {
  width: 100%; padding: 10px 13px;
  background: var(--surface2); border: 1px solid var(--border2);
  border-radius: 8px; color: var(--text); font-size: 13px; outline: none;
  transition: .2s; resize: vertical;
}
.fld input:focus,.fld select:focus,.fld textarea:focus {
  border-color: var(--gold2); background: white; box-shadow: 0 0 0 3px rgba(184,134,42,0.08);
}
.fld input::placeholder,.fld textarea::placeholder { color: var(--muted2); }

/* ── BUTTONS ── */
.btn { padding: 10px 18px; border: none; border-radius: 8px; cursor: pointer; font-size: 12px; font-weight: 600; transition: .2s; display: inline-flex; align-items: center; justify-content: center; gap: 7px; letter-spacing: .2px; }
.btn-full { width: 100%; }
.btn-primary { background: var(--text); color: white; }
.btn-primary:hover { background: #2d2b26; transform: translateY(-1px); }
.btn-gold { background: var(--gold); color: white; }
.btn-gold:hover { background: var(--gold2); transform: translateY(-1px); }
.btn-outline { background: transparent; border: 1px solid var(--border2); color: var(--muted); }
.btn-outline:hover { border-color: var(--text); color: var(--text); }
.btn-danger { background: rgba(192,57,43,.1); border: 1px solid rgba(192,57,43,.25); color: var(--red); }
.btn-danger:hover { background: rgba(192,57,43,.2); }
.btn-sm { padding: 6px 13px; font-size: 11px; border-radius: 6px; }
.btn-xs { padding: 4px 10px; font-size: 10px; border-radius: 5px; }
.btn:disabled { opacity: .4; cursor: not-allowed; transform: none !important; }

/* ── TABS ── */
.tabs { display: flex; border-bottom: 2px solid var(--border2); margin-bottom: 22px; }
.tab { padding: 10px 18px; cursor: pointer; font-size: 12px; font-weight: 600; color: var(--muted); border-bottom: 2px solid transparent; margin-bottom: -2px; transition: .15s; }
.tab:hover { color: var(--text); }
.tab.on { color: var(--gold); border-bottom-color: var(--gold); }

/* ── CHARTS ── */
.bar-row { display: flex; align-items: center; gap: 10px; margin-bottom: 9px; }
.bar-lbl { width: 110px; font-size: 11px; color: var(--muted); text-align: right; flex-shrink: 0; }
.bar-track { flex: 1; height: 8px; background: var(--surface3); border-radius: 4px; overflow: hidden; }
.bar-fill { height: 100%; border-radius: 4px; background: linear-gradient(90deg, var(--gold), var(--gold2)); }
.bar-val { width: 60px; font-size: 11px; font-weight: 600; color: var(--muted); }

/* ── ARTIST CARDS ── */
.artist-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 14px; margin-bottom: 20px; }
.artist-card {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: 10px; overflow: hidden; cursor: pointer;
  transition: .2s; position: relative;
}
.artist-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,0.1); border-color: var(--gold2); }
.artist-card-thumb {
  height: 110px; display: flex; align-items: center; justify-content: center;
  font-size: 42px; font-family: 'Bebas Neue'; letter-spacing: 1px;
  position: relative;
}
.artist-card-body { padding: 12px 14px; }
.artist-card-name { font-weight: 700; font-size: 13px; margin-bottom: 2px; }
.artist-card-role { font-size: 10px; color: var(--muted); text-transform: uppercase; letter-spacing: .8px; }
.artist-card-stats { display: flex; gap: 12px; margin-top: 8px; padding-top: 8px; border-top: 1px solid var(--border); }
.artist-card-stat { font-size: 10px; color: var(--muted); }
.artist-card-stat b { display: block; font-size: 13px; font-weight: 700; color: var(--text); }

/* ── DISTRIBUTION PIPELINE ── */
.pipeline { display: flex; align-items: center; gap: 0; margin-bottom: 20px; overflow-x: auto; padding-bottom: 4px; }
.pipe-step {
  display: flex; align-items: center; gap: 0; flex-shrink: 0;
}
.pipe-box {
  padding: 10px 16px; background: var(--surface); border: 1px solid var(--border);
  border-radius: 8px; text-align: center; min-width: 110px;
}
.pipe-box.active { background: var(--goldbg); border-color: var(--goldborder); }
.pipe-box.done { background: rgba(39,174,96,.08); border-color: rgba(39,174,96,.25); }
.pipe-icon { font-size: 18px; display: block; margin-bottom: 4px; }
.pipe-name { font-size: 11px; font-weight: 600; }
.pipe-sub { font-size: 10px; color: var(--muted); }
.pipe-arrow { width: 28px; flex-shrink: 0; text-align: center; color: var(--muted2); font-size: 18px; }

/* ── PLATFORM LOGOS ── */
.platform-grid { display: grid; grid-template-columns: repeat(6,1fr); gap: 12px; }
.platform-card {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: 10px; padding: 14px 10px; text-align: center;
  cursor: pointer; transition: .2s;
}
.platform-card:hover { border-color: var(--gold2); transform: translateY(-2px); }
.platform-card.active { border-color: var(--green); background: rgba(39,174,96,.05); }
.platform-icon { font-size: 26px; display: block; margin-bottom: 6px; }
.platform-name { font-size: 11px; font-weight: 600; margin-bottom: 2px; }
.platform-tracks { font-size: 10px; color: var(--muted); }

/* ── MODAL ── */
.modal-bg { position: fixed; inset: 0; background: rgba(0,0,0,.5); display: flex; align-items: center; justify-content: center; z-index: 500; padding: 24px; backdrop-filter: blur(4px); }
.modal { background: var(--surface); border: 1px solid var(--border2); border-radius: 14px; width: 100%; max-width: 580px; max-height: 88vh; overflow-y: auto; animation: fadeUp .25s ease; box-shadow: 0 24px 60px rgba(0,0,0,0.2); }
.modal-head { padding: 20px 26px; border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; position: sticky; top: 0; background: var(--surface); z-index: 10; }
.modal-head h2 { font-family: 'Bebas Neue', cursive; font-size: 22px; letter-spacing: .5px; }
.modal-close { width: 30px; height: 30px; border-radius: 6px; border: 1px solid var(--border2); background: transparent; cursor: pointer; color: var(--muted); font-size: 17px; display: flex; align-items: center; justify-content: center; transition: .15s; }
.modal-close:hover { border-color: var(--red); color: var(--red); }
.modal-body { padding: 22px 26px; }
.modal-foot { padding: 14px 26px; border-top: 1px solid var(--border); display: flex; gap: 9px; justify-content: flex-end; }

/* ── NOTIF PANEL ── */
.notif-panel { position: absolute; top: 46px; right: 0; width: 320px; background: var(--surface); border: 1px solid var(--border2); border-radius: 12px; overflow: hidden; box-shadow: 0 12px 40px rgba(0,0,0,0.15); z-index: 300; animation: fadeUp .2s ease; }
.notif-head { padding: 13px 18px; border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; }
.notif-item { padding: 12px 18px; border-bottom: 1px solid var(--border); cursor: pointer; transition: .15s; }
.notif-item:hover { background: var(--surface2); }
.notif-item.unread { border-left: 3px solid var(--gold); }
.notif-t { font-size: 12px; font-weight: 600; margin-bottom: 2px; }
.notif-b { font-size: 11px; color: var(--muted); line-height: 1.4; }
.notif-tm { font-size: 10px; color: var(--muted2); margin-top: 3px; }

/* ── UPLOAD ZONE ── */
.upload-zone {
  border: 2px dashed var(--border2); border-radius: 10px;
  padding: 32px; text-align: center; cursor: pointer;
  transition: .2s; background: var(--surface2);
}
.upload-zone:hover { border-color: var(--gold); background: var(--goldbg); }
.upload-icon { font-size: 32px; margin-bottom: 10px; }
.upload-title { font-weight: 600; margin-bottom: 4px; }
.upload-sub { font-size: 11px; color: var(--muted); }

/* ── MESSAGES ── */
.msg { padding: 10px 14px; border-radius: 8px; font-size: 12px; margin-bottom: 14px; }
.msg-ok { background: rgba(39,174,96,.1); border: 1px solid rgba(39,174,96,.2); color: var(--green); }
.msg-err { background: rgba(192,57,43,.1); border: 1px solid rgba(192,57,43,.2); color: var(--red); }
.msg-info { background: rgba(41,128,185,.1); border: 1px solid rgba(41,128,185,.2); color: var(--blue); }

/* ── SPINNER ── */
.spinner { display: inline-block; width: 13px; height: 13px; border: 2px solid rgba(255,255,255,0.3); border-top-color: white; border-radius: 50%; animation: spin .7s linear infinite; }
.spinner-dark { border-color: rgba(0,0,0,0.2); border-top-color: var(--text); }

/* ── EMPTY STATE ── */
.empty { text-align: center; padding: 48px 20px; color: var(--muted); }
.empty-icon { font-size: 38px; margin-bottom: 12px; opacity: .5; }
.empty p { font-size: 13px; }

/* ── PROGRESS ── */
.prog-track { background: var(--surface3); border-radius: 4px; height: 6px; overflow: hidden; }
.prog-fill { height: 100%; border-radius: 4px; background: linear-gradient(90deg, var(--gold), var(--gold2)); }

/* ── ACTIVITY FEED ── */
.feed-item { display: flex; align-items: flex-start; gap: 12px; padding: 11px 0; border-bottom: 1px solid var(--border); }
.feed-dot { width: 9px; height: 9px; border-radius: 50%; flex-shrink: 0; margin-top: 4px; }
.feed-content { flex: 1; }
.feed-title { font-size: 12px; font-weight: 600; }
.feed-meta { font-size: 11px; color: var(--muted); margin-top: 1px; }

/* ── RESPONSIVE ── */
@media(max-width:1100px){.stats-grid{grid-template-columns:repeat(3,1fr)}.artist-grid{grid-template-columns:repeat(3,1fr)}.platform-grid{grid-template-columns:repeat(3,1fr)}}
@media(max-width:760px){:root{--sidebar:0px}.sidebar{transform:translateX(-100%)}.main{margin-left:0}.footer{margin-left:0}}
</style>
</head>
<body>
<div id="root"></div>
<script>
// ═══════════════════════════════════════════════════
// STATE & DATA
// ═══════════════════════════════════════════════════
const DB = {
  getArtists(){ try{return JSON.parse(localStorage.getItem('dr_artists')||'null')||getSeedArtists()}catch{return getSeedArtists()} },
  saveArtists(a){ localStorage.setItem('dr_artists',JSON.stringify(a)) },
  getTracks(){ try{return JSON.parse(localStorage.getItem('dr_tracks')||'null')||getSeedTracks()}catch{return getSeedTracks()} },
  saveTracks(t){ localStorage.setItem('dr_tracks',JSON.stringify(t)) },
};

function getSeedArtists(){
  return [
    {id:'A001',name:'Luna Verona',role:'Composer',genre:'Indie Pop',country:'Brazil',email:'luna@example.com',phone:'+55 11 99999-0001',status:'active',tracks:8,streams:'142,800',royalties:'$3,420',joined:'Mar 2024',pro:'ECAD',ipi:'IPI-00123',bio:'Multi-award winning indie pop artist from São Paulo.',social:['https://instagram.com/lunaverona'],label:'Dresbach Records'},
    {id:'A002',name:'Marco Esteves',role:'Musician',genre:'Jazz',country:'Brazil',email:'marco@example.com',phone:'+55 21 99999-0002',status:'active',tracks:12,streams:'89,400',royalties:'$2,180',joined:'Jan 2024',pro:'ECAD',ipi:'IPI-00124',bio:'Jazz guitarist and composer from Rio de Janeiro.',social:[],label:'Dresbach Records'},
    {id:'A003',name:'Sofia Andrade',role:'Composer',genre:'Electronic',country:'Brazil',email:'sofia@example.com',phone:'+55 31 99999-0003',status:'active',tracks:6,streams:'220,100',royalties:'$5,640',joined:'Jun 2024',pro:'ECAD',ipi:'IPI-00125',bio:'Electronic music producer and DJ.',social:[],label:'Dresbach Records'},
    {id:'A004',name:'Diego Ferreira',role:'Musician',genre:'Rock',country:'Brazil',email:'diego@example.com',phone:'+55 41 99999-0004',status:'pending',tracks:3,streams:'14,200',royalties:'$340',joined:'Nov 2024',pro:'None',ipi:'',bio:'',social:[],label:'Dresbach Records'},
    {id:'A005',name:'Ayla Santos',role:'Composer',genre:'R&B / Soul',country:'USA',email:'ayla@example.com',phone:'+1 555 000 0005',status:'active',tracks:9,streams:'380,500',royalties:'$9,200',joined:'Feb 2024',pro:'ASCAP',ipi:'IPI-00126',bio:'R&B artist and songwriter based in Miami.',social:[],label:'Dresbach Records'},
    {id:'A006',name:'Rafael Lima',role:'Musician',genre:'Classical',country:'Brazil',email:'rafael@example.com',phone:'+55 11 99999-0006',status:'inactive',tracks:15,streams:'42,000',royalties:'$1,050',joined:'Aug 2023',pro:'ECAD',ipi:'IPI-00127',bio:'',social:[],label:'Dresbach Records'},
    {id:'A007',name:'Isabela Cruz',role:'Composer',genre:'Latin',country:'Mexico',email:'isabela@example.com',phone:'+52 55 9999-0007',status:'active',tracks:7,streams:'198,300',royalties:'$4,820',joined:'Apr 2024',pro:'SGAE',ipi:'IPI-00128',bio:'',social:[],label:'Dresbach Records'},
    {id:'A008',name:'Lucas Moraes',role:'Musician',genre:'Folk',country:'Brazil',email:'lucas@example.com',phone:'+55 61 99999-0008',status:'active',tracks:5,streams:'33,700',royalties:'$820',joined:'Sep 2024',pro:'ECAD',ipi:'',bio:'',social:[],label:'Dresbach Records'},
  ];
}

function getSeedTracks(){
  return [
    {id:'T001',title:'Blue Horizon',artist:'Luna Verona',artistId:'A001',genre:'Indie Pop',duration:'3:42',isrc:'BRA123001',iswc:'T-123.456.001',status:'distributed',platforms:['Spotify','Apple Music','YouTube Music','Amazon','Deezer'],streams:'84,200',royalties:'$2,050',released:'Jan 10, 2025',type:'Single'},
    {id:'T002',title:'Midnight Rain',artist:'Luna Verona',artistId:'A001',genre:'Indie Pop',duration:'4:15',isrc:'BRA123002',iswc:'T-123.456.002',status:'distributed',platforms:['Spotify','Apple Music','YouTube Music'],streams:'58,600',royalties:'$1,370',released:'Dec 5, 2024',type:'Single'},
    {id:'T003',title:'Porto do Sol',artist:'Marco Esteves',artistId:'A002',genre:'Jazz',duration:'5:28',isrc:'BRA123003',iswc:'T-123.456.003',status:'distributed',platforms:['Spotify','Apple Music','Tidal'],streams:'31,200',royalties:'$750',released:'Feb 1, 2025',type:'EP'},
    {id:'T004',title:'Neon Galaxy',artist:'Sofia Andrade',artistId:'A003',genre:'Electronic',duration:'4:00',isrc:'BRA123004',iswc:'T-123.456.004',status:'distributed',platforms:['Spotify','Apple Music','YouTube Music','Beatport','SoundCloud'],streams:'140,900',royalties:'$3,400',released:'Nov 20, 2024',type:'Single'},
    {id:'T005',title:'Raiz do Norte',artist:'Diego Ferreira',artistId:'A004',genre:'Rock',duration:'3:55',isrc:'BRA123005',iswc:'',status:'pending',platforms:[],streams:'0',royalties:'$0',released:'—',type:'Single'},
    {id:'T006',title:'Miami Nights',artist:'Ayla Santos',artistId:'A005',genre:'R&B / Soul',duration:'3:28',isrc:'USA123001',iswc:'T-123.456.006',status:'distributed',platforms:['Spotify','Apple Music','YouTube Music','Amazon','Tidal'],streams:'220,400',royalties:'$5,320',released:'Jan 25, 2025',type:'Album'},
    {id:'T007',title:'Corda Fina',artist:'Rafael Lima',artistId:'A006',genre:'Classical',duration:'6:10',isrc:'BRA123007',iswc:'T-123.456.007',status:'review',platforms:[],streams:'0',royalties:'$0',released:'—',type:'Single'},
    {id:'T008',title:'Corazón Libre',artist:'Isabela Cruz',artistId:'A007',genre:'Latin',duration:'3:38',isrc:'MEX123001',iswc:'T-123.456.008',status:'distributed',platforms:['Spotify','Apple Music','YouTube Music','Amazon','Deezer'],streams:'198,300',royalties:'$4,820',released:'Mar 1, 2025',type:'Single'},
  ];
}

let S = {
  page: 'dashboard',
  modal: null,
  notifOpen: false,
  tab: 0,
  success: '',
  error: '',
  loading: false,
  selectedArtist: null,
  selectedTrack: null,
  distTab: 0,
  finTab: 0,
  settingsTab: 0,
  siteTab: 0,
  reportTab: 0,
};

function set(patch){ Object.assign(S,patch); render(); }

function genId(p){ return p+'-'+Math.random().toString(36).slice(2,6).toUpperCase(); }
function today(){ return new Date().toLocaleDateString('pt-BR',{day:'2-digit',month:'short',year:'numeric'}); }
function dlTxt(c,n){ const a=document.createElement('a'); a.href=URL.createObjectURL(new Blob([c],{type:'text/plain'})); a.download=n; a.click(); }

// ═══════════════════════════════════════════════════
// RENDER ENGINE
// ═══════════════════════════════════════════════════
function render(){
  document.getElementById('root').innerHTML = `
    ${renderHeader()}
    <div style="display:flex">
      ${renderSidebar()}
      <div class="main">
        ${renderPage()}
        ${renderFooter()}
      </div>
    </div>
    ${renderModal()}
  `;
}

// ── HEADER ──────────────────────────────────────────
function renderHeader(){
  const notifs = getNotifs();
  const unread = notifs.filter(n=>n.u).length;
  return `
  <header class="header">
    <div class="header-logo">
      <div class="logo-glyph">DR</div>
      <div>
        <div class="logo-text">Dresbach Records</div>
        <div class="logo-sub">Admin Dashboard</div>
      </div>
    </div>
    <div class="header-center">
      <div class="header-search"><input placeholder="Buscar artistas, músicas, contratos…"></div>
    </div>
    <div class="header-right">
      <span class="h-badge">CNPJ 63.187.175/0001-70</span>
      <div style="position:relative">
        <button class="notif-btn" onclick="set({notifOpen:!S.notifOpen})">
          🔔${unread?'<span class="n-dot"></span>':''}
        </button>
        ${S.notifOpen?`
        <div class="notif-panel">
          <div class="notif-head"><span style="font-size:12px;font-weight:700">Notificações</span><span style="font-size:11px;color:var(--gold);cursor:pointer" onclick="set({notifOpen:false})">Fechar</span></div>
          ${notifs.map(n=>`<div class="notif-item ${n.u?'unread':''}"><div class="notif-t">${n.t}</div><div class="notif-b">${n.b}</div><div class="notif-tm">${n.tm}</div></div>`).join('')}
        </div>`:''}
      </div>
      <div class="h-avatar" onclick="set({page:'settings'})">A</div>
    </div>
  </header>`;
}

function getNotifs(){
  return [
    {t:'Nova faixa enviada',b:'Diego Ferreira enviou "Raiz do Norte" para revisão.',tm:'há 2 horas',u:true},
    {t:'Distribuição concluída',b:'"Miami Nights" de Ayla Santos está disponível em todas as plataformas.',tm:'Ontem',u:true},
    {t:'Contrato pendente',b:'Contrato de Marco Esteves vence em 30 dias.',tm:'2 dias atrás',u:true},
    {t:'Royalties processados',b:'Distribuição de Q1 2025 concluída — $27,180 total.',tm:'1 semana atrás',u:false},
    {t:'Novo artista cadastrado',b:'Lucas Moraes completou o cadastro no Artist Hub.',tm:'2 semanas atrás',u:false},
  ];
}

// ── SIDEBAR ─────────────────────────────────────────
function renderSidebar(){
  const nav = [
    {sec:'Principal',items:[{id:'dashboard',ic:'⊞',l:'Dashboard'},{id:'activity',ic:'⏱',l:'Atividade',badge:3}]},
    {sec:'Artistas & Música',items:[{id:'artists',ic:'🎤',l:'Artistas'},{id:'catalog',ic:'🎵',l:'Catálogo de Músicas'},{id:'albums',ic:'💿',l:'Álbuns & EPs'},{id:'contracts',ic:'📋',l:'Contratos'}]},
    {sec:'Distribuição',items:[{id:'distribution',ic:'🌐',l:'Distribuição'},{id:'platforms',ic:'📡',l:'Plataformas'},{id:'releases',ic:'🚀',l:'Lançamentos'}]},
    {sec:'Financeiro',items:[{id:'royalties',ic:'💰',l:'Royalties'},{id:'payments',ic:'💳',l:'Pagamentos'},{id:'invoices',ic:'🧾',l:'Notas Fiscais'}]},
    {sec:'Ferramentas',items:[{id:'analytics',ic:'📊',l:'Analytics'},{id:'marketing',ic:'📣',l:'Marketing'},{id:'licenses',ic:'⚖',l:'Licenciamento'}]},
    {sec:'Plataforma',items:[{id:'site',ic:'🌍',l:'Gerenciar Site'},{id:'hub',ic:'🎸',l:'Artist Hub'},{id:'reports',ic:'📈',l:'Relatórios'}]},
    {sec:'Admin',items:[{id:'users',ic:'👥',l:'Usuários Admin'},{id:'settings',ic:'⚙',l:'Configurações'}]},
  ];
  return `
  <aside class="sidebar">
    ${nav.map(s=>`
      <div class="nav-sec">${s.sec}</div>
      ${s.items.map(it=>`
        <div class="nav-item ${S.page===it.id?'active':''}" onclick="set({page:'${it.id}',tab:0})">
          <span class="nav-ic">${it.ic}</span>${it.l}
          ${it.badge?`<span class="nav-bdg">${it.badge}</span>`:''}
        </div>`).join('')}
    `).join('')}
    <div class="sidebar-footer">
      <div class="sb-company">
        <strong style="color:rgba(255,255,255,.5)">Dresbach Records LTDA</strong><br>
        CNPJ 63.187.175/0001-70<br>
        São Paulo, Brasil<br>
        v2.0.0 · DMG Hub
      </div>
    </div>
  </aside>`;
}

// ── FOOTER ──────────────────────────────────────────
function renderFooter(){
  return `
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <div class="fb-logo">Dresbach Records</div>
        <p>Gravadora e distribuidora independente sediada em São Paulo, Brasil. Gerenciando artistas e músicas desde 2020. Vinculada ao DMG Digital Radio.</p>
        <div style="margin-top:14px;display:flex;gap:10px">
          <span style="font-size:20px;cursor:pointer;opacity:.6">📸</span>
          <span style="font-size:20px;cursor:pointer;opacity:.6">🐦</span>
          <span style="font-size:20px;cursor:pointer;opacity:.6">▶️</span>
          <span style="font-size:20px;cursor:pointer;opacity:.6">🎵</span>
        </div>
      </div>
      <div class="footer-col">
        <h4>Gravadora</h4>
        <a onclick="set({page:'artists'})">Artistas</a>
        <a onclick="set({page:'catalog'})">Catálogo</a>
        <a onclick="set({page:'contracts'})">Contratos</a>
        <a onclick="set({page:'royalties'})">Royalties</a>
        <a onclick="set({page:'releases'})">Lançamentos</a>
      </div>
      <div class="footer-col">
        <h4>Distribuição</h4>
        <a onclick="set({page:'distribution'})">Plataformas</a>
        <a onclick="set({page:'licenses'})">Licenciamento</a>
        <a onclick="set({page:'analytics'})">Analytics</a>
        <a onclick="set({page:'reports'})">Relatórios</a>
        <a>ISRC / ISWC</a>
      </div>
      <div class="footer-col">
        <h4>Plataforma</h4>
        <a onclick="set({page:'site'})">Gerenciar Site</a>
        <a onclick="set({page:'hub'})">Artist Hub</a>
        <a onclick="set({page:'users'})">Usuários Admin</a>
        <a onclick="set({page:'settings'})">Configurações</a>
        <a>Suporte</a>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="fb-copy">© 2025 Dresbach Records LTDA — Todos os direitos reservados. CNPJ 63.187.175/0001-70</div>
      <div class="fb-tags">
        <span>Política de Privacidade</span>
        <span>Termos de Uso</span>
        <span>LGPD</span>
        <span>ECAD</span>
      </div>
    </div>
  </footer>`;
}

// ═══════════════════════════════════════════════════
// PAGES
// ═══════════════════════════════════════════════════
function renderPage(){
  const pages = {
    dashboard: pageDashboard, activity: pageActivity,
    artists: pageArtists, catalog: pageCatalog, albums: pageAlbums, contracts: pageContracts,
    distribution: pageDistribution, platforms: pagePlatforms, releases: pageReleases,
    royalties: pageRoyalties, payments: pagePayments, invoices: pageInvoices,
    analytics: pageAnalytics, marketing: pageMarketing, licenses: pageLicenses,
    site: pageSite, hub: pageHub, reports: pageReports,
    users: pageUsers, settings: pageSettings,
  };
  const fn = pages[S.page] || pageDashboard;
  return `<div class="page-content">${S.success?`<div class="msg msg-ok">✓ ${S.success}</div>`:''}${S.error?`<div class="msg msg-err">⚠ ${S.error}</div>`:''}${fn()}</div>`;
}

// ── DASHBOARD ────────────────────────────────────────
function pageDashboard(){
  const artists = DB.getArtists();
  const tracks = DB.getTracks();
  const active = artists.filter(a=>a.status==='active').length;
  const distTracks = tracks.filter(t=>t.status==='distributed').length;
  return `
  <div class="ph"><div class="ph-left"><h1>Dashboard</h1><p>Visão geral da gravadora — ${today()}</p></div>
    <div class="ph-actions">
      <button class="btn btn-outline btn-sm" onclick="set({page:'reports'})">📈 Relatório Completo</button>
      <button class="btn btn-gold btn-sm" onclick="openModal('addArtist')">+ Novo Artista</button>
    </div>
  </div>

  <div class="stats-grid">
    ${[
      ['Artistas Ativos', active, `de ${artists.length} totais`, '↑ +2 este mês'],
      ['Músicas no Catálogo', tracks.length, `${distTracks} distribuídas`, '↑ +5 este mês'],
      ['Plataformas', '18', 'Parceiras ativas', 'Alcance global'],
      ['Royalties Q1', '$27,180', 'Distribuídos', '↑ +22% vs Q4'],
      ['Streams (est.)', '1.2M', 'Todas as plataformas', '↑ +14% este mês'],
    ].map(([l,v,s,t])=>`
      <div class="stat-card"><div class="stat-label">${l}</div><div class="stat-value">${v}</div><div class="stat-sub">${s}</div><div class="stat-up">${t}</div></div>`).join('')}
  </div>

  <div style="display:grid;grid-template-columns:2fr 1fr;gap:18px">
    <div>
      <div class="card">
        <div class="card-head"><div class="card-title"><span class="ic">🎤</span> Top Artistas</div><button class="btn btn-outline btn-sm" onclick="set({page:'artists'})">Ver Todos</button></div>
        <div class="tbl-wrap"><table class="tbl"><thead><tr><th>Artista</th><th>Gênero</th><th>Músicas</th><th>Streams</th><th>Royalties</th><th>Status</th></tr></thead>
        <tbody>${artists.filter(a=>a.status==='active').slice(0,5).map(a=>`
          <tr><td class="t-name" style="cursor:pointer;color:var(--gold)" onclick="openArtistDetail('${a.id}')">${a.name}</td>
          <td style="color:var(--muted)">${a.genre}</td><td>${a.tracks}</td>
          <td style="font-weight:600">${a.streams}</td>
          <td style="color:var(--green);font-weight:600">${a.royalties}</td>
          <td><span class="badge bg">Ativo</span></td></tr>`).join('')}
        </tbody></table></div>
      </div>

      <div class="card">
        <div class="card-head"><div class="card-title"><span class="ic">🎵</span> Músicas Recentes</div><button class="btn btn-outline btn-sm" onclick="set({page:'catalog'})">Catálogo</button></div>
        <div class="tbl-wrap"><table class="tbl"><thead><tr><th>Título</th><th>Artista</th><th>Tipo</th><th>Status</th><th>Streams</th></tr></thead>
        <tbody>${tracks.slice(0,6).map(t=>`
          <tr><td class="t-name">${t.title}</td><td style="color:var(--muted)">${t.artist}</td>
          <td><span class="badge bb">${t.type}</span></td>
          <td><span class="badge ${t.status==='distributed'?'bg':t.status==='pending'?'bgo':'br'}">${t.status==='distributed'?'Distribuída':t.status==='pending'?'Pendente':'Revisão'}</span></td>
          <td>${t.streams}</td></tr>`).join('')}
        </tbody></table></div>
      </div>
    </div>

    <div>
      <div class="card" style="margin-bottom:16px">
        <div class="card-title" style="margin-bottom:14px"><span class="ic">💰</span> Receita por Fonte</div>
        ${[['Streaming',72,'$19,570'],['Performance',14,'$3,805'],['Sync / Licença',8,'$2,175'],['Mecânico',4,'$1,087'],['Outros',2,'$543']].map(([l,p,v])=>`
          <div class="bar-row"><div class="bar-lbl">${l}</div><div class="bar-track"><div class="bar-fill" style="width:${p}%"></div></div><div class="bar-val">${v}</div></div>`).join('')}
      </div>
      <div class="card" style="margin-bottom:16px">
        <div class="card-title" style="margin-bottom:14px"><span class="ic">⚡</span> Ações Rápidas</div>
        ${[['+ Novo Artista','addArtist','btn-primary'],['+ Nova Música','addTrack','btn-gold'],['⬆ Distribuir Faixa','distribution','btn-outline'],['📜 Gerar Contrato','contracts','btn-outline'],['💰 Processar Royalties','royalties','btn-outline']].map(([l,a,c])=>`
          <button class="btn ${c} btn-sm btn-full" style="margin-bottom:8px" onclick="${a.includes('Modal')?'openModal(\''+a+'\')':"set({page:'"+a+"'})"}">${l}</button>`).join('')}
      </div>
      <div class="card">
        <div class="card-title" style="margin-bottom:12px"><span class="ic">⏱</span> Feed de Atividade</div>
        ${[
          ['Nova faixa pendente','Diego Ferreira','var(--gold)',true],
          ['Distribuição concluída','"Miami Nights" live','var(--green)',false],
          ['Contrato assinado','Sofia Andrade','var(--blue)',false],
          ['Royalties pagos','Q4 2024 — $21,400','var(--green)',false],
        ].map(([t,s,c,u])=>`
          <div class="feed-item"><div class="feed-dot" style="background:${c}"></div><div class="feed-content"><div class="feed-title">${t}</div><div class="feed-meta">${s}</div></div></div>`).join('')}
      </div>
    </div>
  </div>`;
}

// ── ACTIVITY ─────────────────────────────────────────
function pageActivity(){
  const activities = [
    {type:'track',msg:'Diego Ferreira enviou "Raiz do Norte" para revisão',time:'há 2 horas',c:'var(--gold)'},
    {type:'dist',msg:'Distribuição de "Miami Nights" concluída em 5 plataformas',time:'Ontem 14:32',c:'var(--green)'},
    {type:'contract',msg:'Contrato de Sofia Andrade assinado digitalmente',time:'Ontem 11:10',c:'var(--blue)'},
    {type:'royalty',msg:'Royalties Q1 2025 processados — $27,180 distribuídos',time:'3 dias atrás',c:'var(--green)'},
    {type:'artist',msg:'Lucas Moraes completou cadastro no Artist Hub',time:'1 semana atrás',c:'var(--purple)'},
    {type:'track',msg:'Álbum "Neon Sessions" de Sofia Andrade aprovado',time:'1 semana atrás',c:'var(--gold)'},
    {type:'license',msg:'Licença sync aprovada para "Blue Horizon" — FilmCo',time:'2 semanas atrás',c:'var(--blue)'},
    {type:'dist',msg:'"Corazón Libre" alcançou 150k streams no Spotify',time:'2 semanas atrás',c:'var(--green)'},
  ];
  return `
  <div class="ph"><div class="ph-left"><h1>Feed de Atividade</h1><p>Tudo que aconteceu na Dresbach Records</p></div></div>
  <div style="display:grid;grid-template-columns:2fr 1fr;gap:18px">
    <div class="card">
      <div class="card-head"><div class="card-title"><span class="ic">⏱</span> Atividades Recentes</div>
        <div style="display:flex;gap:7px">
          ${['Todos','Música','Distribuição','Contratos','Royalties'].map((t,i)=>`<button class="btn btn-outline btn-sm ${S.tab===i?'btn-gold':''}" onclick="set({tab:${i}})">${t}</button>`).join('')}
        </div>
      </div>
      ${activities.map(a=>`
        <div class="feed-item">
          <div class="feed-dot" style="background:${a.c}"></div>
          <div class="feed-content">
            <div class="feed-title">${a.msg}</div>
            <div class="feed-meta">${a.time}</div>
          </div>
        </div>`).join('')}
    </div>
    <div>
      <div class="card" style="margin-bottom:16px">
        <div class="card-title" style="margin-bottom:14px"><span class="ic">📊</span> Resumo da Semana</div>
        ${[['Faixas enviadas','4'],['Distribuições','2'],['Contratos assinados','1'],['Royalties processados','$3,240'],['Novos streams','48,200']].map(([l,v])=>`
          <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border);font-size:12px"><span style="color:var(--muted)">${l}</span><span style="font-weight:700">${v}</span></div>`).join('')}
      </div>
      <div class="card">
        <div class="card-title" style="margin-bottom:12px"><span class="ic">🔔</span> Alertas Pendentes</div>
        ${[['Faixa aguardando revisão','Diego Ferreira','var(--gold)'],['Contrato vence em 30 dias','Marco Esteves','var(--red)'],['ISRC não registrado','Rafael Lima','var(--gold)']].map(([t,s,c])=>`
          <div style="padding:9px;background:var(--surface2);border-radius:7px;margin-bottom:8px;border-left:3px solid ${c}">
            <div style="font-size:12px;font-weight:600">${t}</div>
            <div style="font-size:11px;color:var(--muted);margin-top:1px">${s}</div>
          </div>`).join('')}
      </div>
    </div>
  </div>`;
}

// ── ARTISTS ──────────────────────────────────────────
function pageArtists(){
  const artists = DB.getArtists();
  const colors = ['#2c3e6b','#3d2c6b','#2c6b3d','#6b3d2c','#2c5a6b','#6b2c3d','#4a6b2c','#6b5a2c'];
  return `
  <div class="ph"><div class="ph-left"><h1>Artistas</h1><p>${artists.length} artistas no roster da Dresbach Records</p></div>
    <div class="ph-actions">
      <input placeholder="Buscar artista…" style="padding:8px 13px;background:white;border:1px solid var(--border2);border-radius:7px;font-size:12px;outline:none;width:200px">
      <select style="padding:8px 12px;background:white;border:1px solid var(--border2);border-radius:7px;font-size:12px;outline:none">
        <option>Todos os Status</option><option>Ativo</option><option>Pendente</option><option>Inativo</option>
      </select>
      <button class="btn btn-gold btn-sm" onclick="openModal('addArtist')">+ Novo Artista</button>
    </div>
  </div>

  <div class="tabs">
    ${['Cards','Lista','Contratos'].map((t,i)=>`<div class="tab ${S.tab===i?'on':''}" onclick="set({tab:${i}})">${t}</div>`).join('')}
  </div>

  ${S.tab===0?`
    <div class="artist-grid">
      ${artists.map((a,i)=>`
        <div class="artist-card" onclick="openArtistDetail('${a.id}')">
          <div class="artist-card-thumb" style="background:${colors[i%colors.length]};color:rgba(255,255,255,0.2)">
            <span style="color:white;font-size:26px;font-weight:700">${a.name.split(' ').map(w=>w[0]).join('').slice(0,2)}</span>
          </div>
          <div class="artist-card-body">
            <div class="artist-card-name">${a.name}</div>
            <div class="artist-card-role">${a.role} · ${a.genre}</div>
            <div style="margin-top:6px"><span class="badge ${a.status==='active'?'bg':a.status==='pending'?'bgo':'br'}">${a.status==='active'?'Ativo':a.status==='pending'?'Pendente':'Inativo'}</span></div>
            <div class="artist-card-stats">
              <div class="artist-card-stat"><b>${a.tracks}</b>músicas</div>
              <div class="artist-card-stat"><b>${a.streams}</b>streams</div>
              <div class="artist-card-stat"><b style="color:var(--green)">${a.royalties}</b>royalties</div>
            </div>
          </div>
        </div>`).join('')}
    </div>
  `:''}
  ${S.tab===1?`
    <div class="card">
      <div class="tbl-wrap"><table class="tbl"><thead><tr><th>ID</th><th>Nome</th><th>Papel</th><th>Gênero</th><th>País</th><th>PRO</th><th>Músicas</th><th>Streams</th><th>Royalties</th><th>Status</th><th>Ações</th></tr></thead>
      <tbody>${artists.map(a=>`
        <tr><td><span class="mono">${a.id}</span></td>
        <td class="t-name" style="cursor:pointer;color:var(--gold)" onclick="openArtistDetail('${a.id}')">${a.name}</td>
        <td style="color:var(--muted)">${a.role}</td><td>${a.genre}</td><td>${a.country}</td>
        <td><span class="mono">${a.pro}</span></td>
        <td style="font-weight:600">${a.tracks}</td>
        <td>${a.streams}</td>
        <td style="color:var(--green);font-weight:600">${a.royalties}</td>
        <td><span class="badge ${a.status==='active'?'bg':a.status==='pending'?'bgo':'br'}">${a.status==='active'?'Ativo':a.status==='pending'?'Pendente':'Inativo'}</span></td>
        <td style="display:flex;gap:6px">
          <button class="btn btn-outline btn-xs" onclick="openArtistDetail('${a.id}')">Ver</button>
          <button class="btn btn-xs" style="background:var(--goldbg);border:1px solid var(--goldborder);color:var(--gold)" onclick="openModal('editArtist')">Editar</button>
        </td></tr>`).join('')}
      </tbody></table></div>
    </div>
  `:''}
  ${S.tab===2?`
    <div class="card">
      <div class="card-head"><div class="card-title"><span class="ic">📋</span> Status de Contratos</div><button class="btn btn-gold btn-sm" onclick="openModal('newContract')">+ Novo Contrato</button></div>
      <div class="tbl-wrap"><table class="tbl"><thead><tr><th>Artista</th><th>Tipo</th><th>Início</th><th>Vencimento</th><th>Status</th><th>Ações</th></tr></thead>
      <tbody>
        ${artists.map((a,i)=>{
          const types=['Gravação Exclusiva','Co-publicação','Distribuição','Gerenciamento'];
          const starts=['Jan 2024','Mar 2024','Jun 2024','Aug 2023','Feb 2024','Apr 2024','May 2024','Sep 2024'];
          const ends=['Jan 2026','Mar 2026','Jun 2025','Aug 2025','Feb 2026','Apr 2025','May 2026','Sep 2025'];
          const stats=['active','active','pending','expired','active','active','active','active'];
          return `<tr><td class="t-name">${a.name}</td><td>${types[i%types.length]}</td><td style="color:var(--muted)">${starts[i]}</td><td style="color:var(--muted)">${ends[i]}</td>
          <td><span class="badge ${stats[i]==='active'?'bg':stats[i]==='pending'?'bgo':'br'}">${stats[i]==='active'?'Ativo':stats[i]==='pending'?'Pendente':'Expirado'}</span></td>
          <td style="display:flex;gap:5px"><button class="btn btn-outline btn-xs" onclick="dlTxt('Contrato ${a.name}','contrato_${a.id}.txt')">⬇</button><button class="btn btn-outline btn-xs">Renovar</button></td>
          </tr>`;
        }).join('')}
      </tbody></table></div>
    </div>
  `:''}`;
}

function openArtistDetail(id){
  const artists = DB.getArtists();
  const a = artists.find(x=>x.id===id);
  if(!a) return;
  S.selectedArtist = a;
  openModal('artistDetail');
}

// ── CATALOG ──────────────────────────────────────────
function pageCatalog(){
  const tracks = DB.getTracks();
  return `
  <div class="ph"><div class="ph-left"><h1>Catálogo de Músicas</h1><p>${tracks.length} faixas no catálogo</p></div>
    <div class="ph-actions">
      <input placeholder="Buscar faixa…" style="padding:8px 13px;background:white;border:1px solid var(--border2);border-radius:7px;font-size:12px;outline:none;width:180px">
      <select style="padding:8px 12px;background:white;border:1px solid var(--border2);border-radius:7px;font-size:12px;outline:none"><option>Todos Status</option><option>Distribuída</option><option>Pendente</option><option>Revisão</option></select>
      <button class="btn btn-gold btn-sm" onclick="openModal('addTrack')">+ Adicionar Faixa</button>
    </div>
  </div>

  <div class="card">
    <div class="tbl-wrap"><table class="tbl">
      <thead><tr><th>ID</th><th>Título</th><th>Artista</th><th>Tipo</th><th>Gênero</th><th>Dur.</th><th>ISRC</th><th>ISWC</th><th>Plataformas</th><th>Streams</th><th>Royalties</th><th>Status</th><th>Ações</th></tr></thead>
      <tbody>${tracks.map(t=>`
        <tr>
          <td><span class="mono">${t.id}</span></td>
          <td class="t-name">${t.title}</td>
          <td style="color:var(--muted)">${t.artist}</td>
          <td><span class="badge bb">${t.type}</span></td>
          <td style="color:var(--muted)">${t.genre}</td>
          <td style="color:var(--muted)">${t.duration}</td>
          <td><span class="mono">${t.isrc||'—'}</span></td>
          <td style="font-size:10px;color:var(--muted2)">${t.iswc||'—'}</td>
          <td>${t.platforms.length?`<span style="font-weight:600">${t.platforms.length}</span><span style="color:var(--muted)"> plats</span>`:'<span style="color:var(--muted2)">—</span>'}</td>
          <td style="font-weight:600">${t.streams}</td>
          <td style="color:var(--green);font-weight:600">${t.royalties}</td>
          <td><span class="badge ${t.status==='distributed'?'bg':t.status==='pending'?'bgo':'br'}">${t.status==='distributed'?'Distribuída':t.status==='pending'?'Pendente':'Revisão'}</span></td>
          <td style="display:flex;gap:5px;min-width:130px">
            ${t.status==='pending'?`<button class="btn btn-gold btn-xs" onclick="approveTrack('${t.id}')">✓ Aprovar</button>`:''}
            <button class="btn btn-outline btn-xs" onclick="openModal('trackDetail')">Ver</button>
            <button class="btn btn-outline btn-xs" onclick="set({page:'distribution'})">Distribuir</button>
          </td>
        </tr>`).join('')}
      </tbody>
    </table></div>
  </div>`;
}

function approveTrack(id){
  const tracks = DB.getTracks();
  const t = tracks.find(x=>x.id===id);
  if(t){ t.status='review'; DB.saveTracks(tracks); }
  set({success:`Faixa aprovada e enviada para revisão!`});
  setTimeout(()=>set({success:''}),3000);
}

// ── ALBUMS ───────────────────────────────────────────
function pageAlbums(){
  return `
  <div class="ph"><div class="ph-left"><h1>Álbuns & EPs</h1><p>Gerenciar releases completos</p></div>
    <div class="ph-actions"><button class="btn btn-gold btn-sm" onclick="openModal('addAlbum')">+ Novo Álbum / EP</button></div>
  </div>
  <div class="card">
    <div class="tbl-wrap"><table class="tbl"><thead><tr><th>ID</th><th>Título</th><th>Artista</th><th>Tipo</th><th>Faixas</th><th>Lançamento</th><th>UPC</th><th>Status</th><th>Ações</th></tr></thead>
    <tbody>
      ${[
        ['ALB001','Horizons EP','Luna Verona','EP','4','Jan 2025','786636547846','Distribuído'],
        ['ALB002','Porto Sessions','Marco Esteves','Álbum','10','Mar 2025','786636547847','Em Produção'],
        ['ALB003','Neon Sessions','Sofia Andrade','Álbum','8','Dez 2024','786636547848','Distribuído'],
        ['ALB004','Soul Diaries','Ayla Santos','Álbum','12','Nov 2024','786636547849','Distribuído'],
        ['ALB005','Ritmo & Blues','Isabela Cruz','EP','5','Abr 2025','—','Pendente'],
      ].map(([id,t,a,tp,fx,dt,upc,st])=>`
        <tr>
          <td><span class="mono">${id}</span></td>
          <td class="t-name">${t}</td>
          <td style="color:var(--muted)">${a}</td>
          <td><span class="badge bb">${tp}</span></td>
          <td style="font-weight:600">${fx}</td>
          <td style="color:var(--muted)">${dt}</td>
          <td><span class="mono">${upc}</span></td>
          <td><span class="badge ${st==='Distribuído'?'bg':st==='Pendente'?'bgo':'bb'}">${st}</span></td>
          <td style="display:flex;gap:5px"><button class="btn btn-outline btn-xs">Ver</button><button class="btn btn-outline btn-xs">Editar</button></td>
        </tr>`).join('')}
    </tbody></table></div>
  </div>`;
}

// ── CONTRACTS ────────────────────────────────────────
function pageContracts(){
  return `
  <div class="ph"><div class="ph-left"><h1>Contratos</h1><p>Gerenciar todos os contratos e acordos</p></div>
    <div class="ph-actions"><button class="btn btn-gold btn-sm" onclick="openModal('newContract')">+ Novo Contrato</button></div>
  </div>
  <div class="tabs">
    ${['Todos','Gravação','Distribuição','Publishing','Gerenciamento'].map((t,i)=>`<div class="tab ${S.tab===i?'on':''}" onclick="set({tab:${i}})">${t}</div>`).join('')}
  </div>
  <div class="card">
    <div class="card-head"><div class="card-title"><span class="ic">📋</span> Contratos Ativos</div></div>
    <div class="tbl-wrap"><table class="tbl"><thead><tr><th>ID</th><th>Artista</th><th>Tipo</th><th>Exclusividade</th><th>Split</th><th>Vigência</th><th>Vencimento</th><th>Status</th><th>Ações</th></tr></thead>
    <tbody>
      ${[
        ['CNT001','Luna Verona','Gravação Exclusiva','Sim','70/30','Jan 2024','Jan 2026','active'],
        ['CNT002','Marco Esteves','Co-publicação','Não','60/40','Mar 2024','Mar 2026','active'],
        ['CNT003','Sofia Andrade','Distribuição','Sim','80/20','Jun 2024','Jun 2025','pending'],
        ['CNT004','Ayla Santos','Gravação Exclusiva','Sim','75/25','Feb 2024','Feb 2026','active'],
        ['CNT005','Diego Ferreira','Distribuição','Não','85/15','Nov 2024','Nov 2025','active'],
        ['CNT006','Rafael Lima','Publishing','Não','50/50','Aug 2023','Aug 2025','expired'],
        ['CNT007','Isabela Cruz','Gerenciamento','Não','15% gross','Apr 2024','Apr 2026','active'],
        ['CNT008','Lucas Moraes','Distribuição','Não','85/15','Sep 2024','Sep 2025','active'],
      ].map(([id,a,t,ex,sp,vi,ve,st])=>`
        <tr>
          <td><span class="mono">${id}</span></td>
          <td class="t-name">${a}</td>
          <td>${t}</td>
          <td><span class="badge ${ex==='Sim'?'bg':'bgo'}">${ex}</span></td>
          <td style="font-family:monospace;font-size:11px">${sp}</td>
          <td style="color:var(--muted)">${vi}</td>
          <td style="color:${st==='expired'?'var(--red)':'var(--muted)'}">${ve}</td>
          <td><span class="badge ${st==='active'?'bg':st==='pending'?'bgo':'br'}">${st==='active'?'Ativo':st==='pending'?'Pendente':'Expirado'}</span></td>
          <td style="display:flex;gap:5px">
            <button class="btn btn-outline btn-xs" onclick="dlTxt('Contrato ${id} — ${a}','${id}.txt')">⬇</button>
            ${st==='expired'?`<button class="btn btn-gold btn-xs">Renovar</button>`:`<button class="btn btn-outline btn-xs">Ver</button>`}
          </td>
        </tr>`).join('')}
    </tbody></table></div>
  </div>`;
}

// ── DISTRIBUTION ─────────────────────────────────────
function pageDistribution(){
  const tracks = DB.getTracks();
  const pending = tracks.filter(t=>t.status==='pending'||t.status==='review');
  return `
  <div class="ph"><div class="ph-left"><h1>Distribuição Digital</h1><p>Gerenciar entrega de música para plataformas</p></div>
    <div class="ph-actions"><button class="btn btn-gold btn-sm" onclick="openModal('newRelease')">🚀 Novo Lançamento</button></div>
  </div>

  <div class="tabs">
    ${['Pipeline','Faixas Pendentes','Histórico','Configurações'].map((t,i)=>`<div class="tab ${S.distTab===i?'on':''}" onclick="set({distTab:${i}})">${t}</div>`).join('')}
  </div>

  ${S.distTab===0?`
    <div class="card">
      <div class="card-title" style="margin-bottom:18px"><span class="ic">🚀</span> Pipeline de Distribuição</div>
      <div class="pipeline">
        ${[
          {ic:'📁',n:'Upload',d:'Arquivo enviado',done:true},
          {ic:'🔍',n:'Revisão',d:'Análise técnica',done:true},
          {ic:'📝',n:'Metadados',d:'ISRC, ISWC, tags',done:true},
          {ic:'✅',n:'Aprovação',d:'Aprovação interna',active:true},
          {ic:'📡',n:'Entrega',d:'Envio às plats'},
          {ic:'🌐',n:'Live',d:'Disponível ao público'},
        ].map((s,i)=>`
          <div class="pipe-step">
            ${i>0?`<div class="pipe-arrow">→</div>`:''}
            <div class="pipe-box ${s.done?'done':s.active?'active':''}">
              <span class="pipe-icon">${s.ic}</span>
              <div class="pipe-name">${s.n}</div>
              <div class="pipe-sub">${s.d}</div>
            </div>
          </div>`).join('')}
      </div>
    </div>
    <div class="card">
      <div class="card-head"><div class="card-title"><span class="ic">📡</span> Status por Plataforma</div></div>
      <div class="tbl-wrap"><table class="tbl"><thead><tr><th>Faixa</th><th>Artista</th><th>Spotify</th><th>Apple Music</th><th>YouTube</th><th>Amazon</th><th>Deezer</th><th>Tidal</th><th>Ações</th></tr></thead>
      <tbody>${DB.getTracks().filter(t=>t.status==='distributed').slice(0,5).map(t=>`
        <tr>
          <td class="t-name">${t.title}</td>
          <td style="color:var(--muted)">${t.artist}</td>
          ${['Spotify','Apple Music','YouTube Music','Amazon','Deezer','Tidal'].map(p=>`
            <td><span class="badge ${t.platforms.includes(p)?'bg':'br'}">${t.platforms.includes(p)?'✓':'✗'}</span></td>`).join('')}
          <td><button class="btn btn-outline btn-xs" onclick="openModal('distDetail')">Detalhes</button></td>
        </tr>`).join('')}
      </tbody></table></div>
    </div>
  `:''}
  ${S.distTab===1?`
    <div class="card">
      <div class="card-head"><div class="card-title"><span class="ic">⏳</span> Aguardando Distribuição (${pending.length})</div></div>
      ${pending.length?`<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Faixa</th><th>Artista</th><th>ISRC</th><th>Status</th><th>Plataformas</th><th>Ações</th></tr></thead>
      <tbody>${pending.map(t=>`
        <tr>
          <td class="t-name">${t.title}</td>
          <td style="color:var(--muted)">${t.artist}</td>
          <td><span class="mono">${t.isrc||'Pendente'}</span></td>
          <td><span class="badge bgo">${t.status==='pending'?'Pendente':'Em Revisão'}</span></td>
          <td>
            <div style="display:flex;gap:5px;flex-wrap:wrap">
              ${['Spotify','Apple Music','YouTube','Amazon','Deezer'].map(p=>`
                <label style="font-size:10px;display:flex;align-items:center;gap:3px;cursor:pointer"><input type="checkbox" checked> ${p}</label>`).join('')}
            </div>
          </td>
          <td style="display:flex;gap:5px">
            <button class="btn btn-gold btn-sm" onclick="distributeTrack('${t.id}')">🚀 Distribuir</button>
            <button class="btn btn-outline btn-xs" onclick="approveTrack('${t.id}')">Aprovar</button>
          </td>
        </tr>`).join('')}
      </tbody></table></div>`:`<div class="empty"><div class="empty-icon">✅</div><p>Nenhuma faixa pendente.</p></div>`}
    </div>
  `:''}
  ${S.distTab===2?`
    <div class="card">
      <div class="card-title" style="margin-bottom:16px"><span class="ic">📋</span> Histórico de Distribuições</div>
      <div class="tbl-wrap"><table class="tbl"><thead><tr><th>Faixa</th><th>Artista</th><th>Data</th><th>Plataformas</th><th>Status</th></tr></thead>
      <tbody>
        ${DB.getTracks().filter(t=>t.status==='distributed').map(t=>`
          <tr>
            <td class="t-name">${t.title}</td>
            <td style="color:var(--muted)">${t.artist}</td>
            <td style="color:var(--muted)">${t.released}</td>
            <td>${t.platforms.length} plataformas</td>
            <td><span class="badge bg">Live</span></td>
          </tr>`).join('')}
      </tbody></table></div>
    </div>
  `:''}
  ${S.distTab===3?`
    <div class="card">
      <div class="card-title" style="margin-bottom:16px"><span class="ic">⚙</span> Configurações de Distribuição</div>
      <div class="fg">
        <div class="fld"><label>Distribuidora Principal</label><select><option>DistroKid</option><option>TuneCore</option><option>CD Baby</option><option>Stem</option><option>AWAL</option></select></div>
        <div class="fld"><label>Formato Padrão</label><select><option>WAV 44.1kHz 24-bit</option><option>WAV 48kHz 24-bit</option><option>FLAC</option><option>MP3 320kbps</option></select></div>
        <div class="fld"><label>Territórios Padrão</label><select><option>Worldwide</option><option>Excluir Brasil</option><option>Apenas Brasil</option></select></div>
        <div class="fld"><label>Prazo de Entrega</label><select><option>7 dias antes do lançamento</option><option>14 dias antes</option><option>30 dias antes</option></select></div>
      </div>
      <button class="btn btn-primary btn-sm" onclick="set({success:'Configurações salvas!'});setTimeout(()=>set({success:''}),2000)">Salvar Configurações</button>
    </div>
  `:''}`;
}

function distributeTrack(id){
  const tracks = DB.getTracks();
  const t = tracks.find(x=>x.id===id);
  if(t){ t.status='distributed'; t.platforms=['Spotify','Apple Music','YouTube Music','Amazon','Deezer']; t.released=today(); DB.saveTracks(tracks); }
  set({success:`"${t?t.title:'Faixa'}" distribuída com sucesso!`});
  setTimeout(()=>set({success:''}),3000);
}

// ── PLATFORMS ────────────────────────────────────────
function pagePlatforms(){
  const platforms = [
    {ic:'🎵',n:'Spotify',t:'9.8M tracks',status:true,type:'Streaming'},
    {ic:'🍎',n:'Apple Music',t:'4.2M tracks',status:true,type:'Streaming'},
    {ic:'▶️',n:'YouTube Music',t:'6.1M tracks',status:true,type:'Video/Stream'},
    {ic:'📦',n:'Amazon Music',t:'2.3M tracks',status:true,type:'Streaming'},
    {ic:'🎧',n:'Deezer',t:'1.1M tracks',status:true,type:'Streaming'},
    {ic:'🌊',n:'Tidal',t:'890k tracks',status:true,type:'HiFi Stream'},
    {ic:'☁️',n:'SoundCloud',t:'420k tracks',status:true,type:'Upload'},
    {ic:'🔊',n:'Beatport',t:'38k tracks',status:false,type:'DJ / Electronic'},
    {ic:'📻',n:'DMG Radio',t:'247 tracks',status:true,type:'Rádio Digital'},
    {ic:'🎸',n:'Bandcamp',t:'180k tracks',status:false,type:'Indie'},
    {ic:'🎼',n:'ECAD',t:'Registro PRO',status:true,type:'Direitos'},
    {ic:'📡',n:'Boomplay',t:'56k tracks',status:false,type:'África'},
  ];
  return `
  <div class="ph"><div class="ph-left"><h1>Plataformas</h1><p>Parceiros de distribuição e streaming</p></div>
    <div class="ph-actions"><button class="btn btn-gold btn-sm" onclick="openModal('addPlatform')">+ Adicionar Plataforma</button></div>
  </div>
  <div class="stats-grid">
    ${[['Plataformas Ativas','9','De 12 parceiros'],['Países Cobertos','180+','Alcance global'],['Faixas Live','247','Catálogo distribuído'],['Streams Totais','1.2M','Este mês']].map(([l,v,s])=>`
      <div class="stat-card"><div class="stat-label">${l}</div><div class="stat-value">${v}</div><div class="stat-sub">${s}</div></div>`).join('')}
    <div class="stat-card"><div class="stat-label">Royalties Est.</div><div class="stat-value">$27K</div><div class="stat-up">↑ Este trimestre</div></div>
  </div>
  <div class="platform-grid">
    ${platforms.map(p=>`
      <div class="platform-card ${p.status?'active':''}">
        <span class="platform-icon">${p.ic}</span>
        <div class="platform-name">${p.n}</div>
        <div class="platform-tracks">${p.t}</div>
        <div style="margin-top:8px"><span class="badge ${p.status?'bg':'br'}" style="font-size:9px">${p.status?'Conectada':'Desconectada'}</span></div>
        <button class="btn btn-outline btn-xs btn-full" style="margin-top:8px" onclick="alert('${p.n} ${p.status?'— Configurações':'— Clique para conectar'}')">${p.status?'Gerenciar':'Conectar'}</button>
      </div>`).join('')}
  </div>`;
}

// ── RELEASES ─────────────────────────────────────────
function pageReleases(){
  return `
  <div class="ph"><div class="ph-left"><h1>Lançamentos</h1><p>Planejar e gerenciar novos releases</p></div>
    <div class="ph-actions"><button class="btn btn-gold btn-sm" onclick="openModal('newRelease')">+ Planejar Lançamento</button></div>
  </div>
  <div style="display:grid;grid-template-columns:2fr 1fr;gap:18px">
    <div class="card">
      <div class="card-head"><div class="card-title"><span class="ic">🗓</span> Calendário de Lançamentos 2025</div></div>
      <div class="tbl-wrap"><table class="tbl"><thead><tr><th>Data</th><th>Título</th><th>Artista</th><th>Tipo</th><th>Plataformas</th><th>Status</th></tr></thead>
      <tbody>
        ${[
          ['Jan 10, 2025','Blue Horizon','Luna Verona','Single','5 plataformas','live'],
          ['Jan 25, 2025','Miami Nights','Ayla Santos','Álbum','5 plataformas','live'],
          ['Feb 1, 2025','Porto do Sol','Marco Esteves','Single','3 plataformas','live'],
          ['Mar 1, 2025','Corazón Libre','Isabela Cruz','Single','5 plataformas','live'],
          ['Abr 15, 2025','Raiz do Norte','Diego Ferreira','Single','—','pending'],
          ['Mai 1, 2025','Novo Álbum','Marco Esteves','Álbum','—','planning'],
          ['Jun 1, 2025','EP de Verão','Luna Verona','EP','—','planning'],
        ].map(([dt,t,a,tp,pl,st])=>`
          <tr>
            <td style="font-weight:600;color:${st==='live'?'var(--green)':st==='pending'?'var(--gold)':'var(--muted)'}">${dt}</td>
            <td class="t-name">${t}</td>
            <td style="color:var(--muted)">${a}</td>
            <td><span class="badge bb">${tp}</span></td>
            <td style="color:var(--muted)">${pl}</td>
            <td><span class="badge ${st==='live'?'bg':st==='pending'?'bgo':'bb'}">${st==='live'?'Live':st==='pending'?'Pendente':'Planejando'}</span></td>
          </tr>`).join('')}
      </tbody></table></div>
    </div>
    <div class="card">
      <div class="card-title" style="margin-bottom:14px"><span class="ic">📋</span> Checklist de Lançamento</div>
      ${[
        ['Upload do áudio (WAV 24-bit)',true],['Arte da capa (3000x3000px)',true],['Metadados completos',true],
        ['ISRC registrado',true],['ISWC registrado',false],['Split sheet assinado',true],
        ['Distribuição agendada',false],['Press release pronto',false],['Pitching editorial',false],
      ].map(([t,done])=>`
        <div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid var(--border)">
          <div style="width:18px;height:18px;border-radius:4px;background:${done?'var(--green)':'var(--surface3)'};display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:11px;color:white">${done?'✓':''}</div>
          <span style="font-size:12px;color:${done?'var(--muted)':'var(--text)'};text-decoration:${done?'line-through':'none'}">${t}</span>
        </div>`).join('')}
    </div>
  </div>`;
}

// ── ROYALTIES ────────────────────────────────────────
function pageRoyalties(){
  const artists = DB.getArtists();
  return `
  <div class="ph"><div class="ph-left"><h1>Royalties</h1><p>Gestão completa de receitas e distribuição</p></div>
    <div class="ph-actions">
      <select style="padding:8px 12px;background:white;border:1px solid var(--border2);border-radius:7px;font-size:12px;outline:none"><option>Q1 2025</option><option>Q4 2024</option><option>Q3 2024</option></select>
      <button class="btn btn-outline btn-sm" onclick="dlTxt('Relatório Royalties Q1 2025\nTotal: \$27,180','royalties_Q1_2025.txt')">⬇ Relatório</button>
      <button class="btn btn-gold btn-sm" onclick="openModal('processRoyalties')">💰 Processar Pagamentos</button>
    </div>
  </div>

  <div class="stats-grid">
    ${[['Receita Total Q1','$27,180','↑ +22% vs Q4'],['A Pagar Artistas','$18,420','Próximo ciclo'],['Retido (Label)','$8,760','30% médio'],['Pendente','$3,240','Em processamento'],['Pago YTD','$23,940','2025']].map(([l,v,t])=>`
      <div class="stat-card"><div class="stat-label">${l}</div><div class="stat-value">${v}</div><div class="stat-up">${t}</div></div>`).join('')}
  </div>

  <div style="display:grid;grid-template-columns:3fr 2fr;gap:18px">
    <div class="card">
      <div class="card-head"><div class="card-title"><span class="ic">💰</span> Por Artista</div></div>
      <div class="tbl-wrap"><table class="tbl"><thead><tr><th>Artista</th><th>Gênero</th><th>Split</th><th>Bruto</th><th>Valor Artista</th><th>Valor Label</th><th>Status</th><th>Ações</th></tr></thead>
      <tbody>${artists.map((a,i)=>{
        const splits=[70,60,80,75,85,50,70,85];
        const gross=[3420,2180,5640,340,9200,1050,4820,820];
        const g=gross[i];const s=splits[i];
        const art=fmtR(g*s/100);const lab=fmtR(g*(100-s)/100);
        return `<tr>
          <td class="t-name">${a.name}</td>
          <td style="color:var(--muted)">${a.genre}</td>
          <td style="font-family:monospace">${s}/${100-s}</td>
          <td style="font-weight:600">$${g.toLocaleString()}</td>
          <td style="color:var(--green);font-weight:600">${art}</td>
          <td style="color:var(--muted)">${lab}</td>
          <td><span class="badge ${i<5?'bg':'bgo'}">${i<5?'Pago':'Pendente'}</span></td>
          <td style="display:flex;gap:5px">
            <button class="btn btn-outline btn-xs" onclick="dlTxt('Extrato ${a.name}\nPeriodo: Q1 2025\nValor: ${art}','extrato_${a.id}.txt')">⬇</button>
          </td>
        </tr>`;
      }).join('')}
      </tbody></table></div>
    </div>
    <div>
      <div class="card" style="margin-bottom:16px">
        <div class="card-title" style="margin-bottom:14px"><span class="ic">📊</span> Por Fonte</div>
        ${[['Streaming Digital',72,'$19,570'],['Performance / Rádio',14,'$3,805'],['Sync / Licença',8,'$2,175'],['Mecânico',4,'$1,087'],['Outros',2,'$543']].map(([l,p,v])=>`
          <div class="bar-row"><div class="bar-lbl">${l}</div><div class="bar-track"><div class="bar-fill" style="width:${p}%"></div></div><div class="bar-val">${v}</div></div>`).join('')}
      </div>
      <div class="card">
        <div class="card-title" style="margin-bottom:14px"><span class="ic">🌍</span> Por Território</div>
        ${[['🇺🇸 USA','$11,420','42%'],['🇧🇷 Brasil','$6,540','24%'],['🇬🇧 UK','$4,080','15%'],['🇩🇪 Alemanha','$2,445','9%'],['🌐 Outros','$2,695','10%']].map(([c,v,p])=>`
          <div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:1px solid var(--border);font-size:12px"><span>${c}</span><div style="text-align:right"><div style="font-weight:600">${v}</div><div style="font-size:10px;color:var(--muted)">${p}</div></div></div>`).join('')}
      </div>
    </div>
  </div>`;
}

function fmtR(n){ return '$'+Math.round(n).toLocaleString(); }

// ── PAYMENTS ─────────────────────────────────────────
function pagePayments(){
  return `
  <div class="ph"><div class="ph-left"><h1>Pagamentos</h1><p>Histórico e gestão de pagamentos a artistas</p></div>
    <div class="ph-actions"><button class="btn btn-gold btn-sm" onclick="openModal('newPayment')">+ Registrar Pagamento</button></div>
  </div>
  <div class="card">
    <div class="tbl-wrap"><table class="tbl"><thead><tr><th>ID</th><th>Artista</th><th>Período</th><th>Método</th><th>Valor</th><th>Data</th><th>Status</th><th>Comprovante</th></tr></thead>
    <tbody>
      ${[
        ['PAY001','Luna Verona','Q4 2024','PIX','$2,394','Mar 15, 2025','paid'],
        ['PAY002','Ayla Santos','Q4 2024','Wire Transfer','$6,440','Mar 15, 2025','paid'],
        ['PAY003','Sofia Andrade','Q4 2024','PIX','$3,948','Mar 15, 2025','paid'],
        ['PAY004','Marco Esteves','Q4 2024','PIX','$1,526','Mar 15, 2025','paid'],
        ['PAY005','Isabela Cruz','Q4 2024','PIX','$3,374','Mar 15, 2025','paid'],
        ['PAY006','Lucas Moraes','Q1 2025','PIX','$697','—','pending'],
        ['PAY007','Diego Ferreira','Q1 2025','PIX','$289','—','pending'],
        ['PAY008','Rafael Lima','Q1 2025','PIX','$735','—','pending'],
      ].map(([id,a,p,m,v,d,s])=>`
        <tr>
          <td><span class="mono">${id}</span></td>
          <td class="t-name">${a}</td>
          <td style="color:var(--muted)">${p}</td>
          <td><span class="badge bb">${m}</span></td>
          <td style="font-weight:600;color:var(--green)">${v}</td>
          <td style="color:var(--muted)">${d}</td>
          <td><span class="badge ${s==='paid'?'bg':'bgo'}">${s==='paid'?'Pago':'Pendente'}</span></td>
          <td>${s==='paid'?`<button class="btn btn-outline btn-xs" onclick="dlTxt('Comprovante ${id}\nArtista: ${a}\nValor: ${v}\nData: ${d}','${id}.txt')">⬇ Comprovante</button>`:`<button class="btn btn-gold btn-xs">Pagar</button>`}</td>
        </tr>`).join('')}
    </tbody></table></div>
  </div>`;
}

// ── INVOICES ─────────────────────────────────────────
function pageInvoices(){
  return `
  <div class="ph"><div class="ph-left"><h1>Notas Fiscais & Recibos</h1><p>Documentos fiscais da gravadora</p></div>
    <div class="ph-actions"><button class="btn btn-gold btn-sm" onclick="openModal('newInvoice')">+ Gerar NF</button></div>
  </div>
  <div class="card">
    <div class="tbl-wrap"><table class="tbl"><thead><tr><th>NF Nº</th><th>Destinatário</th><th>Descrição</th><th>Valor</th><th>Data</th><th>Status</th><th>Ações</th></tr></thead>
    <tbody>
      ${[
        ['NF-2025-001','FilmCo Productions','Licença Sync — Blue Horizon','$2,500','Jan 15, 2025','emitida'],
        ['NF-2025-002','StreamMax Corp','Licença Mecânica — Golden Hour','$800','Mar 5, 2025','emitida'],
        ['NF-2025-003','Luna Verona','Adiantamento Royalties Q1','$3,420','Mar 10, 2025','emitida'],
        ['NF-2025-004','Ayla Santos','Adiantamento Royalties Q1','$9,200','Mar 10, 2025','pendente'],
      ].map(([n,d,desc,v,dt,s])=>`
        <tr>
          <td><span class="mono">${n}</span></td>
          <td class="t-name">${d}</td>
          <td style="color:var(--muted)">${desc}</td>
          <td style="font-weight:600;color:var(--green)">${v}</td>
          <td style="color:var(--muted)">${dt}</td>
          <td><span class="badge ${s==='emitida'?'bg':'bgo'}">${s}</span></td>
          <td style="display:flex;gap:5px"><button class="btn btn-outline btn-xs" onclick="dlTxt('${n}\n${d}\n${v}','${n}.txt')">⬇ PDF</button></td>
        </tr>`).join('')}
    </tbody></table></div>
  </div>`;
}

// ── ANALYTICS ────────────────────────────────────────
function pageAnalytics(){
  return `
  <div class="ph"><div class="ph-left"><h1>Analytics</h1><p>Dados de performance do catálogo</p></div>
    <div class="ph-actions">
      <select style="padding:8px 12px;background:white;border:1px solid var(--border2);border-radius:7px;font-size:12px;outline:none"><option>Últimos 30 dias</option><option>Últimos 90 dias</option><option>Últimos 12 meses</option></select>
      <button class="btn btn-outline btn-sm" onclick="dlTxt('Analytics Report\n1,200,000 streams','analytics_report.txt')">⬇ Exportar</button>
    </div>
  </div>
  <div class="stats-grid">
    ${[['Streams Totais','1.2M','Todas plataformas'],['Ouvintes Únicos','284K','Estimado'],['Países','28','Com streams'],['Saves / Likes','48,200','Total'],['Playlists','186','Adicionado em']].map(([l,v,s])=>`
      <div class="stat-card"><div class="stat-label">${l}</div><div class="stat-value">${v}</div><div class="stat-sub">${s}</div></div>`).join('')}
  </div>
  <div style="display:grid;grid-template-columns:2fr 1fr;gap:18px">
    <div>
      <div class="card">
        <div class="card-title" style="margin-bottom:16px"><span class="ic">📈</span> Top Faixas — Streams (Q1 2025)</div>
        ${DB.getTracks().filter(t=>parseInt(t.streams.replace(/,/g,''))>0).sort((a,b)=>parseInt(b.streams.replace(/,/g,''))-parseInt(a.streams.replace(/,/g,''))).map(t=>{
          const max=220400;const val=parseInt(t.streams.replace(/,/g,''));const pct=Math.round(val/max*100);
          return `<div class="bar-row"><div class="bar-lbl" style="text-align:left;width:130px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${t.title}</div><div class="bar-track"><div class="bar-fill" style="width:${pct}%"></div></div><div class="bar-val">${t.streams}</div></div>`;
        }).join('')}
      </div>
      <div class="card">
        <div class="card-title" style="margin-bottom:14px"><span class="ic">🌍</span> Top Países</div>
        <div class="tbl-wrap"><table class="tbl"><thead><tr><th>País</th><th>Streams</th><th>% Total</th><th>Crescimento</th></tr></thead><tbody>
          ${[['🇺🇸 EUA','504,000','42%','↑ +18%'],['🇧🇷 Brasil','288,000','24%','↑ +32%'],['🇬🇧 Reino Unido','168,000','14%','↑ +10%'],['🇩🇪 Alemanha','108,000','9%','↑ +8%'],['🇯🇵 Japão','60,000','5%','↑ +22%'],['🌐 Outros','72,000','6%','—']].map(([c,s,p,g])=>`
            <tr><td>${c}</td><td style="font-weight:600">${s}</td><td style="color:var(--muted)">${p}</td><td style="color:var(--green);font-weight:600">${g}</td></tr>`).join('')}
        </tbody></table></div>
      </div>
    </div>
    <div>
      <div class="card" style="margin-bottom:16px">
        <div class="card-title" style="margin-bottom:14px"><span class="ic">📡</span> Por Plataforma</div>
        ${[['Spotify','58%','696K'],['Apple Music','22%','264K'],['YouTube','12%','144K'],['Amazon','5%','60K'],['Deezer','3%','36K']].map(([p,pct,v])=>`
          <div class="bar-row" style="margin-bottom:7px"><div class="bar-lbl" style="text-align:left;width:80px">${p}</div><div class="bar-track"><div class="bar-fill" style="width:${parseInt(pct)}%"></div></div><div class="bar-val">${v}</div></div>`).join('')}
      </div>
      <div class="card">
        <div class="card-title" style="margin-bottom:14px"><span class="ic">🎤</span> Por Artista</div>
        ${DB.getArtists().filter(a=>a.streams!=='0').map(a=>`
          <div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:1px solid var(--border);font-size:12px"><span style="font-weight:600">${a.name}</span><span style="color:var(--muted)">${a.streams}</span></div>`).join('')}
      </div>
    </div>
  </div>`;
}

// ── MARKETING ────────────────────────────────────────
function pageMarketing(){
  return `
  <div class="ph"><div class="ph-left"><h1>Marketing</h1><p>Ferramentas de promoção e divulgação</p></div>
    <div class="ph-actions"><button class="btn btn-gold btn-sm" onclick="openModal('newCampaign')">+ Nova Campanha</button></div>
  </div>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:20px">
    ${[
      ['📣','Press Releases','Criar e gerenciar press releases para lançamentos','newPressRelease'],
      ['📧','Email Marketing','Enviar newsletters para fãs e parceiros','newEmail'],
      ['📱','Social Media','Gerenciar posts e campanhas nas redes sociais','newSocial'],
      ['🎯','Pitching Editorial','Submeter músicas para playlists editoriais','newPitch'],
      ['📊','Campanhas Pagas','Google Ads, Meta Ads, Spotify Ads','newAd'],
      ['🔗','Smart Links','Criar links inteligentes para lançamentos','newLink'],
    ].map(([ic,t,d,m])=>`
      <div class="card" style="margin-bottom:0;cursor:pointer;text-align:center" onclick="openModal('${m}')">
        <div style="font-size:28px;margin-bottom:8px">${ic}</div>
        <div style="font-weight:700;margin-bottom:4px">${t}</div>
        <div style="font-size:11px;color:var(--muted)">${d}</div>
      </div>`).join('')}
  </div>
  <div class="card">
    <div class="card-head"><div class="card-title"><span class="ic">📊</span> Campanhas Ativas</div></div>
    <div class="tbl-wrap"><table class="tbl"><thead><tr><th>Campanha</th><th>Tipo</th><th>Artista</th><th>Alcance</th><th>Cliques</th><th>Budget</th><th>Status</th></tr></thead>
    <tbody>
      ${[
        ['Blue Horizon Launch','Press Release','Luna Verona','8,400','1,240','—','active'],
        ['Neon Galaxy Spotify Push','Pitching','Sofia Andrade','—','—','—','active'],
        ['Miami Nights Ads','Social Media Ads','Ayla Santos','124,000','3,820','$500','active'],
        ['Corazón Libre Email','Email Campaign','Isabela Cruz','12,400','1,640','—','completed'],
      ].map(([n,t,a,al,cl,b,s])=>`
        <tr>
          <td class="t-name">${n}</td>
          <td><span class="badge bb">${t}</span></td>
          <td style="color:var(--muted)">${a}</td>
          <td>${al}</td><td>${cl}</td>
          <td>${b}</td>
          <td><span class="badge ${s==='active'?'bg':'bgo'}">${s==='active'?'Ativa':'Concluída'}</span></td>
        </tr>`).join('')}
    </tbody></table></div>
  </div>`;
}

// ── LICENSES ─────────────────────────────────────────
function pageLicenses(){
  return `
  <div class="ph"><div class="ph-left"><h1>Licenciamento</h1><p>Gerenciar todas as licenças de uso</p></div>
    <div class="ph-actions"><button class="btn btn-gold btn-sm" onclick="openModal('newLicense')">+ Nova Licença</button></div>
  </div>
  <div class="tabs">
    ${['Sync','Mecânica','Performance','DMG Voluntário','Todas'].map((t,i)=>`<div class="tab ${S.tab===i?'on':''}" onclick="set({tab:${i}})">${t}</div>`).join('')}
  </div>
  <div class="card">
    <div class="tbl-wrap"><table class="tbl"><thead><tr><th>ID</th><th>Obra</th><th>Artista</th><th>Tipo</th><th>Licenciado Para</th><th>Território</th><th>Valor</th><th>Vigência</th><th>Status</th><th>Ações</th></tr></thead>
    <tbody>
      ${[
        ['LIC-001','Blue Horizon','Luna Verona','Sync','FilmCo Productions','Worldwide','$2,500','Jan 2025 – Jan 2026','active'],
        ['LIC-002','Miami Nights','Ayla Santos','Mecânica','StreamMax Corp','N. America','$800','Mar 2025 – Mar 2026','active'],
        ['LIC-003','Midnight Rain','Luna Verona','DMG Vol.','DMG Radio','Global','$0','Voluntário','active'],
        ['LIC-004','Neon Galaxy','Sofia Andrade','Performance','Rádio Nacional','Brasil','$450','Anual','active'],
        ['LIC-005','Porto do Sol','Marco Esteves','Sync','TVC Brazil','Brasil','$1,200','Ago 2024 – Ago 2025','pending'],
      ].map(([id,o,a,t,l,ter,v,vi,s])=>`
        <tr>
          <td><span class="mono">${id}</span></td>
          <td class="t-name">${o}</td>
          <td style="color:var(--muted)">${a}</td>
          <td><span class="badge bb">${t}</span></td>
          <td>${l}</td>
          <td style="color:var(--muted)">${ter}</td>
          <td style="font-weight:600;color:${v==='$0'?'var(--muted)':'var(--green)'}">${v}</td>
          <td style="color:var(--muted);font-size:11px">${vi}</td>
          <td><span class="badge ${s==='active'?'bg':'bgo'}">${s==='active'?'Ativo':'Pendente'}</span></td>
          <td style="display:flex;gap:5px"><button class="btn btn-outline btn-xs" onclick="dlTxt('Licença ${id}\n${o}\n${v}','${id}.txt')">⬇</button></td>
        </tr>`).join('')}
    </tbody></table></div>
  </div>`;
}

// ── SITE MANAGEMENT ──────────────────────────────────
function pageSite(){
  return `
  <div class="ph"><div class="ph-left"><h1>Gerenciar Site</h1><p>Administrar o site público da Dresbach Records</p></div>
    <div class="ph-actions"><button class="btn btn-gold btn-sm" onclick="alert('Abrindo editor de site…')">🌍 Ver Site Público</button></div>
  </div>
  <div class="tabs">
    ${['Conteúdo','Artistas Exibidos','Blog / News','SEO','Configurações'].map((t,i)=>`<div class="tab ${S.siteTab===i?'on':''}" onclick="set({siteTab:${i}})">${t}</div>`).join('')}
  </div>

  ${S.siteTab===0?`
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:18px">
      ${[
        ['🏠','Página Inicial','Hero, textos, banner principal'],
        ['🎤','Página Artistas','Grade de artistas e perfis'],
        ['💿','Página Catálogo','Músicas em destaque'],
        ['📰','Blog / Notícias','Artigos e releases de imprensa'],
        ['📬','Contato','Formulário e informações'],
        ['ℹ️','Sobre Nós','História e equipe'],
      ].map(([ic,t,d])=>`
        <div class="card" style="margin-bottom:0;cursor:pointer" onclick="alert('Editor de ${t} em breve!')">
          <div style="font-size:24px;margin-bottom:8px">${ic}</div>
          <div style="font-weight:700;margin-bottom:4px">${t}</div>
          <div style="font-size:11px;color:var(--muted)">${d}</div>
          <button class="btn btn-outline btn-xs" style="margin-top:10px" onclick="alert('Editando ${t}…')">✎ Editar</button>
        </div>`).join('')}
    </div>
  `:''}
  ${S.siteTab===1?`
    <div class="card">
      <div class="card-head"><div class="card-title"><span class="ic">🎤</span> Artistas no Site Público</div>
        <button class="btn btn-gold btn-sm" onclick="alert('Ordem salva!')">Salvar Ordem</button>
      </div>
      <div class="tbl-wrap"><table class="tbl"><thead><tr><th>Artista</th><th>Gênero</th><th>Destaque</th><th>Perfil Público</th><th>Ordem</th><th>Ações</th></tr></thead>
      <tbody>${DB.getArtists().map((a,i)=>`
        <tr>
          <td class="t-name">${a.name}</td>
          <td style="color:var(--muted)">${a.genre}</td>
          <td><input type="checkbox" ${a.status==='active'?'checked':''}></td>
          <td><input type="checkbox" checked></td>
          <td><input type="number" value="${i+1}" style="width:50px;padding:4px 8px;border:1px solid var(--border2);border-radius:5px;font-size:12px;text-align:center;background:white"></td>
          <td><button class="btn btn-outline btn-xs">Editar Perfil</button></td>
        </tr>`).join('')}
      </tbody></table></div>
    </div>
  `:''}
  ${S.siteTab===2?`
    <div class="card">
      <div class="card-head"><div class="card-title"><span class="ic">📰</span> Blog & Notícias</div>
        <button class="btn btn-gold btn-sm" onclick="openModal('newPost')">+ Novo Post</button>
      </div>
      <div class="tbl-wrap"><table class="tbl"><thead><tr><th>Título</th><th>Categoria</th><th>Autor</th><th>Data</th><th>Status</th><th>Ações</th></tr></thead>
      <tbody>
        ${[
          ['Luna Verona lança "Blue Horizon"','Lançamento','Admin','Jan 10, 2025','published'],
          ['Dresbach Records fecha parceria com FilmCo','Notícias','Admin','Dez 20, 2024','published'],
          ['Sofia Andrade atinge 200K streams','Conquistas','Admin','Mar 5, 2025','published'],
          ['Novo single de Ayla Santos disponível','Lançamento','Admin','Jan 25, 2025','published'],
          ['Artigo: Como funciona o royalties streaming','Blog','Admin','—','draft'],
        ].map(([t,c,a,d,s])=>`
          <tr>
            <td class="t-name">${t}</td>
            <td><span class="badge bb">${c}</span></td>
            <td style="color:var(--muted)">${a}</td>
            <td style="color:var(--muted)">${d}</td>
            <td><span class="badge ${s==='published'?'bg':'bgo'}">${s==='published'?'Publicado':'Rascunho'}</span></td>
            <td style="display:flex;gap:5px"><button class="btn btn-outline btn-xs">✎ Editar</button><button class="btn btn-danger btn-xs">🗑</button></td>
          </tr>`).join('')}
      </tbody></table></div>
    </div>
  `:''}
  ${S.siteTab===3?`
    <div class="card">
      <div class="card-title" style="margin-bottom:16px"><span class="ic">🔍</span> SEO & Visibilidade</div>
      <div class="fg">
        <div class="fld full"><label>Título do Site</label><div class="iw"><input value="Dresbach Records — Gravadora Independente Brasileira"></div></div>
        <div class="fld full"><label>Meta Descrição</label><div class="iw"><textarea rows="3">Dresbach Records LTDA — Gravadora independente sediada em São Paulo, Brasil. Artistas, músicas e distribuição digital.</textarea></div></div>
        <div class="fld full"><label>Palavras-chave</label><div class="iw"><input value="gravadora independente, música brasileira, Dresbach Records, artistas musicais"></div></div>
        <div class="fld"><label>Google Analytics ID</label><div class="iw"><input placeholder="G-XXXXXXXXXX"></div></div>
        <div class="fld"><label>Facebook Pixel</label><div class="iw"><input placeholder="000000000000000"></div></div>
      </div>
      <button class="btn btn-primary btn-sm" onclick="set({success:'SEO salvo!'});setTimeout(()=>set({success:''}),2000)">Salvar SEO</button>
    </div>
  `:''}
  ${S.siteTab===4?`
    <div class="card">
      <div class="card-title" style="margin-bottom:16px"><span class="ic">⚙</span> Configurações do Site</div>
      <div class="fg">
        <div class="fld"><label>Nome do Site</label><input value="Dresbach Records"></div>
        <div class="fld"><label>URL Principal</label><input value="https://dresbachrecords.com"></div>
        <div class="fld"><label>Email de Contato</label><input value="contato@dresbachrecords.com"></div>
        <div class="fld"><label>Telefone</label><input value="+55 11 3000-0000"></div>
        <div class="fld full"><label>Endereço</label><input value="São Paulo, SP, Brasil"></div>
        <div class="fld"><label>Idioma Padrão</label><select><option>Português (BR)</option><option>English</option><option>Español</option></select></div>
        <div class="fld"><label>Fuso Horário</label><select><option>America/Sao_Paulo (BRT)</option><option>America/New_York</option></select></div>
      </div>
      <button class="btn btn-primary btn-sm" onclick="set({success:'Configurações salvas!'});setTimeout(()=>set({success:''}),2000)">Salvar</button>
    </div>
  `:''}`;
}

// ── HUB MANAGEMENT ───────────────────────────────────
function pageHub(){
  const artists = DB.getArtists();
  return `
  <div class="ph"><div class="ph-left"><h1>Artist Hub</h1><p>Gerenciar acesso e dados da área do artista</p></div>
    <div class="ph-actions"><button class="btn btn-outline btn-sm" onclick="alert('Abrindo Artist Hub…')">🔗 Abrir Hub</button></div>
  </div>
  <div class="stats-grid">
    ${[['Artistas Cadastrados',artists.length,'No Hub'],['Membros Ativos',artists.filter(a=>a.status==='active').length,'Login recente'],['Obras Registradas','63','No catálogo do Hub'],['Pendentes',artists.filter(a=>a.status==='pending').length,'Aguardando aprovação']].map(([l,v,s])=>`
      <div class="stat-card"><div class="stat-label">${l}</div><div class="stat-value">${v}</div><div class="stat-sub">${s}</div></div>`).join('')}
    <div class="stat-card"><div class="stat-label">Documentos Assinados</div><div class="stat-value">18</div><div class="stat-sub">Termos e contratos</div></div>
  </div>
  <div class="card">
    <div class="card-head"><div class="card-title"><span class="ic">🎸</span> Artistas no Hub</div>
      <div style="display:flex;gap:7px">
        <button class="btn btn-outline btn-sm" onclick="openModal('sendHubEmail')">📧 Enviar Comunicado</button>
        <button class="btn btn-gold btn-sm" onclick="openModal('addHubArtist')">+ Convidar Artista</button>
      </div>
    </div>
    <div class="tbl-wrap"><table class="tbl"><thead><tr><th>Artista</th><th>Email</th><th>Papel</th><th>Obras</th><th>Último Acesso</th><th>Status Hub</th><th>Ações</th></tr></thead>
    <tbody>${artists.map((a,i)=>{
      const accesses=['há 2 horas','Ontem','3 dias atrás','1 semana atrás','há 30 min','há 5 dias','há 2 dias','Nunca'];
      return `<tr>
        <td class="t-name">${a.name}</td>
        <td style="color:var(--muted)">${a.email}</td>
        <td><span class="badge bb">${a.role}</span></td>
        <td style="font-weight:600">${a.tracks}</td>
        <td style="color:var(--muted);font-size:11px">${accesses[i]||'—'}</td>
        <td><span class="badge ${a.status==='active'?'bg':a.status==='pending'?'bgo':'br'}">${a.status==='active'?'Ativo':a.status==='pending'?'Pendente':'Inativo'}</span></td>
        <td style="display:flex;gap:5px">
          <button class="btn btn-outline btn-xs">Ver Perfil</button>
          ${a.status==='pending'?`<button class="btn btn-gold btn-xs" onclick="approveArtist('${a.id}')">Aprovar</button>`:''}
          <button class="btn btn-danger btn-xs" onclick="if(confirm('Suspender acesso?'))set({success:'Acesso suspenso!'})">Suspender</button>
        </td>
      </tr>`;
    }).join('')}
    </tbody></table></div>
  </div>`;
}

function approveArtist(id){
  const artists = DB.getArtists();
  const a = artists.find(x=>x.id===id);
  if(a){ a.status='active'; DB.saveArtists(artists); }
  set({success:`Artista aprovado com sucesso!`});
  setTimeout(()=>set({success:''}),3000);
}

// ── REPORTS ──────────────────────────────────────────
function pageReports(){
  return `
  <div class="ph"><div class="ph-left"><h1>Relatórios</h1><p>Exportar dados e gerar relatórios detalhados</p></div></div>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:20px">
    ${[
      ['📊','Relatório de Royalties','Receitas por artista, período e fonte','royaltiesReport'],
      ['🎵','Relatório de Catálogo','Todas as obras registradas e distribuídas','catalogReport'],
      ['📈','Relatório de Streams','Performance em todas as plataformas','streamsReport'],
      ['📋','Relatório de Contratos','Status de todos os contratos','contractsReport'],
      ['💳','Relatório Financeiro','Pagamentos, notas fiscais e balanço','financeReport'],
      ['🌍','Relatório de Distribuição','Presença por plataforma e território','distReport'],
    ].map(([ic,t,d,type])=>`
      <div class="card" style="margin-bottom:0;text-align:center">
        <div style="font-size:28px;margin-bottom:8px">${ic}</div>
        <div style="font-weight:700;margin-bottom:4px">${t}</div>
        <div style="font-size:11px;color:var(--muted);margin-bottom:14px">${d}</div>
        <div style="display:flex;gap:7px;justify-content:center">
          <button class="btn btn-outline btn-sm" onclick="dlTxt('${t}\nDresbach Records\n${today()}','${type}.txt')">⬇ CSV</button>
          <button class="btn btn-primary btn-sm" onclick="dlTxt('${t} — PDF\nDresbach Records\n${today()}','${type}.txt')">📄 PDF</button>
        </div>
      </div>`).join('')}
  </div>
  <div class="card">
    <div class="card-head"><div class="card-title"><span class="ic">📈</span> Sumário Anual 2025</div><button class="btn btn-gold btn-sm" onclick="dlTxt('Sumário Anual 2025\nDresbach Records\nTotal Streams: 1.2M\nTotal Royalties: \$27,180','annual_2025.txt')">⬇ Exportar Completo</button></div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:20px">
      ${[
        ['Artistas Ativos','6'],['Músicas Distribuídas','6'],['Total de Streams','1.2M'],
        ['Royalties Gerados','$27,180'],['Plataformas','18'],['Países Alcançados','28'],
        ['Contratos Ativos','7'],['Licenças Emitidas','5'],
      ].map(([l,v])=>`
        <div style="text-align:center;padding:16px;background:var(--surface2);border-radius:9px">
          <div style="font-family:'Bebas Neue',cursive;font-size:28px;color:var(--gold)">${v}</div>
          <div style="font-size:11px;color:var(--muted);margin-top:4px">${l}</div>
        </div>`).join('')}
    </div>
  </div>`;
}

// ── USERS ────────────────────────────────────────────
function pageUsers(){
  return `
  <div class="ph"><div class="ph-left"><h1>Usuários Admin</h1><p>Equipe com acesso ao painel</p></div>
    <div class="ph-actions"><button class="btn btn-gold btn-sm" onclick="openModal('addAdmin')">+ Adicionar Usuário</button></div>
  </div>
  <div class="card">
    <div class="tbl-wrap"><table class="tbl"><thead><tr><th>Nome</th><th>Email</th><th>Papel</th><th>Permissões</th><th>Último Acesso</th><th>Status</th><th>Ações</th></tr></thead>
    <tbody>
      ${[
        ['Administrador DR','admin@dresbachrecords.com','Super Admin','Tudo','Agora','active'],
        ['Carlos Dresbach','carlos@dresbachrecords.com','CEO / Fundador','Tudo','Ontem','active'],
        ['Ana Financeiro','ana@dresbachrecords.com','Financeiro','Royalties, Pagamentos','2 dias atrás','active'],
        ['Pedro A&R','pedro@dresbachrecords.com','A&R Manager','Artistas, Catálogo','1 semana atrás','active'],
        ['Lucia Marketing','lucia@dresbachrecords.com','Marketing','Marketing, Site','3 dias atrás','active'],
      ].map(([n,e,r,p,a,s])=>`
        <tr>
          <td class="t-name">${n}</td>
          <td style="color:var(--muted)">${e}</td>
          <td><span class="badge ${r==='Super Admin'?'bp':r.includes('CEO')?'bgo':'bb'}">${r}</span></td>
          <td style="font-size:11px;color:var(--muted)">${p}</td>
          <td style="color:var(--muted);font-size:11px">${a}</td>
          <td><span class="badge bg">${s==='active'?'Ativo':s}</span></td>
          <td style="display:flex;gap:5px"><button class="btn btn-outline btn-xs">Editar</button><button class="btn btn-danger btn-xs">Remover</button></td>
        </tr>`).join('')}
    </tbody></table></div>
  </div>`;
}

// ── SETTINGS ─────────────────────────────────────────
function pageSettings(){
  return `
  <div class="ph"><div class="ph-left"><h1>Configurações</h1><p>Configurações gerais da plataforma</p></div></div>
  <div class="tabs">
    ${['Empresa','Distribuição','Financeiro','Integrações','Segurança','Backup'].map((t,i)=>`<div class="tab ${S.settingsTab===i?'on':''}" onclick="set({settingsTab:${i}})">${t}</div>`).join('')}
  </div>
  ${S.settingsTab===0?`
    <div class="card">
      <div class="card-title" style="margin-bottom:18px"><span class="ic">🏢</span> Dados da Empresa</div>
      <div class="fg">
        <div class="fld"><label>Razão Social</label><input value="Dresbach Records LTDA"></div>
        <div class="fld"><label>CNPJ</label><input value="63.187.175/0001-70"></div>
        <div class="fld"><label>Nome Fantasia</label><input value="Dresbach Records"></div>
        <div class="fld"><label>Email Comercial</label><input value="contato@dresbachrecords.com"></div>
        <div class="fld"><label>Telefone</label><input value="+55 11 3000-0000"></div>
        <div class="fld"><label>Site</label><input value="https://dresbachrecords.com"></div>
        <div class="fld full"><label>Endereço Completo</label><input value="Rua das Artes, 123 — São Paulo, SP, CEP 01310-000"></div>
        <div class="fld"><label>Inscrição Estadual</label><input placeholder="IE"></div>
        <div class="fld"><label>Regime Tributário</label><select><option>Simples Nacional</option><option>Lucro Presumido</option><option>Lucro Real</option></select></div>
      </div>
      <button class="btn btn-primary btn-sm" onclick="set({success:'Dados salvos!'});setTimeout(()=>set({success:''}),2000)">Salvar Dados</button>
    </div>
  `:''}
  ${S.settingsTab===1?`
    <div class="card">
      <div class="card-title" style="margin-bottom:16px"><span class="ic">📡</span> Configurações de Distribuição</div>
      <div class="fg">
        <div class="fld"><label>Distribuidora Principal</label><select><option>DistroKid</option><option>TuneCore</option><option>CD Baby</option></select></div>
        <div class="fld"><label>Formato de Áudio</label><select><option>WAV 44.1kHz 24-bit</option><option>WAV 48kHz 24-bit</option><option>FLAC</option></select></div>
        <div class="fld"><label>Split Padrão (Artista/Label)</label><input value="70/30"></div>
        <div class="fld"><label>Prazo Padrão</label><select><option>14 dias antes</option><option>7 dias</option><option>30 dias</option></select></div>
        <div class="fld full"><label>ISRC Prefix</label><input value="BR-DRB" placeholder="Prefixo ISRC da gravadora"></div>
      </div>
      <button class="btn btn-primary btn-sm" onclick="set({success:'Configurações salvas!'});setTimeout(()=>set({success:''}),2000)">Salvar</button>
    </div>
  `:''}
  ${S.settingsTab===2?`
    <div class="card">
      <div class="card-title" style="margin-bottom:16px"><span class="ic">💰</span> Configurações Financeiras</div>
      <div class="fg">
        <div class="fld"><label>Ciclo de Royalties</label><select><option>Trimestral</option><option>Mensal</option><option>Semestral</option></select></div>
        <div class="fld"><label>Moeda Principal</label><select><option>BRL (R$)</option><option>USD ($)</option><option>EUR (€)</option></select></div>
        <div class="fld"><label>Método de Pagamento Padrão</label><select><option>PIX</option><option>TED/DOC</option><option>Wire Transfer</option><option>PayPal</option></select></div>
        <div class="fld"><label>Chave PIX Dresbach</label><input value="63.187.175/0001-70"></div>
        <div class="fld full"><label>Dados Bancários</label><input value="Banco do Brasil — Ag. 0001 — CC 00000-0"></div>
      </div>
      <button class="btn btn-primary btn-sm" onclick="set({success:'Salvo!'});setTimeout(()=>set({success:''}),2000)">Salvar</button>
    </div>
  `:''}
  ${S.settingsTab===3?`
    <div class="card">
      <div class="card-title" style="margin-bottom:16px"><span class="ic">🔗</span> Integrações</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
        ${[['DistroKid','API Key configurada','Conectado','bg'],['Spotify for Artists','OAuth conectado','Conectado','bg'],['Apple Music','Token válido','Conectado','bg'],['YouTube Content ID','Configurado','Conectado','bg'],['ECAD','Registro ativo','Conectado','bg'],['Google Analytics','G-XXXXXXXXXX','Desconectado','br'],['Mailchimp','API não configurada','Desconectado','br'],['Stripe','Pagamentos online','Desconectado','br']].map(([n,d,s,c])=>`
          <div style="padding:14px;background:var(--surface2);border-radius:9px;border:1px solid var(--border);display:flex;align-items:center;justify-content:space-between">
            <div><div style="font-weight:600;font-size:13px">${n}</div><div style="font-size:11px;color:var(--muted);margin-top:2px">${d}</div></div>
            <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px">
              <span class="badge ${c}">${s}</span>
              <button class="btn btn-outline btn-xs">${s==='Conectado'?'Configurar':'Conectar'}</button>
            </div>
          </div>`).join('')}
      </div>
    </div>
  `:''}
  ${S.settingsTab===4?`
    <div class="card">
      <div class="card-title" style="margin-bottom:16px"><span class="ic">🔐</span> Segurança</div>
      <div class="fg">
        <div class="fld"><label>Autenticação 2FA</label><select><option>Habilitada (Obrigatória)</option><option>Habilitada (Opcional)</option><option>Desabilitada</option></select></div>
        <div class="fld"><label>Tempo de Sessão</label><select><option>8 horas</option><option>24 horas</option><option>7 dias</option></select></div>
        <div class="fld full"><label>IPs Permitidos (Admin)</label><textarea rows="3" placeholder="Um IP por linha. Deixar vazio para liberar todos."></textarea></div>
      </div>
      <button class="btn btn-primary btn-sm" onclick="set({success:'Configurações de segurança salvas!'});setTimeout(()=>set({success:''}),2000)">Salvar</button>
      <div style="margin-top:20px;padding-top:16px;border-top:1px solid var(--border)">
        <div style="font-weight:700;margin-bottom:10px">Log de Acessos Recentes</div>
        ${['Admin — login — agora — 189.14.x.x','Carlos Dresbach — login — Ontem 09:12 — 177.52.x.x','Ana Financeiro — login — 2 dias atrás — 200.10.x.x'].map(l=>`
          <div style="font-size:11px;color:var(--muted);padding:5px 0;border-bottom:1px solid var(--border)">${l}</div>`).join('')}
      </div>
    </div>
  `:''}
  ${S.settingsTab===5?`
    <div class="card">
      <div class="card-title" style="margin-bottom:16px"><span class="ic">💾</span> Backup & Exportação</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
        ${[['📊','Exportar Catálogo Completo','CSV com todas as faixas'],['🎤','Exportar Dados de Artistas','CSV com todos os artistas'],['💰','Exportar Histórico Financeiro','Royalties e pagamentos'],['📋','Exportar Contratos','Sumário de contratos'],].map(([ic,t,d])=>`
          <div style="padding:16px;background:var(--surface2);border-radius:9px;border:1px solid var(--border)">
            <div style="font-size:20px;margin-bottom:6px">${ic}</div>
            <div style="font-weight:600;font-size:13px;margin-bottom:3px">${t}</div>
            <div style="font-size:11px;color:var(--muted);margin-bottom:10px">${d}</div>
            <button class="btn btn-outline btn-sm" onclick="dlTxt('${t}\nDresbach Records\n${today()}','backup.txt')">⬇ Exportar</button>
          </div>`).join('')}
      </div>
      <div style="margin-top:16px;padding:14px;background:var(--goldbg);border-radius:9px;border:1px solid var(--goldborder)">
        <div style="font-size:12px;font-weight:700;color:var(--gold);margin-bottom:4px">⚠ Backup Automático</div>
        <div style="font-size:11px;color:var(--muted)">Backups automáticos são realizados diariamente às 03:00 BRT. Último backup: ${today()}.</div>
      </div>
    </div>
  `:''}`;
}

// ── MODALS ────────────────────────────────────────────
function openModal(type){ set({modal:type}); }
function closeModal(){ set({modal:null}); }

function renderModal(){
  if(!S.modal) return '';
  const a = S.selectedArtist;
  const modals = {
    addArtist:`
      <div class="modal-head"><h2>Novo Artista</h2><button class="modal-close" onclick="closeModal()">×</button></div>
      <div class="modal-body">
        <div class="fg">
          <div class="fld"><label>Nome Completo *</label><input id="af_name" placeholder="Nome do artista"></div>
          <div class="fld"><label>Nome Artístico</label><input id="af_art" placeholder="Nome público"></div>
          <div class="fld"><label>Papel *</label><select id="af_role"><option>Musician</option><option>Composer</option></select></div>
          <div class="fld"><label>Gênero Principal</label><select id="af_genre"><option>Pop</option><option>Rock</option><option>Jazz</option><option>Electronic</option><option>R&B / Soul</option><option>Latin</option><option>Classical</option><option>Folk</option></select></div>
          <div class="fld"><label>Email *</label><input id="af_email" type="email" placeholder="email@artista.com"></div>
          <div class="fld"><label>Telefone</label><input id="af_phone" placeholder="+55 11 99999-0000"></div>
          <div class="fld"><label>País</label><select id="af_country"><option>Brazil</option><option>United States</option><option>United Kingdom</option><option>Mexico</option><option>Colombia</option><option>Portugal</option><option>Other</option></select></div>
          <div class="fld"><label>PRO</label><select id="af_pro"><option>ECAD</option><option>ASCAP</option><option>BMI</option><option>SESAC</option><option>None</option></select></div>
          <div class="fld"><label>IPI / CAE</label><input id="af_ipi" placeholder="IPI-00000"></div>
          <div class="fld"><label>Tipo de Contrato</label><select><option>Gravação Exclusiva</option><option>Distribuição</option><option>Co-publicação</option></select></div>
          <div class="fld full"><label>Bio</label><textarea id="af_bio" rows="3" placeholder="Breve biografia…"></textarea></div>
        </div>
      </div>
      <div class="modal-foot"><button class="btn btn-outline btn-sm" onclick="closeModal()">Cancelar</button><button class="btn btn-gold btn-sm" onclick="saveArtist()">Salvar Artista</button></div>`,

    addTrack:`
      <div class="modal-head"><h2>Adicionar Faixa</h2><button class="modal-close" onclick="closeModal()">×</button></div>
      <div class="modal-body">
        <div class="fg">
          <div class="fld full"><label>Título *</label><input id="tf_title" placeholder="Título da faixa"></div>
          <div class="fld"><label>Artista *</label><select id="tf_artist">${DB.getArtists().map(a=>`<option value="${a.id}">${a.name}</option>`).join('')}</select></div>
          <div class="fld"><label>Tipo</label><select id="tf_type"><option>Single</option><option>Álbum</option><option>EP</option></select></div>
          <div class="fld"><label>Gênero</label><select id="tf_genre"><option>Pop</option><option>Rock</option><option>Jazz</option><option>Electronic</option><option>R&B / Soul</option><option>Latin</option><option>Classical</option></select></div>
          <div class="fld"><label>Duração (mm:ss)</label><input id="tf_dur" placeholder="3:45"></div>
          <div class="fld"><label>ISRC</label><input id="tf_isrc" placeholder="BRA123XXXXX"></div>
          <div class="fld"><label>ISWC</label><input id="tf_iswc" placeholder="T-XXX.XXX.XXX-X"></div>
          <div class="fld full"><label>Upload de Arquivo</label>
            <div class="upload-zone" onclick="alert('Integração com armazenamento em nuvem em breve!')">
              <div class="upload-icon">📁</div>
              <div class="upload-title">Clique para fazer upload</div>
              <div class="upload-sub">WAV, FLAC, MP3 · Máx. 500MB</div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-foot"><button class="btn btn-outline btn-sm" onclick="closeModal()">Cancelar</button><button class="btn btn-gold btn-sm" onclick="saveTrack()">Adicionar Faixa</button></div>`,

    artistDetail: a ? `
      <div class="modal-head"><h2>${a.name}</h2><button class="modal-close" onclick="closeModal()">×</button></div>
      <div class="modal-body">
        <div style="display:flex;align-items:center;gap:14px;margin-bottom:18px;padding-bottom:16px;border-bottom:1px solid var(--border)">
          <div style="width:60px;height:60px;border-radius:12px;background:var(--text);display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:700;color:var(--gold);font-family:'Bebas Neue'">${a.name.split(' ').map(w=>w[0]).join('').slice(0,2)}</div>
          <div>
            <div style="font-size:18px;font-weight:700">${a.name}</div>
            <div style="font-size:12px;color:var(--muted)">${a.role} · ${a.genre} · ${a.country}</div>
            <span class="badge ${a.status==='active'?'bg':a.status==='pending'?'bgo':'br'}" style="margin-top:5px">${a.status==='active'?'Ativo':a.status==='pending'?'Pendente':'Inativo'}</span>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px">
          ${[['ID',a.id],['Email',a.email],['Telefone',a.phone||'—'],['PRO',a.pro],['IPI/CAE',a.ipi||'—'],['Membro desde',a.joined],['Músicas',a.tracks],['Streams',a.streams],['Royalties',a.royalties],['Label',a.label]].map(([k,v])=>`
            <div style="padding:10px;background:var(--surface2);border-radius:7px">
              <div style="font-size:9px;text-transform:uppercase;letter-spacing:1px;color:var(--muted2);margin-bottom:3px">${k}</div>
              <div style="font-size:13px;font-weight:600">${v}</div>
            </div>`).join('')}
        </div>
        ${a.bio?`<div style="padding:12px;background:var(--surface2);border-radius:7px;font-size:12px;color:var(--muted);line-height:1.6">${a.bio}</div>`:''}
        <div style="display:flex;gap:9px;margin-top:16px">
          <button class="btn btn-primary btn-sm" onclick="set({page:'catalog',modal:null})">Ver Músicas</button>
          <button class="btn btn-outline btn-sm" onclick="closeModal()">Fechar</button>
          <button class="btn btn-gold btn-sm" onclick="closeModal();openModal('addArtist')">✎ Editar</button>
        </div>
      </div>` : `<div class="modal-body"><p>Artista não encontrado.</p></div>`,

    newContract:`
      <div class="modal-head"><h2>Novo Contrato</h2><button class="modal-close" onclick="closeModal()">×</button></div>
      <div class="modal-body">
        <div class="fg">
          <div class="fld"><label>Artista</label><select>${DB.getArtists().map(a=>`<option>${a.name}</option>`).join('')}</select></div>
          <div class="fld"><label>Tipo</label><select><option>Gravação Exclusiva</option><option>Distribuição</option><option>Co-publicação</option><option>Gerenciamento</option><option>Sync</option></select></div>
          <div class="fld"><label>Vigência Início</label><input type="date"></div>
          <div class="fld"><label>Vigência Fim</label><input type="date"></div>
          <div class="fld"><label>Split Artista / Label</label><input placeholder="70/30"></div>
          <div class="fld"><label>Exclusividade</label><select><option>Sim</option><option>Não</option></select></div>
          <div class="fld full"><label>Cláusulas Adicionais</label><textarea rows="4" placeholder="Termos específicos…"></textarea></div>
        </div>
      </div>
      <div class="modal-foot"><button class="btn btn-outline btn-sm" onclick="closeModal()">Cancelar</button><button class="btn btn-gold btn-sm" onclick="closeModal();set({success:'Contrato gerado!'});setTimeout(()=>set({success:''}),3000)">Gerar Contrato</button></div>`,

    newLicense:`
      <div class="modal-head"><h2>Nova Licença</h2><button class="modal-close" onclick="closeModal()">×</button></div>
      <div class="modal-body">
        <div class="fg">
          <div class="fld"><label>Tipo</label><select><option>Sync</option><option>Mecânica</option><option>Performance</option><option>Print</option><option>Blanket</option><option>DMG Voluntário</option></select></div>
          <div class="fld"><label>Obra</label><select>${DB.getTracks().map(t=>`<option>${t.title} — ${t.artist}</option>`).join('')}</select></div>
          <div class="fld"><label>Licenciado Para</label><input placeholder="Empresa ou pessoa"></div>
          <div class="fld"><label>Território</label><input value="Worldwide"></div>
          <div class="fld"><label>Valor (USD)</label><input type="number" placeholder="0.00"></div>
          <div class="fld"><label>Vigência</label><input placeholder="Ex: 1 ano, Indefinido"></div>
          <div class="fld full"><label>Termos Adicionais</label><textarea rows="3"></textarea></div>
        </div>
      </div>
      <div class="modal-foot"><button class="btn btn-outline btn-sm" onclick="closeModal()">Cancelar</button><button class="btn btn-gold btn-sm" onclick="closeModal();set({success:'Licença gerada!'});setTimeout(()=>set({success:''}),3000)">Gerar Licença</button></div>`,

    newRelease:`
      <div class="modal-head"><h2>Planejar Lançamento</h2><button class="modal-close" onclick="closeModal()">×</button></div>
      <div class="modal-body">
        <div class="fg">
          <div class="fld"><label>Título do Release</label><input placeholder="Nome do álbum, EP ou single"></div>
          <div class="fld"><label>Artista</label><select>${DB.getArtists().map(a=>`<option>${a.name}</option>`).join('')}</select></div>
          <div class="fld"><label>Tipo</label><select><option>Single</option><option>EP</option><option>Álbum</option></select></div>
          <div class="fld"><label>Data de Lançamento</label><input type="date"></div>
          <div class="fld full"><label>Plataformas</label>
            <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:4px">
              ${['Spotify','Apple Music','YouTube','Amazon','Deezer','Tidal','SoundCloud'].map(p=>`<label style="font-size:12px;display:flex;align-items:center;gap:5px;cursor:pointer"><input type="checkbox" checked> ${p}</label>`).join('')}
            </div>
          </div>
          <div class="fld full"><label>Notas de Lançamento</label><textarea rows="3" placeholder="Estratégia, notas para o time…"></textarea></div>
        </div>
      </div>
      <div class="modal-foot"><button class="btn btn-outline btn-sm" onclick="closeModal()">Cancelar</button><button class="btn btn-gold btn-sm" onclick="closeModal();set({success:'Lançamento agendado!'});setTimeout(()=>set({success:''}),3000)">Agendar Lançamento</button></div>`,

    processRoyalties:`
      <div class="modal-head"><h2>Processar Royalties</h2><button class="modal-close" onclick="closeModal()">×</button></div>
      <div class="modal-body">
        <div class="msg msg-info">⚠ Você está prestes a processar royalties para todos os artistas ativos.</div>
        <div class="fg">
          <div class="fld"><label>Período</label><select><option>Q1 2025 (Jan–Mar)</option><option>Q4 2024</option><option>Q3 2024</option></select></div>
          <div class="fld"><label>Moeda de Pagamento</label><select><option>BRL (R$)</option><option>USD ($)</option></select></div>
          <div class="fld"><label>Método Padrão</label><select><option>PIX</option><option>TED</option><option>Wire Transfer</option></select></div>
          <div class="fld"><label>Data de Pagamento</label><input type="date"></div>
        </div>
        <div style="padding:12px;background:var(--surface2);border-radius:8px;margin-top:4px">
          ${DB.getArtists().filter(a=>a.status==='active').map((a,i)=>{
            const vals=[3420,2180,5640,9200,4820,820];
            return `<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--border);font-size:12px"><span>${a.name}</span><span style="font-weight:700;color:var(--green)">$${vals[i]||0}</span></div>`;
          }).join('')}
          <div style="display:flex;justify-content:space-between;padding:8px 0;font-size:13px;font-weight:700"><span>TOTAL</span><span style="color:var(--green)">$25,260</span></div>
        </div>
      </div>
      <div class="modal-foot"><button class="btn btn-outline btn-sm" onclick="closeModal()">Cancelar</button><button class="btn btn-gold btn-sm" onclick="closeModal();set({success:'Royalties processados e pagamentos agendados!'});setTimeout(()=>set({success:''}),4000)">✓ Confirmar e Processar</button></div>`,

    addAdmin:`
      <div class="modal-head"><h2>Adicionar Usuário Admin</h2><button class="modal-close" onclick="closeModal()">×</button></div>
      <div class="modal-body">
        <div class="fg">
          <div class="fld"><label>Nome</label><input placeholder="Nome completo"></div>
          <div class="fld"><label>Email</label><input type="email" placeholder="email@dresbach.com"></div>
          <div class="fld"><label>Papel</label><select><option>Admin</option><option>A&R Manager</option><option>Financeiro</option><option>Marketing</option><option>Visualizador</option></select></div>
          <div class="fld"><label>Permissões</label><select><option>Acesso Completo</option><option>Somente Leitura</option><option>Personalizado</option></select></div>
        </div>
      </div>
      <div class="modal-foot"><button class="btn btn-outline btn-sm" onclick="closeModal()">Cancelar</button><button class="btn btn-gold btn-sm" onclick="closeModal();set({success:'Usuário adicionado!'});setTimeout(()=>set({success:''}),3000)">Adicionar</button></div>`,

    addAlbum:`
      <div class="modal-head"><h2>Novo Álbum / EP</h2><button class="modal-close" onclick="closeModal()">×</button></div>
      <div class="modal-body">
        <div class="fg">
          <div class="fld full"><label>Título</label><input placeholder="Nome do álbum ou EP"></div>
          <div class="fld"><label>Artista</label><select>${DB.getArtists().map(a=>`<option>${a.name}</option>`).join('')}</select></div>
          <div class="fld"><label>Tipo</label><select><option>Álbum</option><option>EP</option><option>Mixtape</option></select></div>
          <div class="fld"><label>Data de Lançamento</label><input type="date"></div>
          <div class="fld"><label>UPC</label><input placeholder="Código UPC / EAN"></div>
          <div class="fld"><label>Número de Faixas</label><input type="number" placeholder="10"></div>
          <div class="fld full"><label>Upload da Capa (3000×3000px)</label>
            <div class="upload-zone" onclick="alert('Upload em breve!')"><div class="upload-icon">🖼</div><div class="upload-title">Capa do Álbum</div><div class="upload-sub">JPG, PNG · 3000×3000px · Máx. 10MB</div></div>
          </div>
        </div>
      </div>
      <div class="modal-foot"><button class="btn btn-outline btn-sm" onclick="closeModal()">Cancelar</button><button class="btn btn-gold btn-sm" onclick="closeModal();set({success:'Álbum criado!'});setTimeout(()=>set({success:''}),3000)">Criar Álbum</button></div>`,
  };

  const content = modals[S.modal];
  return content ? `<div class="modal-bg" onclick="if(event.target===this)closeModal()"><div class="modal">${content}</div></div>` : '';
}

// ── SAVE FUNCTIONS ───────────────────────────────────
function saveArtist(){
  const g = id => document.getElementById(id)?.value?.trim()||'';
  const name = g('af_name');
  if(!name){ return; }
  const artists = DB.getArtists();
  const newArtist = {
    id: genId('A'),
    name, artistName: g('af_art'), role: g('af_role')||'Musician',
    genre: g('af_genre')||'Pop', email: g('af_email'),
    phone: g('af_phone'), country: g('af_country')||'Brazil',
    pro: g('af_pro')||'None', ipi: g('af_ipi'), bio: g('af_bio'),
    status: 'pending', tracks: 0, streams: '0', royalties: '$0',
    joined: today(), social: [], label: 'Dresbach Records'
  };
  artists.push(newArtist);
  DB.saveArtists(artists);
  closeModal();
  set({success:`Artista ${name} adicionado com sucesso!`});
  setTimeout(()=>set({success:''}),3000);
}

function saveTrack(){
  const g = id => document.getElementById(id)?.value?.trim()||'';
  const title = g('tf_title');
  if(!title){ return; }
  const tracks = DB.getTracks();
  const artists = DB.getArtists();
  const artistEl = document.getElementById('tf_artist');
  const artistId = artistEl?.value||'A001';
  const artist = artists.find(a=>a.id===artistId);
  const newTrack = {
    id: genId('T'), title, artistId,
    artist: artist?.name||'—',
    genre: g('tf_genre')||'Pop',
    type: g('tf_type')||'Single',
    duration: g('tf_dur')||'—',
    isrc: g('tf_isrc'), iswc: g('tf_iswc'),
    status: 'pending', platforms: [],
    streams: '0', royalties: '$0', released: '—'
  };
  tracks.push(newTrack);
  DB.saveTracks(tracks);
  closeModal();
  set({success:`Faixa "${title}" adicionada ao catálogo!`});
  setTimeout(()=>set({success:''}),3000);
}

// ── INIT ─────────────────────────────────────────────
render();
</script>
</body>
</html>
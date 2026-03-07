'use client';
import React from 'react';

const valeIndicaHTML = `
<!-- TOAST WRAP -->
<div class="toast-wrap" id="toastWrap"></div>

<!-- ── RADIO BAR ── -->
<div class="radio-bar">
  <div class="radio-bar-left">
    <div class="rb-live"><div class="rb-dot"></div>DMG Records · AO VIVO</div>
    <div class="rb-track">Tocando: <span id="rbTrack">Carregando…</span></div>
  </div>
  <button class="rb-play-btn" onclick="toggleRadio()" id="rbBtn">▶ Ouvir Rádio</button>
  <audio id="radioAudio" src="https://s02.svrdedicado.org:6862/stream" preload="none"></audio>
</div>

<!-- ── NAVBAR ── -->
<nav class="nav">
  <div class="nav-logo">
    <div class="nav-logo-mark"></div>
    <div class="nav-brand">
      Vale <span>Indica</span>
      <small>Vale do Sinos · DMG Records</small>
    </div>
  </div>
  <div class="nav-search">
    <svg class="nav-search-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
    <input type="text" placeholder="Buscar comércio, restaurante, serviço…" id="mainSearch" oninput="searchBusinesses(this.value)">
  </div>
  <div class="nav-right">
    <button class="btn-anuncie" onclick="openModal()">💡 Como funciona?</button>
    <button class="btn-cadastrar" onclick="openModal()">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
      Cadastrar Negócio
    </button>
  </div>
</nav>

<!-- ── HERO ── -->
<section class="hero">
  <div class="hero-inner">
    <div class="hero-eyebrow">📍 Vale do Sinos · Taquara & Região</div>
    <h1 class="hero-title">
      O Guia Comercial<br>
      do <span class="acc">Vale do Sinos</span><br>
      <span class="reg">direto da sua rádio</span>
    </h1>
    <p class="hero-desc">
      Encontre <strong>qualquer comércio ou serviço</strong> de Taquara, Rolante, Três Coroas, Igrejinha e toda a região — organizado, atualizado e gratuito pra você ouvinte.
    </p>
    <div class="hero-pricing">
      <div class="hero-price-item">
        <div class="hero-price-val"><span class="cur">R$</span>10</div>
        <div class="hero-price-label">Cadastro único</div>
      </div>
      <div class="hero-price-sep"></div>
      <div class="hero-price-item">
        <div class="hero-price-val"><span class="cur">R$</span>2<span class="cur">,50</span></div>
        <div class="hero-price-label">Por mês · manter ativo</div>
      </div>
      <div class="hero-price-sep"></div>
      <div class="hero-price-item">
        <div class="hero-price-val" style="color:var(--accent)">∞</div>
        <div class="hero-price-label">Clientes alcançados</div>
      </div>
    </div>
    <div class="hero-cta-row">
      <button class="btn-hero-primary" onclick="openModal()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        Cadastrar meu negócio
      </button>
      <button class="btn-hero-secondary" onclick="scrollToListing()">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        Ver comércios cadastrados
      </button>
    </div>
    <div class="hero-stats">
      <div class="hero-stat"><div class="hero-stat-val">8<em>+</em></div><div class="hero-stat-lbl">Cidades do Vale</div></div>
      <div class="hero-stat"><div class="hero-stat-val" id="heroStatBiz">127</div><div class="hero-stat-lbl">Negócios listados</div></div>
      <div class="hero-stat"><div class="hero-stat-val">15<em>k</em></div><div class="hero-stat-lbl">Ouvintes DMG/dia</div></div>
      <div class="hero-stat"><div class="hero-stat-val"><em>R$</em>2,50</div><div class="hero-stat-lbl">Por mês pra aparecer</div></div>
    </div>
  </div>
</section>

<!-- ── CITIES BAR ── -->
<div class="cities-bar">
  <div class="cities-inner" id="citiesInner">
    <div class="city-pill active" onclick="filterCity('todas',this)">
      🗺️ Todas as cidades <span class="city-count" id="count-todas">127</span>
    </div>
    <div class="city-pill" onclick="filterCity('taquara',this)">
      📍 Taquara <span class="city-count" id="count-taquara">48</span>
    </div>
    <div class="city-pill" onclick="filterCity('rolante',this)">
      📍 Rolante <span class="city-count" id="count-rolante">22</span>
    </div>
    <div class="city-pill" onclick="filterCity('tres-coroas',this)">
      📍 Três Coroas <span class="city-count" id="count-tres-coroas">19</span>
    </div>
    <div class="city-pill" onclick="filterCity('igrejinha',this)">
      📍 Igrejinha <span class="city-count" id="count-igrejinha">17</span>
    </div>
    <div class="city-pill" onclick="filterCity('parobé',this)">
      📍 Parobé <span class="city-count" id="count-parobé">11</span>
    </div>
    <div class="city-pill" onclick="filterCity('ararica',this)">
      📍 Araricá <span class="city-count" id="count-ararica">6</span>
    </div>
    <div class="city-pill" onclick="filterCity('nova-hartz',this)">
      📍 Nova Hartz <span class="city-count" id="count-nova-hartz">4</span>
    </div>
  </div>
</div>

<!-- ── MAIN LAYOUT ── -->
<div class="layout" id="listing">

  <!-- SIDEBAR FILTROS -->
  <aside class="sidebar">
    <div class="sidebar-hdr">
      Filtros
      <button class="sidebar-clear" onclick="clearFilters()">Limpar</button>
    </div>
    <div class="sidebar-section">
      <div class="sidebar-section-title">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
        Categorias
      </div>
      <div id="catFilters">
        <!-- preenchido pelo JS -->
      </div>
    </div>
    <div class="sidebar-section">
      <div class="sidebar-section-title">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        Destaques
      </div>
      <div class="filter-item" id="filt-destaque" onclick="toggleFilter('destaque')">
        <div class="filter-check"></div>
        <span>Apenas em destaque</span>
        <span class="filter-count">12</span>
      </div>
      <div class="filter-item" id="filt-wpp" onclick="toggleFilter('wpp')">
        <div class="filter-check"></div>
        <span>Com WhatsApp</span>
        <span class="filter-count">89</span>
      </div>
    </div>
    <div class="sidebar-section">
      <div class="sidebar-section-title">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
        Seu negócio aqui
      </div>
      <div style="padding:4px 0">
        <div style="font-size:.72rem;color:var(--ink3);line-height:1.6;margin-bottom:9px">Apenas <strong style="color:var(--red)">R$ 10</strong> cadastro + <strong style="color:var(--red)">R$ 2,50</strong>/mês para manter ativo</div>
        <button onclick="openModal()" style="width:100%;background:var(--red);color:#fff;border:none;border-radius:7px;padding:9px;font-family:'Plus Jakarta Sans',sans-serif;font-size:.76rem;font-weight:700;cursor:pointer;transition:all .2s" onmouseover="this.style.background='#A81C2E'" onmouseout="this.style.background='var(--red)'">+ Cadastrar agora</button>
      </div>
    </div>
  </aside>

  <!-- LISTAGEM -->
  <div>
    <div class="listing-header">
      <div class="listing-count" id="listingCount">Exibindo <strong>127</strong> negócios</div>
      <div class="listing-sort">
        <span class="sort-label">Ordenar:</span>
        <select class="sort-select" onchange="sortBusinesses(this.value)">
          <option value="az">A–Z</option>
          <option value="cidade">Por cidade</option>
          <option value="cat">Por categoria</option>
          <option value="dest">Destaques primeiro</option>
        </select>
      </div>
    </div>

    <!-- Banner destaque -->
    <div class="featured-strip">
      <div class="featured-strip-icon">⭐</div>
      <div class="featured-strip-text">
        <div class="featured-strip-title">Destaque Premium</div>
        <div class="featured-strip-desc">Apareça no topo das buscas e receba mais clientes. Upgrade a partir de R$ 15/mês.</div>
      </div>
      <button class="featured-strip-btn" onclick="openModal()">Quero destaque</button>
    </div>

    <!-- Grid de negócios -->
    <div class="businesses-grid" id="bizGrid">
      <!-- preenchido pelo JS -->
    </div>
  </div>
</div>

<!-- ── FOOTER ── -->
<footer class="footer">
  <div class="footer-brand">Vale <span>Indica</span> · DMG Records</div>
  <p class="footer-desc">O guia comercial oficial do Vale do Sinos, trazido a você pela rádio DMG Records. Conectando ouvintes e comércios locais desde 2024.</p>
  <div class="footer-links">
    <a onclick="openModal()">Cadastrar negócio</a>
    <a>Como funciona</a>
    <a>Planos & Preços</a>
    <a>Contato</a>
    <a href="https://dmgrecords.com.br" target="_blank">Rádio DMG Records</a>
  </div>
  <div class="footer-copy">© 2026 Vale Indica · DMG Records Rádio · Vale do Sinos · RS</div>
</footer>

<!-- ══ MODAL CADASTRO ══ -->
<div class="modal-bg" id="modalBg" style="display:none" onclick="if(event.target===this)closeModal()">
  <div class="modal">
    <div class="modal-hero" style="position:relative">
      <button class="modal-close" onclick="closeModal()">✕</button>
      <div class="modal-hero-title">Cadastre seu <em>negócio</em></div>
      <div class="modal-hero-sub">Alcance os ouvintes da DMG Records e moradores do Vale do Sinos. Simples, rápido e acessível.</div>
      <div class="modal-pricing-row">
        <div class="modal-price-box highlight">
          <div class="modal-price-val"><span class="cur">R$</span>10</div>
          <div class="modal-price-desc">Cadastro único</div>
        </div>
        <div class="modal-price-box">
          <div class="modal-price-val"><span class="cur">R$</span>2,50</div>
          <div class="modal-price-desc">Por mês · manter ativo</div>
        </div>
        <div class="modal-price-box">
          <div class="modal-price-val" style="color:var(--accent)">+</div>
          <div class="modal-price-desc">Destaque R$ 15/mês</div>
        </div>
      </div>
    </div>
    <div class="modal-body">
      <!-- Step indicators -->
      <div class="step-indicator" id="stepIndicator">
        <div class="step-dot active" id="step-dot-1"></div>
        <div class="step-dot" id="step-dot-2"></div>
        <div class="step-dot" id="step-dot-3"></div>
        <div class="step-dot" id="step-dot-4"></div>
      </div>

      <!-- STEP 1: Categoria -->
      <div class="modal-step active" id="step1">
        <div class="modal-step-title">Qual é o seu negócio?</div>
        <div class="modal-step-sub">Escolha a categoria que melhor representa seu comércio ou serviço</div>
        <div class="cat-grid" id="catGrid">
          <!-- preenchido pelo JS -->
        </div>
        <div class="modal-footer" style="margin-top:18px">
          <button class="btn-modal-next" onclick="goStep(2)">Próximo →</button>
        </div>
      </div>

      <!-- STEP 2: Dados do negócio -->
      <div class="modal-step" id="step2">
        <div class="modal-step-title">Dados do negócio</div>
        <div class="modal-step-sub">Essas informações aparecerão para todos os usuários do Vale Indica</div>
        <div class="fg"><label class="fl">Nome do estabelecimento *</label><input class="fi" id="biz-name" placeholder="Ex: Farmácia São João"></div>
        <div class="fr2">
          <div class="fg"><label class="fl">Cidade *</label>
            <select class="fs" id="biz-city">
              <option value="">Selecione…</option>
              <option>Taquara</option><option>Rolante</option><option>Três Coroas</option>
              <option>Igrejinha</option><option>Parobé</option><option>Araricá</option>
              <option>Nova Hartz</option><option>Outra cidade</option>
            </select>
          </div>
          <div class="fg"><label class="fl">Bairro</label><input class="fi" id="biz-neighborhood" placeholder="Ex: Centro"></div>
        </div>
        <div class="fg"><label class="fl">Endereço *</label><input class="fi" id="biz-address" placeholder="Ex: Rua XV de Novembro, 123"></div>
        <div class="fg"><label class="fl">Descrição (o que você oferece?)</label><textarea class="fta" id="biz-desc" placeholder="Descreva brevemente seu negócio, produtos ou serviços…"></textarea></div>
        <div class="modal-footer">
          <button class="btn-modal-back" onclick="goStep(1)">← Voltar</button>
          <button class="btn-modal-next" onclick="goStep(3)">Próximo →</button>
        </div>
      </div>

      <!-- STEP 3: Contato -->
      <div class="modal-step" id="step3">
        <div class="modal-step-title">Contato & Horários</div>
        <div class="modal-step-sub">Como os clientes vão te encontrar?</div>
        <div class="fg"><label class="fl">Telefone / WhatsApp *</label><input class="fi" id="biz-phone" placeholder="(51) 98144-6019"></div>
        <div class="fg"><label class="fl">WhatsApp (se diferente)</label><input class="fi" id="biz-wpp" placeholder="(51) 98144-6019"></div>
        <div class="fg"><label class="fl">Instagram</label><input class="fi" id="biz-ig" placeholder="@seunegocio"></div>
        <div class="fg"><label class="fl">Horário de funcionamento</label><input class="fi" id="biz-hours" placeholder="Seg–Sex: 08h–18h · Sáb: 08h–12h"></div>
        <div class="fg">
          <label class="fl">Deseja destaque? <span style="color:var(--red)">+ R$ 15/mês</span></label>
          <div style="display:flex;gap:8px">
            <label style="flex:1;display:flex;align-items:center;gap:8px;border:1.5px solid var(--line);border-radius:7px;padding:9px 12px;cursor:pointer;transition:border-color .18s" id="dest-no-lbl">
              <input type="radio" name="destaque" value="nao" checked onchange="selectDestaque(false)"> <span style="font-size:.8rem;font-weight:600">Não, obrigado</span>
            </label>
            <label style="flex:1;display:flex;align-items:center;gap:8px;border:1.5px solid var(--line);border-radius:7px;padding:9px 12px;cursor:pointer;transition:border-color .18s" id="dest-yes-lbl">
              <input type="radio" name="destaque" value="sim" onchange="selectDestaque(true)"> <span style="font-size:.8rem;font-weight:600">⭐ Sim, quero destaque!</span>
            </label>
          </div>
          <div class="fhint">Destaque: aparece no topo, borda dourada, maior visibilidade</div>
        </div>
        <div class="modal-footer">
          <button class="btn-modal-back" onclick="goStep(2)">← Voltar</button>
          <button class="btn-modal-next" onclick="goStep(4)">Próximo →</button>
        </div>
      </div>

      <!-- STEP 4: Pagamento -->
      <div class="modal-step" id="step4">
        <div class="modal-step-title">Resumo & Pagamento</div>
        <div class="modal-step-sub">Confira os dados antes de finalizar</div>
        <div id="resumo-box" style="background:var(--bg3);border-radius:9px;padding:14px;margin-bottom:16px;font-size:.8rem;line-height:1.8;color:var(--ink2)"></div>

        <div style="background:var(--green-bg);border:1px solid rgba(22,163,74,.2);border-radius:8px;padding:12px 14px;margin-bottom:14px">
          <div style="font-size:.8rem;font-weight:700;color:var(--green);margin-bottom:4px">✓ Como funciona o pagamento?</div>
          <div style="font-size:.74rem;color:var(--ink3);line-height:1.6">Após enviar, nossa equipe da DMG Records entrará em contato pelo WhatsApp para confirmar os dados e realizar o pagamento via PIX ou TED. Seu cadastro ficará ativo em até 24h.</div>
        </div>

        <div class="fg"><label class="fl">Seu WhatsApp para contato *</label><input class="fi" id="owner-wpp" placeholder="(51) 98144-6019"></div>
        <div class="fg"><label class="fl">Nome do responsável *</label><input class="fi" id="owner-name" placeholder="Seu nome completo"></div>

        <div class="modal-footer">
          <button class="btn-modal-back" onclick="goStep(3)">← Voltar</button>
          <button class="btn-modal-next" onclick="submitCadastro()" style="background:var(--green)">✓ Enviar cadastro</button>
        </div>
      </div>

      <!-- STEP 5: Sucesso -->
      <div class="modal-step" id="step5">
        <div class="success-box">
          <div class="success-icon">🎉</div>
          <div class="success-title">Cadastro enviado!</div>
          <div class="success-desc">
            Recebemos as informações do seu negócio. Nossa equipe da <strong>DMG Records</strong> entrará em contato em até <strong>24 horas</strong> pelo WhatsApp para confirmar e ativar seu anúncio.<br><br>
            <strong>Obrigado por fazer parte do Vale Indica!</strong>
          </div>
          <button onclick="closeModal();addDemoCard()" style="background:var(--red);color:#fff;border:none;border-radius:8px;padding:12px 24px;font-family:'Plus Jakarta Sans',sans-serif;font-size:.86rem;font-weight:700;cursor:pointer;width:100%">Ver meu negócio no portal</button>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ══ BIZ DETAIL MODAL ══ -->
<div class="modal-bg" id="bizModalBg" style="display:none" onclick="if(event.target===this)closeBizModal()">
  <div class="modal" style="max-width:460px">
    <div style="position:relative">
      <button class="modal-close" style="position:absolute;top:12px;right:12px;z-index:2" onclick="closeBizModal()">✕</button>
      <div id="bizModalContent"></div>
    </div>
  </div>
</div>
`;

const valeIndicaScript = `
/* ════════════════════════════════════════════
   VALE INDICA — PORTAL VALE DO SINOS
   DMG Records Rádio
════════════════════════════════════════════ */

/* ── DADOS ── */
const CATEGORIAS = [
  {id:'alimentacao', icon:'🍽️', label:'Alimentação', color:'#FFF3E0', tc:'#E65100'},
  {id:'saude', icon:'💊', label:'Saúde & Farmácia', color:'#E8F5E9', tc:'#1B5E20'},
  {id:'beleza', icon:'✂️', label:'Beleza & Estética', color:'#FCE4EC', tc:'#880E4F'},
  {id:'auto', icon:'🚗', label:'Automotivo', color:'#E3F2FD', tc:'#0D47A1'},
  {id:'moda', icon:'👗', label:'Moda & Calçados', color:'#F3E5F5', tc:'#4A148C'},
  {id:'construcao', icon:'🔨', label:'Construção & Reforma', color:'#FFF8E1', tc:'#F57F17'},
  {id:'educacao', icon:'📚', label:'Educação & Cursos', color:'#E8EAF6', tc:'#1A237E'},
  {id:'tecnologia', icon:'💻', label:'Tecnologia', color:'#E1F5FE', tc:'#01579B'},
  {id:'pet', icon:'🐾', label:'Pet Shop & Vet', color:'#F9FBE7', tc:'#33691E'},
  {id:'religioso', icon:'⛪', label:'Igreja & Religioso', color:'#FBE9E7', tc:'#BF360C'},
  {id:'mercado', icon:'🛒', label:'Mercado & Varejo', color:'#E0F2F1', tc:'#004D40'},
  {id:'servicos', icon:'🔧', label:'Serviços Gerais', color:'#EFEBE9', tc:'#3E2723'},
];

const BUSINESSES_DB = [
  // TAQUARA
  {id:1, name:'Farmácia Popular Taquara', cat:'saude', city:'taquara', neighborhood:'Centro', address:'Rua Júlio de Castilhos, 285', phone:'(51) 3541-2233', wpp:'51981446019', hours:'Seg–Sáb: 07h–20h · Dom: 08h–13h', desc:'Medicamentos, dermocosméticos e perfumaria com os melhores preços do Vale.', destaque:true, icon:'💊'},
  {id:2, name:'Restaurante Casa da Nona', cat:'alimentacao', city:'taquara', neighborhood:'Centro', address:'Av. Leopoldo Petry, 590', phone:'(51) 3541-1198', wpp:'51981446019', hours:'Ter–Dom: 11h–15h e 19h–22h', desc:'Culinária italiana e gaúcha, ambientes familiares, prato feito e a la carte.', destaque:true, icon:'🍝'},
  {id:3, name:'Salão Beauty Space', cat:'beleza', city:'taquara', neighborhood:'Bom Princípio', address:'Rua das Flores, 44', phone:'(51) 98144-6019', wpp:'51981446019', hours:'Seg–Sex: 09h–19h · Sáb: 08h–17h', desc:'Corte, coloração, manicure, pedicure e tratamentos capilares.', destaque:false, icon:'✂️'},
  {id:4, name:'Mecânica do Zé', cat:'auto', city:'taquara', neighborhood:'Industrial', address:'Rod. RS-020, Km 43', phone:'(51) 3541-4477', wpp:'51981446019', hours:'Seg–Sex: 07h30–18h · Sáb: 07h30–12h', desc:'Manutenção preventiva e corretiva, alinhamento, balanceamento e suspensão.', destaque:false, icon:'🔧'},
  {id:5, name:'Mercado Família Schneider', cat:'mercado', city:'taquara', neighborhood:'São Luís', address:'Av. Dom Pedro II, 1.140', phone:'(51) 3541-0022', wpp:'51981446019', hours:'Seg–Sáb: 07h–21h · Dom: 08h–14h', desc:'Mercearia completa, açougue, padaria, hortifruti e entrega a domicílio.', destaque:false, icon:'🛒'},
  {id:6, name:'Pet Center Amigo Fiel', cat:'pet', city:'taquara', neighborhood:'Centro', address:'Rua 20 de Setembro, 311', phone:'(51) 98144-6019', wpp:'51981446019', hours:'Seg–Sex: 08h–18h · Sáb: 08h–13h', desc:'Pet shop, veterinária, banho & tosa, venda de rações e acessórios.', destaque:false, icon:'🐾'},
  // ROLANTE
  {id:7, name:'Pizzaria Boa Vista', cat:'alimentacao', city:'rolante', neighborhood:'Centro', address:'Av. Brasil, 890', phone:'(51) 3542-1190', wpp:'51981446019', hours:'Seg–Dom: 18h–23h', desc:'Pizzas artesanais, esfihas, calzones e sobremesas. Delivery grátis no centro.', destaque:true, icon:'🍕'},
  {id:8, name:'Drogaria Rolante', cat:'saude', city:'rolante', neighborhood:'Centro', address:'Rua Ernesto Alves, 55', phone:'(51) 3542-3344', wpp:'', hours:'Seg–Sáb: 07h–20h', desc:'Medicamentos, cosméticos e artigos de higiene com plantão de vendas.', destaque:false, icon:'💊'},
  {id:9, name:'Loja Vestir Bem Moda', cat:'moda', city:'rolante', neighborhood:'Centro', address:'Rua Independência, 202', phone:'(51) 98144-6019', wpp:'51981446019', hours:'Seg–Sex: 09h–18h · Sáb: 09h–13h', desc:'Moda feminina, masculina e infantil com os melhores preços da região.', destaque:false, icon:'👗'},
  // TRÊS COROAS
  {id:10, name:'Padaria & Confeitaria Colonial', cat:'alimentacao', city:'tres-coroas', neighborhood:'Centro', address:'Rua Olavo Bilac, 78', phone:'(51) 3546-0011', wpp:'51981446019', hours:'Todos os dias: 06h–20h', desc:'Pães artesanais, bolos, doces coloniais, café e lanche rápido.', destaque:true, icon:'🍞'},
  {id:11, name:'Auto Elétrica Três Coroas', cat:'auto', city:'tres-coroas', neighborhood:'Bairro Novo', address:'Av. Rui Barbosa, 340', phone:'(51) 3546-2288', wpp:'51981446019', hours:'Seg–Sex: 07h–18h · Sáb: 07h–12h', desc:'Elétrica automotiva, injeção eletrônica, ar-condicionado e som automotivo.', destaque:false, icon:'🚗'},
  // IGREJINHA
  {id:12, name:'Clínica Bem Estar', cat:'saude', city:'igrejinha', neighborhood:'Centro', address:'Rua 7 de Setembro, 500', phone:'(51) 3544-4455', wpp:'51981446019', hours:'Seg–Sex: 08h–18h', desc:'Clínica médica geral, nutrição, fisioterapia e psicologia. Convênios aceitos.', destaque:false, icon:'🏥'},
  {id:13, name:'Supermercado União', cat:'mercado', city:'igrejinha', neighborhood:'Operário', address:'Av. Presidente Vargas, 1.200', phone:'(51) 3544-6677', wpp:'51981446019', hours:'Seg–Sáb: 07h30–21h · Dom: 08h–15h', desc:'Supermercado completo com açougue premium, peixaria, padaria e hortifruti.', destaque:false, icon:'🛒'},
  // PAROBÉ
  {id:14, name:'Escola de Informática DigiCurso', cat:'educacao', city:'parobé', neighborhood:'Centro', address:'Rua Senador Pinheiro, 88', phone:'(51) 3547-0099', wpp:'51981446019', hours:'Seg–Sex: 08h–20h', desc:'Cursos de informática básica, Excel, Word, design, montagem e manutenção de computadores.', destaque:false, icon:'💻'},
  {id:15, name:'Açougue Gaúcho', cat:'alimentacao', city:'parobé', neighborhood:'Bom Pastor', address:'Av. Frederico Ostermann, 330', phone:'(51) 98144-6019', wpp:'51981446019', hours:'Seg–Sáb: 07h–19h', desc:'Carnes nobres, frango, suínos, embutidos coloniais e linguiças artesanais.', destaque:false, icon:'🥩'},
];

/* ── STATE ── */
const ST = {
  filter: {city:'todas', cat:[], destaque:false, wpp:false},
  search: '',
  sort: 'az',
  selectedCat: null,
  withDestaque: false,
  step: 1,
};

/* ── RADIO ── */
let radioPlaying = false;
function toggleRadio(){
  const a = document.getElementById('radioAudio');
  const btn = document.getElementById('rbBtn');
  if(!radioPlaying){
    a.play().then(()=>{radioPlaying=true;btn.textContent='⏹ Parar Rádio';}).catch(()=>toast('Erro ao conectar stream','err'));
  } else {
    a.pause(); a.currentTime=0; radioPlaying=false; btn.textContent='▶ Ouvir Rádio';
  }
}

/* API radio */
async function fetchRadioAPI(){
  try{
    const r = await fetch('https://vox.svrdedicado.org/api-json/g1.gu-bOzWLWFRERPvb1knHAXnkRixGCHaN179_q-g9h9I');
    const d = await r.json();
    const el = document.getElementById('rbTrack');
    if(el) el.textContent = d.musica_atual || 'DMG Records Rádio';
  }catch(e){ const el=document.getElementById('rbTrack'); if(el) el.textContent='DMG Records — Ao Vivo'; }
}

/* ── RENDER CATEGORIAS NO SIDEBAR ── */
function renderCatFilters(){
  const el = document.getElementById('catFilters');
  if(!el) return;
  el.innerHTML = CATEGORIAS.map(c=>\`
    <div class="filter-item" id="filt-cat-\${c.id}" onclick="toggleCatFilter('\${c.id}')">
      <div class="filter-check"></div>
      <span class="cat-icon" style="background:\${c.color};color:\${c.tc}">\${c.icon}</span>
      <span>\${c.label}</span>
      <span class="filter-count">\${BUSINESSES_DB.filter(b=>b.cat===c.id).length}</span>
    </div>\`).join('');
}

/* ── RENDER CATEGORIAS NO MODAL ── */
function renderCatGrid(){
  const el = document.getElementById('catGrid');
  if(!el) return;
  el.innerHTML = CATEGORIAS.map(c=>\`
    <div class="cat-option" id="cat-opt-\${c.id}" onclick="selectCat('\${c.id}')">
      <div class="cat-option-icon">\${c.icon}</div>
      <div class="cat-option-label">\${c.label}</div>
    </div>\`).join('');
}

function selectCat(id){
  document.querySelectorAll('.cat-option').forEach(el=>el.classList.remove('selected'));
  const el = document.getElementById('cat-opt-'+id);
  if(el) el.classList.add('selected');
  ST.selectedCat = id;
}

/* ── RENDER BUSINESSES ── */
function renderBusinesses(){
  const grid = document.getElementById('bizGrid');
  if(!grid) return;

  let data = [...BUSINESSES_DB];

  // Filtro cidade
  if(ST.filter.city !== 'todas'){
    data = data.filter(b=>b.city === ST.filter.city);
  }
  // Filtro categoria
  if(ST.filter.cat.length > 0){
    data = data.filter(b=>ST.filter.cat.includes(b.cat));
  }
  // Filtro destaque
  if(ST.filter.destaque) data = data.filter(b=>b.destaque);
  // Filtro wpp
  if(ST.filter.wpp) data = data.filter(b=>b.wpp);
  // Busca
  if(ST.search){
    const q = ST.search.toLowerCase();
    data = data.filter(b=>b.name.toLowerCase().includes(q)||b.desc.toLowerCase().includes(q)||b.city.includes(q)||b.cat.includes(q));
  }
  // Sort
  if(ST.sort==='az') data.sort((a,b)=>a.name.localeCompare(b.name));
  else if(ST.sort==='cidade') data.sort((a,b)=>a.city.localeCompare(b.city));
  else if(ST.sort==='cat') data.sort((a,b)=>a.cat.localeCompare(b.cat));
  else if(ST.sort==='dest') data.sort((a,b)=>(b.destaque?1:0)-(a.destaque?1:0));

  // Update count
  const cnt = document.getElementById('listingCount');
  if(cnt) cnt.innerHTML = \`Exibindo <strong>\${data.length}</strong> negócio\${data.length!==1?'s':''}\`;

  if(!data.length){
    grid.innerHTML = \`<div class="empty-state">
      <div class="empty-icon">🔍</div>
      <div class="empty-title">Nenhum resultado encontrado</div>
      <div class="empty-desc">Tente outro termo de busca ou categoria. Seu negócio ainda não está aqui? <a onclick="openModal()" style="color:var(--red);cursor:pointer;font-weight:700">Cadastre agora por R$ 10!</a></div>
    </div>\`;
    return;
  }

  grid.innerHTML = data.map(b=>{
    const catInfo = CATEGORIAS.find(c=>c.id===b.cat)||{icon:'🏪',color:'#f5f5f5',tc:'#333',label:'Serviço'};
    const cityLabel = {taquara:'Taquara',rolante:'Rolante','tres-coroas':'Três Coroas',igrejinha:'Igrejinha','parobé':'Parobé',ararica:'Araricá','nova-hartz':'Nova Hartz'}[b.city]||b.city;
    return \`
    <div class="biz-card\${b.destaque?' destaque':''}" onclick="openBizModal(\${b.id})">
      <div class="biz-card-banner"></div>
      \${b.destaque?'<div class="biz-destaque-badge">⭐ Destaque</div>':''}
      <div class="biz-card-body">
        <div class="biz-card-top">
          <div class="biz-logo" style="background:\${catInfo.color}">\${b.icon||catInfo.icon}</div>
          <div class="biz-info">
            <div class="biz-name">\${b.name}</div>
            <div><span class="biz-cat" style="background:\${catInfo.color};color:\${catInfo.tc}">\${catInfo.icon} \${catInfo.label}</span></div>
            <div class="biz-city">📍 \${b.neighborhood?b.neighborhood+', ':''}\${cityLabel}</div>
          </div>
        </div>
        <div style="font-size:.73rem;color:var(--ink3);line-height:1.55;margin-bottom:10px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">\${b.desc}</div>
        <div class="biz-contacts">
          <div class="biz-contact-row">
            <div class="biz-contact-icon">📍</div>
            <div class="biz-contact-val">\${b.address}</div>
          </div>
          <div class="biz-contact-row">
            <div class="biz-contact-icon">📞</div>
            <div class="biz-contact-val">\${b.phone}</div>
            <div class="biz-contact-call" onclick="event.stopPropagation();callPhone('\${b.phone}')">Ligar</div>
          </div>
          \${b.hours?\`<div class="biz-contact-row"><div class="biz-contact-icon">🕐</div><div class="biz-contact-val" style="font-size:.66rem">\${b.hours}</div></div>\`:''}
        </div>
        <div class="biz-actions" onclick="event.stopPropagation()">
          \${b.wpp?\`<button class="biz-btn biz-btn-wpp" onclick="openWpp('\${b.wpp}','\${b.name}')">💬 WhatsApp</button>\`:''}
          <button class="biz-btn biz-btn-tel" onclick="callPhone('\${b.phone}')">📞 Ligar</button>
          <button class="biz-btn biz-btn-map" onclick="openMap('\${b.address}','\${cityLabel}')">🗺️</button>
        </div>
      </div>
    </div>\`;
  }).join('');
}

/* ── BIZ DETAIL MODAL ── */
function openBizModal(id){
  const b = BUSINESSES_DB.find(x=>x.id===id);
  if(!b) return;
  const catInfo = CATEGORIAS.find(c=>c.id===b.cat)||{icon:'🏪',color:'#f5f5f5',tc:'#333',label:'Serviço'};
  const cityLabel = {taquara:'Taquara',rolante:'Rolante','tres-coroas':'Três Coroas',igrejinha:'Igrejinha','parobé':'Parobé',ararica:'Araricá','nova-hartz':'Nova Hartz'}[b.city]||b.city;
  document.getElementById('bizModalContent').innerHTML = \`
    <div style="background:linear-gradient(135deg,\${catInfo.color},\${catInfo.color}aa);padding:24px 24px 18px">
      <div style="font-size:2.8rem;margin-bottom:10px">\${b.icon||catInfo.icon}</div>
      <div style="font-family:'Fraunces',serif;font-size:1.3rem;font-weight:900;color:var(--ink);margin-bottom:4px">\${b.name}</div>
      <div style="display:inline-flex;align-items:center;gap:4px;background:\${catInfo.color};color:\${catInfo.tc};font-size:.62rem;font-weight:700;padding:3px 9px;border-radius:4px">\${catInfo.icon} \${catInfo.label}</div>
      \${b.destaque?'<span style="margin-left:6px;background:var(--accent);color:var(--ink);font-size:.58rem;font-weight:700;padding:3px 8px;border-radius:3px;font-family:\\'DM Mono\\',monospace">⭐ DESTAQUE</span>':''}
    </div>
    <div style="padding:20px">
      <div class="map-placeholder">
        <div style="position:relative;z-index:1;text-align:center">
          <div class="map-pin">📍</div>
          <div style="font-size:.76rem;font-weight:700;color:var(--ink2);margin-top:4px">\${b.address}</div>
          <div style="font-size:.68rem;color:var(--ink3)">\${b.neighborhood?b.neighborhood+' · ':''}\${cityLabel} · RS</div>
        </div>
      </div>
      <div style="font-size:.82rem;color:var(--ink2);line-height:1.7;margin-bottom:16px">\${b.desc}</div>
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:16px">
        <div style="display:flex;align-items:center;gap:10px;font-size:.8rem"><span style="font-size:1.1rem">📞</span><div><div style="font-weight:700">\${b.phone}</div><div style="font-size:.66rem;color:var(--ink3)">Telefone principal</div></div></div>
        \${b.wpp?\`<div style="display:flex;align-items:center;gap:10px;font-size:.8rem"><span style="font-size:1.1rem">💬</span><div><div style="font-weight:700">(\${b.wpp.substring(0,2)}) \${b.wpp.substring(2,7)}-\${b.wpp.substring(7)}</div><div style="font-size:.66rem;color:var(--ink3)">WhatsApp</div></div></div>\`:''}
        \${b.hours?\`<div style="display:flex;align-items:center;gap:10px;font-size:.8rem"><span style="font-size:1.1rem">🕐</span><div><div style="font-weight:600">\${b.hours}</div><div style="font-size:.66rem;color:var(--ink3)">Horário de funcionamento</div></div></div>\`:''}
      </div>
      <div style="display:flex;gap:8px">
        \${b.wpp?\`<button onclick="openWpp('\${b.wpp}','\${b.name}')" style="flex:1;background:#25D366;color:#fff;border:none;border-radius:8px;padding:11px;font-family:'Plus Jakarta Sans',sans-serif;font-size:.82rem;font-weight:700;cursor:pointer">💬 WhatsApp</button>\`:''}
        <button onclick="callPhone('\${b.phone}')" style="flex:1;background:var(--bg3);color:var(--ink2);border:none;border-radius:8px;padding:11px;font-family:'Plus Jakarta Sans',sans-serif;font-size:.82rem;font-weight:700;cursor:pointer">📞 Ligar</button>
        <button onclick="openMap('\${b.address}','\${cityLabel}')" style="background:var(--blue);color:#fff;border:none;border-radius:8px;padding:11px 14px;cursor:pointer;font-size:.82rem">🗺️</button>
      </div>
    </div>\`;
  document.getElementById('bizModalBg').style.display='flex';
}

function closeBizModal(){ document.getElementById('bizModalBg').style.display='none'; }

/* ── ACTIONS ── */
function openWpp(num, name){
  const msg = encodeURIComponent(\`Olá! Vi o *\${name}* no Vale Indica (DMG Records) e gostaria de mais informações.\`);
  window.open(\`https://wa.me/55\${num}?text=\${msg}\`, '_blank');
}
function callPhone(tel){ window.open('tel:'+tel.replace(/\\D/g,''), '_blank'); }
function openMap(addr, city){ window.open(\`https://www.google.com/maps/search/\${encodeURIComponent(addr+', '+city+', RS')}\`, '_blank'); }

/* ── FILTERS ── */
function filterCity(city, el){
  document.querySelectorAll('.city-pill').forEach(p=>p.classList.remove('active'));
  if(el) el.classList.add('active');
  ST.filter.city = city;
  renderBusinesses();
}

function toggleCatFilter(id){
  const el = document.getElementById('filt-cat-'+id);
  if(!el) return;
  const idx = ST.filter.cat.indexOf(id);
  if(idx>-1){ ST.filter.cat.splice(idx,1); el.classList.remove('active'); }
  else { ST.filter.cat.push(id); el.classList.add('active'); }
  renderBusinesses();
}

function toggleFilter(type){
  const el = document.getElementById('filt-'+type);
  if(!el) return;
  if(type==='destaque'){ ST.filter.destaque=!ST.filter.destaque; el.classList.toggle('active',ST.filter.destaque); }
  if(type==='wpp'){ ST.filter.wpp=!ST.filter.wpp; el.classList.toggle('active',ST.filter.wpp); }
  renderBusinesses();
}

function clearFilters(){
  ST.filter = {city:'todas', cat:[], destaque:false, wpp:false};
  ST.search = '';
  document.getElementById('mainSearch').value = '';
  document.querySelectorAll('.city-pill').forEach(p=>p.classList.remove('active'));
  document.querySelector('.city-pill').classList.add('active');
  document.querySelectorAll('.filter-item').forEach(el=>el.classList.remove('active'));
  renderBusinesses();
}

function searchBusinesses(q){ ST.search = q; renderBusinesses(); }
function sortBusinesses(val){ ST.sort = val; renderBusinesses(); }
function scrollToListing(){ document.getElementById('listing').scrollIntoView({behavior:'smooth'}); }

/* ── MODAL CADASTRO ── */
let currentStep = 1;

function openModal(){
  currentStep = 1;
  renderCatGrid();
  showStep(1);
  document.getElementById('modalBg').style.display = 'flex';
}
function closeModal(){ document.getElementById('modalBg').style.display = 'none'; }

function showStep(n){
  document.querySelectorAll('.modal-step').forEach(s=>s.classList.remove('active'));
  const el = document.getElementById('step'+n);
  if(el) el.classList.add('active');
  // Update indicators
  for(let i=1;i<=4;i++){
    const dot = document.getElementById('step-dot-'+i);
    if(!dot) continue;
    dot.className = 'step-dot'+(i<n?' done':i===n?' active':'');
  }
  currentStep = n;
  if(n===4) buildResumo();
}

function goStep(n){
  // Validation
  if(n===2 && !ST.selectedCat){ toast('Selecione uma categoria','warn'); return; }
  if(n===3){
    const name = document.getElementById('biz-name')?.value.trim();
    const city = document.getElementById('biz-city')?.value;
    const addr = document.getElementById('biz-address')?.value.trim();
    if(!name||!city||!addr){ toast('Preencha nome, cidade e endereço','warn'); return; }
  }
  showStep(n);
}

function selectDestaque(sim){
  const yLbl = document.getElementById('dest-yes-lbl');
  const nLbl = document.getElementById('dest-no-lbl');
  if(sim){ yLbl.style.borderColor='var(--accent)'; nLbl.style.borderColor='var(--line)'; }
  else { nLbl.style.borderColor='var(--green)'; yLbl.style.borderColor='var(--line)'; }
}

function buildResumo(){
  const box = document.getElementById('resumo-box');
  if(!box) return;
  const name = document.getElementById('biz-name')?.value||'—';
  const city = document.getElementById('biz-city')?.value||'—';
  const addr = document.getElementById('biz-address')?.value||'—';
  const phone = document.getElementById('biz-phone')?.value||'—';
  const catInfo = CATEGORIAS.find(c=>c.id===ST.selectedCat)||{label:'—',icon:'🏪'};
  const destaque = document.querySelector('input[name="destaque"]:checked')?.value==='sim';
  box.innerHTML = \`
    <div style="display:flex;justify-content:space-between;margin-bottom:6px"><span style="color:var(--ink3)">Negócio</span><strong>\${name}</strong></div>
    <div style="display:flex;justify-content:space-between;margin-bottom:6px"><span style="color:var(--ink3)">Categoria</span><strong>\${catInfo.icon} \${catInfo.label}</strong></div>
    <div style="display:flex;justify-content:space-between;margin-bottom:6px"><span style="color:var(--ink3)">Cidade</span><strong>\${city}</strong></div>
    <div style="display:flex;justify-content:space-between;margin-bottom:6px"><span style="color:var(--ink3)">Endereço</span><strong>\${addr}</strong></div>
    <div style="display:flex;justify-content:space-between;margin-bottom:10px"><span style="color:var(--ink3)">Telefone</span><strong>\${phone}</strong></div>
    <div style="border-top:1px solid var(--line);padding-top:10px">
      <div style="display:flex;justify-content:space-between;margin-bottom:4px"><span>Cadastro único</span><strong style="color:var(--red)">R$ 10,00</strong></div>
      <div style="display:flex;justify-content:space-between;margin-bottom:4px"><span>Mensalidade</span><strong style="color:var(--red)">R$ 2,50/mês</strong></div>
      \${destaque?\`<div style="display:flex;justify-content:space-between;margin-bottom:4px"><span>Destaque ⭐</span><strong style="color:var(--accent)">R$ 15,00/mês</strong></div>\`:''}
      <div style="display:flex;justify-content:space-between;border-top:1px solid var(--line);padding-top:8px;margin-top:4px"><span style="font-weight:700">Total inicial</span><strong style="color:var(--red);font-size:1.05rem">R$ \${destaque?'25,00':'10,00'}</strong></div>
    </div>\`;
}

function submitCadastro(){
  const ownerWpp = document.getElementById('owner-wpp')?.value.trim();
  const ownerName = document.getElementById('owner-name')?.value.trim();
  if(!ownerWpp||!ownerName){ toast('Preencha seu WhatsApp e nome','warn'); return; }
  // Simula envio
  showStep(5);
  const stepInd = document.getElementById('stepIndicator');
  if(stepInd) stepInd.innerHTML = '<div class="step-dot done" style="flex:1"></div>'.repeat(4);
  toast('Cadastro enviado com sucesso! 🎉','ok');
  addLog('Novo cadastro enviado: '+document.getElementById('biz-name')?.value);
}

function addDemoCard(){
  const name = document.getElementById('biz-name')?.value||'Novo Negócio';
  const city = document.getElementById('biz-city')?.value||'Taquara';
  const catId = ST.selectedCat||'servicos';
  const catInfo = CATEGORIAS.find(c=>c.id===catId)||{icon:'🏪',color:'#f5f5f5',tc:'#333',label:'Serviço'};
  const phone = document.getElementById('biz-phone')?.value||'(51) 98144-6019';
  const wpp = document.getElementById('biz-wpp')?.value||document.getElementById('biz-phone')?.value||'';
  const desc = document.getElementById('biz-desc')?.value||'';
  const addr = document.getElementById('biz-address')?.value||'—';
  const hours = document.getElementById('biz-hours')?.value||'';
  const newId = Math.max(...BUSINESSES_DB.map(b=>b.id))+1;
  const cityKey = {taquara:'taquara',rolante:'rolante','três coroas':'tres-coroas',igrejinha:'igrejinha',parobé:'parobé'}[city.toLowerCase()]||'taquara';
  BUSINESSES_DB.push({id:newId,name,cat:catId,city:cityKey,neighborhood:'',address:addr,phone,wpp:wpp.replace(/\\D/g,''),hours,desc,destaque:false,icon:catInfo.icon});
  renderBusinesses();
  toast('Seu negócio apareceu no portal! (pendente aprovação)','ok');
  // Scroll to listing
  setTimeout(()=>document.getElementById('listing').scrollIntoView({behavior:'smooth'}),300);
}

/* ── TOAST ── */
function toast(msg, type='ok'){
  const wrap = document.getElementById('toastWrap');
  const t = document.createElement('div');
  t.className = 'toast'+(type==='err'?' err':type==='warn'||type==='info'?' info':'');
  t.innerHTML = \`<span>\${type==='ok'?'✓':type==='err'?'✕':'ℹ'}</span><span>\${msg}</span>\`;
  wrap.appendChild(t);
  setTimeout(()=>{ t.style.opacity='0'; t.style.transform='translateX(100%)'; t.style.transition='all .3s'; setTimeout(()=>t.remove(),300); }, 3500);
}

function addLog(msg){ console.log('[ValIndica]', msg); }

/* ── INIT ── */
function init(){
  renderCatFilters();
  renderBusinesses();
  fetchRadioAPI();
  setInterval(fetchRadioAPI, 30000);
  // Simulate live counter
  setInterval(()=>{
    const delta = Math.floor(Math.random()*5)-2;
    // update stats
  }, 8000);
}

window.addEventListener('load', init);
</script>
</body>
</html>

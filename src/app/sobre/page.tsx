import { ChevronRight, Heart, Users, Star, Shield, Zap, Globe, Radio, TrendingUp, Mic, MessageCircle, Trophy } from 'lucide-react';
import Link from 'next/link';

const SobrePage = () => {
    return (
        <>
            <style>{`
                .about-grid{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;margin-bottom:72px}
                .about-disc{width:320px;height:320px;border-radius:50%;background:var(--ink);margin:0 auto;display:flex;align-items:center;justify-content:center;position:relative;animation:spin 18s linear infinite}
                .about-disc::before{content:'';position:absolute;inset:0;border-radius:50%;background:repeating-radial-gradient(circle,transparent,transparent 10px,rgba(255,255,255,.04) 11px,transparent 12px)}
                .about-disc-c{width:64px;height:64px;background:var(--red);border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:'Playfair Display',serif;font-weight:900;color:#fff;font-size:.9rem;z-index:2}
                @keyframes spin{to{transform:rotate(360deg)}}
                .values-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:52px}
                .value-card{background:var(--bg2);border:1px solid var(--line);border-radius:8px;padding:28px 22px;transition:all .25s}
                .value-card:hover{transform:translateY(-4px);box-shadow:0 12px 36px rgba(0,0,0,.09);border-color:var(--red)}
                .value-icon{width:48px;height:48px;background:var(--red-light);border-radius:50%;display:flex;align-items:center;justify-content:center;color:var(--red);margin-bottom:14px}
                .value-title{font-family:'Playfair Display',serif;font-weight:700;font-size:1rem;margin-bottom:7px}
                .value-desc{font-size:.8rem;color:var(--ink3);line-height:1.7}
                .timeline{position:relative;margin-top:52px}
                .timeline::before{content:'';position:absolute;left:18px;top:0;bottom:0;width:2px;background:var(--line)}
                .tl-item{display:flex;gap:24px;margin-bottom:36px;position:relative}
                .tl-dot{width:38px;height:38px;border-radius:50%;background:var(--red);display:flex;align-items:center;justify-content:center;color:#fff;flex-shrink:0;z-index:1}
                .tl-year{font-family:'DM Mono',monospace;font-size:.62rem;letter-spacing:.14em;color:var(--red);margin-bottom:4px}
                .tl-title{font-weight:700;font-size:.95rem;margin-bottom:4px}
                .tl-desc{font-size:.82rem;color:var(--ink3);line-height:1.65}
                .stats-band{background:var(--ink);padding:60px 0;margin:60px -48px;text-align:center}
                .stats-band-inner{display:grid;grid-template-columns:repeat(4,1fr);gap:40px;max-width:1280px;margin:0 auto;padding:0 48px}
                .sb-num{font-family:'Playfair Display',serif;font-size:2.8rem;font-weight:900;color:var(--red);display:block;line-height:1}
                .sb-lbl{font-family:'DM Mono',monospace;font-size:.6rem;letter-spacing:.2em;color:rgba(255,255,255,.45);text-transform:uppercase;margin-top:6px;display:block}
                @media(max-width:900px){.about-grid{grid-template-columns:1fr}.values-grid{grid-template-columns:1fr 1fr}.stats-band-inner{grid-template-columns:1fr 1fr}}
                @media(max-width:600px){.values-grid{grid-template-columns:1fr}.stats-band-inner{grid-template-columns:1fr 1fr}}
            `}</style>
            <div className="page-hero">
                <div className="page-hero-red"></div>
                <div className="page-hero-inner">
                    <div className="page-hero-eyebrow">Nossa História</div>
                    <h1>Sobre a <em>DMG Records</em></h1>
                    <p>Conheça a história, os valores e a missão da rádio que conecta artistas e ouvintes há mais de 8 anos.</p>
                </div>
            </div>

            <section className="sec">
                <div className="sec-inner">
                    <div className="breadcrumb fi">
                        <Link href="/">Início</Link><ChevronRight style={{ width: '12px', height: '12px' }} />
                        <span>Sobre Nós</span>
                    </div>

                    <div className="about-grid fi">
                        <div>
                            <div className="section-eyebrow">Nossa Missão</div>
                            <h2 className="section-title">Música que <em>transforma</em></h2>
                            <p style={{ fontSize: '.95rem', color: 'var(--ink3)', lineHeight: 1.82, marginBottom: '18px' }}>A <strong style={{ color: 'var(--ink)' }}>DMG Records Rádio</strong> nasceu da paixão pela música e pelo poder transformador do rádio. Somos uma web rádio comprometida com a qualidade musical e a valorização dos artistas brasileiros.</p>
                            <p style={{ fontSize: '.95rem', color: 'var(--ink3)', lineHeight: 1.82, marginBottom: '18px' }}>Nossa programação é cuidadosamente curada para atender todos os gostos: do sertanejo raiz ao gospel contemporâneo, do pop nacional ao rock alternativo. Cada hora do dia tem seu som especial.</p>
                            <p style={{ fontSize: '.95rem', color: 'var(--ink3)', lineHeight: 1.82 }}>Com <strong style={{ color: 'var(--ink)' }}>transmissão 24 horas ininterruptas</strong>, levamos música, entretenimento e fé para ouvintes em todo o Brasil e no mundo.</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div className="about-disc"><div className="about-disc-c">DMG</div></div>
                        </div>
                    </div>

                    <div className="stats-band fi">
                        <div className="stats-band-inner">
                            <div><span className="sb-num" data-count="8">0</span><span className="sb-lbl">Anos no Ar</span></div>
                            <div><span className="sb-num" data-count="15000">0</span><span className="sb-lbl">Ouvintes/Dia</span></div>
                            <div><span className="sb-num" data-count="5000">0</span><span className="sb-lbl">Músicas no Acervo</span></div>
                            <div><span className="sb-num" data-count="12">0</span><span className="sb-lbl">Locutores</span></div>
                        </div>
                    </div>

                    <div className="sec-header fi" style={{ marginTop: '64px' }}>
                        <div className="section-eyebrow">Valores</div>
                        <h2 className="section-title">O que nos <em>guia</em></h2>
                    </div>
                    <div className="values-grid fi">
                        <div className="value-card"><div className="value-icon icon"><Heart style={{ width: '22px', height: '22px' }} /></div><div className="value-title">Paixão pela Música</div><p className="value-desc">Acreditamos no poder da música para transformar vidas, alegrar corações e unir pessoas de todas as idades e origens.</p></div>
                        <div className="value-card"><div className="value-icon icon"><Users style={{ width: '22px', height: '22px' }} /></div><div className="value-title">Comunidade</div><p className="value-desc">Somos feitos de e para os ouvintes. Nossa programação é moldada pelos pedidos, gostos e preferências da nossa comunidade.</p></div>
                        <div className="value-card"><div className="value-icon icon"><Star style={{ width: '22px', height: '22px' }} /></div><div className="value-title">Qualidade</div><p className="value-desc">Investimos em tecnologia e talentos para oferecer sempre a melhor experiência sonora, com transmissões estáveis e cristalinas.</p></div>
                        <div className="value-card"><div className="value-icon icon"><Shield style={{ width: '22px', height: '22px' }} /></div><div className="value-title">Integridade</div><p className="value-desc">Transparência nas relações com anunciantes, ouvintes e artistas. Honestidade é a base de tudo que fazemos.</p></div>
                        <div className="value-card"><div className="value-icon icon"><Zap style={{ width: '22px', height: '22px' }} /></div><div className="value-title">Inovação</div><p className="value-desc">Estamos sempre atualizando nossa plataforma, formatos e programação para acompanhar o que há de melhor no mundo digital.</p></div>
                        <div className="value-card"><div className="value-icon icon"><Globe style={{ width: '22px', height: '22px' }} /></div><div className="value-title">Alcance Global</div><p className="value-desc">Nossa web rádio alcança ouvintes em todo o Brasil e em mais de 30 países pelo mundo, levando a cultura brasileira para além das fronteiras.</p></div>
                    </div>

                    <div className="sec-header fi" style={{ marginTop: '64px' }}>
                        <div className="section-eyebrow">Nossa Jornada</div>
                        <h2 className="section-title">A história da <em>DMG Records</em></h2>
                    </div>
                    <div className="timeline fi">
                        <div className="tl-item"><div className="tl-dot icon"><Radio style={{ width: '16px', height: '16px' }} /></div><div><div className="tl-year">2017</div><div className="tl-title">O início</div><div className="tl-desc">A DMG Records Rádio começa a transmitir com uma pequena equipe de apaixonados por música, alcançando os primeiros 100 ouvintes simultâneos.</div></div></div>
                        <div className="tl-item"><div className="tl-dot icon"><TrendingUp style={{ width: '16px', height: '16px' }} /></div><div><div className="tl-year">2018</div><div className="tl-title">Crescimento acelerado</div><div className="tl-desc">Alcançamos 1.000 ouvintes diários e expandimos nossa grade horária para 24 horas com programação ao vivo durante o dia.</div></div></div>
                        <div className="tl-item"><div className="tl-dot icon"><Mic style={{ width: '16px', height: '16px' }} /></div><div><div className="tl-year">2020</div><div className="tl-title">Novos talentos</div><div className="tl-desc">Contratamos novos locutores e expandimos os gêneros musicais, incluindo Gospel, Rock e Pop. A rádio se torna referência nacional.</div></div></div>
                        <div className="tl-item"><div className="tl-dot icon"><MessageCircle style={{ width: '16px', height: '16px' }} /></div><div><div className="tl-year">2022</div><div className="tl-title">Chat e interatividade</div><div className="tl-desc">Lançamos o chat ao vivo e o sistema de pedidos, conectando ouvintes e locutores em tempo real. A comunidade explode.</div></div></div>
                        <div className="tl-item"><div className="tl-dot icon"><Trophy style={{ width: '16px', height: '16px' }} /></div><div><div className="tl-year">2025</div><div className="tl-title">15 mil ouvintes diários</div><div className="tl-desc">Batemos o recorde de 15.000 ouvintes diários e lançamos o novo site com player integrado, chat e pedidos automáticos.</div></div></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SobrePage;

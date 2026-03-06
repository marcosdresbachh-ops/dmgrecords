import { ChevronRight, Volume2, Check, Star, Mic, Trophy, Megaphone, Plus } from 'lucide-react';
import Link from 'next/link';

const AnunciePage = () => {
    return (
        <>
            <style>{`
                .plans-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-bottom:60px}
                .plan-card{background:var(--bg2);border:1px solid var(--line);border-radius:10px;padding:32px 24px;text-align:center;transition:all .25s;position:relative;overflow:hidden}
                .plan-card:hover{transform:translateY(-6px);box-shadow:0 16px 48px rgba(0,0,0,.11);border-color:var(--red)}
                .plan-card.featured{border:2px solid var(--red);background:var(--red-light)}
                .plan-badge{position:absolute;top:16px;right:-28px;background:var(--red);color:#fff;font-family:'DM Mono',monospace;font-size:.56rem;letter-spacing:.14em;padding:4px 40px;transform:rotate(35deg)}
                .plan-icon{width:56px;height:56px;border-radius:50%;background:var(--red-light);display:flex;align-items:center;justify-content:center;color:var(--red);margin:0 auto 16px}
                .plan-featured .plan-icon{background:rgba(212,36,58,.15)}
                .plan-name{font-family:'Playfair Display',serif;font-size:1.15rem;font-weight:900;margin-bottom:6px}
                .plan-desc{font-size:.8rem;color:var(--ink3);line-height:1.65;margin-bottom:18px;min-height:50px}
                .plan-price{font-family:'Playfair Display',serif;font-size:2rem;font-weight:900;color:var(--red);line-height:1}
                .plan-price-period{font-family:'Outfit',sans-serif;font-size:.75rem;color:var(--ink3);font-weight:400;margin-bottom:18px}
                .plan-features{text-align:left;margin-bottom:22px}
                .plan-feat{display:flex;align-items:center;gap:8px;font-size:.8rem;padding:5px 0;border-bottom:1px solid var(--line);color:var(--ink2)}
                .plan-feat:last-child{border:none}
                .plan-feat .icon{color:var(--green);flex-shrink:0}
                .stats-row{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-bottom:60px}
                .stat-box{background:var(--bg2);border:1px solid var(--line);border-radius:8px;padding:28px 20px;text-align:center;transition:all .25s}
                .stat-box:hover{border-color:var(--red);transform:translateY(-3px);box-shadow:0 8px 28px rgba(0,0,0,.08)}
                .stat-num{font-family:'Playfair Display',serif;font-size:2.4rem;font-weight:900;color:var(--red);display:block;line-height:1}
                .stat-lbl{font-family:'DM Mono',monospace;font-size:.58rem;letter-spacing:.15em;color:var(--ink3);margin-top:6px;display:block;text-transform:uppercase}
                .faq-item{border-bottom:1px solid var(--line)}
                .faq-q{display:flex;align-items:center;justify-content:space-between;padding:18px 0;cursor:pointer;font-weight:600;font-size:.95rem;gap:12px}
                .faq-q:hover{color:var(--red)}
                .faq-a{padding:0 0 18px;font-size:.88rem;color:var(--ink3);line-height:1.75;display:none}
                .faq-a.open{display:block}
                .faq-ico{flex-shrink:0;color:var(--red);transition:transform .25s}
                .faq-ico.open{transform:rotate(45deg)}
                .testimonials{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:52px}
                .test-card{background:var(--bg2);border:1px solid var(--line);border-radius:8px;padding:24px}
                .test-quote{font-size:.88rem;color:var(--ink2);line-height:1.75;margin-bottom:16px;font-style:italic}
                .test-author{display:flex;align-items:center;gap:10px}
                .test-avatar{width:38px;height:38px;border-radius:50%;background:var(--red);display:flex;align-items:center;justify-content:center;font-family:'Playfair Display',serif;font-weight:900;color:#fff;font-size:.85rem;flex-shrink:0}
                .test-name{font-weight:700;font-size:.85rem}
                .test-biz{font-size:.74rem;color:var(--ink3)}
                @media(max-width:900px){.plans-grid{grid-template-columns:1fr 1fr}.stats-row{grid-template-columns:1fr 1fr}.testimonials{grid-template-columns:1fr}}
                @media(max-width:600px){.plans-grid{grid-template-columns:1fr}}
            `}</style>
            <div className="page-hero">
                <div className="page-hero-red"></div>
                <div className="page-hero-inner">
                    <div className="page-hero-eyebrow">Publicidade</div>
                    <h1>Anuncie na <em>DMG Records</em></h1>
                    <p>Alcance milhares de ouvintes diariamente. A rádio perfeita para conectar sua marca ao público certo.</p>
                </div>
            </div>

            <section className="sec">
                <div className="sec-inner">
                    <div className="breadcrumb fi">
                        <Link href="/">Início</Link><ChevronRight style={{ width: '12px', height: '12px' }} />
                        <span>Anuncie</span>
                    </div>

                    <div className="stats-row fi">
                        <div className="stat-box"><span className="stat-num" data-count="15000">0</span><span className="stat-lbl">Ouvintes/Dia</span></div>
                        <div className="stat-box"><span className="stat-num" data-count="8">0</span><span className="stat-lbl">Anos no Ar</span></div>
                        <div className="stat-box"><span className="stat-num" data-count="24">0</span><span className="stat-lbl">Horas/Dia</span></div>
                        <div className="stat-box"><span className="stat-num" data-count="95">0</span><span className="stat-lbl">% Satisfação</span></div>
                    </div>

                    <div className="sec-header fi">
                        <div className="section-eyebrow">Planos</div>
                        <h2 className="section-title">Escolha o plano <em>ideal</em></h2>
                        <p className="section-sub">Temos opções para todos os tamanhos de negócio, desde o pequeno empreendedor até grandes marcas.</p>
                    </div>
                    <div className="plans-grid fi">
                        <div className="plan-card">
                            <div className="plan-icon icon"><Volume2 style={{ width: '22px', height: '22px' }} /></div>
                            <div className="plan-name">Spot 30s</div>
                            <div className="plan-desc">Comercial de 30 segundos inserido nos blocos da programação.</div>
                            <div className="plan-price">R$ 150</div>
                            <div className="plan-price-period">por semana</div>
                            <div className="plan-features">
                                <div className="plan-feat"><span className="icon"><Check style={{ width: '13px', height: '13px' }} /></span> 1 spot de 30 segundos</div>
                                <div className="plan-feat"><span className="icon"><Check style={{ width: '13px', height: '13px' }} /></span> 6× ao dia</div>
                                <div className="plan-feat"><span className="icon"><Check style={{ width: '13px', height: '13px' }} /></span> Relatório de veiculações</div>
                            </div>
                            <Link href="/contato" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>Contratar</Link>
                        </div>
                        <div className="plan-card featured">
                            <div className="plan-badge">POPULAR</div>
                            <div className="plan-icon icon" style={{ background: 'rgba(212,36,58,.15)' }}><Star style={{ width: '22px', height: '22px' }} /></div>
                            <div className="plan-name">Patrocínio</div>
                            <div className="plan-desc">Patrocine um programa completo com menção ao vivo pelo locutor.</div>
                            <div className="plan-price">R$ 490</div>
                            <div className="plan-price-period">por mês</div>
                            <div className="plan-features">
                                <div className="plan-feat"><span className="icon"><Check style={{ width: '13px', height: '13px' }} /></span> Menção ao vivo diária</div>
                                <div className="plan-feat"><span className="icon"><Check style={{ width: '13px', height: '13px' }} /></span> 2 spots por programa</div>
                                <div className="plan-feat"><span className="icon"><Check style={{ width: '13px', height: '13px' }} /></span> Logo no site da rádio</div>
                                <div className="plan-feat"><span className="icon"><Check style={{ width: '13px', height: '13px' }} /></span> Relatório mensal</div>
                            </div>
                            <Link href="/contato" className="btn btn-red" style={{ width: '100%', justifyContent: 'center' }}>Contratar</Link>
                        </div>
                        <div className="plan-card">
                            <div className="plan-icon icon"><Mic style={{ width: '22px', height: '22px' }} /></div>
                            <div className="plan-name">Vinheta</div>
                            <div className="plan-desc">Produção e veiculação de vinheta personalizada com sua marca.</div>
                            <div className="plan-price">R$ 280</div>
                            <div className="plan-price-period">por mês</div>
                            <div className="plan-features">
                                <div className="plan-feat"><span className="icon"><Check style={{ width: '13px', height: '13px' }} /></span> Produção da vinheta</div>
                                <div className="plan-feat"><span className="icon"><Check style={{ width: '13px', height: '13px' }} /></span> Veiculação horária</div>
                                <div className="plan-feat"><span className="icon"><Check style={{ width: '13px', height: '13px' }} /></span> Arquivo master incluso</div>
                            </div>
                            <Link href="/contato" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>Contratar</Link>
                        </div>
                        <div className="plan-card">
                            <div className="plan-icon icon"><Trophy style={{ width: '22px', height: '22px' }} /></div>
                            <div className="plan-name">Premium</div>
                            <div className="plan-desc">Pacote completo: spots, vinheta, patrocínio e banner no site.</div>
                            <div className="plan-price">R$ 890</div>
                            <div className="plan-price-period">por mês</div>
                            <div className="plan-features">
                                <div className="plan-feat"><span className="icon"><Check style={{ width: '13px', height: '13px' }} /></span> Tudo do Patrocínio</div>
                                <div className="plan-feat"><span className="icon"><Check style={{ width: '13px', height: '13px' }} /></span> Vinheta personalizada</div>
                                <div className="plan-feat"><span className="icon"><Check style={{ width: '13px', height: '13px' }} /></span> Banner no site</div>
                                <div className="plan-feat"><span className="icon"><Check style={{ width: '13px', height: '13px' }} /></span> Redes sociais</div>
                            </div>
                            <Link href="/contato" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>Contratar</Link>
                        </div>
                    </div>

                    <div className="sec-header fi">
                        <div className="section-eyebrow">Depoimentos</div>
                        <h2 className="section-title">O que nossos <em>anunciantes</em> dizem</h2>
                    </div>
                    <div className="testimonials fi">
                        <div className="test-card">
                            <div className="test-quote">"Anunciar na DMG Records triplicou o reconhecimento da nossa marca na cidade. Os ouvintes fiéis realmente compram!"</div>
                            <div className="test-author"><div className="test-avatar">J</div><div><div className="test-name">João Pereira</div><div className="test-biz">Supermercado Central</div></div></div>
                        </div>
                        <div className="test-card">
                            <div className="test-quote">"Nossa pizzaria lotou nos finais de semana depois que começamos a veicular na DMG. O retorno foi imediato."</div>
                            <div className="test-author"><div className="test-avatar">M</div><div><div className="test-name">Maria Souza</div><div className="test-biz">Pizzaria Dom Marco</div></div></div>
                        </div>
                        <div className="test-card">
                            <div className="test-quote">"A equipe é muito profissional e o atendimento personalizado faz toda a diferença. Renovo o contrato sempre."</div>
                            <div className="test-author"><div className="test-avatar">R</div><div><div className="test-name">Ricardo Alves</div><div className="test-biz">Auto Peças Alves</div></div></div>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '52px', padding: '40px', background: 'var(--ink)', borderRadius: '10px' }} className="fi">
                        <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.8rem', fontWeight: 900, color: '#fff', marginBottom: '10px' }}>Pronto para anunciar?</h3>
                        <p style={{ color: 'rgba(255,255,255,.6)', marginBottom: '24px', fontSize: '.92rem' }}>Nossa equipe responde em até 2 horas em dias úteis.</p>
                        <Link href="/contato" className="btn btn-accent">
                            <Megaphone style={{ width: '16px', height: '16px' }} /> Solicitar Proposta
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AnunciePage;

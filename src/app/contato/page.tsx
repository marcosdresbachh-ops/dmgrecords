import { ChevronRight, Phone, Mail, Megaphone, Clock, ArrowRight, Instagram, Facebook, Youtube, Twitter } from 'lucide-react';
import Link from 'next/link';
import { ContactForm } from './ContactForm';

const ContatoPage = () => {
    return (
        <>
            <style>{`
                .contato-grid{display:grid;grid-template-columns:1.2fr 1fr;gap:56px;align-items:start}
                .ci-title{font-family:var(--font-playfair-display),serif;font-size:1.5rem;font-weight:700;margin-bottom:14px;line-height:1.2}
                .ci-desc{font-size:.9rem;color:var(--ink3);line-height:1.75;margin-bottom:28px}
                .ci-items{display:flex;flex-direction:column;gap:14px;margin-bottom:22px}
                .ci-item{display:flex;align-items:center;gap:14px;padding:15px 18px;background:var(--bg3);border-radius:6px;border:1px solid var(--line);transition:border-color .2s;text-decoration:none;color:inherit}
                .ci-item:hover{border-color:var(--red)}
                .ci-icon{width:42px;height:42px;flex-shrink:0;background:var(--red-light);border-radius:50%;display:flex;align-items:center;justify-content:center;color:var(--red)}
                .ci-lbl{font-family:var(--font-dm-mono),monospace;font-size:.56rem;letter-spacing:.18em;text-transform:uppercase;color:var(--ink3);margin-bottom:2px}
                .ci-val{font-weight:600;font-size:.88rem}
                .wa-btn{display:flex;align-items:center;gap:13px;background:#25D366;border-radius:6px;padding:16px 20px;color:#fff;transition:all .2s;text-decoration:none}
                .wa-btn:hover{opacity:.92;transform:translateY(-2px)}
                .wa-top{font-weight:700;font-size:.92rem}
                .wa-sub{font-size:.76rem;opacity:.8;margin-top:1px}
                .social-row{display:flex;gap:10px;margin-top:18px}
                .soc-btn{width:42px;height:42px;border:1.5px solid var(--line);border-radius:50%;display:flex;align-items:center;justify-content:center;color:var(--ink3);transition:all .2s;cursor:pointer}
                .soc-btn:hover{border-color:var(--red);background:var(--red-light);color:var(--red)}
                .map-placeholder{margin-top:52px;background:var(--bg3);border:1px solid var(--line);border-radius:8px;height:200px;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:8px;color:var(--ink3)}
                @media(max-width:768px){.contato-grid{grid-template-columns:1fr}}
            `}</style>
            <div className="page-hero">
                <div className="page-hero-red"></div>
                <div className="page-hero-inner">
                    <div className="page-hero-eyebrow">Fale Conosco</div>
                    <h1>Entre em <em>Contato</em></h1>
                    <p>Dúvidas, publicidade, sugestão de música ou parceria — estamos prontos para atender você.</p>
                </div>
            </div>

            <section className="sec">
                <div className="sec-inner">
                    <div className="breadcrumb fi">
                        <Link href="/">Início</Link><ChevronRight style={{ width: '12px', height: '12px' }} />
                        <span>Contato</span>
                    </div>
                    <div className="contato-grid">
                        <div className="fi">
                            <div className="sec-header">
                                <div className="section-eyebrow">Formulário</div>
                                <h2 className="section-title">Envie sua <em>mensagem</em></h2>
                            </div>
                            <ContactForm />
                        </div>

                        <div className="fi">
                            <h3 className="ci-title">Nossos <em style={{ color: 'var(--red)' }}>canais</em> de atendimento</h3>
                            <p className="ci-desc">Atendemos de segunda a sexta das 9h às 18h. Para sugestões de música e pedidos, envie a qualquer hora!</p>
                            <div className="ci-items">
                                <a href="https://wa.me/5500000000000" className="ci-item" target="_blank" rel="noopener noreferrer">
                                    <div className="ci-icon icon"><Phone style={{ width: '17px', height: '17px' }} /></div>
                                    <div><div className="ci-lbl">WhatsApp</div><div className="ci-val">(55) 00000-0000</div></div>
                                </a>
                                <a href="mailto:contato@dmgrecords.com.br" className="ci-item">
                                    <div className="ci-icon icon"><Mail style={{ width: '17px', height: '17px' }} /></div>
                                    <div><div className="ci-lbl">E-mail</div><div className="ci-val">contato@dmgrecords.com.br</div></div>
                                </a>
                                <a href="mailto:publicidade@dmgrecords.com.br" className="ci-item">
                                    <div className="ci-icon icon"><Megaphone style={{ width: '17px', height: '17px' }} /></div>
                                    <div><div className="ci-lbl">Publicidade</div><div className="ci-val">publicidade@dmgrecords.com.br</div></div>
                                </a>
                                <div className="ci-item">
                                    <div className="ci-icon icon"><Clock style={{ width: '17px', height: '17px' }} /></div>
                                    <div><div className="ci-lbl">Horário de Atendimento</div><div className="ci-val">Seg–Sex · 09h às 18h</div></div>
                                </div>
                            </div>
                            <a href="https://wa.me/5500000000000" className="wa-btn" target="_blank" rel="noopener noreferrer">
                                <div style={{ fontSize: '1.5rem' }}>💬</div>
                                <div><div className="wa-top">Falar agora no WhatsApp</div><div className="wa-sub">Resposta rápida · Atendimento imediato</div></div>
                                <ArrowRight style={{ width: '18px', height: '18px', marginLeft: 'auto' }} />
                            </a>
                            <div style={{ marginTop: '18px' }}>
                                <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: '.6rem', letterSpacing: '.18em', color: 'var(--ink3)', textTransform: 'uppercase', marginBottom: '12px' }}>Redes Sociais</div>
                                <div className="social-row">
                                    <div className="soc-btn icon"><Instagram style={{ width: '17px', height: '17px' }} /></div>
                                    <div className="soc-btn icon"><Facebook style={{ width: '17px', height: '17px' }} /></div>
                                    <div className="soc-btn icon"><Youtube style={{ width: '17px', height: '17px' }} /></div>
                                    <div className="soc-btn icon"><Twitter style={{ width: '17px', height: '17px' }} /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContatoPage;

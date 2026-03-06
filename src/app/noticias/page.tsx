import { ChevronRight, Star, Music, TrendingUp, Zap, MapPin, Radio, Heart, Disc, Mic, Calendar, RefreshCw } from 'lucide-react';
import Link from 'next/link';

const NoticiasPage = () => {
    return (
        <>
            <style>{`
                .news-hero-grid{display:grid;grid-template-columns:2fr 1fr;gap:24px;margin-bottom:24px}
                .news-secondary{display:grid;grid-template-columns:1fr 1fr 1fr;gap:24px}
                .news-card{background:var(--bg2);border:1px solid var(--line);border-radius:8px;overflow:hidden;transition:all .25s}
                .news-card:hover{transform:translateY(-4px);box-shadow:0 14px 40px rgba(0,0,0,.1)}
                .news-img{width:100%;overflow:hidden;display:flex;align-items:center;justify-content:center;font-size:3.5rem}
                .news-featured .news-img{aspect-ratio:16/7}
                .news-card .news-img{aspect-ratio:16/9}
                .news-body{padding:20px 22px 22px}
                .news-cat{font-family:'DM Mono',monospace;font-size:.58rem;letter-spacing:.2em;text-transform:uppercase;color:var(--red);margin-bottom:8px;display:flex;align-items:center;gap:5px}
                .news-title{font-family:'Playfair Display',serif;font-weight:700;font-size:1.05rem;line-height:1.28;margin-bottom:8px}
                .news-featured .news-title{font-size:1.55rem}
                .news-excerpt{font-size:.8rem;color:var(--ink3);line-height:1.72;margin-bottom:12px}
                .news-meta{display:flex;align-items:center;gap:10px}
                .news-date{font-family:'DM Mono',monospace;font-size:.58rem;color:var(--ink3);display:flex;align-items:center;gap:4px}
                .news-tag{background:var(--red-light);color:var(--red);font-family:'DM Mono',monospace;font-size:.56rem;letter-spacing:.12em;text-transform:uppercase;padding:2px 8px;border-radius:3px}
                .filters{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:40px}
                .filter-btn{font-family:'DM Mono',monospace;font-size:.62rem;letter-spacing:.14em;text-transform:uppercase;padding:7px 16px;border:1.5px solid var(--line);background:transparent;color:var(--ink3);border-radius:3px;cursor:pointer;transition:all .2s}
                .filter-btn.active,.filter-btn:hover{border-color:var(--red);color:var(--red);background:var(--red-light)}
                @media(max-width:900px){.news-hero-grid{grid-template-columns:1fr}.news-secondary{grid-template-columns:1fr 1fr}}
                @media(max-width:600px){.news-secondary{grid-template-columns:1fr}}
            `}</style>
            <div className="page-hero">
                <div className="page-hero-red"></div>
                <div className="page-hero-inner">
                    <div className="page-hero-eyebrow">Blog & Informação</div>
                    <h1>Notícias & <em>Blog</em></h1>
                    <p>Novidades do mundo musical, entrevistas exclusivas e os bastidores da DMG Records Rádio.</p>
                </div>
            </div>

            <section className="sec">
                <div className="sec-inner">
                    <div className="breadcrumb fi">
                        <Link href="/">Início</Link><ChevronRight style={{ width: '12px', height: '12px' }} />
                        <span>Notícias</span>
                    </div>

                    <div className="filters fi">
                        <button className="filter-btn active">Todos</button>
                        <button className="filter-btn">Sertanejo</button>
                        <button className="filter-btn">Gospel</button>
                        <button className="filter-btn">Pop / R&B</button>
                        <button className="filter-btn">Rock</button>
                        <button className="filter-btn">Rádio</button>
                        <button className="filter-btn">Entrevistas</button>
                    </div>

                    <div className="news-hero-grid fi">
                        <div className="news-card news-featured">
                            <div className="news-img" style={{ background: 'linear-gradient(135deg,#1a1a2e,#D4243A)' }}>🎤</div>
                            <div className="news-body">
                                <div className="news-cat"><Star style={{ width: '11px', height: '11px' }} /> Entrevista Exclusiva</div>
                                <h2 className="news-title">Henrique & Juliano falam sobre novo álbum e parceria com a DMG Records Rádio</h2>
                                <p className="news-excerpt">Em papo exclusivo com nossa equipe, a dupla revelou os bastidores do novo projeto e agradeceu ao carinho dos ouvintes ao longo de todos esses anos. Uma conversa emocionante e cheia de revelações surpreendentes sobre o futuro da dupla.</p>
                                <div className="news-meta">
                                    <span className="news-date"><Calendar style={{ width: '11px', height: '11px' }} /> 15 Jan 2025</span>
                                    <span className="news-tag">Destaque</span>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <div className="news-card">
                                <div className="news-img" style={{ background: 'linear-gradient(135deg,#1B6B35,#25D366)', height: '120px' }}>🙏</div>
                                <div className="news-body">
                                    <div className="news-cat"><Music style={{ width: '11px', height: '11px' }} /> Gospel</div>
                                    <h3 className="news-title" style={{ fontSize: '.95rem' }}>Fernandinho lança novo CD gravado ao vivo</h3>
                                    <div className="news-meta"><span className="news-date"><Calendar style={{ width: '11px', height: '11px' }} /> 10 Jan 2025</span></div>
                                </div>
                            </div>
                            <div className="news-card">
                                <div className="news-img" style={{ background: 'linear-gradient(135deg,#7B1FA2,#E040FB)', height: '120px' }}>🎵</div>
                                <div className="news-body">
                                    <div className="news-cat"><TrendingUp style={{ width: '11px', height: '11px' }} /> Pop / R&B</div>
                                    <h3 className="news-title" style={{ fontSize: '.95rem' }}>Os maiores hits do Pop brasileiro em 2025</h3>
                                    <div className="news-meta"><span className="news-date"><Calendar style={{ width: '11px', height: '11px' }} /> 08 Jan 2025</span></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="news-secondary fi">
                        <div className="news-card">
                            <div className="news-img" style={{ background: 'linear-gradient(135deg,#AD1457,#E91E63)' }}>🎸</div>
                            <div className="news-body">
                                <div className="news-cat"><Zap style={{ width: '11px', height: '11px' }} /> Rock</div>
                                <h3 className="news-title">Rock nacional: as bandas que prometem dominar 2025</h3>
                                <p className="news-excerpt">Da cena underground às grandes arenas, o rock brasileiro está mais vivo do que nunca.</p>
                                <div className="news-meta"><span className="news-date"><Calendar style={{ width: '11px', height: '11px' }} /> 05 Jan 2025</span></div>
                            </div>
                        </div>
                        <div className="news-card">
                            <div className="news-img" style={{ background: 'linear-gradient(135deg,#B36000,#FFA000)' }}>🤠</div>
                            <div className="news-body">
                                <div className="news-cat"><MapPin style={{ width: '11px', height: '11px' }} /> Sertanejo</div>
                                <h3 className="news-title">Agenda de shows sertanejos para o primeiro semestre</h3>
                                <p className="news-excerpt">Confira as principais datas e locais dos shows no Brasil em 2025.</p>
                                <div className="news-meta"><span className="news-date"><Calendar style={{ width: '11px', height: '11px' }} /> 03 Jan 2025</span></div>
                            </div>
                        </div>
                        <div className="news-card">
                            <div className="news-img" style={{ background: 'linear-gradient(135deg,#0D47A1,#42A5F5)' }}>📻</div>
                            <div className="news-body">
                                <div className="news-cat"><Radio style={{ width: '11px', height: '11px' }} /> Rádio</div>
                                <h3 className="news-title">DMG Records atinge marca de 15 mil ouvintes simultâneos</h3>
                                <p className="news-excerpt">Um novo recorde histórico para a nossa web rádio. Obrigado a todos os ouvintes!</p>
                                <div className="news-meta"><span className="news-date"><Calendar style={{ width: '11px', height: '11px' }} /> 01 Jan 2025</span></div>
                            </div>
                        </div>
                        <div className="news-card">
                            <div className="news-img" style={{ background: 'linear-gradient(135deg,#1A237E,#7986CB)' }}>🎶</div>
                            <div className="news-body">
                                <div className="news-cat"><Heart style={{ width: '11px', height: '11px' }} /> Gospel</div>
                                <h3 className="news-title">5 músicas gospel que marcaram 2024 e continuam tocando em 2025</h3>
                                <p className="news-excerpt">Uma seleção especial das canções que mais emocionaram os ouvintes durante o ano passado.</p>
                                <div className="news-meta"><span className="news-date"><Calendar style={{ width: '11px', height: '11px' }} /> 28 Dez 2024</span></div>
                            </div>
                        </div>
                        <div className="news-card">
                            <div className="news-img" style={{ background: 'linear-gradient(135deg,#880E4F,#F48FB1)' }}>💿</div>
                            <div className="news-body">
                                <div className="news-cat"><Disc style={{ width: '11px', height: '11px' }} /> Lançamentos</div>
                                <h3 className="news-title">Novos lançamentos sertanejos para acompanhar esta semana</h3>
                                <p className="news-excerpt">As duplas e artistas que lançaram trabalhos novos e estão bombando nas plataformas.</p>
                                <div className="news-meta"><span className="news-date"><Calendar style={{ width: '11px', height: '11px' }} /> 25 Dez 2024</span></div>
                            </div>
                        </div>
                        <div className="news-card">
                            <div className="news-img" style={{ background: 'linear-gradient(135deg,#004D40,#26A69A)' }}>🎙️</div>
                            <div className="news-body">
                                <div className="news-cat"><Mic style={{ width: '11px', height: '11px' }} /> Bastidores</div>
                                <h3 className="news-title">Conheça os bastidores de uma transmissão ao vivo na DMG Records</h3>
                                <p className="news-excerpt">Como funciona nossa equipe, equipamentos e a magia que acontece nos bastidores da rádio.</p>
                                <div className="news-meta"><span className="news-date"><Calendar style={{ width: '11px', height: '11px' }} /> 20 Dez 2024</span></div>
                            </div>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '44px' }} className="fi">
                        <button className="btn btn-outline">
                            <RefreshCw style={{ width: '15px', height: '15px' }} /> Carregar Mais Notícias
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NoticiasPage;

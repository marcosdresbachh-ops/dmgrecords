import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { ScheduleClient } from './ScheduleClient';

const ProgramacaoPage = () => {
    return (
        <>
            <style>{`
                .grade-tabs{display:flex;gap:0;margin-bottom:32px;border-bottom:2px solid var(--line);flex-wrap:wrap}
                .gtab{font-size:.8rem;font-weight:600;padding:10px 20px;cursor:pointer;border:none;background:transparent;color:var(--ink3);border-bottom:2px solid transparent;margin-bottom:-2px;transition:color .2s,border-color .2s}
                .gtab.active{color:var(--red);border-color:var(--red)}
                .gtab:hover:not(.active){color:var(--ink2)}
                .grade-panel{display:none}.grade-panel.active{display:block}
                .grade-table{width:100%;border-collapse:collapse}
                .grade-table thead th{font-family:var(--font-dm-mono), monospace;font-size:.58rem;letter-spacing:.2em;text-transform:uppercase;color:var(--ink3);padding:10px 14px;text-align:left;border-bottom:2px solid var(--line);background:var(--bg3)}
                .grade-table tbody tr{border-bottom:1px solid var(--line);transition:background .18s}
                .grade-table tbody tr:hover{background:var(--red-light)}
                .grade-table tbody tr.on-now{background:#FFF5F7;border-left:3px solid var(--red)}
                .grade-table td{padding:14px;vertical-align:middle}
                .gt-time{font-family:var(--font-dm-mono), monospace;font-size:.7rem;color:var(--ink3);white-space:nowrap;width:130px}
                .gt-show{font-weight:700;font-size:.92rem}
                .gt-host{font-size:.76rem;color:var(--ink3);margin-top:3px;display:flex;align-items:center;gap:5px}
                .on-now-tag{display:inline-flex;align-items:center;gap:5px;font-family:var(--font-dm-mono), monospace;font-size:.56rem;letter-spacing:.15em;text-transform:uppercase;color:var(--green);background:var(--green-bg);padding:3px 9px;border-radius:3px}
                /* Locutores */
                .djs-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:20px;margin-top:52px}
                .dj-card{background:var(--bg2);border:1px solid var(--line);border-radius:8px;padding:28px 20px;text-align:center;transition:all .25s}
                .dj-card:hover{transform:translateY(-4px);box-shadow:0 12px 36px rgba(0,0,0,.09);border-color:var(--red)}
                .dj-avatar{width:72px;height:72px;border-radius:50%;background:var(--red);margin:0 auto 14px;display:flex;align-items:center;justify-content:center;font-family:var(--font-playfair-display), serif;font-size:1.5rem;font-weight:900;color:#fff}
                .dj-name{font-family:var(--font-playfair-display), serif;font-weight:700;font-size:1rem;margin-bottom:4px}
                .dj-show{font-size:.78rem;color:var(--ink3);margin-bottom:8px}
                .dj-horario{font-family:var(--font-dm-mono), monospace;font-size:.6rem;letter-spacing:.12em;color:var(--red)}
            `}</style>
            <div className="page-hero">
                <div className="page-hero-red"></div>
                <div className="page-hero-inner">
                    <div className="page-hero-eyebrow">Grade Horária</div>
                    <h1>Nossa <em>Programação</em></h1>
                    <p>Música certa na hora certa. Confira nossa grade completa e não perca seu programa favorito.</p>
                </div>
            </div>

            <section className="sec">
                <div className="sec-inner">
                    <div className="breadcrumb fi">
                        <Link href="/">Início</Link><ChevronRight style={{ width: '12px', height: '12px' }} />
                        <span>Programação</span>
                    </div>
                    
                    <ScheduleClient />

                    <div className="sec-header fi" style={{ marginTop: '64px', marginBottom: '28px' }}>
                        <div className="section-eyebrow">Equipe</div>
                        <h2 className="section-title">Nossos <em>Locutores</em></h2>
                    </div>
                    <div className="djs-grid fi">
                        <div className="dj-card"><div className="dj-avatar">M</div><div className="dj-name">DJ Marcos</div><div className="dj-show">Bom Dia DMG</div><div className="dj-horario">Seg–Sex · 06h–09h</div></div>
                        <div className="dj-card"><div className="dj-avatar">L</div><div className="dj-name">DJ Letícia</div><div className="dj-show">Morning Hits</div><div className="dj-horario">Seg–Sex · 09h–12h</div></div>
                        <div className="dj-card"><div className="dj-avatar">C</div><div className="dj-name">DJ Carlos</div><div className="dj-show">Almoço Sertanejo</div><div className="dj-horario">Diário · 12h–15h</div></div>
                        <div className="dj-card"><div className="dj-avatar">A</div><div className="dj-name">DJ Ana Lima</div><div className="dj-show">Tarde Gospel</div><div className="dj-horario">Seg–Sex · 15h–18h</div></div>
                        <div className="dj-card"><div className="dj-avatar">R</div><div className="dj-name">DJ Rafael</div><div className="dj-show">Prime Time DMG</div><div className="dj-horario">Seg–Sex · 18h–21h</div></div>
                        <div className="dj-card"><div className="dj-avatar">S</div><div className="dj-name">DJ Sandra</div><div className="dj-show">Noite Romântica</div><div className="dj-horario">Diário · 21h–00h</div></div>
                        <div className="dj-card"><div className="dj-avatar">An</div><div className="dj-name">DJ André</div><div className="dj-show">Rock Night / Weekend</div><div className="dj-horario">Sex/Sáb · 22h–06h</div></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProgramacaoPage;

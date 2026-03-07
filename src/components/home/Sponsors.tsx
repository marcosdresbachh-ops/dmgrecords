import Link from 'next/link';
import { SectionHeader } from '@/components/shared/SectionHeader';
import './sponsors.css';

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.5 2.2 2 2 0 012.48.03h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.77-1.77a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const UsersIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
    </svg>
);

const MonitorIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
);

const InfoIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="9" height="9"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
);

const CheckIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="9" height="9"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
);

const TrendingUpIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="9" height="9"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
);

const SendIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="9" height="9"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
);

export function Sponsors() {
  return (
    <section className="sec partners-section">
        <div className="fi">
            <SectionHeader
                eyebrow="Parceiros"
                title={<>Quem <em>anuncia</em> com a gente</>}
                className="!mb-8 text-center"
            />
        </div>
        <div className="fi">
            <div className="banners-grid">
                {/* Banner 1 */}
                <Link href="/anuncie" className="banner-slot banner-v1" title="Espaço disponível para anúncio">
                    <div className="banner-pulse"></div>
                    <div className="banner-shimmer"></div>
                    <div className="banner-corner">Disponível</div>
                    <div className="banner-separator"></div>
                    <div className="banner-inner">
                        <div className="banner-icon"><PhoneIcon /></div>
                        <div className="banner-label">Espaço 01</div>
                        <div className="banner-cta">Anuncie<em>aqui</em></div>
                        <div className="banner-pill"><InfoIcon /> Saiba mais</div>
                    </div>
                </Link>

                {/* Banner 2 */}
                <Link href="/anuncie" className="banner-slot banner-v2" title="Espaço disponível para anúncio">
                    <div className="banner-pulse"></div>
                    <div className="banner-shimmer"></div>
                    <div className="banner-corner">Premium</div>
                    <div className="banner-separator"></div>
                    <div className="banner-inner">
                        <div className="banner-icon"><StarIcon /></div>
                        <div className="banner-label">Espaço 02</div>
                        <div className="banner-cta">Sua marca<em>em destaque</em></div>
                        <div className="banner-pill"><CheckIcon /> Anunciar agora</div>
                    </div>
                </Link>

                {/* Banner 3 */}
                <Link href="/anuncie" className="banner-slot banner-v3" title="Espaço disponível para anúncio">
                    <div className="banner-pulse" style={{ borderColor: 'var(--accent)' }}></div>
                    <div className="banner-shimmer"></div>
                    <div className="banner-corner">Gold</div>
                    <div className="banner-separator"></div>
                    <div className="banner-inner">
                        <div className="banner-icon"><UsersIcon /></div>
                        <div className="banner-label">Espaço 03</div>
                        <div className="banner-cta">Alcance<em>15k ouvintes</em></div>
                        <div className="banner-pill"><TrendingUpIcon /> Ver planos</div>
                    </div>
                </Link>

                {/* Banner 4 */}
                <Link href="/anuncie" className="banner-slot banner-v4" title="Espaço disponível para anúncio">
                    <div className="banner-pulse" style={{ borderColor: 'var(--red)' }}></div>
                    <div className="banner-shimmer"></div>
                    <div className="banner-corner">Disponível</div>
                    <div className="banner-separator"></div>
                    <div className="banner-inner">
                        <div className="banner-icon"><MonitorIcon /></div>
                        <div className="banner-label">Espaço 04</div>
                        <div className="banner-cta">Reserve<em>seu espaço</em></div>
                        <div className="banner-pill"><SendIcon /> Falar agora</div>
                    </div>
                </Link>
            </div>

            <p className="banner-note">
                Interessado em anunciar? <Link href="/anuncie" className="text-primary underline decoration-dotted">Entre em contato conosco</Link> e saiba sobre nossos planos a partir de R$ 600/mês.
            </p>
        </div>
    </section>
  );
}

'use client'
import Link from 'next/link';
import { SectionHeader } from '@/components/shared/SectionHeader';
import './PartnerBannersMarquee.css';

const banners = [
    {
        variant: 'v1',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.5 2.2 2 2 0 012.48.03h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.77-1.77a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
        ),
        label: 'Espaço 01',
        cta: <>Anuncie<em>aqui</em></>,
        pill: 'Saiba mais',
        corner: 'Disponível'
    },
    {
        variant: 'v2',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
        ),
        label: 'Espaço 02',
        cta: <>Sua marca<em>em destaque</em></>,
        pill: 'Anunciar agora',
        corner: 'Premium'
    },
    {
        variant: 'v3',
        icon: (
             <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
            </svg>
        ),
        label: 'Espaço 03',
        cta: <>Alcance<em>15k ouvintes</em></>,
        pill: 'Ver planos',
        corner: 'Gold'
    },
    {
        variant: 'v4',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
        ),
        label: 'Espaço 04',
        cta: <>Reserve<em>seu espaço</em></>,
        pill: 'Falar agora',
        corner: 'Disponível'
    }
];

const allBanners = [...banners, ...banners, ...banners]; // Duplicate for a long, seamless loop

export function PartnerBannersMarquee() {
    return (
        <section className="sec">
            <div className="partners-section">
                <div className="fi">
                    <SectionHeader
                        eyebrow="Parceiros"
                        title={<>Quem <em>anuncia</em> com a gente</>}
                    />
                </div>
                <div className="fi marquee-wrapper">
                    <div className="marquee-content">
                        {allBanners.map((banner, index) => (
                            <Link key={index} href="/anuncie" className={`banner-slot banner-${banner.variant}`} title="Clique para saber mais sobre como anunciar">
                                <div className="banner-shimmer"></div>
                                <div className="banner-corner">{banner.corner}</div>
                                <div className="banner-separator"></div>
                                <div className="banner-inner">
                                    <div className="banner-icon">{banner.icon}</div>
                                    <div className="banner-label">{banner.label}</div>
                                    <div className="banner-cta">{banner.cta}</div>
                                    <div className="banner-pill">{banner.pill}</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <p className="fi banner-note">
                    Interessado em anunciar? <Link href="/anuncie" className="text-primary hover:underline">Entre em contato conosco</Link> e saiba sobre nossos planos.
                </p>
            </div>
        </section>
    );
}

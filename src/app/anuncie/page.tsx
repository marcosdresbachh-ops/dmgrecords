'use client';

import Link from 'next/link';
import { Megaphone } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { Testimonials } from '@/components/anuncie/Testimonials';
import { AdFormats } from '@/components/anuncie/AdFormats';
import { AudienceStats } from '@/components/anuncie/AudienceStats';
import { MediaKit } from '@/components/anuncie/MediaKit';
import { BannerExamples } from '@/components/anuncie/BannerExamples';
import { SectionHeader } from '@/components/shared/SectionHeader';

const AnunciePage = () => {
    return (
        <>
            <PageHero
                eyebrow="Publicidade"
                title={<>Anuncie na <em>DMG Records</em></>}
                description="Alcance milhares de ouvintes apaixonados por música e conecte sua marca a um público fiel e engajado."
            />

            <section className="sec">
                <div className="sec-inner">
                    <div className="fi">
                        <Breadcrumb items={[{ href: '/', label: 'Início' }, { label: 'Anuncie' }]} />
                    </div>

                    <AudienceStats />
                    <AdFormats />

                    <div className="fi my-16">
                        <SectionHeader
                            eyebrow="Exemplos"
                            title={<>Formatos de <em>Banners Digitais</em></>}
                            subtitle="Além dos spots na rádio, oferecemos banners animados para veiculação em nosso site e parceiros."
                        />
                        <BannerExamples />
                    </div>

                    <MediaKit />
                    
                    <div className="fi mt-16">
                        <Testimonials />
                    </div>
                    
                    <div className="fi mt-14 rounded-lg bg-primary/10 p-10 text-center border border-primary/20">
                        <h3 className="mb-2.5 font-['Playfair_Display',serif] text-3xl font-black text-foreground">Pronto para sua marca decolar?</h3>
                        <p className="mb-6 text-[.92rem] text-muted-foreground">Fale com nossa equipe comercial e solicite nosso mídia kit completo.</p>
                        <Link href="/contato" className="btn btn-red">
                            <Megaphone className="h-4 w-4" /> Solicitar Proposta
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AnunciePage;

import Link from 'next/link';
import { Megaphone } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { Stats } from '@/components/anuncie/Stats';
import { Plans } from '@/components/anuncie/Plans';
import { Testimonials } from '@/components/anuncie/Testimonials';
import { Faq } from '@/components/anuncie/Faq';

const AnunciePage = () => {
    return (
        <>
            <PageHero
                eyebrow="Publicidade"
                title={<>Anuncie na <em>DMG Records</em></>}
                description="Alcance milhares de ouvintes diariamente. A rádio perfeita para conectar sua marca ao público certo."
            />

            <section className="sec">
                <div className="sec-inner">
                    <div className="fi">
                        <Breadcrumb items={[{ href: '/', label: 'Início' }, { label: 'Anuncie' }]} />
                    </div>

                    <Stats />
                    <Plans />
                    <Testimonials />
                    <Faq />
                    
                    <div className="fi mt-[52px] rounded-[10px] bg-foreground p-10 text-center">
                        <h3 className="mb-2.5 font-['Playfair_Display',serif] text-3xl font-black text-white">Pronto para anunciar?</h3>
                        <p className="mb-6 text-[.92rem] text-white/60">Nossa equipe responde em até 2 horas em dias úteis.</p>
                        <Link href="/contato" className="btn btn-accent">
                            <Megaphone className="h-4 w-4" /> Solicitar Proposta
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AnunciePage;

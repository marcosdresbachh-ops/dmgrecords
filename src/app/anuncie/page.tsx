import Link from 'next/link';
import { Megaphone } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { Stats } from '@/components/anuncie/Stats';
import { Plans } from '@/components/anuncie/Plans';
import { Faq } from '@/components/anuncie/Faq';
import { IndoorFeatures } from '@/components/anuncie/IndoorFeatures';

const AnunciePage = () => {
    return (
        <>
            <PageHero
                eyebrow="Rádio Indoor"
                title={<>A trilha sonora <em>exclusiva</em> da sua marca</>}
                description="Crie um ambiente único na sua loja, aumente suas vendas e fidelize clientes com uma rádio personalizada para o seu negócio."
            />

            <section className="sec">
                <div className="sec-inner">
                    <div className="fi">
                        <Breadcrumb items={[{ href: '/', label: 'Início' }, { label: 'Rádio Indoor' }]} />
                    </div>

                    <Stats />
                    <IndoorFeatures />
                    <Plans />
                    <Faq />
                    
                    <div className="fi mt-[52px] rounded-[10px] bg-[--ink] p-10 text-center">
                        <h3 className="mb-2.5 font-['Playfair_Display',serif] text-3xl font-black text-white">Pronto para transformar seu ambiente?</h3>
                        <p className="mb-6 text-[.92rem] text-[rgba(255,255,255,.6)]">Nossa equipe comercial está pronta para criar uma proposta personalizada.</p>
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

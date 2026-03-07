'use client';
import Link from 'next/link';
import { Send } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { TeamGrid } from '@/components/equipe/TeamGrid';

const EquipePage = () => {
    return (
        <>
            <PageHero
                eyebrow="Pessoas"
                title={<>Nossa <em>Equipe</em></>}
                description="Conheça os talentos e profissionais apaixonados que fazem a DMG Records Rádio acontecer todos os dias."
            />

            <section className="sec">
                <div className="sec-inner">
                    <div className="fi">
                        <Breadcrumb items={[{ href: '/', label: 'Início' }, { label: 'Nossa Equipe' }]} />
                    </div>

                    <div className="fi">
                        <SectionHeader
                            eyebrow="Locutores"
                            title={<>As <em>vozes</em> da DMG Records</>}
                            subtitle="Nossos locutores são apaixonados pelo que fazem e por você, ouvinte. Cada um com seu estilo único."
                        />
                    </div>

                    <TeamGrid />

                    <div className="fi mt-14 rounded-lg border border-[rgba(212,36,58,.2)] bg-[--red-light] px-8 py-9 text-center">
                        <h3 className="mb-2.5 font-['Playfair_Display',serif] text-xl font-black">Quer fazer parte da nossa equipe?</h3>
                        <p className="mb-5 text-[.9rem] text-[--ink3]">Estamos sempre em busca de talentos apaixonados por música e rádio. Envie seu portfólio!</p>
                        <Link href="/contato" className="btn btn-red"><Send className="h-4 w-4" /> Enviar Currículo</Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EquipePage;

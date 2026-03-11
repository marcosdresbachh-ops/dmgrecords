'use client';

import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { Schedule } from '@/components/programacao/Schedule';
import { RectangleBanner } from '@/components/banners/RectangleBanner';

const ProgramacaoPage = () => {
    return (
        <>
            <PageHero
                eyebrow="Grade Horária"
                title={<>Nossa <em>Programação</em></>}
                description="Música certa na hora certa. Confira nossa grade completa e não perca seu programa favorito."
            />

            <section className="sec">
                <div className="sec-inner">
                    <div className="fi">
                        <Breadcrumb items={[{ href: '/', label: 'Início' }, { label: 'Programação' }]} />
                    </div>
                    
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto]">
                        <div className="overflow-hidden">
                            <Schedule />
                        </div>
                        <div className="hidden lg:block">
                            <RectangleBanner />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProgramacaoPage;

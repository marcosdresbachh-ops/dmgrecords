import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Schedule } from '@/components/programacao/Schedule';
import { Djs } from '@/components/programacao/Djs';

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
                    
                    <Schedule />

                    <div className="fi mt-16">
                        <SectionHeader
                            eyebrow="Equipe"
                            title={<>Nossos <em>Locutores</em></>}
                        />
                        <Djs />
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProgramacaoPage;

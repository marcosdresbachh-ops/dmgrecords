import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Mission } from '@/components/sobre/Mission';
import { StatsBand } from '@/components/sobre/StatsBand';
import { Values } from '@/components/sobre/Values';
import { Timeline } from '@/components/sobre/Timeline';


const SobrePage = () => {
    return (
        <>
            <PageHero
                eyebrow="Nossa História"
                title={<>Sobre a <em>Dresbach Records</em></>}
                description="Conheça a história, os valores e a missão da Dresbach Records, a rádio que conecta artistas e ouvintes há mais de 8 anos."
            />

            <section className="sec">
                <div className="sec-inner">
                    <div className="fi">
                        <Breadcrumb items={[{ href: '/', label: 'Início' }, { label: 'Sobre Nós' }]} />
                    </div>

                    <Mission />
                </div>
            </section>

            <StatsBand />
            
            <section className="sec">
                <div className="sec-inner">
                    <div className="fi">
                        <SectionHeader
                            eyebrow="Valores"
                            title={<>O que nos <em>guia</em></>}
                        />
                        <Values />
                    </div>

                    <div className="fi mt-16">
                        <SectionHeader
                            eyebrow="Nossa Jornada"
                            title={<>A história da <em>Dresbach Records</em></>}
                        />
                        <Timeline />
                    </div>
                </div>
            </section>
        </>
    );
};

export default SobrePage;

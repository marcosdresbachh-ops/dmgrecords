import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { Mission } from '@/components/sobre/Mission';

const SobrePage = () => {
    return (
        <>
            <PageHero
                eyebrow="Nossa História"
                title={<>Sobre a <em>Amor FM</em></>}
                description="Conheça a história, os valores e a missão da Amor FM, a trilha sonora do amor."
            />

            <section className="sec">
                <div className="sec-inner">
                    <div className="fi">
                        <Breadcrumb items={[{ href: '/', label: 'Início' }, { label: 'Sobre Nós' }]} />
                    </div>

                    <Mission />
                </div>
            </section>
        </>
    );
};

export default SobrePage;

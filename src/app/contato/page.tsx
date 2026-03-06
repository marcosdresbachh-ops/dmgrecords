import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { ContactForm } from '@/components/contato/ContactForm';
import { ContactChannels } from '@/components/contato/ContactChannels';

const ContatoPage = () => {
    return (
        <>
            <PageHero
                eyebrow="Fale Conosco"
                title={<>Entre em <em>Contato</em></>}
                description="Dúvidas, publicidade, sugestão de música ou parceria — estamos prontos para atender você."
            />

            <section className="sec">
                <div className="sec-inner">
                     <div className="fi">
                        <Breadcrumb items={[{ href: '/', label: 'Início' }, { label: 'Contato' }]} />
                    </div>
                    <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1.2fr,1fr]">
                        <ContactForm />
                        <ContactChannels />
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContatoPage;

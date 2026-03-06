import { PageHero } from '@/components/shared/PageHero';
import { LegalLayout } from '@/components/legal/LegalLayout';

const content = [
    {
        id: "t1",
        title: "1. Aceitação dos Termos",
        body: (
            <>
                <p>Ao acessar e utilizar o site e os serviços da <strong>DMG Records Rádio</strong>, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com algum destes termos, pedimos que não utilize nossos serviços.</p>
                <p>Estes Termos de Uso se aplicam a todos os visitantes, ouvintes, usuários e qualquer outra pessoa que acesse ou utilize os serviços da DMG Records Rádio.</p>
            </>
        )
    },
    {
        id: "t2",
        title: "2. Descrição dos Serviços",
        body: (
            <>
                <p>A DMG Records Rádio oferece os seguintes serviços de forma gratuita aos ouvintes:</p>
                <ul>
                    <li>Transmissão de áudio ao vivo via internet (streaming), disponível 24 horas por dia, 7 dias por semana.</li>
                    <li>Chat ao vivo para interação entre ouvintes e locutores durante as transmissões.</li>
                    <li>Sistema de pedidos de músicas, tanto automático (AutoDJ) quanto manual (ao locutor).</li>
                    <li>Grade de programação e informações sobre os programas e locutores.</li>
                    <li>Notícias e conteúdos relacionados à música e à programação da rádio.</li>
                </ul>
                <p>A DMG Records Rádio reserva-se o direito de modificar, suspender ou encerrar qualquer serviço a qualquer momento, com ou sem aviso prévio.</p>
            </>
        )
    },
    {
        id: "t3",
        title: "3. Uso do Chat e Pedidos",
        body: (
             <>
                <p>Ao utilizar o chat ao vivo e o sistema de pedidos de músicas, você concorda em:</p>
                <ul>
                    <li>Identificar-se com um nome ou apelido adequado e respeitar os demais usuários.</li>
                    <li>Não enviar mensagens repetitivas, spam ou conteúdo irrelevante.</li>
                    <li>Realizar pedidos de forma educada e respeitosa, aceitando que nem todos os pedidos poderão ser atendidos.</li>
                    <li>Não solicitar músicas ou conteúdos que violem direitos autorais de maneira ilegal.</li>
                    <li>Respeitar as decisões do locutor e da equipe técnica quanto à programação.</li>
                </ul>
                <p>Os pedidos não atendidos não geram qualquer direito de reclamação por parte do ouvinte.</p>
            </>
        )
    },
    {
        id: "t4",
        title: "4. Conteúdo Proibido",
        body: (
            <>
                <p>É expressamente proibido o envio de qualquer conteúdo que:</p>
                <ul>
                    <li>Seja ofensivo, abusivo, difamatório, discriminatório ou que incite o ódio.</li>
                    <li>Contenha linguagem inapropriada, obscena ou pornográfica.</li>
                    <li>Promova violência, atividades ilegais ou infração de direitos de terceiros.</li>
                    <li>Constitua propaganda política ou religiosa não relacionada à programação.</li>
                    <li>Represente spam, phishing ou qualquer forma de engenharia social.</li>
                    <li>Viole a privacidade de outras pessoas ou divulgue dados pessoais sem consentimento.</li>
                </ul>
                <p>O descumprimento dessas regras pode resultar em banimento do chat e dos serviços de pedidos sem aviso prévio.</p>
            </>
        )
    },
    {
        id: "t5",
        title: "5. Propriedade Intelectual",
        body: (
            <>
                <p>Todo o conteúdo do site da DMG Records Rádio, incluindo textos, logotipos, design e layout, é protegido por direitos autorais e outros direitos de propriedade intelectual.</p>
                <p>As músicas transmitidas são licenciadas junto aos órgãos competentes (ECAD, etc.). Qualquer reprodução, gravação ou redistribuição não autorizada da transmissão é proibida.</p>
                <p>O uso de nosso conteúdo para fins comerciais sem autorização expressa é vedado.</p>
            </>
        )
    },
    {
        id: "t6",
        title: "6. Responsabilidades",
        body: (
            <>
                <p>A DMG Records Rádio não se responsabiliza por:</p>
                <ul>
                    <li>Interrupções na transmissão causadas por fatores externos, manutenção ou problemas técnicos fora de nosso controle.</li>
                    <li>Conteúdo enviado por usuários no chat ou nos formulários de pedido.</li>
                    <li>Danos causados pelo acesso a links externos eventualmente mencionados na programação.</li>
                    <li>Incompatibilidades técnicas entre nosso serviço de streaming e dispositivos específicos do ouvinte.</li>
                </ul>
                <p>Nos esforçamos para manter a transmissão disponível 24 horas, mas não garantimos disponibilidade ininterrupta do serviço.</p>
            </>
        )
    },
    {
        id: "t7",
        title: "7. Publicidade e Anúncios",
        body: (
            <>
                <p>A DMG Records Rádio pode exibir publicidade de anunciantes terceiros. Não somos responsáveis pelo conteúdo desses anúncios nem pelas práticas de privacidade das empresas anunciantes.</p>
                <p>Os contratos de publicidade são regidos por termos específicos acordados entre a DMG Records Rádio e cada anunciante, em conformidade com a legislação brasileira de publicidade.</p>
            </>
        )
    },
    {
        id: "t8",
        title: "8. Modificações dos Termos",
        body: (
            <>
                <p>A DMG Records Rádio reserva-se o direito de modificar estes Termos de Uso a qualquer momento. As alterações entram em vigor imediatamente após a publicação no site.</p>
                <p>O uso continuado dos nossos serviços após a publicação de alterações constitui aceitação dos novos termos. Recomendamos a leitura periódica deste documento.</p>
            </>
        )
    },
    {
        id: "t9",
        title: "9. Legislação Aplicável",
        body: (
            <>
                <p>Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Quaisquer disputas relacionadas a estes termos serão submetidas à jurisdição exclusiva dos tribunais brasileiros competentes.</p>
                <p>Em caso de dúvidas sobre estes Termos de Uso, entre em contato pelo e-mail: <a href="mailto:juridico@dmgrecords.com.br" className="text-[--red]">juridico@dmgrecords.com.br</a></p>
            </>
        )
    },
];


const TermosPage = () => {
    return (
        <>
            <PageHero
                eyebrow="Legal"
                title={<>Termos de <em>Uso</em></>}
                description="Leia atentamente os termos que regem o uso do site e dos serviços da DMG Records Rádio."
            />
            <LegalLayout 
                pageTitle="Termos de Uso"
                lastUpdated="01 de Janeiro de 2025"
                tableOfContents={content.map(c => ({ id: c.id, title: c.title.substring(c.title.indexOf(' ') + 1) }))}
                content={content}
            />
        </>
    );
};

export default TermosPage;

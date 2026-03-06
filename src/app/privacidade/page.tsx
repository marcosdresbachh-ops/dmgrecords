import { PageHero } from '@/components/shared/PageHero';
import { LegalLayout } from '@/components/legal/LegalLayout';

const content = [
    {
        id: "s1",
        title: "1. Informações que coletamos",
        body: (
            <>
                <p>A DMG Records Rádio coleta informações para oferecer uma experiência melhor a todos os nossos ouvintes e usuários. As informações coletadas incluem:</p>
                <ul>
                    <li><strong>Dados fornecidos voluntariamente:</strong> nome, e-mail e telefone quando você preenche nosso formulário de contato ou pedido de músicas.</li>
                    <li><strong>Dados de uso:</strong> endereço IP, tipo de navegador, páginas visitadas, tempo de permanência no site e interações com o player.</li>
                    <li><strong>Dados do chat:</strong> mensagens enviadas no chat ao vivo, apelido escolhido e horário de acesso.</li>
                    <li><strong>Dados de pedidos:</strong> músicas solicitadas, nome ou apelido do ouvinte e mensagens enviadas junto ao pedido.</li>
                </ul>
            </>
        )
    },
    {
        id: "s2",
        title: "2. Como usamos suas informações",
        body: (
            <>
                <p>Utilizamos as informações coletadas para as seguintes finalidades:</p>
                <ul>
                    <li>Processar e executar pedidos de músicas no sistema AutoDJ ou ao vivo.</li>
                    <li>Responder a mensagens e solicitações enviadas pelo formulário de contato.</li>
                    <li>Melhorar a qualidade da programação com base nos gostos e preferências dos ouvintes.</li>
                    <li>Enviar comunicações sobre a rádio (quando autorizado pelo usuário).</li>
                    <li>Cumprir obrigações legais e regulatórias aplicáveis.</li>
                    <li>Detectar, prevenir e resolver problemas técnicos ou de segurança.</li>
                </ul>
            </>
        )
    },
    {
        id: "s3",
        title: "3. Compartilhamento de dados",
        body: (
            <>
                <p>A DMG Records Rádio não vende, aluga ou comercializa suas informações pessoais a terceiros. Podemos compartilhar dados apenas nas seguintes situações:</p>
                <ul>
                    <li><strong>Prestadores de serviço:</strong> empresas que nos auxiliam na operação do site e do streaming, comprometidas com a confidencialidade dos dados.</li>
                    <li><strong>Exigência legal:</strong> quando necessário para cumprir obrigação legal, ordem judicial ou solicitação de autoridade competente.</li>
                    <li><strong>Com seu consentimento:</strong> em qualquer outra situação, somente com sua autorização expressa.</li>
                </ul>
            </>
        )
    },
    {
        id: "s4",
        title: "4. Cookies e tecnologias semelhantes",
        body: (
            <>
                <p>Utilizamos cookies e tecnologias similares para melhorar sua experiência no site. Os tipos de cookies que usamos incluem:</p>
                <ul>
                    <li><strong>Cookies essenciais:</strong> necessários para o funcionamento básico do site e do player de áudio.</li>
                    <li><strong>Cookies analíticos:</strong> coletam informações sobre como você usa o site para nos ajudar a melhorá-lo.</li>
                    <li><strong>Cookies de preferências:</strong> permitem que o site lembre suas escolhas, como volume do player.</li>
                </ul>
                <p>Você pode gerenciar suas preferências de cookies nas configurações do seu navegador a qualquer momento.</p>
            </>
        )
    },
    {
        id: "s5",
        title: "5. Segurança dos dados",
        body: (
             <>
                <p>Implementamos medidas técnicas e organizacionais adequadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Isso inclui:</p>
                <ul>
                    <li>Transmissão de dados via protocolo HTTPS com criptografia SSL.</li>
                    <li>Acesso restrito aos dados apenas por pessoal autorizado.</li>
                    <li>Monitoramento regular de nossas práticas de segurança.</li>
                </ul>
            </>
        )
    },
    {
        id: "s6",
        title: "6. Seus direitos (LGPD)",
        body: (
            <>
                <p>Em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018), você tem os seguintes direitos:</p>
                <ul>
                    <li><strong>Acesso:</strong> confirmar se tratamos seus dados e obter cópia das informações que possuímos sobre você.</li>
                    <li><strong>Correção:</strong> solicitar a correção de dados incompletos, inexatos ou desatualizados.</li>
                    <li><strong>Exclusão:</strong> solicitar a exclusão de dados desnecessários ou tratados em desconformidade com a LGPD.</li>
                    <li><strong>Portabilidade:</strong> solicitar a transferência de seus dados a outro fornecedor de serviço.</li>
                    <li><strong>Revogação do consentimento:</strong> retirar seu consentimento a qualquer momento.</li>
                </ul>
                <p>Para exercer seus direitos, entre em contato pelo e-mail: <strong>privacidade@dmgrecords.com.br</strong></p>
            </>
        )
    },
    {
        id: "s7",
        title: "7. Retenção de dados",
        body: <p>Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades para as quais foram coletados, incluindo o cumprimento de obrigações legais, contratuais e regulatórias. Dados de formulários de contato são mantidos por até 2 anos.</p>
    },
    {
        id: "s8",
        title: "8. Contato",
        body: (
            <>
                <p>Se você tiver dúvidas sobre esta Política de Privacidade ou sobre o tratamento de seus dados pessoais, entre em contato conosco:</p>
                <ul>
                    <li>E-mail: privacidade@dmgrecords.com.br</li>
                    <li>WhatsApp: (55) 00000-0000</li>
                    <li>Formulário: <a href="/contato" className="text-[--red]">Página de Contato</a></li>
                </ul>
            </>
        )
    }
];

const PrivacidadePage = () => {
    return (
        <>
            <PageHero
                eyebrow="Legal"
                title={<>Política de <em>Privacidade</em></>}
                description="Como coletamos, usamos e protegemos suas informações pessoais na DMG Records Rádio."
            />
            <LegalLayout 
                pageTitle="Política de Privacidade"
                lastUpdated="01 de Janeiro de 2025"
                tableOfContents={content.map(c => ({ id: c.id, title: c.title.substring(c.title.indexOf(' ') + 1) }))}
                content={content}
            />
        </>
    );
};

export default PrivacidadePage;

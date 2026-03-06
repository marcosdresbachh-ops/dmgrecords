import { ChevronRight, Calendar } from 'lucide-react';
import Link from 'next/link';

const PrivacidadePage = () => {
    return (
        <>
            <style>{`
                .legal-wrap{max-width:820px}
                .legal-toc{background:var(--bg3);border:1px solid var(--line);border-radius:8px;padding:24px 28px;margin-bottom:48px}
                .legal-toc-title{font-family:'DM Mono',monospace;font-size:.6rem;letter-spacing:.22em;text-transform:uppercase;color:var(--red);margin-bottom:14px}
                .legal-toc ol{counter-reset:toc;padding:0;list-style:none}
                .legal-toc li{counter-increment:toc;font-size:.85rem;padding:5px 0;border-bottom:1px solid var(--line);display:flex;align-items:center;gap:8px}
                .legal-toc li:last-child{border:none}
                .legal-toc li::before{content:counter(toc)'.';font-family:'DM Mono',monospace;font-size:.62rem;color:var(--red);font-weight:500;width:20px;flex-shrink:0}
                .legal-toc a{color:var(--ink2);transition:color .2s}.legal-toc a:hover{color:var(--red)}
                .legal-section{margin-bottom:44px;scroll-margin-top:160px}
                .legal-section h2{font-family:'Playfair Display',serif;font-size:1.3rem;font-weight:700;margin-bottom:14px;display:flex;align-items:center;gap:10px}
                .legal-section h2::before{content:'';display:block;width:4px;height:22px;background:var(--red);border-radius:2px;flex-shrink:0}
                .legal-section p{font-size:.88rem;color:var(--ink3);line-height:1.82;margin-bottom:12px}
                .legal-section ul,.legal-section ol{padding-left:20px;margin-bottom:12px}
                .legal-section li{font-size:.88rem;color:var(--ink3);line-height:1.75;margin-bottom:5px}
                .legal-date{font-family:'DM Mono',monospace;font-size:.62rem;letter-spacing:.12em;color:var(--ink3);background:var(--bg3);padding:8px 16px;border-radius:3px;display:inline-flex;align-items:center;gap:6px;margin-bottom:32px}
            `}</style>
            <div className="page-hero">
                <div className="page-hero-red"></div>
                <div className="page-hero-inner">
                    <div className="page-hero-eyebrow">Legal</div>
                    <h1>Política de <em>Privacidade</em></h1>
                    <p>Como coletamos, usamos e protegemos suas informações pessoais na DMG Records Rádio.</p>
                </div>
            </div>

            <section className="sec">
                <div className="sec-inner">
                    <div className="breadcrumb fi">
                        <Link href="/">Início</Link><ChevronRight style={{ width: '12px', height: '12px' }} />
                        <span>Política de Privacidade</span>
                    </div>
                    <div className="legal-wrap fi">
                        <div className="legal-date"><Calendar style={{ width: '13px', height: '13px' }} /> Última atualização: 01 de Janeiro de 2025</div>

                        <div className="legal-toc">
                            <div className="legal-toc-title">Índice</div>
                            <ol>
                                <li><a href="#s1">Informações que coletamos</a></li>
                                <li><a href="#s2">Como usamos suas informações</a></li>
                                <li><a href="#s3">Compartilhamento de dados</a></li>
                                <li><a href="#s4">Cookies e tecnologias semelhantes</a></li>
                                <li><a href="#s5">Segurança dos dados</a></li>
                                <li><a href="#s6">Seus direitos (LGPD)</a></li>
                                <li><a href="#s7">Retenção de dados</a></li>
                                <li><a href="#s8">Contato</a></li>
                            </ol>
                        </div>

                        <div className="legal-section" id="s1">
                            <h2>1. Informações que coletamos</h2>
                            <p>A DMG Records Rádio coleta informações para oferecer uma experiência melhor a todos os nossos ouvintes e usuários. As informações coletadas incluem:</p>
                            <ul>
                                <li><strong>Dados fornecidos voluntariamente:</strong> nome, e-mail e telefone quando você preenche nosso formulário de contato ou pedido de músicas.</li>
                                <li><strong>Dados de uso:</strong> endereço IP, tipo de navegador, páginas visitadas, tempo de permanência no site e interações com o player.</li>
                                <li><strong>Dados do chat:</strong> mensagens enviadas no chat ao vivo, apelido escolhido e horário de acesso.</li>
                                <li><strong>Dados de pedidos:</strong> músicas solicitadas, nome ou apelido do ouvinte e mensagens enviadas junto ao pedido.</li>
                            </ul>
                        </div>

                        <div className="legal-section" id="s2">
                            <h2>2. Como usamos suas informações</h2>
                            <p>Utilizamos as informações coletadas para as seguintes finalidades:</p>
                            <ul>
                                <li>Processar e executar pedidos de músicas no sistema AutoDJ ou ao vivo.</li>
                                <li>Responder a mensagens e solicitações enviadas pelo formulário de contato.</li>
                                <li>Melhorar a qualidade da programação com base nos gostos e preferências dos ouvintes.</li>
                                <li>Enviar comunicações sobre a rádio (quando autorizado pelo usuário).</li>
                                <li>Cumprir obrigações legais e regulatórias aplicáveis.</li>
                                <li>Detectar, prevenir e resolver problemas técnicos ou de segurança.</li>
                            </ul>
                        </div>

                        <div className="legal-section" id="s3">
                            <h2>3. Compartilhamento de dados</h2>
                            <p>A DMG Records Rádio não vende, aluga ou comercializa suas informações pessoais a terceiros. Podemos compartilhar dados apenas nas seguintes situações:</p>
                            <ul>
                                <li><strong>Prestadores de serviço:</strong> empresas que nos auxiliam na operação do site e do streaming, comprometidas com a confidencialidade dos dados.</li>
                                <li><strong>Exigência legal:</strong> quando necessário para cumprir obrigação legal, ordem judicial ou solicitação de autoridade competente.</li>
                                <li><strong>Com seu consentimento:</strong> em qualquer outra situação, somente com sua autorização expressa.</li>
                            </ul>
                        </div>

                        <div className="legal-section" id="s4">
                            <h2>4. Cookies e tecnologias semelhantes</h2>
                            <p>Utilizamos cookies e tecnologias similares para melhorar sua experiência no site. Os tipos de cookies que usamos incluem:</p>
                            <ul>
                                <li><strong>Cookies essenciais:</strong> necessários para o funcionamento básico do site e do player de áudio.</li>
                                <li><strong>Cookies analíticos:</strong> coletam informações sobre como você usa o site para nos ajudar a melhorá-lo.</li>
                                <li><strong>Cookies de preferências:</strong> permitem que o site lembre suas escolhas, como volume do player.</li>
                            </ul>
                            <p>Você pode gerenciar suas preferências de cookies nas configurações do seu navegador a qualquer momento.</p>
                        </div>

                        <div className="legal-section" id="s5">
                            <h2>5. Segurança dos dados</h2>
                            <p>Implementamos medidas técnicas e organizacionais adequadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Isso inclui:</p>
                            <ul>
                                <li>Transmissão de dados via protocolo HTTPS com criptografia SSL.</li>
                                <li>Acesso restrito aos dados apenas por pessoal autorizado.</li>
                                <li>Monitoramento regular de nossas práticas de segurança.</li>
                            </ul>
                        </div>

                        <div className="legal-section" id="s6">
                            <h2>6. Seus direitos (LGPD)</h2>
                            <p>Em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018), você tem os seguintes direitos:</p>
                            <ul>
                                <li><strong>Acesso:</strong> confirmar se tratamos seus dados e obter cópia das informações que possuímos sobre você.</li>
                                <li><strong>Correção:</strong> solicitar a correção de dados incompletos, inexatos ou desatualizados.</li>
                                <li><strong>Exclusão:</strong> solicitar a exclusão de dados desnecessários ou tratados em desconformidade com a LGPD.</li>
                                <li><strong>Portabilidade:</strong> solicitar a transferência de seus dados a outro fornecedor de serviço.</li>
                                <li><strong>Revogação do consentimento:</strong> retirar seu consentimento a qualquer momento.</li>
                            </ul>
                            <p>Para exercer seus direitos, entre em contato pelo e-mail: <strong>privacidade@dmgrecords.com.br</strong></p>
                        </div>

                        <div className="legal-section" id="s7">
                            <h2>7. Retenção de dados</h2>
                            <p>Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades para as quais foram coletados, incluindo o cumprimento de obrigações legais, contratuais e regulatórias. Dados de formulários de contato são mantidos por até 2 anos.</p>
                        </div>

                        <div className="legal-section" id="s8">
                            <h2>8. Contato</h2>
                            <p>Se você tiver dúvidas sobre esta Política de Privacidade ou sobre o tratamento de seus dados pessoais, entre em contato conosco:</p>
                            <ul>
                                <li>E-mail: privacidade@dmgrecords.com.br</li>
                                <li>WhatsApp: (55) 00000-0000</li>
                                <li>Formulário: <a href="/contato" style={{ color: 'var(--red)' }}>Página de Contato</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PrivacidadePage;

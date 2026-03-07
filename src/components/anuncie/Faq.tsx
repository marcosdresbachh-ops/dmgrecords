'use client'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SectionHeader } from "../shared/SectionHeader"

const faqData = [
    {
        q: "O que eu preciso para ter uma Rádio Indoor na minha loja?",
        a: "Você só precisa de um computador, tablet ou smartphone com acesso à internet e um sistema de som ambiente. Nossa plataforma funciona diretamente do navegador, sem necessidade de instalar aplicativos."
    },
    {
        q: "As músicas são legalizadas para uso comercial? E o ECAD?",
        a: "Sim. Todas as músicas do nosso acervo são 100% licenciadas e isentas de taxas do ECAD. Nós cuidamos de toda a burocracia para que você possa usar as músicas legalmente em seu estabelecimento."
    },
    {
        q: "Eu posso escolher as músicas que tocam na minha rádio?",
        a: "Com certeza. Nosso painel permite que você escolha os gêneros e estilos musicais. No Plano Pro, você pode até criar playlists personalizadas com músicas específicas para cada momento do dia."
    },
    {
        q: "Como funciona a gravação das locuções e ofertas?",
        a: "É muito simples. Você nos envia o texto da sua oferta ou anúncio através do painel, escolhe um de nossos locutores profissionais e, em até 48 horas úteis, o áudio estará pronto e disponível para ser agendado na sua programação."
    },
    {
        q: "Existe algum tipo de fidelidade ou contrato de longo prazo?",
        a: "Nossos planos são mensais e sem fidelidade. Você pode cancelar quando quiser, sem multas ou complicações, bastando nos avisar com 15 dias de antecedência do próximo vencimento."
    }
]

export function Faq() {
    return (
        <div className="fi mt-16">
            <SectionHeader
                eyebrow="Dúvidas"
                title={<>Perguntas <em>Frequentes</em></>}
            />
            <div style={{ maxWidth: '760px' }}>
                 <Accordion type="single" collapsible className="w-full">
                    {faqData.map((item, index) => (
                         <AccordionItem value={`item-${index}`} key={index} className="border-b border-border">
                             <AccordionTrigger className="py-4.5 gap-3 text-left text-[.95rem] font-semibold hover:text-primary hover:no-underline">
                                {item.q}
                            </AccordionTrigger>
                             <AccordionContent className="pb-4.5 pt-0 text-[.88rem] leading-[1.75] text-muted-foreground">
                                {item.a}
                             </AccordionContent>
                         </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    )
}

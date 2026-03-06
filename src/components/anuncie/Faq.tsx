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
        q: "Como funciona o processo de anúncio?",
        a: "Entre em contato conosco pelo WhatsApp ou formulário, escolha o plano ideal, envie o material do seu anúncio e nós cuidamos de todo o resto. A veiculação começa em até 24h úteis após a aprovação."
    },
    {
        q: "Preciso levar o arquivo de áudio pronto?",
        a: "Não necessariamente. Para os planos que incluem produção de vinheta, nossa equipe cria o áudio para você. Basta nos enviar as informações do seu negócio e o texto que deseja comunicar."
    },
    {
        q: "Qual é o prazo mínimo de contrato?",
        a: "Para o plano Spot o mínimo é de 1 semana. Para os demais planos, o prazo mínimo é de 1 mês, com renovação automática mensal caso não haja cancelamento com 5 dias de antecedência."
    },
    {
        q: "Como recebo o relatório de veiculações?",
        a: "Os relatórios são enviados mensalmente por e-mail com o total de exibições, horários de veiculação e estimativa de alcance. Para o plano Premium, os relatórios são enviados quinzenalmente."
    },
    {
        q: "Como é feito o pagamento?",
        a: "Aceitamos PIX, transferência bancária ou boleto. O pagamento é realizado no início de cada período de veiculação. Para contratos anuais, oferecemos desconto especial."
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
                         <AccordionItem value={`item-${index}`} key={index} className="border-b border-[--line]">
                             <AccordionTrigger className="py-4.5 gap-3 text-left text-[.95rem] font-semibold hover:text-[--red] hover:no-underline">
                                {item.q}
                            </AccordionTrigger>
                             <AccordionContent className="pb-4.5 pt-0 text-[.88rem] leading-[1.75] text-[--ink3]">
                                {item.a}
                             </AccordionContent>
                         </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    )
}

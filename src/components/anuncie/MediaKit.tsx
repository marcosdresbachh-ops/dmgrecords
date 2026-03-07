'use client'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { SectionHeader } from "../shared/SectionHeader"
import { FileText } from "lucide-react"

const rules = [
    { 
        title: "Tipos de Veiculação Especiais",
        content: "Acréscimos sobre o valor de tabela (faixa horária): Programete: +200% | Testemunhal/Flash: +100% (apenas em faixa determinada) | Comercial Múltiplo: +30% por assinatura extra | Nota Oficial/Informe Publicitário: +100% | Expressão de Opinião: +200% (sujeito à aprovação)."
    },
    {
        title: "Determinação de Horário ou Break",
        content: "Para escolher um horário ou posição específica para seu anúncio, há um acréscimo de 30% sobre o valor da faixa horária."
    },
    {
        title: "Condições de Pagamento",
        content: "O prazo de pagamento padrão é de 15 dias fora a quinzena da veiculação (15 DFQ). Prazos diferentes podem ser negociados e devem ser especificados na proposta comercial. A autorização para prazos especiais depende da diretoria financeira."
    },
    {
        title: "Cancelamento e Entrega de Material",
        content: "Cancelamentos devem ser feitos por escrito com 30 dias de antecedência. O Pedido de Inserção (PI) deve ser entregue até as 16h do dia anterior à veiculação, e o material de áudio até as 18h do dia anterior."
    },
    {
        title: "Regras Gerais e Restrições",
        content: "Não aceitamos comerciais gravados com locutores de emissoras concorrentes. Para o programa 'Momento de Fé', há restrições de produtos como bebidas alcoólicas e preservativos. Todos os anúncios de medicamentos devem seguir a Resolução nº 102/2000 da ANVISA."
    }
];

const prices = [
    { faixa: "06:00/22:00 - Rotativo", s30: "170,90", s05: "36,91", s10: "61,52", s15: "102,54", s45: "256,35", s60: "341,80" },
    { faixa: "07:00/19:00 - Rotativo", s30: "226,00", s05: "48,82", s10: "81,36", s15: "135,60", s45: "339,00", s60: "452,00" },
    { faixa: "06:00/12:00 - Rotativo", s30: "238,00", s05: "51,41", s10: "85,68", s15: "142,80", s45: "357,00", s60: "476,00" },
    { faixa: "12:00/17:00 - Rotativo", s30: "178,50", s05: "38,56", s10: "64,26", s15: "107,10", s45: "267,75", s60: "357,00" },
    { faixa: "17:00/22:00 - Rotativo", s30: "96,20", s05: "20,78", s10: "34,63", s15: "57,72", s45: "144,30", s60: "192,40" },
    { faixa: "22:00/06:00 - Rotativo", s30: "29,20", s05: "6,31", s10: "10,51", s15: "17,52", s45: "43,80", s60: "58,40" },
];

export function MediaKit() {
    return (
        <div className="fi mt-16">
            <SectionHeader
                eyebrow="Mídia Kit"
                title={<>Tabela de Preços & <em>Regras</em></>}
                subtitle="Consulte nossos valores de tabela para spots rotativos e as principais regras de comercialização. Para projetos especiais, entre em contato."
            />
            
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr,1.5fr]">
                <div>
                    <h3 className="mb-4 flex items-center gap-2 font-['Playfair_Display',serif] text-xl font-bold">
                        <FileText className="h-5 w-5 text-primary"/>
                        Regras de Comercialização
                    </h3>
                    <Accordion type="single" collapsible className="w-full">
                        {rules.map((rule, index) => (
                             <AccordionItem value={`item-${index}`} key={index}>
                                 <AccordionTrigger className="text-left text-sm font-semibold hover:text-primary">
                                    {rule.title}
                                </AccordionTrigger>
                                 <AccordionContent className="text-sm text-muted-foreground">
                                    {rule.content}
                                 </AccordionContent>
                             </AccordionItem>
                        ))}
                    </Accordion>
                </div>
                <div>
                     <h3 className="mb-4 font-['Playfair_Display',serif] text-xl font-bold">Tabela de Preços — Spot Rotativo</h3>
                     <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Faixa Horária</TableHead>
                                <TableHead className="text-right">5"</TableHead>
                                <TableHead className="text-right">10"</TableHead>
                                <TableHead className="text-right">15"</TableHead>
                                <TableHead className="text-right text-primary font-bold">30"</TableHead>
                                <TableHead className="text-right">45"</TableHead>
                                <TableHead className="text-right">60"</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {prices.map((price) => (
                                <TableRow key={price.faixa}>
                                    <TableCell className="font-medium">{price.faixa}</TableCell>
                                    <TableCell className="text-right">R$ {price.s05}</TableCell>
                                    <TableCell className="text-right">R$ {price.s10}</TableCell>
                                    <TableCell className="text-right">R$ {price.s15}</TableCell>
                                    <TableCell className="text-right text-primary font-bold">R$ {price.s30}</TableCell>
                                    <TableCell className="text-right">R$ {price.s45}</TableCell>
                                    <TableCell className="text-right">R$ {price.s60}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                         <TableCaption>Valores por inserção. Para planos e pacotes, consulte nossa equipe.</TableCaption>
                    </Table>
                </div>
            </div>
        </div>
    )
}

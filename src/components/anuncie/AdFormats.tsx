import { SectionHeader } from "../shared/SectionHeader";
import { Radio, Mic, Star } from "lucide-react";

const formats = [
    {
        icon: Radio,
        title: "Spot Comercial",
        desc: "Anúncios de 15, 30 ou 60 segundos inseridos nos intervalos comerciais da nossa programação. Ideal para campanhas de massa e reforço de marca.",
    },
    {
        icon: Mic,
        title: "Testemunhal (Citação)",
        desc: "Seu produto ou serviço mencionado ao vivo pelos nossos locutores, criando uma conexão autêntica e pessoal com os ouvintes.",
    },
    {
        icon: Star,
        title: "Patrocínio de Programa",
        desc: "Associe sua marca a um de nossos programas de sucesso, com vinhetas de abertura, encerramento e menções exclusivas.",
    }
];

export function AdFormats() {
    return (
        <div className="fi my-16">
            <SectionHeader
                eyebrow="Formatos"
                title={<>Como sua marca pode <em>aparecer</em></>}
                subtitle="Oferecemos diversos formatos de publicidade para atender às suas metas de marketing e orçamento."
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {formats.map((format, index) => (
                    <div key={index} className="rounded-lg border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-[0_12px_36px_rgba(0,0,0,.09)]">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <format.icon className="h-6 w-6" />
                        </div>
                        <div className="mb-2 font-['Playfair_Display',serif] text-lg font-bold">{format.title}</div>
                        <p className="text-[.8rem] leading-[1.7] text-muted-foreground">{format.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

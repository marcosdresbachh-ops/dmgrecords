import { SectionHeader } from "../shared/SectionHeader";

const testimonials = [
    {
        quote: "\"Anunciar na DMG Records triplicou o reconhecimento da nossa marca na cidade. Os ouvintes fiéis realmente compram!\"",
        author: "João Pereira",
        avatar: "J",
        biz: "Supermercado Central"
    },
    {
        quote: "\"Nossa pizzaria lotou nos finais de semana depois que começamos a veicular na DMG. O retorno foi imediato.\"",
        author: "Maria Souza",
        avatar: "M",
        biz: "Pizzaria Dom Marco"
    },
    {
        quote: "\"A equipe é muito profissional e o atendimento personalizado faz toda a diferença. Renovo o contrato sempre.\"",
        author: "Ricardo Alves",
        avatar: "R",
        biz: "Auto Peças Alves"
    }
];

export function Testimonials() {
    return (
        <div className="fi">
            <SectionHeader
                eyebrow="Depoimentos"
                title={<>O que nossos <em>anunciantes</em> dizem</>}
            />
             <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="rounded-lg border border-border bg-card p-6">
                        <div className="mb-4 font-['Inter',sans-serif] text-[.88rem] italic leading-[1.75] text-foreground/90">
                            {testimonial.quote}
                        </div>
                        <div className="flex items-center gap-2.5">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary font-['Playfair_Display',serif] text-[.85rem] font-black text-primary-foreground">
                                {testimonial.avatar}
                            </div>
                            <div>
                                <div className="text-[.85rem] font-bold">{testimonial.author}</div>
                                <div className="text-[.74rem] text-muted-foreground">{testimonial.biz}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

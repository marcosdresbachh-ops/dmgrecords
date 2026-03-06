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
                    <div key={index} className="rounded-lg border border-[--line] bg-[--bg2] p-6">
                        <div className="mb-4 font-['Inter',sans-serif] text-[.88rem] italic leading-[1.75] text-[--ink2]">
                            {testimonial.quote}
                        </div>
                        <div className="flex items-center gap-2.5">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[--red] font-['Playfair_Display',serif] text-[.85rem] font-black text-white">
                                {testimonial.avatar}
                            </div>
                            <div>
                                <div className="text-[.85rem] font-bold">{testimonial.author}</div>
                                <div className="text-[.74rem] text-[--ink3]">{testimonial.biz}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

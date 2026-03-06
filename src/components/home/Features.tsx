import { Radio, Music2, MessageCircle, Globe } from 'lucide-react';
import { SectionHeader } from '@/components/shared/SectionHeader';

const features = [
    { icon: Radio, title: "24h Ininterruptas", desc: "Transmissão contínua todos os dias, com programação variada manhã, tarde, noite e madrugada." },
    { icon: Music2, title: "Pedido de Músicas", desc: "Peça sua música favorita e o AutoDJ ou seu locutor toca na hora. Simples e rápido." },
    { icon: MessageCircle, title: "Chat ao Vivo", desc: "Converse com outros ouvintes e interaja com os locutores em tempo real pelo chat integrado." },
    { icon: Globe, title: "Acesso Global", desc: "Ouça de qualquer lugar do mundo, no celular, computador ou smart TV, sem custo algum." }
];

export function Features() {
    return (
        <section className="sec" id="features">
            <div className="sec-inner">
                <div className="fi">
                    <SectionHeader
                        eyebrow="Por que nos ouvir"
                        title={<>Tudo que uma boa <em>rádio precisa</em></>}
                    />
                </div>
                <div className="fi grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((feat, index) => (
                        <div key={index} className="rounded-lg border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-[0_12px_36px_rgba(0,0,0,.09)]">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <feat.icon className="h-6 w-6" />
                            </div>
                            <div className="mb-2 font-['Playfair_Display',serif] text-lg font-bold">{feat.title}</div>
                            <p className="text-[.8rem] leading-[1.7] text-muted-foreground">{feat.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

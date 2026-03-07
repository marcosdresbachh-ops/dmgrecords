import { Users, BarChart, Clock, Globe } from "lucide-react";
import { SectionHeader } from "../shared/SectionHeader";

const stats = [
    { icon: Users, count: "15K+", label: "Ouvintes Diários" },
    { icon: BarChart, count: "72%", label: "Público 25-45 anos" },
    { icon: Clock, count: "12h-14h", label: "Horário de Pico" },
    { icon: Globe, count: "90%", label: "Audiência no Brasil" }
];

export function AudienceStats() {
    return (
        <div className="fi mb-16">
            <SectionHeader
                eyebrow="Nossa Audiência"
                title={<>Conecte-se com um público <em>fiel</em></>}
                subtitle="Anunciar na DMG Records é falar diretamente com milhares de pessoas engajadas e apaixonadas por música."
            />
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => (
                    <div key={index} className="rounded-lg border border-border bg-card px-5 py-7 text-center transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-[0_8px_28px_rgba(0,0,0,.08)]">
                         <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <stat.icon className="h-6 w-6" />
                        </div>
                        <div className="font-['Playfair_Display',serif] text-4xl font-black leading-none text-primary">
                            {stat.count}
                        </div>
                        <span className="mt-2 block font-['DM_Mono',monospace] text-[.58rem] uppercase tracking-[.15em] text-muted-foreground">{stat.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

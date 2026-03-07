import { SectionHeader } from "../shared/SectionHeader";
import { Music, Mic, BarChart, Settings, ListMusic, Shield } from "lucide-react";

const features = [
    {
        icon: ListMusic,
        title: "Playlists Personalizadas",
        desc: "Escolha entre dezenas de gêneros e estilos ou monte uma playlist exclusiva com a cara da sua marca para criar o ambiente perfeito.",
    },
    {
        icon: Mic,
        title: "Locuções Profissionais",
        desc: "Grave anúncios, ofertas, promoções e vinhetas institucionais com nossos locutores para impulsionar suas vendas.",
    },
    {
        icon: Settings,
        title: "Painel de Controle",
        desc: "Gerencie suas playlists, agende anúncios e acompanhe o desempenho da sua rádio de forma simples e intuitiva.",
    },
    {
        icon: Shield,
        title: "Músicas 100% Licenciadas",
        desc: "Fique tranquilo com o ECAD. Todas as músicas são licenciadas para uso comercial, evitando multas e problemas legais.",
    },
    {
        icon: Music,
        title: "Sem Comerciais de Terceiros",
        desc: "A rádio é totalmente sua. Sem interrupções com anúncios de outras empresas, mantendo o foco no seu cliente.",
    },
    {
        icon: BarChart,
        title: "Relatórios de Desempenho",
        desc: "Acesse relatórios e entenda quais músicas e anúncios geram mais engajamento com seus clientes na loja.",
    }
];

export function IndoorFeatures() {
    return (
        <div className="fi my-16">
            <SectionHeader
                eyebrow="Funcionalidades"
                title={<>Tudo que sua empresa <em>precisa</em></>}
                subtitle="Oferecemos uma plataforma completa para você ter total controle sobre a identidade sonora do seu negócio."
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
    )
}

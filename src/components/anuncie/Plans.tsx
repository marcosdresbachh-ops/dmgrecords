import { SectionHeader } from "../shared/SectionHeader";
import { Volume2, Star, Mic, Trophy, Check } from "lucide-react";
import Link from 'next/link';

const plans = [
    {
        icon: Volume2,
        name: "Spot 30s",
        desc: "Comercial de 30 segundos inserido nos blocos da programação.",
        price: "R$ 150",
        period: "por semana",
        features: ["1 spot de 30 segundos", "6× ao dia", "Relatório de veiculações"],
        isFeatured: false,
    },
    {
        icon: Star,
        name: "Patrocínio",
        desc: "Patrocine um programa completo com menção ao vivo pelo locutor.",
        price: "R$ 490",
        period: "por mês",
        features: ["Menção ao vivo diária", "2 spots por programa", "Logo no site da rádio", "Relatório mensal"],
        isFeatured: true,
    },
    {
        icon: Mic,
        name: "Vinheta",
        desc: "Produção e veiculação de vinheta personalizada com sua marca.",
        price: "R$ 280",
        period: "por mês",
        features: ["Produção da vinheta", "Veiculação horária", "Arquivo master incluso"],
        isFeatured: false,
    },
    {
        icon: Trophy,
        name: "Premium",
        desc: "Pacote completo: spots, vinheta, patrocínio e banner no site.",
        price: "R$ 890",
        period: "por mês",
        features: ["Tudo do Patrocínio", "Vinheta personalizada", "Banner no site", "Redes sociais"],
        isFeatured: false,
    }
];

export function Plans() {
    return (
        <div className="fi">
            <SectionHeader
                eyebrow="Planos"
                title={<>Escolha o plano <em>ideal</em></>}
                subtitle="Temos opções para todos os tamanhos de negócio, desde o pequeno empreendedor até grandes marcas."
            />
            <div className="mb-15 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                {plans.map((plan, index) => (
                    <div key={index} className={`relative overflow-hidden rounded-[10px] border bg-card px-6 py-8 text-center transition-all hover:-translate-y-1.5 hover:border-primary hover:shadow-[0_16px_48px_rgba(0,0,0,.11)] ${plan.isFeatured ? 'border-2 border-primary bg-primary/10' : 'border-border'}`}>
                        {plan.isFeatured && <div className="absolute right-[-28px] top-4 origin-center-right rotate-45 transform bg-primary px-10 py-1 font-['DM_Mono',monospace] text-[.56rem] tracking-[.14em] text-primary-foreground">POPULAR</div>}
                        <div className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full text-primary ${plan.isFeatured ? 'bg-primary/20' : 'bg-primary/10'}`}>
                           <plan.icon className="h-[22px] w-[22px]" />
                        </div>
                        <div className="mb-1.5 font-['Playfair_Display',serif] text-lg font-black">{plan.name}</div>
                        <div className="mb-4 min-h-[50px] text-[.8rem] leading-[1.65] text-muted-foreground">{plan.desc}</div>
                        <div className="font-['Playfair_Display',serif] text-3xl font-black leading-none text-primary">{plan.price}</div>
                        <div className="mb-4 font-['Outfit',sans-serif] text-[.75rem] font-normal text-muted-foreground">{plan.period}</div>
                        <div className="mb-5 text-left">
                            {plan.features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-2 border-b border-border py-1.5 text-[.8rem] text-foreground/80 last:border-none">
                                    <span className="shrink-0 text-green-600"><Check className="h-[13px] w-[13px]" /></span>
                                    {feature}
                                </div>
                            ))}
                        </div>
                        <Link href="/contato" className={plan.isFeatured ? 'btn btn-red w-full justify-center' : 'btn btn-outline w-full justify-center'}>
                            Contratar
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

'use client';
import { SectionHeader } from "../shared/SectionHeader";
import { Check, Flame, Award, Crown, Megaphone } from "lucide-react";
import Link from 'next/link';

const plans = [
    {
        icon: Flame,
        name: "Plano Impulso Local",
        desc: "A porta de entrada para pequenos negócios marcarem presença em nossa programação.",
        price: "Sob Consulta",
        period: "pacote mensal",
        features: ["Até 5 inserções diárias", "Spots de 30 segundos", "Horários comerciais rotativos", "Relatório de veiculação mensal"],
        isFeatured: false,
    },
    {
        icon: Award,
        name: "Plano Destaque Regional",
        desc: "Ideal para empresas que buscam maior frequência e impacto, com menções ao vivo.",
        price: "Sob Consulta",
        period: "pacote mensal",
        features: ["Até 10 inserções diárias", "Spots de 30 ou 60 segundos", "2 menções ao vivo por semana", "Banner no site da rádio", "Escolha de horários de pico"],
        isFeatured: true,
    },
    {
        icon: Crown,
        name: "Plano Domínio Total",
        desc: "A solução completa para máxima exposição, incluindo patrocínio de programas.",
        price: "Sob Consulta",
        period: "pacote mensal",
        features: ["Até 15 inserções diárias", "Patrocínio de programa exclusivo", "5 menções ao vivo por semana", "Ação nas redes sociais", "Consultoria de campanha"],
        isFeatured: false,
    }
];

export function AdvertisingPlans() {
    return (
        <div className="fi mt-16">
            <SectionHeader
                eyebrow="Planos de Mídia"
                title={<>Escolha o plano <em>ideal</em> para sua marca</>}
                subtitle="Temos soluções flexíveis para todos os objetivos e orçamentos, desde campanhas locais a grandes ações de marca."
            />
            <div className="mb-4 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {plans.map((plan, index) => (
                    <div key={index} className={`relative flex flex-col overflow-hidden rounded-[10px] border bg-card px-6 py-8 text-center transition-all hover:-translate-y-1.5 hover:border-primary hover:shadow-[0_16px_48px_rgba(0,0,0,.11)] ${plan.isFeatured ? 'border-2 border-primary bg-primary/10' : 'border-border'}`}>
                        {plan.isFeatured && <div className="absolute right-[-28px] top-4 origin-center-right rotate-45 transform bg-primary px-10 py-1 font-['DM_Mono',monospace] text-[.56rem] tracking-[.14em] text-primary-foreground">POPULAR</div>}
                        <div className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full text-primary ${plan.isFeatured ? 'bg-primary/20' : 'bg-primary/10'}`}>
                           <plan.icon className="h-[22px] w-[22px]" />
                        </div>
                        <div className="mb-1.5 font-['Playfair_Display',serif] text-lg font-black">{plan.name}</div>
                        <div className="mb-4 min-h-[50px] text-[.8rem] leading-[1.65] text-muted-foreground">{plan.desc}</div>
                        <div className="font-['Playfair_Display',serif] text-3xl font-black leading-none text-primary">{plan.price}</div>
                        <div className="mb-4 font-['Outfit',sans-serif] text-[.75rem] font-normal text-muted-foreground">{plan.period}</div>
                        <div className="mb-5 flex-grow text-left">
                            {plan.features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-2 border-b border-border py-1.5 text-[.8rem] text-foreground/80 last:border-none">
                                    <span className="shrink-0 text-green-600"><Check className="h-[13px] w-[13px]" /></span>
                                    {feature}
                                </div>
                            ))}
                        </div>
                        <Link 
                            href="/contato"
                            className={plan.isFeatured ? 'btn btn-red mt-auto w-full justify-center' : 'btn btn-outline mt-auto w-full justify-center'}
                        >
                             <Megaphone className="h-4 w-4" /> Solicitar Proposta
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

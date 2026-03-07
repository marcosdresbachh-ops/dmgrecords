'use client';
import { SectionHeader } from "../shared/SectionHeader";
import { Check, Music, Mic, BarChart } from "lucide-react";
import Link from 'next/link';

const plans = [
    {
        icon: Music,
        name: "Plano Essencial",
        desc: "A trilha sonora perfeita para seu negócio começar a se destacar.",
        price: "R$ 199",
        period: "por mês",
        features: ["100% livre de ECAD", "Painel de controle de playlists", "1 gênero musical principal", "Suporte por e-mail"],
        isFeatured: false,
        href: "https://www.asaas.com/c/dij5ezn029wqmwkv",
    },
    {
        icon: Mic,
        name: "Plano Pro",
        desc: "Personalize totalmente a experiência do cliente com locuções e ofertas.",
        price: "R$ 349",
        period: "por mês",
        features: ["Tudo do Essencial", "Gravação de 5 vinhetas/mês", "Agendamento de anúncios", "Múltiplas playlists", "Suporte via WhatsApp"],
        isFeatured: true,
        href: "https://www.asaas.com/c/bvvk781h15h6lsah",
    },
    {
        icon: BarChart,
        name: "Plano Enterprise",
        desc: "A solução completa para redes de lojas com gestão centralizada.",
        price: "Custom",
        period: "sob consulta",
        features: ["Tudo do Pro", "Relatórios avançados", "Gerente de conta dedicado", "API para integrações", "Treinamento de equipe"],
        isFeatured: false,
        href: "https://wa.me/5551981446019",
    }
];

export function Plans() {
    return (
        <div className="fi">
            <SectionHeader
                eyebrow="Planos"
                title={<>Escolha o plano <em>ideal</em> para seu negócio</>}
                subtitle="Temos opções para todos os tamanhos de empresa, desde pequenos comércios até grandes redes de varejo."
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
                            href={plan.href}
                            target={plan.href.startsWith('http') ? '_blank' : '_self'}
                            rel="noopener noreferrer"
                            className={plan.isFeatured ? 'btn btn-red mt-auto w-full justify-center' : 'btn btn-outline mt-auto w-full justify-center'}
                        >
                            {plan.price === "Custom" ? "Consultar via WhatsApp" : "Contratar"}
                        </Link>
                    </div>
                ))}
            </div>
            <p className="text-center text-xs lowercase text-muted-foreground">
                consulte taxas. valores podem oscilar devido aos juros.
            </p>
        </div>
    )
}

import { Phone, Mail, Megaphone, Clock, ArrowRight, Instagram, Facebook, Youtube, Twitter } from 'lucide-react';
import Link from 'next/link';

const channels = [
    {
        icon: Phone,
        label: "WhatsApp",
        value: "(55) 00000-0000",
        href: "https://wa.me/5500000000000"
    },
    {
        icon: Mail,
        label: "E-mail",
        value: "contato@dmgrecords.com.br",
        href: "mailto:contato@dmgrecords.com.br"
    },
    {
        icon: Megaphone,
        label: "Publicidade",
        value: "publicidade@dmgrecords.com.br",
        href: "mailto:publicidade@dmgrecords.com.br"
    },
    {
        icon: Clock,
        label: "Horário de Atendimento",
        value: "Seg–Sex · 09h às 18h",
    }
]

const socials = [ Instagram, Facebook, Youtube, Twitter ];

export function ContactChannels() {
    return (
        <div className="fi">
            <h3 className="mb-3.5 font-['Playfair_Display',serif] text-2xl font-bold leading-tight">Nossos <em className="text-primary not-italic">canais</em> de atendimento</h3>
            <p className="mb-7 text-[.9rem] leading-[1.75] text-muted-foreground">Atendemos de segunda a sexta das 9h às 18h. Para sugestões de música e pedidos, envie a qualquer hora!</p>
            <div className="mb-5 flex flex-col gap-3.5">
                {channels.map((channel, index) => (
                    <a key={index} href={channel.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3.5 rounded-md border border-border bg-muted/50 p-4 text-inherit transition-colors hover:border-primary">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <channel.icon className="h-[17px] w-[17px]" />
                        </div>
                        <div>
                            <div className="mb-0.5 font-['DM_Mono',monospace] text-[.56rem] uppercase tracking-[.18em] text-muted-foreground">{channel.label}</div>
                            <div className="text-[.88rem] font-semibold text-foreground">{channel.value}</div>
                        </div>
                    </a>
                ))}
            </div>
            <a href="https://wa.me/5500000000000" className="mb-4 flex items-center gap-3 rounded-md bg-[#25D366] px-5 py-4 text-white transition-all hover:-translate-y-0.5 hover:opacity-95" target="_blank" rel="noopener noreferrer">
                <div className="text-2xl">💬</div>
                <div>
                    <div className="text-[.92rem] font-bold">Falar agora no WhatsApp</div>
                    <div className="mt-px text-[.76rem] opacity-80">Resposta rápida · Atendimento imediato</div>
                </div>
                <ArrowRight className="ml-auto h-4 w-4" />
            </a>
            <div>
                <div className="mb-3 font-['DM_Mono',monospace] text-[.6rem] uppercase tracking-[.18em] text-muted-foreground">Redes Sociais</div>
                <div className="flex gap-2.5">
                    {socials.map((Icon, index) => (
                        <a key={index} href="#" className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:bg-primary/10 hover:text-primary">
                            <Icon className="h-[17px] w-[17px]" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

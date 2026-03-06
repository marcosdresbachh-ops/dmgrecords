import { Radio, TrendingUp, Mic, MessageCircle, Trophy } from 'lucide-react';

const timelineEvents = [
    { year: 2017, title: "O início", desc: "A DMG Records Rádio começa a transmitir com uma pequena equipe de apaixonados por música, alcançando os primeiros 100 ouvintes simultâneos.", icon: Radio },
    { year: 2018, title: "Crescimento acelerado", desc: "Alcançamos 1.000 ouvintes diários e expandimos nossa grade horária para 24 horas com programação ao vivo durante o dia.", icon: TrendingUp },
    { year: 2020, title: "Novos talentos", desc: "Contratamos novos locutores e expandimos os gêneros musicais, incluindo Gospel, Rock e Pop. A rádio se torna referência nacional.", icon: Mic },
    { year: 2022, title: "Chat e interatividade", desc: "Lançamos o chat ao vivo e o sistema de pedidos, conectando ouvintes e locutores em tempo real. A comunidade explode.", icon: MessageCircle },
    { year: 2025, title: "15 mil ouvintes diários", desc: "Batemos o recorde de 15.000 ouvintes diários e lançamos o novo site com player integrado, chat e pedidos automáticos.", icon: Trophy }
];

export function Timeline() {
    return (
        <div className="relative mt-12 before:absolute before:left-4 before:top-0 before:bottom-0 before:w-0.5 before:bg-border md:before:left-5">
            {timelineEvents.map((event, index) => (
                <div key={index} className="relative mb-9 flex gap-6">
                    <div className="z-[1] flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground md:h-10 md:w-10">
                        <event.icon className="h-4 w-4" />
                    </div>
                    <div>
                        <div className="mb-1 font-['DM_Mono',monospace] text-[.62rem] tracking-[.14em] text-primary">{event.year}</div>
                        <div className="mb-1 text-[.95rem] font-bold">{event.title}</div>
                        <div className="text-[.82rem] leading-[1.65] text-muted-foreground">{event.desc}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

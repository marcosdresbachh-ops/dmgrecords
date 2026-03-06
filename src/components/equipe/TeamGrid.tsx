import { Clock, Briefcase, Server } from 'lucide-react';

const locutores = [
    {
      avatar: "M",
      name: "DJ Marcos",
      role: "Locutor Principal",
      bio: "Com mais de 10 anos de rádio, DJ Marcos é a voz que acorda o Brasil. Seu jeito animado e descontraído conquista ouvintes de todas as idades.",
      shows: ["Bom Dia DMG", "Noite Pop"],
      horario: "Seg–Sex · 06h–09h",
      gradient: "linear-gradient(135deg,#1a1a2e,var(--red))"
    },
    {
      avatar: "L",
      name: "DJ Letícia",
      role: "Locutora Pop & R&B",
      bio: "Especialista em Pop e R&B, Letícia traz o melhor da música contemporânea com energia e leveza para o seu dia.",
      shows: ["Morning Hits", "Pop Weekend"],
      horario: "Seg–Sex · 09h–12h",
      gradient: "linear-gradient(135deg,#7B1FA2,#E040FB)"
    },
    {
      avatar: "C",
      name: "DJ Carlos",
      role: "Locutor Sertanejo",
      bio: "O sertanejo é sua paixão. DJ Carlos seleciona os melhores clássicos e lançamentos para fazer sua hora do almoço muito mais gostosa.",
      shows: ["Almoço Sertanejo", "Churrasco Sertanejo"],
      horario: "Diário · 12h–15h",
      gradient: "linear-gradient(135deg,#B36000,#FFA000)"
    },
    {
      avatar: "A",
      name: "DJ Ana Lima",
      role: "Locutora Gospel",
      bio: "Com uma voz suave e uma fé inabalável, Ana Lima leva mensagens de esperança e ótima música gospel para alegrar seu dia.",
      shows: ["Tarde Gospel", "Sábado Gospel"],
      horario: "Seg–Sex · 15h–18h",
      gradient: "linear-gradient(135deg,#1B6B35,#25D366)"
    },
    {
      avatar: "R",
      name: "DJ Rafael",
      role: "Locutor Prime Time",
      bio: "O Prime Time é com Rafael. Energia, agitação e as músicas mais pedidas da semana no horário de maior audiência da DMG Records.",
      shows: ["Prime Time DMG", "Sexta Animada"],
      horario: "Seg–Sex · 18h–21h",
      gradient: "linear-gradient(135deg,#0D47A1,#42A5F5)"
    },
    {
      avatar: "S",
      name: "DJ Sandra",
      role: "Locutora Noturna",
      bio: "Voz suave para as noites românticas. DJ Sandra seleciona as músicas mais emocionantes para acompanhar seu fim de dia.",
      shows: ["Noite Romântica", "Dom. Noturno"],
      horario: "Diário · 21h–00h",
      gradient: "linear-gradient(135deg,#880E4F,#F48FB1)"
    },
    {
      avatar: "An",
      name: "DJ André",
      role: "Locutor Rock",
      bio: "O rock brasileiro e internacional é a especialidade de André. Das baladas ao hard rock, ele sabe o que os fãs querem ouvir.",
      shows: ["Rock Night", "Rock Weekend"],
      horario: "Sex/Sáb · 22h–06h",
      gradient: "linear-gradient(135deg,#AD1457,#E91E63)"
    }
];

const gestao = [
    {
      avatar: "D",
      name: "Direção Geral",
      role: "Fundador & Diretor",
      bio: "Visionário e fundador da DMG Records Rádio. Responsável pela direção editorial e estratégica da emissora desde o primeiro dia no ar.",
      horario: "Gestão & Estratégia",
      icon: Briefcase,
      gradient: "linear-gradient(135deg,#1a1a2e,#555)"
    },
    {
      avatar: "T",
      name: "Técnico de TI",
      role: "Infraestrutura & Streaming",
      bio: "Garante que a transmissão nunca pare. Responsável pelos servidores, streaming e toda a infraestrutura digital da rádio.",
      horario: "Infraestrutura 24h",
      icon: Server,
      gradient: "linear-gradient(135deg,#004D40,#26A69A)"
    },
    {
      avatar: "Co",
      name: "Comercial",
      role: "Gerente de Publicidade",
      bio: "Cuida das parcerias e contratos publicitários. O elo entre anunciantes e a programação da DMG Records Rádio.",
      horario: "Seg–Sex · 09h–18h",
      icon: Briefcase,
      gradient: "linear-gradient(135deg,#0D47A1,#1565C0)"
    }
];


const TeamCard = ({ member }: any) => (
    <div className="overflow-hidden rounded-[10px] border border-border bg-card text-center transition-all hover:-translate-y-1.5 hover:border-primary hover:shadow-[0_16px_48px_rgba(0,0,0,.1)]">
        <div className="h-20" style={{ background: member.gradient }}></div>
        <div className="relative mx-auto -mt-10 mb-3 flex h-20 w-20 items-center justify-center rounded-full border-4 border-white font-['Playfair_Display',serif] text-3xl font-black text-white" style={{ background: member.gradient }}>
            {member.avatar}
        </div>
        <div className="px-5 pb-6">
            <div className="mb-1 font-['Playfair_Display',serif] text-lg font-black">{member.name}</div>
            <div className="mb-2.5 font-['DM_Mono',monospace] text-[.6rem] uppercase tracking-[.16em] text-primary">{member.role}</div>
            <p className="mb-3.5 text-[.8rem] leading-[1.7] text-muted-foreground">{member.bio}</p>
            {member.shows && (
                <div className="mb-3.5 flex flex-wrap justify-center gap-1.5">
                    {member.shows.map((show: string) => (
                        <span key={show} className="rounded-sm bg-muted px-2 py-0.5 font-['DM_Mono',monospace] text-[.56rem] uppercase tracking-[.1em] text-muted-foreground">{show}</span>
                    ))}
                </div>
            )}
            <div className="flex items-center justify-center gap-1.5 font-['DM_Mono',monospace] text-[.6rem] tracking-[.12em] text-muted-foreground">
                {member.icon ? <member.icon className="h-3 w-3" /> : <Clock className="h-3 w-3" />}
                {member.horario}
            </div>
        </div>
    </div>
);

export function TeamGrid() {
    return (
        <>
            <div className="fi grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {locutores.map((member) => <TeamCard key={member.name} member={member} />)}
            </div>

            <div className="fi my-6 block text-center font-['DM_Mono',monospace] text-[.6rem] tracking-[.2em] text-primary md:my-7">
                <hr className="mb-7 mt-14 border-t-2 border-border" />
                — EQUIPE TÉCNICA & GESTÃO —
            </div>

            <div className="fi grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                 {gestao.map((member) => <TeamCard key={member.name} member={member} />)}
            </div>
        </>
    )
}

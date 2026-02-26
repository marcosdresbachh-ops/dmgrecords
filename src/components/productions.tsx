
import { Mic, Music, Layers, Radio, Zap, Disc } from "lucide-react";
import { SectionHeading } from "./section-heading";

const SERVICES = [
  {
    icon: <Mic className="h-12 w-12 text-primary" />,
    title: "Gravação de Música",
    desc: "Estúdio de última geração com acústica tratada e microfones premium para capturar cada detalhe da sua voz."
  },
  {
    icon: <Music className="h-12 w-12 text-primary" />,
    title: "Produção Musical",
    desc: "Transformamos sua ideia em um hit mundial com direção artística de produtores premiados."
  },
  {
    icon: <Layers className="h-12 w-12 text-primary" />,
    title: "Mixagem",
    desc: "Equilíbrio perfeito de frequências e dinâmica para que sua track soe profissional em qualquer sistema."
  },
  {
    icon: <Zap className="h-12 w-12 text-primary" />,
    title: "Masterização",
    desc: "O toque final de brilho e volume competitivo necessário para as plataformas de streaming atuais."
  },
  {
    icon: <Disc className="h-12 w-12 text-primary" />,
    title: "Beats Exclusivos",
    desc: "Produção de instrumentais sob medida para o seu estilo, garantindo originalidade e impacto."
  },
  {
    icon: <Radio className="h-12 w-12 text-primary" />,
    title: "Distribuição",
    desc: "Cuidamos de todo o processo de lançamento em todas as plataformas digitais mundiais."
  }
];

export function ProductionsSection() {
  return (
    <section id="producoes" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 h-[600px] w-[600px] bg-primary/5 rounded-full blur-[150px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 h-[600px] w-[600px] bg-accent/5 rounded-full blur-[150px] -ml-64 -mb-64" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading 
          badge="Serviços Profissionais"
          title={<>QUALIDADE <span className="text-accent italic">DMG.</span></>}
          description="Oferecemos uma estrutura completa de produção para elevar sua carreira artística ao patamar dos grandes nomes do mercado."
          align="center"
          className="mb-24"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="p-10 bg-card border border-white/5 hover:border-primary/40 transition-all duration-500 group hover:-translate-y-3 shadow-xl">
              <div className="mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                {service.icon}
              </div>
              <h3 className="text-3xl font-black text-white mb-6 uppercase italic tracking-tighter leading-none">{service.title}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

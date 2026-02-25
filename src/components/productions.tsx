
import { Mic, Music, Layers, Radio, Zap, Disc } from "lucide-react";

const SERVICES = [
  {
    icon: <Mic className="h-10 w-10 text-primary" />,
    title: "Gravação de Música",
    desc: "Estúdio de última geração com acústica tratada e microfones premium para capturar cada detalhe da sua voz."
  },
  {
    icon: <Music className="h-10 w-10 text-primary" />,
    title: "Produção Musical",
    desc: "Transformamos sua ideia em um hit mundial com direção artística de produtores premiados."
  },
  {
    icon: <Layers className="h-10 w-10 text-primary" />,
    title: "Mixagem",
    desc: "Equilíbrio perfeito de frequências e dinâmica para que sua track soe profissional em qualquer sistema."
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Masterização",
    desc: "O toque final de brilho e volume competitivo necessário para as plataformas de streaming atuais."
  },
  {
    icon: <Disc className="h-10 w-10 text-primary" />,
    title: "Beats Exclusivos",
    desc: "Produção de instrumentais sob medida para o seu estilo, garantindo originalidade e impacto."
  },
  {
    icon: <Radio className="h-10 w-10 text-primary" />,
    title: "Distribuição",
    desc: "Cuidamos de todo o processo de lançamento em todas as plataformas digitais mundiais."
  }
];

export function ProductionsSection() {
  return (
    <section id="producoes" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute -top-24 -right-24 h-96 w-96 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 bg-accent/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2">
            <div className="h-1 w-12 bg-primary" />
            <span className="text-primary font-black uppercase tracking-widest">Serviços</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
            QUALIDADE <span className="text-accent neon-glow italic">DMG</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos uma estrutura completa de produção para elevar sua carreira artística ao patamar dos grandes nomes do mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="p-8 bg-card border border-white/5 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-2">
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 uppercase italic tracking-tighter">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

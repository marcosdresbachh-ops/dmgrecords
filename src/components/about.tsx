
import { Music, Award, Headphones, Users } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

const STATS = [
  { icon: <Music className="h-6 w-6" />, label: "Músicas Produzidas", value: "250+" },
  { icon: <Award className="h-6 w-6" />, label: "Prêmios do Setor", value: "12" },
  { icon: <Users className="h-6 w-6" />, label: "Artistas Agenciados", value: "15" },
  { icon: <Headphones className="h-6 w-6" />, label: "Plays Mensais", value: "2M+" },
];

export function AboutSection() {
  const images = Array.isArray(PlaceHolderImages) ? PlaceHolderImages : [];
  const contraCapa = images.find(i => i.id === "release-2")?.imageUrl || "/viniamaral/07.contra capa.png";

  return (
    <section id="sobre" className="py-24 bg-card overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2">
              <div className="h-1 w-12 bg-primary" />
              <span className="text-primary font-black uppercase tracking-widest">Sobre Nós</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase italic leading-[0.9]">
              Nascidos no <span className="text-accent">ESTÚDIO</span>,<br />
              Vividos no <span className="text-primary">PALCO</span>.
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                A DMG Records não é apenas uma gravadora; é um ecossistema criativo dedicado a descobrir e 
                potencializar talentos da música urbana. Nossa missão é fornecer aos artistas as ferramentas, 
                o conhecimento e a estrutura necessários para transformar talento em legado.
              </p>
              <p>
                Com sede em um dos complexos de produção mais avançados do país, oferecemos desde a 
                concepção do beat até o planejamento estratégico de lançamento global. Nosso foco principal 
                atualmente é a gestão e expansão da carreira meteórica de Vini Amaral.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8">
              {STATS.map((stat, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-2xl font-black text-white">{stat.value}</p>
                    <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
             <div className="absolute -inset-4 bg-primary/20 -rotate-3 z-0" />
             <div className="relative z-10 aspect-video bg-black border-4 border-white flex items-center justify-center p-8 text-center overflow-hidden group">
                <div 
                  className="absolute inset-0 opacity-40 group-hover:scale-110 transition-transform duration-1000 bg-cover bg-center" 
                  style={{ backgroundImage: `url('${contraCapa}')` }}
                />
                <div className="relative z-20">
                  <h4 className="text-4xl font-black text-white mb-2 italic tracking-tighter">ESTRUTURA 360º</h4>
                  <p className="text-primary font-bold uppercase tracking-[0.3em]">DMG PRODUCTION HUB</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}


import { Music, Award, Headphones, Users } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { SectionHeading } from "./section-heading";

const STATS = [
  { icon: <Music className="h-8 w-8" />, label: "Músicas Produzidas", value: "250+" },
  { icon: <Award className="h-8 w-8" />, label: "Prêmios do Setor", value: "12" },
  { icon: <Users className="h-8 w-8" />, label: "Artistas Agenciados", value: "15" },
  { icon: <Headphones className="h-8 w-8" />, label: "Plays Mensais", value: "2M+" },
];

export function AboutSection() {
  const images = Array.isArray(PlaceHolderImages) ? PlaceHolderImages : [];
  const contraCapa = images.find(i => i.id === "release-2")?.imageUrl || "/viniamaral/07.contra capa.png";

  return (
    <section id="sobre" className="py-32 bg-zinc-50 overflow-hidden border-y border-zinc-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12 order-2 lg:order-1">
            <SectionHeading 
              badge="Sobre Nós"
              title={<>Nascidos no <span className="text-zinc-900 italic">ESTÚDIO</span>, <br />Vividos no <span className="text-primary">PALCO</span>.</>}
            />
            
            <div className="space-y-8 text-2xl text-zinc-500 leading-relaxed font-medium">
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

            <div className="grid grid-cols-2 gap-12 pt-12 border-t border-zinc-200">
              {STATS.map((stat, i) => (
                <div key={i} className="flex items-start gap-6 group">
                  <div className="p-5 bg-white border border-zinc-100 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-5xl font-black text-zinc-900 tracking-tighter leading-none mb-2">{stat.value}</p>
                    <p className="text-[10px] uppercase tracking-[0.4em] font-black text-zinc-400">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
             <div className="absolute -inset-12 bg-primary/5 -rotate-3 z-0 blur-3xl" />
             <div className="relative z-10 aspect-video bg-white border-[16px] border-white shadow-2xl flex items-center justify-center overflow-hidden group">
                <div 
                  className="absolute inset-0 opacity-20 group-hover:scale-110 group-hover:opacity-40 transition-all duration-1000 bg-cover bg-center grayscale" 
                  style={{ backgroundImage: `url('${contraCapa}')` }}
                />
                <div className="relative z-20 space-y-6 text-center">
                  <h4 className="text-6xl font-black text-zinc-900 italic tracking-tighter uppercase leading-none">ESTRUTURA 360º</h4>
                  <p className="text-primary font-black uppercase tracking-[0.5em] text-xs bg-white py-3 inline-block px-10 border border-zinc-100 shadow-sm">DMG PRODUCTION HUB</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

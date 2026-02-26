
import { Radio, FileText, BarChart3, Globe } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Button } from "@/components/ui/button";

const FEATURES = [
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: "Alcance Global",
    desc: "Sua música disponível para ouvintes em todo o mundo através da nossa plataforma dedicada."
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-accent" />,
    title: "Gere Insights",
    desc: "Aumente seu engajamento e melhore seus algoritmos nas principais plataformas digitais."
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: "Concessão Necessária",
    desc: "Processo profissional com documento de concessão para segurança de ambas as partes."
  }
];

export function WebRadioSection() {
  return (
    <section id="radio" className="py-32 bg-card relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <SectionHeading 
              badge="Web Rádio DMG"
              title={<>SUA MÚSICA NA <br /><span className="text-accent italic">NOSSA GRADE.</span></>}
            />
            
            <div className="space-y-6">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Quer ver sua música tocando na rádio oficial da DMG Records? Nós abrimos espaço para artistas independentes que buscam expandir seu público.
              </p>
              
              <div className="p-6 bg-black/50 border-l-4 border-primary italic text-sm text-white/70 leading-relaxed">
                "A DMG permite que sua música seja tocada de forma voluntária, ajudando no insight com as plataformas. Esta reprodução não é remunerada, visto que a rádio não possui fins lucrativos. Para veiculação, é obrigatório o envio do documento de concessão devidamente assinado."
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-6">
              {FEATURES.map((item, i) => (
                <div key={i} className="space-y-3">
                  <div className="p-3 bg-white/5 inline-block rounded-lg">{item.icon}</div>
                  <h4 className="text-white font-black text-sm uppercase tracking-tighter italic">{item.title}</h4>
                  <p className="text-xs text-muted-foreground leading-tight">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="pt-8">
              <Button asChild className="rounded-none bg-primary hover:bg-primary/90 text-white font-black h-14 px-8 tracking-tighter">
                <a href="#contato">ENVIAR MINHA MÚSICA</a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-primary/10 blur-[100px] rounded-full animate-pulse" />
            <div className="relative z-10 aspect-square bg-zinc-900 border border-white/10 flex flex-col items-center justify-center p-12 text-center group shadow-2xl">
              <div className="mb-8 p-8 bg-primary rounded-full shadow-2xl shadow-primary/40 group-hover:scale-110 transition-transform duration-500">
                <Radio className="h-20 w-20 text-white animate-pulse" />
              </div>
              <h4 className="text-4xl font-black text-white italic tracking-tighter uppercase mb-4">NO AR AGORA</h4>
              <p className="text-primary font-bold tracking-[0.3em] text-xs uppercase mb-8">Programação 24 Horas</p>
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-2/3 animate-[shimmer_2s_infinite]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

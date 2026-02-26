
import { ShieldCheck, Globe, Lock, FileCheck } from "lucide-react";
import { SectionHeading } from "./section-heading";

const PROTECTION_DETAILS = [
  {
    icon: <ShieldCheck className="h-12 w-12 text-primary" />,
    title: "Proteção no Brasil",
    desc: "Gestão completa de direitos autorais e execução pública via ECAD e associações nacionais, garantindo que cada play seja remunerado."
  },
  {
    icon: <Globe className="h-12 w-12 text-accent" />,
    title: "Proteção nos EUA",
    desc: "Registro internacional através do U.S. Copyright Office e parcerias com PROs globais, protegendo sua obra em território americano."
  },
  {
    icon: <Lock className="h-12 w-12 text-primary" />,
    title: "Copyright Digital",
    desc: "Monitoramento constante de Content ID em plataformas como YouTube e redes sociais para evitar o uso indevido da sua obra."
  },
  {
    icon: <FileCheck className="h-12 w-12 text-accent" />,
    title: "Sync Licensing",
    desc: "Oportunidades de licenciamento para filmes, séries, jogos e publicidade, expandindo seu alcance para o mercado audiovisual mundial."
  }
];

export function LicensingSection() {
  return (
    <section id="licenciamento" className="py-32 bg-zinc-950 relative overflow-hidden">
      {/* Background Gradients for depth */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -ml-64" />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading 
          badge="Segurança e Direito"
          title={<>TRABALHO PROTEGIDO <br /><span className="text-primary">GLOBALMENTE.</span></>}
          description="A DMG Records garante que sua propriedade intelectual esteja segura em qualquer lugar do mundo, com foco especial nos mercados do Brasil e EUA."
          align="center"
          className="mb-24"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {PROTECTION_DETAILS.map((item, idx) => (
            <div 
              key={idx} 
              className="group p-10 bg-black/40 border border-white/5 hover:border-primary/40 transition-all duration-500 rounded-none flex flex-col md:flex-row gap-8 items-start"
            >
              <div className="shrink-0 p-4 bg-white/5 group-hover:bg-primary/10 transition-colors">
                {item.icon}
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter leading-none group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 border border-white/5 bg-primary/5 text-center">
          <p className="text-sm font-black uppercase tracking-[0.4em] text-primary mb-2">Selo de Qualidade DMG</p>
          <p className="text-xl text-white/80 font-medium italic">
            "Sua arte é seu maior patrimônio. Nós cuidamos da burocracia para você focar apenas no som."
          </p>
        </div>
      </div>
    </section>
  );
}

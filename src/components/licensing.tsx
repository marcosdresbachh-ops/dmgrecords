
import { ShieldCheck, Globe, Lock, FileCheck, Star } from "lucide-react";
import { SectionHeading } from "./section-heading";

const PROTECTION_DETAILS = [
  {
    icon: <ShieldCheck className="h-12 w-12 text-primary" />,
    title: "Proteção no Brasil",
    desc: "Gestão completa de direitos autorais e execução pública via ECAD e associações nacionais, garantindo que cada play seja remunerado."
  },
  {
    icon: <Star className="h-12 w-12 text-zinc-900" />,
    title: "Proteção nos EUA (ASCAP)",
    desc: "Como parceiros ASCAP, oferecemos filiação automática e coleta internacional direta, protegendo e monetizando sua obra em território americano."
  },
  {
    icon: <Lock className="h-12 w-12 text-primary" />,
    title: "Copyright Digital",
    desc: "Monitoramento constante de Content ID em plataformas como YouTube e redes sociais para evitar o uso indevido da sua obra."
  },
  {
    icon: <FileCheck className="h-12 w-12 text-zinc-900" />,
    title: "Sync Licensing",
    desc: "Oportunidades de licenciamento para filmes, séries, jogos e publicidade, expandindo seu alcance para o mercado audiovisual mundial."
  }
];

export function LicensingSection() {
  return (
    <section id="licenciamento" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -ml-64" />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading 
          badge="Segurança e Direito"
          title={<>TRABALHO PROTEGIDO <br /><span className="text-zinc-900">GLOBALMENTE.</span></>}
          description="Através da nossa parceria estratégica com a ASCAP e o suporte da Stripe Connect, garantimos que sua arte e seus ganhos estejam seguros em qualquer lugar do planeta."
          align="center"
          className="mb-24"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {PROTECTION_DETAILS.map((item, idx) => (
            <div 
              key={idx} 
              className="group p-12 bg-zinc-50 border border-zinc-100 hover:border-primary/20 transition-all duration-500 rounded-none flex flex-col md:flex-row gap-10 items-start shadow-sm"
            >
              <div className="shrink-0 p-6 bg-white shadow-sm group-hover:bg-primary transition-all group-hover:text-white border border-zinc-100">
                {item.icon}
              </div>
              <div className="space-y-6">
                <h3 className="text-4xl font-black text-zinc-900 uppercase italic tracking-tighter leading-none group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-zinc-500 text-xl leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 border border-zinc-100 bg-zinc-50 text-center">
          <p className="text-xs font-black uppercase tracking-[0.6em] text-zinc-400 mb-4">Selo de Qualidade DMG & ASCAP Partner</p>
          <p className="text-3xl text-zinc-900 font-black italic tracking-tighter uppercase">
            "Sua arte é coletada pela ASCAP, protegida pela DMG e paga via Stripe."
          </p>
        </div>
      </div>
    </section>
  );
}

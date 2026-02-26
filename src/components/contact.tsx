
import { Mail, Phone, Instagram, Youtube, Twitter, Music2 } from "lucide-react";
import { ContactForm } from "./contact-form";
import { SectionHeading } from "./section-heading";

export function ContactSection() {
  const soundcloudUrl = "https://soundcloud.com/vini-amaral-748220502";

  const SOCIALS = [
    { icon: <Instagram className="h-6 w-6" />, href: "https://instagram.com", color: "hover:bg-pink-600" },
    { icon: <Youtube className="h-6 w-6" />, href: "https://youtube.com", color: "hover:bg-red-600" },
    { icon: <Music2 className="h-6 w-6" />, href: soundcloudUrl, color: "hover:bg-[#ff5500]" },
    { icon: <Twitter className="h-6 w-6" />, href: "https://twitter.com", color: "hover:bg-blue-400" },
  ];

  return (
    <section id="contato" className="py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="space-y-12">
            <SectionHeading 
              badge="Fale Conosco"
              title={<>Vamos Criar o Próximo <span className="text-primary italic">Hit.</span></>}
              description="Interessado em produção, agenciamento ou colaborações? Deixe sua mensagem e nossa equipe entrará em contato."
            />

            <div className="space-y-8">
              <div className="flex items-center gap-6 text-white group cursor-pointer">
                <div className="p-5 bg-zinc-900 group-hover:bg-primary transition-all rounded-xl shadow-lg">
                  <Mail className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-black mb-1">E-mail Profissional</p>
                  <p className="text-2xl font-black italic tracking-tighter">contato@dmgrecords.com.br</p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-white group cursor-pointer">
                <div className="p-5 bg-zinc-900 group-hover:bg-accent transition-all rounded-xl shadow-lg">
                  <Phone className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-black mb-1">WhatsApp Business</p>
                  <p className="text-2xl font-black italic tracking-tighter">+55 51 93380-6899</p>
                </div>
              </div>
            </div>

            <div className="flex gap-5 pt-6">
              {SOCIALS.map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={cn(
                    "h-14 w-14 bg-zinc-900 flex items-center justify-center text-white transition-all rounded-xl hover:scale-110 shadow-lg",
                    social.color
                  )}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-full" />
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}

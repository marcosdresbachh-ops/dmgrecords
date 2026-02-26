
import { DmgLogo } from "./dmg-logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Início", href: "#inicio" },
    { name: "O Artista", href: "#artista" },
    { name: "Lançamentos", href: "#lancamentos" },
    { name: "Produções", href: "#producoes" },
    { name: "Sobre", href: "#sobre" },
  ];

  return (
    <footer className="bg-black py-20 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
          <DmgLogo textSize="text-3xl" iconSize={28} />

          <nav className="flex flex-wrap justify-center gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
            {footerLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="hover:text-primary transition-all hover:translate-y-[-2px]"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-10 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-white/20">
          <p>© {currentYear} DMG Records & DMG Stream. Todos os direitos reservados.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


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
    <footer className="bg-white py-32 border-t border-zinc-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-16 mb-24">
          <DmgLogo textSize="text-4xl" iconSize={32} dark />

          <nav className="flex flex-wrap justify-center gap-12 text-[11px] font-black uppercase tracking-[0.4em] text-zinc-400">
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

        <div className="pt-16 border-t border-zinc-100 text-center flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-300">
          <p>© {currentYear} DMG Records & DMG Stream. Official Digital Ecosystem.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-zinc-900 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

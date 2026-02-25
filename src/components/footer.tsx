
import { Mic2 } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-16 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-sm">
              <Mic2 className="text-white h-5 w-5" />
            </div>
            <span className="text-xl font-black tracking-tighter text-white">
              DMG <span className="text-primary">RECORDS</span>
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-8 text-xs font-bold uppercase tracking-[0.2em] text-white/40">
            <a href="#inicio" className="hover:text-primary transition-colors">Início</a>
            <a href="#artista" className="hover:text-primary transition-colors">O Artista</a>
            <a href="#lancamentos" className="hover:text-primary transition-colors">Lançamentos</a>
            <a href="#producoes" className="hover:text-primary transition-colors">Produções</a>
            <a href="#sobre" className="hover:text-primary transition-colors">Sobre</a>
          </nav>
        </div>

        <div className="pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/20">
          <p>© {currentYear} DMG Records & DMG Stream. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

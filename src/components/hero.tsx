import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlayCircle, Headphones, Mail } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages?.find((img) => img.id === "hero-bg");

  if (!heroImage) return null;

  return (
    <section id="inicio" className="relative h-screen w-full flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover scale-105 animate-pulse duration-[10000ms]"
          priority
          data-ai-hint={heroImage.imageHint}
        />
        <div className="absolute inset-0 bg-studio-overlay" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <span className="inline-block text-accent font-bold tracking-[0.3em] uppercase mb-4 neon-glow text-sm">
            Exploda seu Som
          </span>
          <h1 className="text-6xl md:text-9xl font-black text-white leading-tight mb-6 tracking-tighter">
            DMG <span className="text-primary italic">RECORDS</span>
          </h1>
          <p className="text-xl md:text-3xl text-white/80 font-medium mb-10 max-w-2xl leading-relaxed">
            Produtora e Gravadora Oficial do Cantor <span className="text-white font-bold">Vini Amaral</span>. 
            Definindo o futuro da música urbana.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="rounded-none px-8 py-7 text-lg bg-primary hover:bg-primary/90">
              <PlayCircle className="mr-2 h-6 w-6" /> OUVIR AGORA
            </Button>
            <Button size="lg" variant="outline" className="rounded-none px-8 py-7 text-lg border-white/20 hover:bg-white/10 text-white">
              <Headphones className="mr-2 h-6 w-6" /> VER LANÇAMENTOS
            </Button>
            <Button size="lg" variant="ghost" className="rounded-none px-8 py-7 text-lg text-accent hover:text-accent hover:bg-accent/10 border border-accent/20">
              <Mail className="mr-2 h-6 w-6" /> CONTATO
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 z-10 hidden md:block">
        <div className="flex flex-col gap-4">
          <div className="h-24 w-px bg-primary/50 mx-auto" />
          <span className="text-xs font-bold tracking-widest text-primary vertical-text rotate-180">SCROLL</span>
        </div>
      </div>
    </section>
  );
}

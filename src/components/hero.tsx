
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlayCircle, ShoppingCart } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export function Hero() {
  const images = Array.isArray(PlaceHolderImages) ? PlaceHolderImages : [];
  const heroImage = images.find((img) => img.id === "hero-bg");
  const soundcloudUrl = "https://soundcloud.com/vini-amaral-748220502";
  const elasticStageUrl = "https://elasticstage.com/soundcloud/releases/vini-amaral-nobody-knows-album";

  return (
    <section id="inicio" className="relative min-h-screen w-full flex items-center overflow-hidden pt-[31px]">
      <div className="absolute inset-0 z-0">
        {heroImage ? (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover scale-105 animate-pulse duration-[10000ms]"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        ) : (
          <div className="absolute inset-0 bg-zinc-900" />
        )}
        <div className="absolute inset-0 bg-studio-overlay" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-12 duration-1000">
          <span className="inline-block text-accent font-bold tracking-[0.4em] uppercase mb-4 neon-glow text-sm">
            Novo Álbum: Nobody Knows
          </span>
          <h1 className="text-6xl md:text-9xl font-black text-white leading-tight mb-6 tracking-tighter uppercase italic">
            DMG <span className="text-primary not-italic">RECORDS</span>
          </h1>
          <p className="text-xl md:text-3xl text-white/80 font-medium mb-10 max-w-2xl leading-relaxed">
            Produtora e Gravadora Oficial do Cantor <span className="text-white font-bold border-b-4 border-primary">Vini Amaral</span>. 
            Adquira agora o novo álbum em edição exclusiva.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="rounded-none px-10 py-8 text-xl font-black tracking-tighter bg-primary hover:bg-primary/90 shadow-2xl shadow-primary/30 italic">
              <a href={elasticStageUrl} target="_blank" rel="noopener noreferrer">
                <ShoppingCart className="mr-2 h-7 w-7" /> COMPRAR ÁLBUM
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-none px-10 py-8 text-xl font-black tracking-tighter border-white/20 hover:bg-white/10 text-white backdrop-blur-sm italic">
              <a href={soundcloudUrl} target="_blank" rel="noopener noreferrer">
                <PlayCircle className="mr-2 h-7 w-7" /> OUVIR AGORA
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 z-10 hidden md:flex flex-col items-center gap-4">
        <span className="text-[10px] font-bold tracking-widest text-primary vertical-text rotate-180 mb-2">SCROLL DOWN</span>
        <div className="h-24 w-px bg-gradient-to-t from-primary to-transparent" />
      </div>
    </section>
  );
}

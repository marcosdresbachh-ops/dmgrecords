
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
    <section id="inicio" className="relative min-h-screen w-full flex items-center overflow-hidden pt-[31px] bg-white">
      <div className="absolute inset-0 z-0">
        {heroImage ? (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover scale-105 animate-pulse duration-[10000ms] opacity-20"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        ) : (
          <div className="absolute inset-0 bg-zinc-50" />
        )}
        <div className="absolute inset-0 bg-studio-overlay" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-12 duration-1000">
          <span className="inline-block text-primary font-black tracking-[0.4em] uppercase mb-4 text-xs">
            Novo Álbum: Nobody Knows
          </span>
          <h1 className="text-7xl md:text-[10rem] font-black text-zinc-900 leading-[0.85] mb-8 tracking-tighter uppercase italic">
            DMG <span className="text-primary not-italic">RECORDS</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-500 font-medium mb-12 max-w-2xl leading-relaxed">
            Produtora e Gravadora Oficial do Cantor <span className="text-zinc-900 font-bold border-b-4 border-primary">Vini Amaral</span>. 
            Adquira agora o novo álbum em edição exclusiva.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Button asChild size="lg" className="rounded-none px-12 py-10 text-xl font-black tracking-tighter bg-zinc-900 hover:bg-primary text-white shadow-2xl transition-all italic">
              <a href={elasticStageUrl} target="_blank" rel="noopener noreferrer">
                <ShoppingCart className="mr-3 h-7 w-7" /> COMPRAR ÁLBUM
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-none px-12 py-10 text-xl font-black tracking-tighter border-zinc-200 hover:bg-zinc-50 text-zinc-900 backdrop-blur-sm italic transition-all">
              <a href={soundcloudUrl} target="_blank" rel="noopener noreferrer">
                <PlayCircle className="mr-3 h-7 w-7 text-primary" /> OUVIR AGORA
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 z-10 hidden md:flex flex-col items-center gap-4">
        <span className="text-[10px] font-bold tracking-widest text-zinc-300 vertical-text rotate-180 mb-2 uppercase">SCROLL DOWN</span>
        <div className="h-24 w-px bg-gradient-to-t from-zinc-200 to-transparent" />
      </div>
    </section>
  );
}

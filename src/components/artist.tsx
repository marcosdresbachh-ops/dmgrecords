
import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Music2 } from "lucide-react";

export function ArtistSection() {
  const images = PlaceHolderImages || [];
  const artistImage = images.find((img) => img.id === "vini-amaral");
  const soundcloudUrl = "https://soundcloud.com/vini-amaral-748220502";

  if (!artistImage) return null;

  return (
    <section id="artista" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] group overflow-hidden border-l-4 border-primary">
            <Image
              src={artistImage.imageUrl}
              alt={artistImage.description}
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              data-ai-hint={artistImage.imageHint}
            />
            <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/90 to-transparent w-full">
              <h3 className="text-4xl font-black text-white italic">VINI AMARAL</h3>
            </div>
          </div>

          <div className="space-y-8">
            <div className="inline-flex items-center gap-2">
              <div className="h-1 w-12 bg-primary" />
              <span className="text-primary font-black uppercase tracking-widest">O Artista</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
              A VOZ DA NOVA <br />
              <span className="text-accent neon-glow italic">GERAÇÃO.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Vini Amaral é a estrela em ascensão da DMG Records. Com uma fusão única de R&B contemporâneo, 
                Pop e elementos da cultura urbana, ele tem conquistado o cenário musical brasileiro com letras 
                profundas e uma performance vocal inigualável.
              </p>
              <p>
                Nascido e criado no coração da música vibrante, Vini traz em sua essência a energia do asfalto 
                e a suavidade das grandes baladas. Seus lançamentos recentes já acumulam milhões de plays 
                nas principais plataformas de streaming.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="border-primary text-primary px-4 py-1 text-sm rounded-none">R&B</Badge>
              <Badge variant="outline" className="border-primary text-primary px-4 py-1 text-sm rounded-none">URBAN POP</Badge>
              <Badge variant="outline" className="border-primary text-primary px-4 py-1 text-sm rounded-none">TRAP SOUL</Badge>
            </div>

            <Button asChild className="rounded-none bg-[#ff5500] hover:bg-[#ff5500]/90 text-white font-bold h-14 px-8 mt-4">
               <a href={soundcloudUrl} target="_blank" rel="noopener noreferrer">
                 <Music2 className="mr-2 h-5 w-5" /> SIGA NO SOUNDCLOUD
               </a>
            </Button>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-white/5">
              <div>
                <p className="text-3xl font-black text-white">+500K</p>
                <p className="text-sm text-muted-foreground uppercase tracking-widest">Ouvintes Mensais</p>
              </div>
              <div>
                <p className="text-3xl font-black text-white">10M+</p>
                <p className="text-sm text-muted-foreground uppercase tracking-widest">Plays Totais</p>
              </div>
              <div>
                <p className="text-3xl font-black text-white">TOP 50</p>
                <p className="text-sm text-muted-foreground uppercase tracking-widest">Viral Brasil</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

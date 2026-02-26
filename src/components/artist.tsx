
import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Music2 } from "lucide-react";
import { SectionHeading } from "./section-heading";

export function ArtistSection() {
  const images = Array.isArray(PlaceHolderImages) ? PlaceHolderImages : [];
  const artistImage = images.find((img) => img.id === "vini-amaral");
  const soundcloudUrl = "https://soundcloud.com/vini-amaral-748220502";

  if (!artistImage) return null;

  return (
    <section id="artista" className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-[4/5] group overflow-hidden border-l-8 border-primary shadow-2xl">
            <Image
              src={artistImage.imageUrl}
              alt={artistImage.description}
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              data-ai-hint={artistImage.imageHint}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-0 left-0 p-12 w-full">
              <h3 className="text-6xl font-black text-white italic tracking-tighter uppercase leading-none">
                VINI <br /> <span className="text-primary">AMARAL</span>
              </h3>
            </div>
          </div>

          <div className="space-y-10">
            <SectionHeading 
              badge="O Artista"
              title={<>A VOZ DA NOVA <br /><span className="text-accent neon-glow italic">GERAÇÃO.</span></>}
            />
            
            <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
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

            <div className="flex flex-wrap gap-4">
              <Badge variant="outline" className="border-primary/50 text-primary px-6 py-2 text-sm rounded-none font-black uppercase tracking-widest bg-primary/5">R&B</Badge>
              <Badge variant="outline" className="border-accent/50 text-accent px-6 py-2 text-sm rounded-none font-black uppercase tracking-widest bg-accent/5">URBAN POP</Badge>
              <Badge variant="outline" className="border-white/20 text-white px-6 py-2 text-sm rounded-none font-black uppercase tracking-widest">TRAP SOUL</Badge>
            </div>

            <div className="pt-4">
              <Button asChild className="rounded-none bg-[#ff5500] hover:bg-[#ff5500]/90 text-white font-black italic h-16 px-10 text-lg tracking-tighter shadow-xl shadow-[#ff5500]/20">
                 <a href={soundcloudUrl} target="_blank" rel="noopener noreferrer">
                   <Music2 className="mr-2 h-6 w-6" /> SIGA NO SOUNDCLOUD
                 </a>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-12 border-t border-white/10">
              <div>
                <p className="text-4xl font-black text-white tracking-tighter">+500K</p>
                <p className="text-[10px] text-primary font-black uppercase tracking-[0.3em]">Ouvintes Mensais</p>
              </div>
              <div>
                <p className="text-4xl font-black text-white tracking-tighter">10M+</p>
                <p className="text-[10px] text-primary font-black uppercase tracking-[0.3em]">Plays Totais</p>
              </div>
              <div>
                <p className="text-4xl font-black text-white tracking-tighter">TOP 50</p>
                <p className="text-[10px] text-primary font-black uppercase tracking-[0.3em]">Viral Brasil</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

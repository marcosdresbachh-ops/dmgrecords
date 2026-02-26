
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
          {/* Lado Esquerdo: Imagem com estilo da foto */}
          <div className="relative aspect-[4/5] group overflow-hidden border-l-[12px] border-primary shadow-2xl">
            <Image
              src={artistImage.imageUrl}
              alt={artistImage.description}
              fill
              className="object-cover transition-all duration-1000 group-hover:scale-105"
              data-ai-hint={artistImage.imageHint}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40" />
            <div className="absolute bottom-8 left-8 p-4">
              <h3 className="text-7xl font-black italic tracking-tighter uppercase leading-[0.8] drop-shadow-lg">
                <span className="text-white block">VINI</span>
                <span className="text-primary block">AMARAL</span>
              </h3>
            </div>
          </div>

          {/* Lado Direito: Conteúdo */}
          <div className="space-y-10">
            <SectionHeading 
              badge="O Artista"
              title={<>A VOZ DA NOVA <br /><span className="text-accent italic neon-glow">GERAÇÃO.</span></>}
            />
            
            <div className="space-y-6 text-xl text-muted-foreground leading-relaxed font-medium">
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

            {/* Badges estilizadas */}
            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="border-primary text-primary px-5 py-1.5 text-xs rounded-none font-black uppercase tracking-widest bg-transparent">R&B</Badge>
              <Badge variant="outline" className="border-accent text-accent px-5 py-1.5 text-xs rounded-none font-black uppercase tracking-widest bg-transparent">URBAN POP</Badge>
              <Badge variant="outline" className="border-white/20 text-white px-5 py-1.5 text-xs rounded-none font-black uppercase tracking-widest bg-transparent">TRAP SOUL</Badge>
            </div>

            {/* Botão SoundCloud Laranja */}
            <div className="pt-4">
              <Button asChild className="rounded-none bg-[#ff5500] hover:bg-[#ff5500]/90 text-white font-black italic h-16 px-10 text-lg tracking-tighter shadow-xl shadow-[#ff5500]/20 uppercase">
                 <a href={soundcloudUrl} target="_blank" rel="noopener noreferrer">
                   <Music2 className="mr-3 h-6 w-6" /> SIGA NO SOUNDCLOUD
                 </a>
              </Button>
            </div>

            {/* Estatísticas com rótulos em vermelho */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-12 border-t border-white/10">
              <div>
                <p className="text-5xl font-black text-white tracking-tighter">+500K</p>
                <p className="text-[10px] text-primary font-black uppercase tracking-[0.2em] mt-1">Ouvintes Mensais</p>
              </div>
              <div>
                <p className="text-5xl font-black text-white tracking-tighter">10M+</p>
                <p className="text-[10px] text-primary font-black uppercase tracking-[0.2em] mt-1">Plays Totais</p>
              </div>
              <div>
                <p className="text-5xl font-black text-white tracking-tighter">TOP 50</p>
                <p className="text-[10px] text-primary font-black uppercase tracking-[0.2em] mt-1">Viral Brasil</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

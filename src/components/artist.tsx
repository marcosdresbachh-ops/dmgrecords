
import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Music2, ShoppingCart } from "lucide-react";
import { SectionHeading } from "./section-heading";

export function ArtistSection() {
  const images = Array.isArray(PlaceHolderImages) ? PlaceHolderImages : [];
  const artistImage = images.find((img) => img.id === "vini-amaral");
  const soundcloudUrl = "https://soundcloud.com/vini-amaral-748220502";
  const elasticStageUrl = "https://elasticstage.com/soundcloud/releases/vini-amaral-nobody-knows-album";

  if (!artistImage) return null;

  return (
    <section id="artista" className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Lado Esquerdo: Imagem Editorial */}
          <div className="relative aspect-[4/5] group overflow-hidden border border-zinc-100 shadow-2xl">
            <Image
              src={artistImage.imageUrl}
              alt={artistImage.description}
              fill
              className="object-cover transition-all duration-1000 group-hover:scale-105 grayscale hover:grayscale-0"
              data-ai-hint={artistImage.imageHint}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-8 left-8 p-4">
              <h3 className="text-8xl font-black italic tracking-tighter uppercase leading-[0.8] drop-shadow-sm">
                <span className="text-zinc-900 block">VINI</span>
                <span className="text-primary block">AMARAL</span>
              </h3>
            </div>
          </div>

          {/* Lado Direito: Conteúdo Revista */}
          <div className="space-y-12">
            <SectionHeading 
              badge="O Artista"
              title={<>A VOZ DA NOVA <br /><span className="text-zinc-900 italic underline decoration-primary decoration-8">GERAÇÃO.</span></>}
            />
            
            <div className="space-y-8 text-2xl text-zinc-500 leading-relaxed font-medium">
              <p className="first-letter:text-7xl first-letter:font-black first-letter:text-primary first-letter:mr-3 first-letter:float-left">
                Vini Amaral é a estrela em ascensão da DMG Records. Acaba de lançar seu novo projeto <strong>"Nobody Knows"</strong>, 
                uma obra-prima que consolida sua fusão única de R&B contemporâneo e cultura urbana.
              </p>
              <p>
                Nascido e criado no coração da música vibrante, Vini traz em sua essência a energia do asfalto 
                e a suavidade das grandes baladas. Seus lançamentos recentes já acumulam milhões de plays 
                nas principais plataformas de streaming.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Badge variant="outline" className="border-zinc-200 text-zinc-900 px-6 py-2 text-xs rounded-none font-black uppercase tracking-[0.3em] bg-zinc-50">R&B</Badge>
              <Badge variant="outline" className="border-zinc-200 text-zinc-900 px-6 py-2 text-xs rounded-none font-black uppercase tracking-[0.3em] bg-zinc-50">URBAN POP</Badge>
              <Badge variant="outline" className="border-zinc-200 text-zinc-900 px-6 py-2 text-xs rounded-none font-black uppercase tracking-[0.3em] bg-zinc-50">TRAP SOUL</Badge>
            </div>

            <div className="pt-6 flex flex-wrap gap-6">
              <Button asChild className="rounded-none bg-[#ff5500] hover:bg-zinc-900 text-white font-black italic h-20 px-12 text-xl tracking-tighter shadow-xl transition-all uppercase">
                 <a href={soundcloudUrl} target="_blank" rel="noopener noreferrer">
                   <Music2 className="mr-4 h-7 w-7" /> SIGA NO SOUNDCLOUD
                 </a>
              </Button>
              <Button asChild variant="outline" className="rounded-none border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white font-black italic h-20 px-12 text-xl tracking-tighter shadow-sm transition-all uppercase">
                 <a href={elasticStageUrl} target="_blank" rel="noopener noreferrer">
                   <ShoppingCart className="mr-4 h-7 w-7" /> COMPRAR DISCO
                 </a>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 pt-12 border-t border-zinc-100">
              <div>
                <p className="text-6xl font-black text-zinc-900 tracking-tighter leading-none">+500K</p>
                <p className="text-[10px] text-zinc-400 font-black uppercase tracking-[0.3em] mt-3">Ouvintes Mensais</p>
              </div>
              <div>
                <p className="text-6xl font-black text-zinc-900 tracking-tighter leading-none">10M+</p>
                <p className="text-[10px] text-zinc-400 font-black uppercase tracking-[0.3em] mt-3">Plays Totais</p>
              </div>
              <div>
                <p className="text-6xl font-black text-zinc-900 tracking-tighter leading-none">TOP 50</p>
                <p className="text-[10px] text-zinc-400 font-black uppercase tracking-[0.3em] mt-3">Viral Brasil</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

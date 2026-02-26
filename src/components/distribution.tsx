
import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export function DistributionSection() {
  const images = Array.isArray(PlaceHolderImages) ? PlaceHolderImages : [];
  const distImage = images.find((img) => img.id === "distribution-logos");

  if (!distImage) return null;

  return (
    <section className="py-24 bg-white border-y border-zinc-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2">
            <div className="h-1 w-12 bg-primary" />
            <span className="text-primary font-black uppercase tracking-[0.3em] text-xs">Conexão Total</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-zinc-900 italic tracking-tighter uppercase leading-none">
            DISPONÍVEL EM TODAS AS <br />
            <span className="text-accent">PLATAFORMAS.</span>
          </h2>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto font-medium">
            Garantimos que sua música chegue a cada canto do planeta através da nossa rede de distribuição premium.
          </p>
        </div>
        
        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-6xl h-56 md:h-96 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700 ease-in-out group">
            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <Image
              src={distImage.imageUrl}
              alt={distImage.description}
              fill
              className="object-contain relative z-10"
              data-ai-hint={distImage.imageHint}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

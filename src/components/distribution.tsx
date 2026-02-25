
import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export function DistributionSection() {
  const images = Array.isArray(PlaceHolderImages) ? PlaceHolderImages : [];
  const distImage = images.find((img) => img.id === "distribution-logos");

  if (!distImage) return null;

  return (
    <section className="py-16 bg-black border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-xs font-bold text-primary uppercase tracking-[0.4em] mb-2">Disponível em Todas as Plataformas</p>
          <h3 className="text-2xl font-black text-white italic tracking-tighter uppercase">Distribuição Global</h3>
        </div>
        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-4xl h-32 md:h-40 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700 ease-in-out">
            <Image
              src={distImage.imageUrl}
              alt={distImage.description}
              fill
              className="object-contain"
              data-ai-hint={distImage.imageHint}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

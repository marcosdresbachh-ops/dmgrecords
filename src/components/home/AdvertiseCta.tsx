import Link from 'next/link';
import { Megaphone } from 'lucide-react';

export function AdvertiseCta() {
  return (
    <section className="sec bg-foreground">
      <div className="sec-inner text-center text-white">
        <div className="fi rounded-lg bg-[linear-gradient(135deg,var(--red),var(--red-dark))] p-10">
          <h3 className="mb-2.5 font-['Playfair_Display',serif] text-3xl font-black">
            Anuncie na DMG Records
          </h3>
          <p className="mb-6 mx-auto max-w-lg text-[.92rem] text-white/70">
            Divulgue sua marca para milhares de ouvintes apaixonados por música. Temos o formato de anúncio perfeito para o seu negócio decolar.
          </p>
          <Link href="/vale-indica/painel" className="btn btn-white">
            <Megaphone className="h-4 w-4" />
            Anuncie Conosco
          </Link>
        </div>
      </div>
    </section>
  );
}

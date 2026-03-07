import Link from 'next/link';
import { MapPin } from 'lucide-react';

export function ValeIndicaCta() {
  return (
    <section className="sec bg-muted/50">
      <div className="sec-inner">
        <div className="fi rounded-lg bg-card border border-border p-10 text-center shadow-sm">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
            <MapPin className="h-7 w-7" />
          </div>
          <h3 className="mb-2.5 font-['Playfair_Display',serif] text-3xl font-black text-foreground">
            Guia Comercial Vale Indica
          </h3>
          <p className="mb-6 mx-auto max-w-lg text-[.92rem] text-muted-foreground">
            Apoie os negócios da sua região. Encontre os melhores serviços, restaurantes e lojas do Vale do Sinos em nosso guia comercial exclusivo.
          </p>
          <Link href="/vale-indica" className="btn btn-red">
            Explorar o Guia Local
          </Link>
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { SectionHeader } from '@/components/shared/SectionHeader';

const sponsors = [
    { name: 'JM Calçados', logoUrl: 'https://picsum.photos/seed/jm-calcados/140/50', hint: 'shoe store' },
    { name: 'Pizzaria Fornalha', logoUrl: 'https://picsum.photos/seed/fornalha/140/50', hint: 'pizza place' },
    { name: 'Imobiliária Central', logoUrl: 'https://picsum.photos/seed/imobiliaria/140/50', hint: 'real estate' },
    { name: 'Farmácia Total', logoUrl: 'https://picsum.photos/seed/farmacia/140/50', hint: 'pharmacy logo' },
    { name: 'Auto Center Veloz', logoUrl: 'https://picsum.photos/seed/autocenter/140/50', hint: 'auto repair' },
    { name: 'Mercado do Povo', logoUrl: 'https://picsum.photos/seed/mercado/140/50', hint: 'grocery store' },
    { name: 'Loja de Roupas Style', logoUrl: 'https://picsum.photos/seed/loja-style/140/50', hint: 'clothing store' },
    { name: 'Restaurante Sabor', logoUrl: 'https://picsum.photos/seed/restaurante-sabor/140/50', hint: 'restaurant logo' },
];

export function Sponsors() {
  const allSponsors = [...sponsors, ...sponsors]; // Duplicate for seamless scroll

  return (
    <section className="sec border-y border-border bg-muted/50">
      <div className="sec-inner">
        <div className="fi">
            <SectionHeader
                eyebrow="Parceiros"
                title={<>Quem <em>anuncia</em> com a gente</>}
                className="!mb-8 text-center"
            />
        </div>
        <div className="fi relative h-24 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <div className="animate-marquee-rtl flex w-max items-center gap-20 pr-20">
            {allSponsors.map((sponsor, index) => (
              <Link href="/anuncie" key={index} className="flex h-16 shrink-0 items-center justify-center" title={`Anuncie como ${sponsor.name}`}>
                <Image
                  src={sponsor.logoUrl}
                  alt={sponsor.name}
                  width={140}
                  height={50}
                  data-ai-hint={sponsor.hint}
                  className="object-contain brightness-0 opacity-40 transition-opacity hover:opacity-70 dark:brightness-0 dark:invert"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

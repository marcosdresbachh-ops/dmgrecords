import React from 'react';

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <div className="bg-[--ink] relative overflow-hidden px-6 md:px-12 py-11 md:py-14">
      <div className="absolute inset-0 bg-[repeating-linear-gradient(-55deg,transparent_0,transparent_38px,rgba(255,255,255,.016)_38px,rgba(255,255,255,.016)_39px)]"></div>
      <div className="absolute right-0 top-0 h-full w-[35%] bg-[linear-gradient(135deg,var(--red),var(--red-dark))] [clip-path:polygon(25%_0,100%_0,100%_100%,0%_100%)]"></div>
      <div className="relative z-[2] mx-auto max-w-[1280px]">
        <div className="mb-3.5 flex items-center gap-2.5 font-['DM_Mono',monospace] text-[.6rem] uppercase tracking-[.28em] text-[rgba(255,255,255,.45)] before:block before:h-px before:w-5 before:bg-[--red]">
          {eyebrow}
        </div>
        <h1 className="mb-3.5 font-['Playfair_Display',serif] text-[clamp(2.4rem,5vw,4rem)] font-black leading-[.97] text-white">
          {title}
        </h1>
        <p className="max-w-[500px] text-[.95rem] leading-[1.75] text-[rgba(255,255,255,.58)]">{description}</p>
      </div>
    </div>
  );
}

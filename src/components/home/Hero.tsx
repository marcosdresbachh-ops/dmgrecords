import { PlayCircle, MessageCircle } from 'lucide-react';

export function Hero() {
  return (
    <section className="bg-foreground relative overflow-hidden pt-16 md:pt-24">
      <div className="absolute inset-0 bg-[repeating-linear-gradient(-55deg,transparent_0,transparent_38px,rgba(255,255,255,.016)_38px,rgba(255,255,255,.016)_39px)]"></div>
      <div className="absolute right-0 top-0 h-full w-[44%] bg-[linear-gradient(135deg,var(--red),var(--red-dark))] [clip-path:polygon(20%_0,100%_0,100%_100%,0%_100%)]"></div>
      <div className="relative z-[2] mx-auto grid max-w-[1280px] grid-cols-1 items-end gap-16 px-6 md:grid-cols-2 md:px-12">
        <div className="pb-16 md:pb-22">
          <div className="mb-4 flex items-center gap-2.5 font-['Poppins',_sans-serif] text-[.6rem] uppercase tracking-[.28em] text-white/45 before:block before:h-px before:w-5 before:bg-primary">
            Web Rádio 24h
          </div>
          <h1 className="mb-5 font-['Poppins',_sans-serif] text-[clamp(3rem,5.5vw,5rem)] font-black leading-[.97] text-white">
            A trilha<br /><span className="text-primary">sonora</span><br />do amor
          </h1>
          <p className="mb-8 max-w-[420px] text-[.95rem] leading-[1.78] text-white/60">
            Músicas românticas, pop adulto e clássicos que marcaram gerações. 24 horas por dia, 7 dias por semana.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="btn btn-white">
              <PlayCircle className="h-4 w-4" /> Ouvir Ao Vivo
            </button>
            <a href="#ao-vivo" className="btn btn-ghost">
              <MessageCircle className="h-4 w-4" /> Interação
            </a>
          </div>
          <div className="mt-9 flex flex-wrap gap-2">
            {['Românticas', 'Pop Adulto', 'Clássicos'].map(chip => (
              <span key={chip} className="rounded-sm border border-white/10 px-3 py-1 font-['Poppins',_sans-serif] text-[.58rem] uppercase tracking-[.14em] text-white/50 transition-all hover:border-primary hover:bg-primary/20 hover:text-white">
                {chip}
              </span>
            ))}
          </div>
        </div>
        <div className="hidden items-end justify-center md:flex">
          <div className="relative h-80 w-80">
            <div className="absolute inset-x-0 bottom-0 z-10 flex justify-around rounded-md border border-white/10 bg-white/10 p-4 text-center backdrop-blur-md">
                <div><span className="vs-num block font-['Poppins',_sans-serif] text-2xl font-black leading-none text-white" data-count="24">0</span><span className="vs-lbl mt-1 block font-['Poppins',_sans-serif] text-[.52rem] tracking-[.14em] text-white/40">Horas no Ar</span></div>
                <div><span className="vs-num block font-['Poppins',_sans-serif] text-2xl font-black leading-none text-white" data-count="365">0</span><span className="vs-lbl mt-1 block font-['Poppins',_sans-serif] text-[.52rem] tracking-[.14em] text-white/40">Dias por Ano</span></div>
                <div><span className="vs-num block font-['Poppins',_sans-serif] text-2xl font-black leading-none text-white" data-count="1000">0</span><span className="vs-lbl mt-1 block font-['Poppins',_sans-serif] text-[.52rem] tracking-[.14em] text-white/40">Músicas</span></div>
            </div>
            <div className="mx-auto mt-5 h-72 w-72 animate-[spin_14s_linear_infinite] rounded-full bg-[radial-gradient(circle_at_50%_50%,#1a1a1a_0%,#1a1a1a_14%,transparent_14%),repeating-radial-gradient(circle_at_50%_50%,#0f0f0f_0,#0f0f0f_2px,#1e1e1e_2px,#1e1e1e_4px)] shadow-[0_30px_80px_rgba(0,0,0,.55)] after:absolute after:left-1/2 after:top-1/2 after:flex after:h-16 after:w-16 after:-translate-x-1/2 after:-translate-y-1/2 after:items-center after:justify-center after:rounded-full after:bg-primary after:font-['Poppins',_sans-serif] after:text-[.82rem] after:font-black after:text-white after:content-['AMOR']"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

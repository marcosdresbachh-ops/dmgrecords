import { SectionHeader } from "@/components/shared/SectionHeader";

const tracks=[
  {n:1,t:"I Will Always Love You",a:"Whitney Houston",d:"4:31",p:98},
  {n:2,t:"My Heart Will Go On",a:"Celine Dion",d:"4:40",p:90},
  {n:3,t:"Something",a:"The Beatles",d:"3:03",p:86},
  {n:4,t:"Perfect",a:"Ed Sheeran",d:"4:23",p:82},
  {n:5,t:"Thinking Out Loud",a:"Ed Sheeran",d:"4:41",p:77},
  {n:6,t:"Just the Way You Are",a:"Bruno Mars",d:"3:40",p:72},
  {n:7,t:"Shallow",a:"Lady Gaga & Bradley Cooper",d:"3:35",p:66},
  {n:8,t:"Can't Help Falling in Love",a:"Elvis Presley",d:"3:01",p:61},
  {n:9,t:"Wonderful Tonight",a:"Eric Clapton",d:"3:42",p:55},
  {n:10,t:"Unchained Melody",a:"The Righteous Brothers",d:"3:36",p:48},
];

export function TopTen() {
    return (
        <section className="sec bg-muted/50" id="top">
            <div className="sec-inner">
                <div className="fi">
                    <SectionHeader eyebrow="Mais tocadas" title={<>Top <em>10</em> da Semana</>} />
                </div>
                <div className="fi mx-auto max-w-[760px]">
                    {tracks.map(t => (
                        <div key={t.n} className="group flex cursor-default items-center gap-5 border-b border-border py-4 transition-all md:gap-8 hover:pl-2.5">
                            <span className="w-12 shrink-0 text-right font-['Poppins',_sans-serif] text-3xl font-black text-primary/10 transition-colors group-hover:text-primary">
                                {String(t.n).padStart(2,'0')}
                            </span>
                            <div className="flex-1">
                                <div className="text-[.92rem] font-bold text-foreground">{t.t}</div>
                                <div className="mt-0.5 text-[.76rem] text-muted-foreground">{t.a}</div>
                            </div>
                            <div className="hidden h-1 w-20 overflow-hidden rounded-sm bg-border md:block">
                                <div className="top-fill h-full rounded-sm bg-primary transition-[width] duration-700 ease-in-out" data-pct={t.p} style={{width: '0%'}}></div>
                            </div>
                            <span className="font-['Poppins',_sans-serif] text-[.68rem] text-muted-foreground">{t.d}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

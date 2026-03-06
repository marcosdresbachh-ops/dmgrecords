import { SectionHeader } from "@/components/shared/SectionHeader";

const tracks=[
  {n:1,t:"Não Abro Mão",a:"Henrique & Juliano",d:"3:42",p:98},
  {n:2,t:"Fiel",a:"Henrique & Juliano",d:"3:18",p:90},
  {n:3,t:"Apelido Carinhoso",a:"Zé Neto & Cristiano",d:"3:55",p:86},
  {n:4,t:"Deus Cuida de Mim",a:"Fernandinho",d:"4:12",p:82},
  {n:5,t:"Tempo de Virar",a:"Luísa Sonza",d:"3:08",p:77},
  {n:6,t:"Bate Meu Coração",a:"Lauana Prado",d:"3:30",p:72},
  {n:7,t:"Trem Bala",a:"Ana Vilela",d:"4:02",p:66},
  {n:8,t:"Evidências",a:"Chitãozinho & Xororó",d:"4:44",p:61},
  {n:9,t:"Mil Milagres",a:"Aline Barros",d:"3:57",p:55},
  {n:10,t:"Saudade Que Dói",a:"Jorge & Mateus",d:"3:25",p:48},
];

export function TopTen() {
    return (
        <section className="sec bg-[--bg3]" id="top">
            <div className="sec-inner">
                <div className="fi">
                    <SectionHeader eyebrow="Mais tocadas" title={<>Top <em>10</em> da Semana</>} />
                </div>
                <div className="fi mx-auto max-w-[760px]">
                    {tracks.map(t => (
                        <div key={t.n} className="group flex cursor-default items-center gap-5 border-b border-[--line] py-4 transition-all md:gap-8 hover:pl-2.5">
                            <span className="w-12 shrink-0 text-right font-['Playfair_Display',serif] text-3xl font-black text-[rgba(212,36,58,.15)] transition-colors group-hover:text-[--red]">
                                {String(t.n).padStart(2,'0')}
                            </span>
                            <div className="flex-1">
                                <div className="text-[.92rem] font-bold">{t.t}</div>
                                <div className="mt-0.5 text-[.76rem] text-[--ink3]">{t.a}</div>
                            </div>
                            <div className="hidden h-1 w-20 overflow-hidden rounded-sm bg-[--line] md:block">
                                <div className="top-fill h-full rounded-sm bg-[--red] transition-[width] duration-700 ease-in-out" data-pct={t.p} style={{width: '0%'}}></div>
                            </div>
                            <span className="font-['DM_Mono',monospace] text-[.68rem] text-[--ink3]">{t.d}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

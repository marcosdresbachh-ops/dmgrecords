import { SectionHeader } from "../shared/SectionHeader";

export function Mission() {
    return (
        <div className="fi mb-16 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
                <SectionHeader
                    eyebrow="Nossa Missão"
                    title={<>Música que <em>transforma</em></>}
                />
                <div className="space-y-4 text-[.95rem] leading-[1.82] text-[--ink3]">
                    <p>A <strong className="text-[--ink]">DMG Records Rádio</strong> nasceu da paixão pela música e pelo poder transformador do rádio. Somos uma web rádio comprometida com a qualidade musical e a valorização dos artistas brasileiros.</p>
                    <p>Nossa programação é cuidadosamente curada para atender todos os gostos: do sertanejo raiz ao gospel contemporâneo, do pop nacional ao rock alternativo. Cada hora do dia tem seu som especial.</p>
                    <p>Com <strong className="text-[--ink]">transmissão 24 horas ininterruptas</strong>, levamos música, entretenimento e fé para ouvintes em todo o Brasil e no mundo.</p>
                </div>
            </div>
            <div className="flex justify-center text-center">
                <div className="relative flex h-80 w-80 animate-[spin_18s_linear_infinite] items-center justify-center rounded-full bg-[--ink] before:absolute before:inset-0 before:rounded-full before:bg-[repeating-radial-gradient(circle,transparent,transparent_10px,rgba(255,255,255,.04)_11px,transparent_12px)]">
                    <div className="z-[2] flex h-16 w-16 items-center justify-center rounded-full bg-[--red] font-['Playfair_Display',serif] text-[.9rem] font-black text-white">DMG</div>
                </div>
            </div>
        </div>
    )
}

import { SectionHeader } from "../shared/SectionHeader";

export function Mission() {
    return (
        <div className="fi mb-16 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
                <SectionHeader
                    eyebrow="Nossa Missão"
                    title={<>Música que <em>apaixona</em></>}
                />
                <div className="space-y-4 text-[.95rem] leading-[1.82] text-muted-foreground">
                    <p>A <strong className="text-foreground">Amor FM</strong> é uma emissora digital operada pela Dresbach Media Ltda dedicada à música romântica e conteúdo musical de qualidade.</p>
                    <p>Nossa programação é cuidadosamente curada para os corações apaixonados: do pop adulto aos clássicos que marcaram gerações. Cada hora do dia tem uma trilha sonora especial.</p>
                    <p>Com <strong className="text-foreground">transmissão 24 horas ininterruptas</strong>, levamos as melhores músicas românticas para ouvintes em todo o Brasil e no mundo.</p>
                </div>
            </div>
            <div className="flex justify-center text-center">
                <div className="relative flex h-80 w-80 animate-[spin_18s_linear_infinite] items-center justify-center rounded-full bg-foreground before:absolute before:inset-0 before:rounded-full before:bg-[repeating-radial-gradient(circle,transparent,transparent_10px,rgba(255,255,255,.04)_11px,transparent_12px)]">
                    <div className="z-[2] flex h-16 w-16 items-center justify-center rounded-full bg-primary font-['Poppins',_sans-serif] text-[.9rem] font-black text-primary-foreground">AMOR</div>
                </div>
            </div>
        </div>
    )
}

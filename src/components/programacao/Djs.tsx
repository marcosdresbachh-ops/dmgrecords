const djs = [
    { avatar: "M", name: "DJ Marcos", show: "Bom Dia DMG", horario: "Seg–Sex · 06h–09h" },
    { avatar: "L", name: "DJ Letícia", show: "Morning Hits", horario: "Seg–Sex · 09h–12h" },
    { avatar: "C", name: "DJ Carlos", show: "Almoço Sertanejo", horario: "Diário · 12h–15h" },
    { avatar: "A", name: "DJ Ana Lima", show: "Tarde Gospel", horario: "Seg–Sex · 15h–18h" },
    { avatar: "R", name: "DJ Rafael", show: "Prime Time DMG", horario: "Seg–Sex · 18h–21h" },
    { avatar: "S", name: "DJ Sandra", show: "Noite Romântica", horario: "Diário · 21h–00h" },
    { avatar: "An", name: "DJ André", show: "Rock Night / Weekend", horario: "Sex/Sáb · 22h–06h" },
];

export function Djs() {
    return (
        <div className="fi grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
            {djs.map((dj, index) => (
                <div key={index} className="rounded-lg border border-border bg-card px-5 py-7 text-center transition-all hover:-translate-y-1 hover:border-primary hover:shadow-[0_12px_36px_rgba(0,0,0,.09)]">
                    <div className="mx-auto mb-3.5 flex h-16 w-16 items-center justify-center rounded-full bg-primary font-['Playfair_Display',serif] text-2xl font-black text-primary-foreground">
                        {dj.avatar}
                    </div>
                    <div className="mb-1 font-['Playfair_Display',serif] text-base font-bold">{dj.name}</div>
                    <div className="mb-2 text-[.78rem] text-muted-foreground">{dj.show}</div>
                    <div className="font-['DM_Mono',monospace] text-[.6rem] tracking-[.12em] text-primary">{dj.horario}</div>
                </div>
            ))}
        </div>
    );
}

export function Stats() {
    const stats = [
        { count: 15000, label: "Ouvintes/Dia" },
        { count: 8, label: "Anos no Ar" },
        { count: 24, label: "Horas/Dia" },
        { count: 95, label: "% Satisfação" }
    ];

    return (
        <div className="fi mb-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
                <div key={index} className="rounded-lg border border-border bg-card px-5 py-7 text-center transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-[0_8px_28px_rgba(0,0,0,.08)]">
                    <span className="block font-['Playfair_Display',serif] text-4xl font-black leading-none text-primary" data-count={stat.count}>0</span>
                    <span className="mt-1.5 block font-['DM_Mono',monospace] text-[.58rem] uppercase tracking-[.15em] text-muted-foreground">{stat.label}</span>
                </div>
            ))}
        </div>
    );
}

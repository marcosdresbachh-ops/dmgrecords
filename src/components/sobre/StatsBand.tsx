export function StatsBand() {
    const stats = [
        { count: 8, label: "Anos no Ar" },
        { count: 15000, label: "Ouvintes/Dia" },
        { count: 5000, label: "Músicas no Acervo" },
        { count: 12, label: "Locutores" }
    ];

    return (
        <div className="fi bg-foreground py-16 text-center">
            <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-10 px-6 md:grid-cols-4 md:px-12">
                {stats.map((stat, index) => (
                    <div key={index}>
                        <span className="block font-['Playfair_Display',serif] text-5xl font-black leading-none text-primary" data-count={stat.count}>0</span>
                        <span className="mt-1.5 block font-['DM_Mono',monospace] text-[.6rem] uppercase tracking-[.2em] text-white/45">{stat.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

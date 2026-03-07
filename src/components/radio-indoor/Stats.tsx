'use client';

export function Stats() {
    const stats = [
        { count: 20, label: "Aumento em Vendas", suffix: "%" },
        { count: 92, label: "Satisfação de Clientes", suffix: "%" },
        { count: 75, label: "Retenção de Clientes", suffix: "%" },
        { count: 100, label: "Foco na sua Marca", suffix: "%" }
    ];

    return (
        <div className="fi mb-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
                <div key={index} className="rounded-lg border border-border bg-card px-5 py-7 text-center transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-[0_8px_28px_rgba(0,0,0,.08)]">
                    <div className="font-['Playfair_Display',serif] text-4xl font-black leading-none text-primary">
                        <span data-count={stat.count}>0</span>
                        {stat.suffix}
                    </div>
                    <span className="mt-1.5 block font-['DM_Mono',monospace] text-[.58rem] uppercase tracking-[.15em] text-muted-foreground">{stat.label}</span>
                </div>
            ))}
        </div>
    );
}

interface SectionHeaderProps {
    eyebrow: string;
    title: React.ReactNode;
    subtitle?: string;
    className?: string;
}

export function SectionHeader({eyebrow, title, subtitle, className}: SectionHeaderProps) {
    return (
        <div className={`mb-12 ${className}`}>
            <div className="mb-2.5 flex items-center gap-2.5 font-['DM_Mono',monospace] text-[.6rem] font-medium uppercase tracking-[.26em] text-primary before:block before:h-0.5 before:w-7 before:bg-primary">
                {eyebrow}
            </div>
            <h2 className="mb-3.5 font-['Playfair_Display',serif] text-[clamp(2rem,4vw,3.2rem)] font-black leading-[1.08] text-foreground">
                {title}
            </h2>
            {subtitle && <p className="max-w-[520px] text-[.95rem] leading-[1.75] text-muted-foreground">{subtitle}</p>}
        </div>
    )
}

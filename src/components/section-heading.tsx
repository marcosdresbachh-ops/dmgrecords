
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({ badge, title, description, align = "left", className }: SectionHeadingProps) {
  return (
    <div className={cn("space-y-4", align === "center" ? "text-center mx-auto max-w-3xl" : "text-left", className)}>
      <div className={cn("inline-flex items-center gap-2", align === "center" && "justify-center")}>
        <div className="h-1 w-12 bg-primary" />
        <span className="text-primary font-black uppercase tracking-[0.3em] text-xs">{badge}</span>
      </div>
      <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase italic leading-none">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}


import { Mic2 } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface DmgLogoProps {
  className?: string;
  iconSize?: number;
  textSize?: string;
  dark?: boolean;
}

export function DmgLogo({ className, iconSize = 24, textSize = "text-2xl", dark = false }: DmgLogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-2 group", className)}>
      <div className="bg-primary p-2 rounded-sm rotate-3 group-hover:rotate-0 transition-transform shadow-lg shadow-primary/20">
        <Mic2 className="text-white" style={{ width: iconSize, height: iconSize }} />
      </div>
      <span className={cn("font-black tracking-tighter uppercase italic transition-colors", textSize, dark ? "text-zinc-900" : "text-white")}>
        DMG <span className="text-primary">RECORDS</span>
      </span>
    </Link>
  );
}

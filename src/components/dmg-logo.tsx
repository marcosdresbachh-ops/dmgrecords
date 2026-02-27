
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface DmgLogoProps {
  className?: string;
  height?: number;
}

export function DmgLogo({ className, height = 40 }: DmgLogoProps) {
  return (
    <Link href="/" className={cn("flex items-center group", className)}>
      <Image 
        src="/logodmg.png" 
        alt="DMG Records Logo" 
        width={height * 3} // Mantendo proporção aproximada
        height={height}
        className="object-contain transition-transform group-hover:scale-105"
        priority
      />
    </Link>
  );
}

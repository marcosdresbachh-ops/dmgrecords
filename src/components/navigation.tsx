
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DmgLogo } from "./dmg-logo";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const soundcloudUrl = "https://soundcloud.com/vini-amaral-748220502";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "O Artista", href: "#artista" },
    { name: "Lançamentos", href: "#lancamentos" },
    { name: "Produções", href: "#producoes" },
    { name: "Sobre", href: "#sobre" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-black/95 backdrop-blur-md border-b border-white/10 py-4 shadow-2xl" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <DmgLogo />

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-bold uppercase tracking-[0.2em] text-white/70 hover:text-primary transition-all hover:translate-y-[-1px]"
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="rounded-none px-6 font-black tracking-tighter bg-primary hover:bg-primary/90">
            <a href={soundcloudUrl} target="_blank" rel="noopener noreferrer">
              OUVIR AGORA
            </a>
          </Button>
        </nav>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-8 w-8 text-primary" /> : <Menu className="h-8 w-8" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col p-8 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xl font-black uppercase tracking-tighter text-white hover:text-primary transition-colors italic"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="rounded-none w-full py-8 text-xl font-black italic tracking-tighter">
              <a href={soundcloudUrl} target="_blank" rel="noopener noreferrer">
                OUVIR NO SOUNDCLOUD
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DmgLogo } from "./dmg-logo";
import { TopPlayer } from "./top-player";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "/#inicio" },
    { name: "O Artista", href: "/#artista" },
    { name: "Lançamentos", href: "/#lancamentos" },
    { name: "Rádio", href: "/#radio" },
    { name: "Contato", href: "/#contato" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled ? "bg-white/90 backdrop-blur-md border-zinc-200 shadow-sm" : "bg-white/50 backdrop-blur-sm border-transparent"
      )}
    >
      <TopPlayer />
      
      <div className={cn(
        "container mx-auto px-4 flex items-center justify-between transition-all duration-300",
        scrolled ? "py-3" : "py-6"
      )}>
        <DmgLogo iconSize={scrolled ? 20 : 24} textSize={scrolled ? "text-xl" : "text-2xl"} dark />

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 hover:text-primary transition-all hover:translate-y-[-1px]"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-3 ml-4">
             <Button asChild className="rounded-none px-8 h-12 font-black tracking-tighter bg-primary hover:bg-zinc-900 text-sm italic shadow-xl shadow-primary/10 transition-all">
              <Link href="/hub">
                <User className="mr-2 h-4 w-4" /> ÁREA DO ARTISTA
              </Link>
            </Button>
          </div>
        </nav>

        <button
          className="md:hidden text-zinc-900 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-8 w-8 text-primary" /> : <Menu className="h-8 w-8" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-zinc-200 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col p-8 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-2xl font-black uppercase tracking-tighter text-zinc-900 hover:text-primary transition-colors italic"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="space-y-4">
              <Button asChild className="rounded-none w-full py-8 text-xl font-black italic tracking-tighter bg-primary">
                <Link href="/hub" onClick={() => setIsOpen(false)}>
                  ÁREA DO ARTISTA
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

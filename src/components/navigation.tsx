
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Mic2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
        scrolled ? "bg-black/90 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-2 rounded-sm rotate-3 group-hover:rotate-0 transition-transform">
            <Mic2 className="text-white h-6 w-6" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-white">
            DMG <span className="text-primary">RECORDS</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium uppercase tracking-widest text-white/80 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button variant="default" className="rounded-none px-6">
            OUVIR AGORA
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black border-b border-border animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col p-6 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium uppercase tracking-widest text-white hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="default" className="rounded-none w-full py-6">
              OUVIR AGORA
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

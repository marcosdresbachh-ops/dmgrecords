
"use client";

import { useState } from "react";
import { 
  Plus, Search, Filter, ChevronDown, MoreHorizontal, 
  ArrowUpCircle, Info, Cloud, Globe, Music 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DistributionPageProps {
  user: any;
  onStartCreate: () => void;
}

export function DistributionPage({ user, onStartCreate }: DistributionPageProps) {
  const [search, setSearch] = useState("");

  // Agora busca os lançamentos do objeto do usuário (persistidos via localStorage no Wizard)
  const releases = user.distributedReleases || [];

  return (
    <div className="min-h-screen bg-white text-black -m-8 p-12 space-y-12 animate-in fade-in duration-500">
      {/* Header Estilo SoundCloud */}
      <header className="space-y-8">
        <h1 className="text-4xl font-extrabold tracking-tight">Distribution</h1>
        
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Your releases</h2>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
              <Input 
                placeholder="Search your releases..." 
                className="pl-10 h-10 bg-zinc-50 border-zinc-200 rounded-md focus-visible:ring-1 focus-visible:ring-black"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="outline" className="h-10 bg-zinc-50 border-none px-6 font-bold text-zinc-600 hover:bg-zinc-100 shadow-none">
                Filter <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-zinc-400">Sort by</span>
                <Button variant="outline" className="h-10 bg-zinc-50 border-none px-4 font-bold text-zinc-900 hover:bg-zinc-100 shadow-none">
                  Release date <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Grid de Releases */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {/* Card Branco de Criação (+) */}
        <div 
          onClick={onStartCreate}
          className="group cursor-pointer space-y-3"
        >
          <div className="aspect-square bg-white border-2 border-dashed border-zinc-200 rounded-xl flex items-center justify-center transition-all group-hover:border-zinc-400 group-hover:bg-zinc-50">
            <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400 group-hover:bg-black group-hover:text-white transition-all">
              <Plus className="h-6 w-6" />
            </div>
          </div>
          <div className="space-y-1">
            <p className="font-bold text-sm leading-tight group-hover:underline">Create new release</p>
            <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-tight">Single, EP or Album</p>
          </div>
        </div>

        {/* Lançamentos Dinâmicos */}
        {releases.map((release: any) => (
          <div key={release.id} className="group space-y-3">
            <div className="relative aspect-square overflow-hidden rounded-xl bg-zinc-100 border border-zinc-100 shadow-sm">
              <Image 
                src={release.image} 
                alt={release.title} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all" />
              
              <div className="absolute top-2 right-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-black shadow-sm hover:bg-white transition-all">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48 bg-white border-zinc-100 rounded-xl p-1 shadow-xl">
                    <DropdownMenuItem className="text-xs font-bold p-3 rounded-lg cursor-pointer">View Details</DropdownMenuItem>
                    <DropdownMenuItem className="text-xs font-bold p-3 rounded-lg cursor-pointer">Edit Release</DropdownMenuItem>
                    <DropdownMenuItem className="text-xs font-bold p-3 rounded-lg cursor-pointer text-red-500">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center justify-between gap-2">
                <p className="font-bold text-sm leading-tight truncate">{release.title}</p>
              </div>
              {release.status === "In Review" ? (
                <div className="flex items-center gap-1.5 text-zinc-500">
                  <ArrowUpCircle className="h-3 w-3" />
                  <span className="text-[10px] font-bold uppercase tracking-tight">In Review</span>
                </div>
              ) : (
                <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-tight">{release.status}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Info Adicional (Padrão Indústria) */}
      <div className="pt-24 border-t border-zinc-100 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-zinc-900">
            <Cloud className="h-5 w-5 text-[#ff5500]" />
            <h3 className="font-bold text-sm">SoundCloud Monetization</h3>
          </div>
          <p className="text-xs text-zinc-500 leading-relaxed">
            Your Next Pro subscription is managed through DMG Records. Content ID and Fan-Powered Royalties are automatically enabled for all verified releases.
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-zinc-900">
            <Globe className="h-5 w-5 text-zinc-400" />
            <h3 className="font-bold text-sm">Global Reach</h3>
          </div>
          <p className="text-xs text-zinc-500 leading-relaxed">
            We deliver to over 30+ stores worldwide. Distribution times vary by platform, but usually take 2-5 business days for major stores.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3 text-zinc-900">
            <Music className="h-5 w-5 text-zinc-400" />
            <h3 className="font-bold text-sm">Automatic ISRC</h3>
          </div>
          <p className="text-xs text-zinc-500 leading-relaxed">
            Don't have your own codes? DMG Records generates Industry Standard ISRC and UPC codes for every release at no extra cost.
          </p>
        </div>
      </div>
    </div>
  );
}

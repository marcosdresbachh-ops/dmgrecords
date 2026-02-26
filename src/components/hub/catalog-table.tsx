
"use client";

import { MoreVertical, Edit2, ExternalLink, Trash2, ShieldAlert, CheckCircle2, Clock, Globe } from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function CatalogTable({ user }: any) {
  const works = user.works || [];

  return (
    <div className="space-y-12">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-2">
          <h1 className="text-5xl font-black italic uppercase tracking-tighter text-white leading-none">Meu Catálogo</h1>
          <p className="text-zinc-500 text-lg font-medium">Gestão de ativos e metadados oficiais da DMG Records.</p>
        </div>
        <div className="flex gap-3">
          <Badge variant="outline" className="h-10 px-6 border-white/5 text-[10px] font-black uppercase tracking-widest text-zinc-500">
            {works.length} Obras Totais
          </Badge>
        </div>
      </header>

      <div className="bg-zinc-950 border border-white/5 rounded-[32px] overflow-hidden">
        {works.length === 0 ? (
          <div className="p-32 text-center space-y-6">
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/5">
              <Globe className="h-10 w-10 text-zinc-800" />
            </div>
            <p className="text-4xl font-black text-white/10 italic uppercase tracking-tighter">Sem Registros</p>
            <p className="text-zinc-600 text-sm font-bold uppercase tracking-widest">Nenhuma obra enviada para distribuição ainda.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/5 bg-white/5 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">
                  <th className="p-8">Obra / ISRC</th>
                  <th className="p-8">Gênero</th>
                  <th className="p-8">Data Registro</th>
                  <th className="p-8">Status Distribuição</th>
                  <th className="p-8 text-right">Ações</th>
                </tr>
              </thead>
              <tbody>
                {[...works].reverse().map((w, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-all group">
                    <td className="p-8">
                      <div className="flex flex-col gap-1">
                        <span className="font-black italic uppercase text-lg text-white group-hover:text-primary transition-colors leading-none">
                          {w.title}
                        </span>
                        <span className="text-[10px] font-mono font-bold text-zinc-600 uppercase tracking-widest">
                          {w.isrc || "PENDENTE GERAR"}
                        </span>
                      </div>
                    </td>
                    <td className="p-8">
                      <Badge variant="outline" className="border-white/10 text-zinc-400 font-bold uppercase text-[9px] rounded-none px-3 py-1">
                        {w.genre}
                      </Badge>
                    </td>
                    <td className="p-8 text-xs text-zinc-500 font-bold uppercase tracking-widest">
                      {w.date}
                    </td>
                    <td className="p-8">
                      <div className="flex items-center gap-3">
                        {w.status === "Ativo" ? (
                          <div className="flex items-center gap-2 text-accent">
                            <CheckCircle2 className="h-4 w-4" />
                            <span className="text-[10px] font-black uppercase tracking-widest">Live Now</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 text-primary">
                            <Clock className="h-4 w-4 animate-pulse" />
                            <span className="text-[10px] font-black uppercase tracking-widest">Processing</span>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="p-8 text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="text-zinc-600 hover:text-white hover:bg-white/5">
                            <MoreVertical className="h-5 w-5" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56 bg-zinc-900 border-white/10 text-white rounded-2xl p-2">
                          <DropdownMenuLabel className="text-[9px] font-black uppercase tracking-widest text-zinc-500 p-3">Opções da Obra</DropdownMenuLabel>
                          <DropdownMenuItem className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-primary/10 hover:text-primary transition-colors">
                            <Edit2 className="h-4 w-4" /> <span className="text-[11px] font-bold uppercase">Editar Metadados</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-white/10 transition-colors">
                            <ExternalLink className="h-4 w-4" /> <span className="text-[11px] font-bold uppercase">Ver em Lojas</span>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator className="bg-white/5" />
                          <DropdownMenuItem className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-destructive/10 text-destructive transition-colors">
                            <ShieldAlert className="h-4 w-4" /> <span className="text-[11px] font-bold uppercase">Solicitar Takedown</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import { GraduationCap, BookOpen, CheckCircle2, PlayCircle, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EducationPage({ user }: any) {
  const courses = [
    { ic: "🎼", t: "Básico de Direitos Autorais", m: "12 lições · Iniciante", bg: "bg-blue-50 border-blue-100" },
    { ic: "💰", t: "Royalties 101", m: "8 lições · Iniciante", bg: "bg-purple-50 border-purple-100" },
    { ic: "📄", t: "Contratos & Acordos", m: "10 lições · Intermediário", bg: "bg-green-50 border-green-100" },
    { ic: "🎤", t: "Spotify para Artistas", m: "6 lições · Iniciante", bg: "bg-orange-50 border-orange-100" },
    { ic: "🌐", t: "Distribuição Musical", m: "14 lições · Avançado", bg: "bg-cyan-50 border-cyan-100" },
    { ic: "⚖", t: "Lei da Música & Privacidade", m: "9 lições · Intermediário", bg: "bg-red-50 border-red-100" },
  ];

  const glossary = [
    { t: "ISRC", d: "International Standard Recording Code — Identifica unicamente uma gravação." },
    { t: "ISWC", d: "International Standard Musical Work Code — Identifica uma composição." },
    { t: "IPI/CAE", d: "Identifica detentores de direitos nas bases de dados das PROs." },
    { t: "PRO", d: "Performing Rights Organization — Coleta royalties de performance." },
    { t: "Sync License", d: "Permissão para usar música em mídias visuais (TV, Cinema)." },
    { t: "Split Sheet", d: "Documento que registra a porcentagem de cada autor em uma obra." },
  ];

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header>
        <h1 className="text-4xl font-black italic uppercase tracking-tighter text-zinc-900 leading-none">Academia DMG 🎓</h1>
        <p className="text-zinc-500 text-sm font-medium mt-2">Domine o mercado musical com nossos cursos exclusivos.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((c, i) => (
          <div key={i} className="bg-white border border-zinc-200 rounded-[32px] overflow-hidden group hover:border-primary/40 transition-all shadow-sm">
            <div className={`h-24 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform border-b ${c.bg}`}>
              {c.ic}
            </div>
            <div className="p-8 space-y-4">
              <div>
                <h4 className="text-sm font-black italic uppercase tracking-tighter text-zinc-900 leading-tight">{c.t}</h4>
                <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest mt-1">{c.m}</p>
              </div>
              <Button variant="outline" className="w-full text-[10px] font-black uppercase tracking-widest border-zinc-200 rounded-xl group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all h-12 shadow-sm bg-white">
                Iniciar Curso <PlayCircle className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white border border-zinc-200 rounded-[32px] p-10 shadow-sm">
        <h3 className="text-lg font-black italic uppercase tracking-tighter text-zinc-900 mb-8 flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" /> Glossário da Indústria
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {glossary.map((item, i) => (
            <div key={i} className="p-6 bg-zinc-50 border border-zinc-100 rounded-2xl hover:border-primary/20 transition-all">
              <h5 className="text-xs font-black text-primary uppercase tracking-widest mb-2">{item.t}</h5>
              <p className="text-xs text-zinc-600 leading-relaxed font-bold uppercase">{item.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

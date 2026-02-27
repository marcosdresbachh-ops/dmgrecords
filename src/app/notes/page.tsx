import { getNotes } from "@/app/actions/notes";
import { ChevronLeft, Database, Server } from "lucide-react";
import Link from "next/link";

export default async function NotesPage() {
  // Consumindo via Server Action que chama o Backend Express
  const notes = await getNotes();

  return (
    <main className="min-h-screen bg-white p-8 md:p-24 font-sans text-zinc-900 selection:bg-zinc-200">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="space-y-6">
          <Link 
            href="/hub" 
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 hover:text-primary transition-all"
          >
            <ChevronLeft className="h-4 w-4" /> Voltar ao HUB
          </Link>
          <div className="space-y-2">
            <h1 className="text-5xl font-black italic uppercase tracking-tighter text-zinc-900 leading-none">Debug: API Engine</h1>
            <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-[0.4em] flex items-center gap-2">
              <Server className="h-3 w-3" /> Consumindo via Express Server (Port 3001)
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-zinc-50 border border-zinc-200 rounded-[32px] p-8 shadow-inner">
            <div className="flex items-center gap-3 mb-6 text-primary">
              <Database className="h-5 w-5" />
              <h3 className="font-black uppercase text-xs tracking-widest">Resposta da API</h3>
            </div>
            <pre className="text-[11px] text-zinc-600 font-mono leading-relaxed overflow-x-auto bg-white p-6 rounded-2xl border border-zinc-100">
              {JSON.stringify(notes, null, 2)}
            </pre>
          </div>

          <div className="space-y-6">
            <div className="p-8 border border-zinc-100 rounded-[32px] bg-white shadow-sm space-y-4">
              <h4 className="font-black uppercase italic text-lg text-zinc-900">Status da Ponte</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-zinc-50">
                  <span className="text-[10px] font-black text-zinc-400 uppercase">Origem</span>
                  <span className="text-[10px] font-bold text-zinc-900 uppercase">Supabase Cloud</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-zinc-50">
                  <span className="text-[10px] font-black text-zinc-400 uppercase">Proxy</span>
                  <span className="text-[10px] font-bold text-primary uppercase">DMG Node Server</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-[10px] font-black text-zinc-400 uppercase">Consumidor</span>
                  <span className="text-[10px] font-bold text-zinc-900 uppercase">Next.js Client</span>
                </div>
              </div>
            </div>
            
            <div className="p-8 bg-primary text-white rounded-[32px] shadow-xl shadow-primary/20">
              <p className="text-[10px] font-black uppercase tracking-widest mb-2 opacity-80">Arquitetura Industrial</p>
              <p className="text-xl font-black italic uppercase tracking-tighter leading-tight">
                Os dados acima não são acessados pelo frontend. Eles passam por uma camada de segurança no backend.
              </p>
            </div>
          </div>
        </div>

        <footer className="pt-12 border-t border-zinc-100">
          <p className="text-[10px] font-black text-zinc-300 uppercase tracking-[0.5em]">
            DMG Data Engine — Industrial Middleware Sync
          </p>
        </footer>
      </div>
    </main>
  );
}

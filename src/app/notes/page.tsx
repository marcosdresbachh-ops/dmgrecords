
import { createClient } from '@/utils/supabase/server';
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default async function NotesPage() {
  const supabase = await createClient();
  const { data: notes } = await supabase.from("notes").select();

  return (
    <main className="min-h-screen bg-white p-8 md:p-24 font-mono text-zinc-900 selection:bg-zinc-200">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="space-y-6">
          <Link 
            href="/hub" 
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 hover:text-primary transition-all"
          >
            <ChevronLeft className="h-4 w-4" /> Voltar ao HUB
          </Link>
          <div className="space-y-2">
            <h1 className="text-4xl font-black italic uppercase tracking-tighter text-zinc-900 leading-none">Debug: Supabase Notes</h1>
            <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest">Visualização bruta de dados via Server Component</p>
          </div>
        </header>

        <div className="bg-zinc-50 border border-zinc-200 rounded-[32px] p-8 shadow-inner overflow-hidden">
          <pre className="text-sm text-zinc-700 leading-relaxed overflow-x-auto">
            {JSON.stringify(notes, null, 2)}
          </pre>
        </div>

        <footer className="pt-12 border-t border-zinc-100">
          <p className="text-[10px] font-black text-zinc-300 uppercase tracking-[0.5em]">
            DMG Data Engine — Real-time Server Fetching
          </p>
        </footer>
      </div>
    </main>
  );
}

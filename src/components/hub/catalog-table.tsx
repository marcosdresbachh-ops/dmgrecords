"use client";

export function CatalogTable({ user }: any) {
  const works = user.works || [];

  return (
    <div className="space-y-12">
      <header className="space-y-2">
        <h1 className="text-5xl font-black italic uppercase tracking-tighter text-white">Meu Catálogo</h1>
        <p className="text-zinc-500 text-lg font-medium">{works.length} obra(s) protegida(s) no sistema DMG.</p>
      </header>

      <div className="bg-black/40 border border-white/5 overflow-x-auto">
        {works.length === 0 ? (
          <div className="p-20 text-center space-y-4">
            <p className="text-4xl font-black text-white/10 italic uppercase tracking-tighter">Vazio</p>
            <p className="text-zinc-600 text-sm font-bold uppercase tracking-widest">Nenhuma obra registrada ainda.</p>
          </div>
        ) : (
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/5 bg-white/5">
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-zinc-500">ID REGISTRO</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-zinc-500">TÍTULO</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-zinc-500">GÊNERO</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-zinc-500">ISRC</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-zinc-500">DATA</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-zinc-500">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {[...works].reverse().map((w, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-all group">
                  <td className="p-6">
                    <span className="text-[10px] font-bold text-primary bg-primary/10 px-3 py-1 border border-primary/20">
                      {w.regId}
                    </span>
                  </td>
                  <td className="p-6 font-black italic uppercase text-sm text-white group-hover:text-primary transition-colors">
                    {w.title}
                  </td>
                  <td className="p-6 text-xs text-zinc-500 font-medium">{w.genre}</td>
                  <td className="p-6 text-xs text-zinc-500 font-mono uppercase">{w.isrc || "—"}</td>
                  <td className="p-6 text-xs text-zinc-600">{w.date}</td>
                  <td className="p-6">
                    <span className="text-[10px] font-black uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 border border-accent/20">
                      {w.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

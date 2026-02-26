"use client";

import { useState } from "react";
import { 
  Upload, CheckCircle2, Music, Globe, Users, 
  ChevronRight, ChevronLeft, Send, Search, Info,
  Check, Play, AlertCircle, DollarSign
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";

const STEPS = [
  { id: 1, label: "Tracks", icon: <Music /> },
  { id: 2, label: "Details", icon: <Info /> },
  { id: 3, label: "Partners", icon: <Globe /> },
  { id: 4, label: "Profiles", icon: <Users /> },
  { id: 5, label: "Splits", icon: <DollarSign /> },
  { id: 6, label: "Review", icon: <CheckCircle2 /> },
];

const PARTNERS = [
  { name: "Amazon Music", icon: "📦" },
  { name: "AMI Entertainment", icon: "📺" },
  { name: "Anghami 🇱🇧", icon: "🎶" },
  { name: "Apple Music", icon: "🍎" },
  { name: "Boomplay 🇳🇬", icon: "🎧" },
  { name: "Deezer", icon: "📱" },
  { name: "Facebook / Instagram", icon: "💬" },
  { name: "iHeartRadio", icon: "📻" },
  { name: "Claro Música", icon: "📱" },
  { name: "Jaxsta", icon: "📄" },
  { name: "JOOX", icon: "🎤" },
  { name: "KKBox 🇹🇼", icon: "🎸" },
  { name: "MediaNet", icon: "🌐" },
  { name: "Melon Plus 🇰🇷", icon: "🍈" },
  { name: "Napster", icon: "🐱" },
  { name: "NetEase 🇨🇳", icon: "🐉" },
  { name: "Pandora Plus", icon: "🎻" },
  { name: "Peloton", icon: "🚴" },
  { name: "Qobuz 🇫🇷", icon: "🎷" },
  { name: "Saavn 🇮🇳", icon: "🎹" },
  { name: "7digital", icon: "7️⃣" },
  { name: "Shazam", icon: "🔍" },
  { name: "Sound Exchange", icon: "💱" },
  { name: "Spotify", icon: "🟢" },
  { name: "Tencent 🇨🇳", icon: "🏢" },
  { name: "Tidal", icon: "💎" },
  { name: "TikTok", icon: "🎵" },
  { name: "VK 🇷🇺", icon: "🇷🇺" },
  { name: "Yandex 🇷🇺", icon: "🇷🇺" },
  { name: "YouTube Music", icon: "🔴" },
];

export function DistributionWizard({ user, onComplete }: any) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [form, setForm] = useState({
    title: "",
    mainArtist: user.artistName || `${user.firstName} ${user.lastName}`,
    genre: "",
    noIsrc: true,
    isrc: "",
    selectedPartners: PARTNERS.map(p => p.name),
    spotifyId: "",
    appleId: "",
    splits: [{ name: user.firstName, role: "Owner", percentage: 100 }]
  });

  const next = () => setStep(s => Math.min(s + 1, 6));
  const prev = () => setStep(s => Math.max(s - 1, 1));

  async function handleSubmit() {
    setLoading(true);
    // Simulação de processamento
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Lançamento Enviado!",
        description: "Seu material está em processamento. ISRC será gerado em 24h.",
      });
      onComplete();
    }, 2000);
  }

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-1">
          <h1 className="text-4xl font-black italic uppercase tracking-tighter text-white">Create New Release</h1>
          <p className="text-zinc-500 text-sm font-medium">Fluxo de distribuição DMG — SoundCloud Standard.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="h-10 border-white/5 text-[10px] font-black uppercase tracking-widest text-zinc-500" onClick={onComplete}>
            Save and quit
          </Button>
          <Button variant="ghost" className="h-10 text-destructive text-[10px] font-black uppercase tracking-widest" onClick={onComplete}>
            Delete
          </Button>
        </div>
      </header>

      {/* Progress Stepper */}
      <div className="flex items-center justify-between max-w-4xl mx-auto px-4 relative">
        <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -z-10" />
        {STEPS.map((s) => (
          <div key={s.id} className="flex flex-col items-center gap-2 group cursor-pointer" onClick={() => step > s.id && setStep(s.id)}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
              step === s.id ? "bg-primary border-primary text-white scale-110" : 
              step > s.id ? "bg-accent border-accent text-white" : 
              "bg-black border-white/10 text-zinc-700"
            }`}>
              {step > s.id ? <Check className="h-5 w-5" /> : s.icon}
            </div>
            <span className={`text-[10px] font-black uppercase tracking-widest ${
              step === s.id ? "text-primary" : "text-zinc-700"
            }`}>{s.label}</span>
          </div>
        ))}
      </div>

      <div className="bg-zinc-950 border border-white/5 rounded-[32px] p-12 min-h-[500px] relative">
        {step === 1 && (
          <div className="space-y-8 animate-in slide-in-from-bottom-4">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white">Select tracks</h2>
              <p className="text-zinc-500 text-sm">Arraste seus arquivos de áudio (MP3 ou WAV de alta qualidade).</p>
            </div>
            <div className="border-2 border-dashed border-white/5 rounded-[40px] p-20 flex flex-col items-center justify-center gap-6 group hover:border-primary/40 transition-all cursor-pointer relative overflow-hidden">
               <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors" />
               <Upload className="h-16 w-16 text-zinc-800 group-hover:text-primary transition-colors" />
               <input 
                 type="file" 
                 accept=".mp3,.wav" 
                 className="absolute inset-0 opacity-0 cursor-pointer" 
                 onChange={(e) => setFile(e.target.files?.[0] || null)}
               />
               <p className="text-zinc-600 font-bold uppercase text-sm tracking-tighter">
                 {file ? file.name : "Clique para selecionar ou arraste aqui"}
               </p>
               {file && <div className="p-4 bg-primary/10 border border-primary/20 rounded-xl text-primary text-[10px] font-black">ARQUIVO CARREGADO: {(file.size / 1024 / 1024).toFixed(2)} MB</div>}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-10 animate-in slide-in-from-right-4">
            <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white">Release Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase text-zinc-500">Track Title</Label>
                <Input value={form.title} onChange={e => setForm({...form, title: e.target.value})} className="bg-white/5 border-white/10 h-14 rounded-2xl" placeholder="Ex: Midnight Sky" />
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase text-zinc-500">Main Artist</Label>
                <Input value={form.mainArtist} onChange={e => setForm({...form, mainArtist: e.target.value})} className="bg-white/5 border-white/10 h-14 rounded-2xl" />
              </div>
              <div className="space-y-6 md:col-span-2 p-6 bg-white/5 rounded-3xl border border-white/5">
                <div className="flex items-center space-x-3">
                  <Checkbox id="no-isrc" checked={form.noIsrc} onCheckedChange={(v: boolean) => setForm({...form, noIsrc: v})} />
                  <label htmlFor="no-isrc" className="text-sm font-bold text-white uppercase tracking-tighter cursor-pointer">Eu não tenho um código ISRC (A DMG gerará um para você)</label>
                </div>
                {!form.noIsrc && (
                  <div className="space-y-2 animate-in fade-in">
                    <Label className="text-[10px] font-black uppercase text-zinc-500">Insira seu ISRC existente</Label>
                    <Input value={form.isrc} onChange={e => setForm({...form, isrc: e.target.value})} className="bg-white/5 border-white/10 h-14 rounded-2xl" placeholder="BR-XXX-25-00001" />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-10 animate-in slide-in-from-right-4">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white">Distribution Partners</h2>
              <div className="flex gap-2">
                <Button variant="ghost" className="text-[10px] font-black uppercase text-primary" onClick={() => setForm({...form, selectedPartners: PARTNERS.map(p => p.name)})}>Select All</Button>
                <Button variant="ghost" className="text-[10px] font-black uppercase text-zinc-600" onClick={() => setForm({...form, selectedPartners: []})}>Clear All</Button>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 max-h-[400px] overflow-y-auto no-scrollbar p-1">
              {PARTNERS.map((p) => (
                <div 
                  key={p.name} 
                  onClick={() => {
                    const exists = form.selectedPartners.includes(p.name);
                    setForm({
                      ...form, 
                      selectedPartners: exists 
                        ? form.selectedPartners.filter(x => x !== p.name) 
                        : [...form.selectedPartners, p.name]
                    });
                  }}
                  className={`p-4 border rounded-2xl cursor-pointer transition-all flex items-center gap-3 ${
                    form.selectedPartners.includes(p.name) 
                      ? "border-primary bg-primary/10 text-white" 
                      : "border-white/5 bg-white/5 text-zinc-500 hover:border-white/20"
                  }`}
                >
                  <span className="text-lg">{p.icon}</span>
                  <span className="text-[10px] font-black uppercase tracking-widest truncate">{p.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-10 animate-in slide-in-from-right-4">
            <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white">Profile Mapping</h2>
            <div className="space-y-6">
               <div className="p-6 bg-primary/5 border border-primary/20 rounded-3xl flex items-start gap-4">
                 <AlertCircle className="h-6 w-6 text-primary shrink-0" />
                 <p className="text-xs text-zinc-400 font-medium leading-relaxed">
                   Certifique-se de que sua música seja entregue no perfil correto do artista. Se você for um novo artista em uma plataforma, o perfil será criado automaticamente.
                 </p>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="space-y-2">
                   <Label className="text-[10px] font-black uppercase text-zinc-500">Spotify Artist Link / ID</Label>
                   <Input value={form.spotifyId} onChange={e => setForm({...form, spotifyId: e.target.value})} className="bg-white/5 border-white/10 h-14 rounded-2xl" placeholder="spotify:artist:..." />
                 </div>
                 <div className="space-y-2">
                   <Label className="text-[10px] font-black uppercase text-zinc-500">Apple Music Artist ID</Label>
                   <Input value={form.appleId} onChange={e => setForm({...form, appleId: e.target.value})} className="bg-white/5 border-white/10 h-14 rounded-2xl" />
                 </div>
               </div>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="space-y-10 animate-in slide-in-from-right-4">
            <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white">Split Payments</h2>
            <div className="space-y-6">
               <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
                 <table className="w-full text-left">
                   <thead>
                     <tr className="bg-black/40 text-[10px] font-black uppercase tracking-widest text-zinc-600">
                       <th className="p-4">Collaborator</th>
                       <th className="p-4">Role</th>
                       <th className="p-4 text-right">Share %</th>
                     </tr>
                   </thead>
                   <tbody>
                     {form.splits.map((s, i) => (
                       <tr key={i} className="border-b border-white/5">
                         <td className="p-4 text-sm font-bold text-white">{s.name}</td>
                         <td className="p-4 text-[10px] font-black uppercase text-primary">{s.role}</td>
                         <td className="p-4 text-right font-mono font-bold text-accent">{s.percentage}%</td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
               <Button variant="outline" className="h-14 border-white/10 text-[10px] font-black uppercase tracking-widest w-full rounded-2xl">
                 Add Collaborator
               </Button>
            </div>
          </div>
        )}

        {step === 6 && (
          <div className="space-y-10 animate-in zoom-in-95 duration-500">
            <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white">Final Review</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-white/5 border border-white/10 rounded-3xl space-y-6">
                <h3 className="text-xs font-black uppercase text-primary tracking-widest">Metadata Summary</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] text-zinc-600 uppercase font-black">Title</p>
                    <p className="text-xl font-black text-white italic">{form.title || "Untiled Track"}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-600 uppercase font-black">Artist</p>
                    <p className="text-sm font-bold text-zinc-200">{form.mainArtist}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-600 uppercase font-black">ISRC Status</p>
                    <p className="text-sm font-bold text-accent">{form.noIsrc ? "DMG AUTO-GENERATE" : form.isrc}</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-white/5 border border-white/10 rounded-3xl space-y-6">
                <h3 className="text-xs font-black uppercase text-primary tracking-widest">Distribution</h3>
                <div className="space-y-4">
                   <div className="flex flex-wrap gap-2">
                     {form.selectedPartners.slice(0, 10).map(p => (
                       <span key={p} className="text-[8px] font-black uppercase bg-black px-2 py-1 rounded text-zinc-400">{p}</span>
                     ))}
                     {form.selectedPartners.length > 10 && <span className="text-[8px] font-black uppercase bg-primary text-white px-2 py-1 rounded">+{form.selectedPartners.length - 10} more</span>}
                   </div>
                   <div className="pt-4 border-t border-white/5">
                     <p className="text-[10px] text-zinc-600 uppercase font-black">Revenue Splits</p>
                     <p className="text-sm font-bold text-zinc-200">100% to You (Primary Owner)</p>
                   </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-accent/10 border border-accent/20 rounded-3xl flex items-start gap-4">
              <CheckCircle2 className="h-6 w-6 text-accent shrink-0" />
              <p className="text-xs text-zinc-300 font-medium leading-relaxed">
                Tudo pronto para o lançamento! Ao clicar em enviar, sua música passará pela curadoria DMG e será entregue aos parceiros em até 48 horas úteis.
              </p>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-12 flex justify-between items-center pt-8 border-t border-white/5">
          <Button 
            variant="ghost" 
            disabled={step === 1} 
            onClick={prev}
            className="text-[10px] font-black uppercase tracking-widest text-zinc-500"
          >
            <ChevronLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          
          {step < 6 ? (
            <Button 
              onClick={next}
              disabled={step === 1 && !file}
              className="bg-white text-black font-black uppercase text-[10px] h-14 px-10 rounded-2xl hover:bg-primary hover:text-white transition-all"
            >
              Next <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button 
              onClick={handleSubmit}
              disabled={loading}
              className="bg-primary text-white font-black uppercase text-[10px] h-14 px-10 rounded-2xl shadow-lg shadow-primary/20"
            >
              {loading ? "Processing..." : "Distribute Release Now"} <Send className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

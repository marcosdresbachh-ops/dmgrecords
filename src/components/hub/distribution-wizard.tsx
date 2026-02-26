"use client";

import { useState } from "react";
import { 
  Upload, CheckCircle2, Music, Globe, Users, 
  ChevronRight, ChevronLeft, Send, Info,
  Check, Play, AlertCircle, DollarSign,
  HelpCircle, Settings2, FileText, Trash2, Plus, GripVertical
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
  const [tracks, setTracks] = useState<{file: File, id: string}[]>([]);
  const [form, setForm] = useState({
    title: "",
    mainArtist: user.artistName || `${user.firstName} ${user.lastName}`,
    genre: "",
    noIsrc: true,
    isrc: "",
    labelName: "DMG Records",
    pLine: `(P) ${new Date().getFullYear()} DMG Records`,
    cLine: `(C) ${new Date().getFullYear()} DMG Records`,
    explicit: "none",
    selectedPartners: PARTNERS.map(p => p.name),
    spotifyId: "",
    appleId: "",
    splits: [{ name: user.firstName, role: "Owner", percentage: 100 }]
  });

  const next = () => setStep(s => Math.min(s + 1, 6));
  const prev = () => setStep(s => Math.max(s - 1, 1));

  const handleFileAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    const newTracks = selectedFiles.map(f => ({
      file: f,
      id: Math.random().toString(36).substr(2, 9)
    }));
    setTracks(prev => [...prev, ...newTracks]);
  };

  const removeTrack = (id: string) => {
    setTracks(prev => prev.filter(t => t.id !== id));
  };

  async function handleSubmit() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Lançamento Enviado!",
        description: "Seu material está em processamento industrial. ISRC será gerado em 24h.",
      });
      onComplete();
    }, 2000);
  }

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-1">
          <h1 className="text-4xl font-black italic uppercase tracking-tighter text-white">Distribute Release</h1>
          <p className="text-zinc-500 text-sm font-medium uppercase tracking-[0.2em]">Fluxo de processamento oficial DMG & SoundCloud.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="h-10 border-white/5 text-[10px] font-black uppercase tracking-widest text-zinc-500" onClick={onComplete}>
            Save Draft
          </Button>
        </div>
      </header>

      {/* Progress Stepper Pro */}
      <div className="flex items-center justify-between max-w-5xl mx-auto px-4 relative mb-20">
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/5 -z-10" />
        {STEPS.map((s) => (
          <div key={s.id} className="flex flex-col items-center gap-3 group cursor-pointer" onClick={() => step > s.id && setStep(s.id)}>
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border-2 transition-all duration-500 ${
              step === s.id ? "bg-primary border-primary text-white scale-110 shadow-[0_0_30px_rgba(255,0,0,0.3)]" : 
              step > s.id ? "bg-accent border-accent text-white" : 
              "bg-zinc-900 border-white/5 text-zinc-700"
            }`}>
              {step > s.id ? <Check className="h-6 w-6" /> : s.icon}
            </div>
            <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${
              step === s.id ? "text-primary" : "text-zinc-700"
            }`}>{s.label}</span>
          </div>
        ))}
      </div>

      <div className="bg-zinc-950 border border-white/5 rounded-[48px] p-12 min-h-[600px] relative shadow-2xl">
        
        {step === 1 && (
          <div className="space-y-10 animate-in slide-in-from-bottom-4">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-black italic uppercase tracking-tighter text-white">Track Upload</h2>
              <p className="text-zinc-500 text-sm font-medium uppercase tracking-widest">Adicione as faixas do seu álbum ou single.</p>
            </div>

            {tracks.length > 0 && (
              <div className="space-y-4 mb-8">
                {tracks.map((t, index) => (
                  <div key={t.id} className="bg-black border border-white/10 p-6 rounded-2xl flex items-center justify-between group hover:border-primary/40 transition-all">
                    <div className="flex items-center gap-6">
                      <div className="text-zinc-700 font-black italic text-xl w-8">{String(index + 1).padStart(2, '0')}</div>
                      <div className="p-3 bg-primary/10 rounded-xl text-primary">
                        <Music className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-white font-black uppercase italic tracking-tighter">{t.file.name}</p>
                        <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">{(t.file.size / 1024 / 1024).toFixed(2)} MB • READY</p>
                      </div>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => removeTrack(t.id)}
                      className="text-zinc-700 hover:text-primary hover:bg-primary/10"
                    >
                      <Trash2 className="h-5 w-5" />
                    </Button>
                  </div>
                ))}
              </div>
            )}

            <div className={`border-2 border-dashed border-white/5 rounded-[40px] flex flex-col items-center justify-center gap-8 group hover:border-primary/40 transition-all cursor-pointer relative overflow-hidden bg-black/40 ${tracks.length > 0 ? 'p-12' : 'p-24'}`}>
               <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors" />
               <div className="p-8 bg-white/5 rounded-full group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
                 {tracks.length > 0 ? <Plus className="h-10 w-10 text-zinc-800 group-hover:text-primary" /> : <Upload className="h-12 w-12 text-zinc-800 group-hover:text-primary transition-colors" />}
               </div>
               <input type="file" multiple accept=".mp3,.wav" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleFileAdd} />
               <div className="text-center">
                 <p className="text-zinc-400 font-black uppercase text-xl italic tracking-tighter">
                   {tracks.length > 0 ? "ADICIONAR MAIS FAIXAS" : "Arraste o Master ou Clique aqui"}
                 </p>
                 <p className="text-zinc-600 font-black uppercase text-[10px] tracking-widest mt-4">SUPORTAMOS WAV 44.1KHZ / 16-BIT OU SUPERIOR</p>
               </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-12 animate-in slide-in-from-right-4">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white">Release Metadata</h2>
              <Badge variant="outline" className="border-primary/20 text-primary">Industry Standard</Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-3">
                <Label className="text-[10px] font-black uppercase text-zinc-500 tracking-widest">Release Title (Album/Single) *</Label>
                <Input value={form.title} onChange={e => setForm({...form, title: e.target.value})} className="bg-black border-white/10 h-16 rounded-2xl text-lg font-bold" placeholder="Ex: Midnight Sky" />
              </div>
              <div className="space-y-3">
                <Label className="text-[10px] font-black uppercase text-zinc-500 tracking-widest">Main Artist *</Label>
                <Input value={form.mainArtist} onChange={e => setForm({...form, mainArtist: e.target.value})} className="bg-black border-white/10 h-16 rounded-2xl text-lg font-bold" />
              </div>
              
              <div className="space-y-3">
                <Label className="text-[10px] font-black uppercase text-zinc-500 tracking-widest">Label Name</Label>
                <Input value={form.labelName} onChange={e => setForm({...form, labelName: e.target.value})} className="bg-black border-white/10 h-16 rounded-2xl text-lg font-bold" />
              </div>

              <div className="space-y-3">
                <Label className="text-[10px] font-black uppercase text-zinc-500 tracking-widest">Explicit Lyrics</Label>
                <Select value={form.explicit} onValueChange={v => setForm({...form, explicit: v})}>
                  <SelectTrigger className="bg-black border-white/10 h-16 rounded-2xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-900 text-white">
                    <SelectItem value="none">Not Explicit</SelectItem>
                    <SelectItem value="explicit">Explicit Content</SelectItem>
                    <SelectItem value="cleaned">Clean Version</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="md:col-span-2 p-8 bg-white/5 rounded-[32px] border border-white/5 space-y-6">
                <div className="flex items-center gap-3">
                  <Checkbox id="no-isrc" checked={form.noIsrc} onCheckedChange={(v: any) => setForm({...form, noIsrc: !!v})} className="border-primary" />
                  <label htmlFor="no-isrc" className="text-xs font-black text-white uppercase tracking-widest cursor-pointer flex items-center gap-2">
                    Não tenho código ISRC <HelpCircle className="h-3 w-3 text-zinc-600" />
                  </label>
                </div>
                {!form.noIsrc && (
                  <div className="space-y-3 animate-in fade-in">
                    <Label className="text-[10px] font-black uppercase text-zinc-500">Insira seu ISRC existente</Label>
                    <Input value={form.isrc} onChange={e => setForm({...form, isrc: e.target.value})} className="bg-black border-white/10 h-16 rounded-2xl font-mono uppercase" placeholder="BR-XXX-25-00001" />
                  </div>
                )}
                {form.noIsrc && (
                  <p className="text-[10px] text-primary font-bold uppercase tracking-widest">⚡ DMG AUTO-GENERATE: Geraremos códigos únicos para cada gravação deste lançamento.</p>
                )}
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-10 animate-in slide-in-from-right-4">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white">Distribution Partners</h2>
              <div className="flex gap-4">
                <button className="text-[10px] font-black uppercase text-primary tracking-widest" onClick={() => setForm({...form, selectedPartners: PARTNERS.map(p => p.name)})}>Select All</button>
                <button className="text-[10px] font-black uppercase text-zinc-600 tracking-widest" onClick={() => setForm({...form, selectedPartners: []})}>Clear All</button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-h-[450px] overflow-y-auto no-scrollbar p-2">
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
                  className={`p-6 border-2 rounded-[24px] cursor-pointer transition-all duration-300 relative group flex flex-col gap-3 ${
                    form.selectedPartners.includes(p.name) 
                      ? "border-primary bg-primary/10" 
                      : "border-white/5 bg-black/40 hover:border-white/20"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-3xl">{p.icon}</span>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <HelpCircle className="h-3.5 w-3.5 text-zinc-700 hover:text-white transition-colors" />
                        </TooltipTrigger>
                        <TooltipContent className="bg-zinc-900 border-white/10 text-white">
                          <p className="text-[10px] uppercase font-black">Entrega em até 48h úteis via DMG API.</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest truncate text-white">{p.name}</span>
                  {form.selectedPartners.includes(p.name) && (
                    <div className="absolute top-2 right-2">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-12 animate-in slide-in-from-right-4">
            <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white">Profile Mapping</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               <div className="p-8 bg-primary/5 border border-primary/20 rounded-[32px] space-y-4">
                 <Settings2 className="h-10 w-10 text-primary" />
                 <h4 className="text-lg font-black uppercase italic tracking-tighter text-white">Sincronização de Perfil</h4>
                 <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                   Seus lançamentos serão entregues diretamente nos perfis indicados abaixo. Caso seja sua primeira música, os perfis serão criados automaticamente.
                 </p>
               </div>
               <div className="space-y-8">
                 <div className="space-y-3">
                   <Label className="text-[10px] font-black uppercase text-zinc-500 tracking-widest">Spotify Artist URL / ID</Label>
                   <Input value={form.spotifyId} onChange={e => setForm({...form, spotifyId: e.target.value})} className="bg-black border-white/10 h-16 rounded-2xl text-sm" placeholder="spotify:artist:..." />
                 </div>
                 <div className="space-y-3">
                   <Label className="text-[10px] font-black uppercase text-zinc-500 tracking-widest">Apple Music Artist ID</Label>
                   <Input value={form.appleId} onChange={e => setForm({...form, appleId: e.target.value})} className="bg-black border-white/10 h-16 rounded-2xl text-sm" />
                 </div>
               </div>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="space-y-12 animate-in slide-in-from-right-4">
            <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white">Revenue Splits</h2>
            <div className="space-y-8">
               <div className="bg-black border border-white/10 rounded-[32px] overflow-hidden">
                 <table className="w-full text-left">
                   <thead>
                     <tr className="bg-white/5 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">
                       <th className="p-6">Collaborator</th>
                       <th className="p-6">Role</th>
                       <th className="p-6 text-right">Revenue Share</th>
                     </tr>
                   </thead>
                   <tbody>
                     {form.splits.map((s, i) => (
                       <tr key={i} className="border-b border-white/5">
                         <td className="p-6">
                           <div className="flex items-center gap-3">
                             <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-black text-xs">{(s.name?.[0] || 'U').toUpperCase()}</div>
                             <span className="text-sm font-bold text-white uppercase">{s.name}</span>
                           </div>
                         </td>
                         <td className="p-6 text-[10px] font-black uppercase text-zinc-500 tracking-widest">{s.role}</td>
                         <td className="p-6 text-right font-mono font-black text-accent text-xl">{s.percentage}%</td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
               <Button variant="outline" className="h-16 border-white/10 border-2 border-dashed text-[10px] font-black uppercase tracking-widest w-full rounded-2xl hover:bg-white/5 hover:border-primary/40 transition-all">
                 + Add New Shareholder
               </Button>
            </div>
          </div>
        )}

        {step === 6 && (
          <div className="space-y-12 animate-in zoom-in-95 duration-500">
            <h2 className="text-4xl font-black italic uppercase tracking-tighter text-white">Industrial Review</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-10 bg-white/5 border border-white/10 rounded-[40px] space-y-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5"><FileText className="h-24 w-24" /></div>
                <h3 className="text-xs font-black uppercase text-primary tracking-[0.3em]">Package Metadata</h3>
                <div className="grid gap-6">
                  <div>
                    <p className="text-[10px] text-zinc-600 uppercase font-black tracking-widest">Release Title</p>
                    <p className="text-2xl font-black text-white italic uppercase">{form.title || "Untitled"}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-[10px] text-zinc-600 uppercase font-black tracking-widest">Tracks</p>
                      <p className="text-xs font-bold text-zinc-200 uppercase">{tracks.length} Files Uploaded</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-zinc-600 uppercase font-black tracking-widest">Label</p>
                      <p className="text-xs font-bold text-zinc-200 uppercase">{form.labelName}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-10 bg-white/5 border border-white/10 rounded-[40px] space-y-8">
                <h3 className="text-xs font-black uppercase text-primary tracking-[0.3em]">Distribution Network</h3>
                <div className="space-y-6">
                   <div className="flex flex-wrap gap-2">
                     {form.selectedPartners.slice(0, 15).map(p => (
                       <Badge key={p} variant="outline" className="bg-black border-white/5 text-[8px] font-black uppercase py-1">{p}</Badge>
                     ))}
                     {form.selectedPartners.length > 15 && <Badge className="bg-primary text-[8px] font-black uppercase">+{form.selectedPartners.length - 15} Stores</Badge>}
                   </div>
                   <div className="pt-6 border-t border-white/5">
                     <p className="text-[10px] text-zinc-600 uppercase font-black tracking-widest mb-2">Copyright Status</p>
                     <p className="text-xs font-bold text-accent uppercase tracking-widest">100% Verified Rights</p>
                   </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-accent/5 border border-accent/20 rounded-[32px] flex items-center gap-6">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                <CheckCircle2 className="h-6 w-6 text-accent" />
              </div>
              <p className="text-xs text-zinc-400 font-medium leading-relaxed uppercase tracking-widest">
                Ao processar, você concorda que todos os metadados seguem os padrões DDEX industriais. O lançamento será validado pela auditoria DMG em até 24 horas.
              </p>
            </div>
          </div>
        )}

        {/* Navigation Pro */}
        <div className="mt-16 flex justify-between items-center pt-10 border-t border-white/5">
          <Button 
            variant="ghost" 
            disabled={step === 1} 
            onClick={prev}
            className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 hover:text-white"
          >
            <ChevronLeft className="mr-3 h-5 w-5" /> Previous Step
          </Button>
          
          {step < 6 ? (
            <Button 
              onClick={next}
              disabled={step === 1 && tracks.length === 0}
              className="bg-white text-black font-black uppercase text-[11px] tracking-[0.3em] h-16 px-12 rounded-2xl hover:bg-primary hover:text-white transition-all shadow-xl shadow-white/5"
            >
              Continue <ChevronRight className="ml-3 h-5 w-5" />
            </Button>
          ) : (
            <Button 
              onClick={handleSubmit}
              disabled={loading}
              className="bg-primary text-white font-black uppercase text-[11px] tracking-[0.3em] h-16 px-12 rounded-2xl shadow-2xl shadow-primary/30 animate-pulse hover:animate-none"
            >
              {loading ? "Processing Industrial Flow..." : "Deliver to Stores Now"} <Send className="ml-3 h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

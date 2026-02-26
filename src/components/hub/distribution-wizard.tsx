
"use client";

import { useState } from "react";
import { 
  Upload, CheckCircle2, Music, Globe, Users, 
  ChevronRight, ChevronLeft, Send, Info,
  Check, Play, AlertCircle, DollarSign,
  HelpCircle, Settings2, FileText, Trash2, Plus, GripVertical, Edit2, Search, X, Link as LinkIcon,
  PlusCircle, FileUp, MoveLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "@/hooks/use-toast";
import Image from "next/image";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const STEPS = [
  { id: 1, label: "Tracks", icon: <Music /> },
  { id: 2, label: "Details", icon: <Info /> },
  { id: 3, label: "Partners", icon: <Globe /> },
  { id: 4, label: "Profile mapping", icon: <Users /> },
  { id: 5, label: "Split Pay", icon: <DollarSign /> },
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

type Contributor = {
  id: string;
  name: string;
  type: string;
};

type TrackData = {
  id: string;
  title: string;
  version: string;
  contributors: Contributor[];
  explicit: string;
  language: string;
  songwriter: string;
  songType: string[];
  previewStart: number;
  hasIsrc: string;
  isrc: string;
  youtubeContentId: boolean;
  agreedToRules: boolean;
  fileSize?: string;
  isExternal?: boolean;
};

export function DistributionWizard({ user, onComplete }: any) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [tracks, setTracks] = useState<TrackData[]>([]);
  const [editingTrack, setEditingTrack] = useState<TrackData | null>(null);
  const [isSelectModalOpen, setIsSelectModalOpen] = useState(false);
  
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

  const syncedTracks = user.works || [];

  const next = () => setStep(s => Math.min(s + 1, 6));
  const prev = () => setStep(s => Math.max(s - 1, 1));

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    if (selectedFiles.length === 0) return;
    
    const newTracks: TrackData[] = selectedFiles.map(f => ({
      id: Math.random().toString(36).substr(2, 9),
      title: f.name.replace(/\.[^/.]+$/, ""),
      version: "Original",
      contributors: [
        { id: "1", name: user.artistName || user.firstName, type: "Main Artist" },
        { id: "2", name: `${user.firstName} ${user.lastName}`, type: "Composer (Legal Name)" }
      ],
      explicit: "not_explicit",
      language: "Portuguese",
      songwriter: "i_wrote",
      songType: [],
      previewStart: 0,
      hasIsrc: "no",
      isrc: "",
      youtubeContentId: true,
      agreedToRules: true,
      fileSize: (f.size / 1024 / 1024).toFixed(2) + " MB"
    }));
    setTracks(prev => [...prev, ...newTracks]);
    setIsSelectModalOpen(false);
  };

  const handleSelectSyncedTrack = (track: any) => {
    const newTrack: TrackData = {
      id: track.regId || track.id,
      title: track.title,
      version: "Original",
      contributors: [
        { id: "1", name: user.artistName || user.firstName, type: "Main Artist" }
      ],
      explicit: "not_explicit",
      language: track.language || "Portuguese",
      songwriter: "i_wrote",
      songType: [],
      previewStart: 0,
      hasIsrc: track.isrc ? "yes" : "no",
      isrc: track.isrc || "",
      youtubeContentId: true,
      agreedToRules: true,
      fileSize: "Synced from Catalog",
      isExternal: true
    };
    setTracks(prev => [...prev, newTrack]);
    setIsSelectModalOpen(false);
    toast({ title: "Faixa Importada", description: `"${track.title}" foi adicionada ao lançamento.` });
  };

  const removeTrack = (id: string) => {
    setTracks(prev => prev.filter(t => t.id !== id));
  };

  const updateTrack = (updated: TrackData) => {
    setTracks(prev => prev.map(t => t.id === updated.id ? updated : t));
    setEditingTrack(null);
    toast({ title: "Metadados Atualizados", description: `Informações de "${updated.title}" salvas.` });
  };

  async function handleSubmit() {
    setLoading(true);
    setTimeout(() => {
      // Simulação de persistência no objeto do usuário
      const users = JSON.parse(localStorage.getItem('dmg_hub_users') || '{}');
      const updatedUser = { ...user };
      const newRelease = {
        id: Math.random().toString(36).substr(2, 9),
        title: form.title || "Untitled Release",
        artist: form.mainArtist,
        status: "In Review",
        image: tracks[0]?.isExternal ? "/viniamaral/01.Somebody Like A Ghost.png" : "https://picsum.photos/seed/dmg-new/400/400",
        date: new Date().toLocaleDateString("en-US", { month: 'short', day: 'numeric', year: 'numeric' })
      };
      updatedUser.distributedReleases = [...(updatedUser.distributedReleases || []), newRelease];
      users[user.email] = updatedUser;
      localStorage.setItem('dmg_hub_users', JSON.stringify(users));
      localStorage.setItem('dmg_hub_session', JSON.stringify(updatedUser));

      setLoading(false);
      toast({
        title: "Lançamento Enviado!",
        description: "Seu material está em processamento industrial. ISRC será gerado em 24h.",
      });
      onComplete(updatedUser);
    }, 2000);
  }

  return (
    <div className="flex flex-col h-screen bg-white text-zinc-900 -m-8 font-sans selection:bg-zinc-200 overflow-hidden">
      {/* HEADER FIXO */}
      <div className="p-12 pb-6 border-b border-zinc-100 shrink-0">
        <div 
          className="flex items-center gap-2 mb-10 cursor-pointer group w-fit" 
          onClick={() => onComplete()}
        >
          <div className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-zinc-50 transition-colors">
            <MoveLeft className="h-4 w-4" />
          </div>
          <span className="text-xs font-bold tracking-tight">Back to Distribution</span>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-extrabold tracking-tight">
              {form.title || "Untitled Release"}
            </h1>
            <div className="flex gap-2">
              <Button variant="outline" className="bg-zinc-100 border-none rounded-md font-bold h-10 px-6 text-zinc-900 hover:bg-zinc-200 shadow-none">
                Save and quit
              </Button>
              <Button variant="outline" className="bg-zinc-100 border-none rounded-md font-bold h-10 px-4 text-zinc-500 hover:bg-zinc-200 shadow-none">
                <Trash2 className="h-4 w-4 mr-2" /> Delete
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-8 py-2 overflow-x-auto no-scrollbar">
            {STEPS.map((s) => (
              <div 
                key={s.id} 
                className={`flex items-center gap-3 transition-opacity shrink-0 ${step === s.id ? 'opacity-100' : 'opacity-40 hover:opacity-60 cursor-pointer'}`}
                onClick={() => step !== s.id && setStep(s.id)}
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-black ${
                  step === s.id ? 'bg-black text-white' : 'bg-zinc-200 text-zinc-600'
                }`}>
                  {s.id}
                </div>
                <span className="text-xs font-bold">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ÁREA DE CONTEÚDO ROLÁVEL */}
      <div className="flex-1 overflow-y-auto p-12 py-8">
        <div className="max-w-6xl mx-auto min-h-full">
          {step === 1 && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="space-y-1">
                {tracks.length > 0 ? (
                  <div className="border border-zinc-100 rounded-xl overflow-hidden bg-zinc-50/30">
                    {tracks.map((t, index) => (
                      <div key={t.id} className="flex items-center gap-6 py-6 px-8 border-b border-zinc-100 last:border-0 group bg-white">
                        <div className="flex items-center gap-4 min-w-[60px]">
                          <GripVertical className="h-4 w-4 text-zinc-300 cursor-grab" />
                          <span className="font-bold text-lg">{index + 1}</span>
                        </div>
                        
                        <button className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white shadow-xl hover:scale-105 transition-transform">
                          <Play className="h-4 w-4 fill-white ml-1" />
                        </button>

                        <div className="flex-1 min-w-0 pr-8">
                          <p className="font-bold text-sm leading-tight mb-0.5">{t.title}</p>
                          <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-tight">ISRC: {t.isrc || "QZYB42534253"}</p>
                        </div>

                        <Button 
                          variant="outline" 
                          onClick={() => setEditingTrack(t)}
                          className="bg-zinc-100 border-none rounded-md font-bold h-10 px-6 text-zinc-900 hover:bg-zinc-200 shadow-none"
                        >
                          <Edit2 className="h-3.5 w-3.5 mr-2" /> Edit
                        </Button>

                        <div className="flex items-center gap-4 flex-1 max-w-sm px-4">
                          <span className="text-[10px] font-bold text-zinc-400">0:00</span>
                          <div className="h-0.5 flex-1 bg-zinc-100 rounded-full relative">
                            <div className="absolute inset-y-0 left-0 w-0 bg-zinc-300 rounded-full" />
                          </div>
                          <span className="text-[10px] font-bold text-zinc-400">-4:22</span>
                        </div>

                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => removeTrack(t.id)}
                          className="text-zinc-300 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="h-5 w-5" />
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-32 text-center border-2 border-dashed border-zinc-100 rounded-3xl bg-zinc-50/50">
                    <Music className="h-16 w-16 text-zinc-200 mx-auto mb-6" />
                    <p className="text-zinc-400 font-bold text-lg">Your release is currently empty.</p>
                    <p className="text-zinc-400 text-sm mt-2">Add tracks from your catalog or upload new files.</p>
                  </div>
                )}
              </div>

              <div className="pt-4 flex justify-center">
                <Button 
                  onClick={() => setIsSelectModalOpen(true)}
                  className="bg-black text-white rounded-md font-black px-10 h-14 hover:bg-zinc-800 shadow-xl shadow-black/10 text-base"
                >
                  <Plus className="mr-2 h-5 w-5" /> SELECT TRACKS
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-10 animate-in fade-in max-w-2xl mx-auto py-10">
              <div className="space-y-2">
                <Label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Release title *</Label>
                <Input value={form.title} onChange={e => setForm({...form, title: e.target.value})} className="h-14 bg-zinc-50 border-zinc-200 rounded-md font-bold text-lg" placeholder="Ex: Midnight Memories" />
              </div>
              <div className="space-y-2">
                <Label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Main artist *</Label>
                <Input value={form.mainArtist} className="h-14 bg-zinc-50 border-zinc-200 rounded-md font-bold text-lg" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Genre *</Label>
                  <Select value={form.genre} onValueChange={v => setForm({...form, genre: v})}>
                    <SelectTrigger className="h-14 bg-zinc-50 border-zinc-200 rounded-md font-bold">
                      <SelectValue placeholder="Select Genre" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="Pop">Pop</SelectItem>
                      <SelectItem value="R&B">R&B</SelectItem>
                      <SelectItem value="Hip-Hop">Hip-Hop</SelectItem>
                      <SelectItem value="Trap">Trap</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Label name</Label>
                  <Input value={form.labelName} className="h-14 bg-zinc-50 border-zinc-200 rounded-md font-bold" />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-8 animate-in fade-in py-6">
              <div className="flex justify-between items-center px-2">
                <h3 className="text-xl font-bold">Select Store Partners</h3>
                <Button variant="ghost" className="text-xs font-bold uppercase text-zinc-500 hover:text-black" onClick={() => setForm({...form, selectedPartners: PARTNERS.map(p => p.name)})}>Select All</Button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {PARTNERS.map(p => (
                  <div 
                    key={p.name} 
                    onClick={() => {
                      const exists = form.selectedPartners.includes(p.name);
                      setForm({ ...form, selectedPartners: exists ? form.selectedPartners.filter(x => x !== p.name) : [...form.selectedPartners, p.name] });
                    }}
                    className={`p-6 border rounded-2xl cursor-pointer transition-all flex flex-col items-center text-center gap-3 group ${
                      form.selectedPartners.includes(p.name) ? 'border-zinc-900 bg-zinc-50 ring-1 ring-zinc-900' : 'border-zinc-100 hover:border-zinc-300'
                    }`}
                  >
                    <span className="text-3xl grayscale group-hover:grayscale-0 transition-all">{p.icon}</span>
                    <p className="text-[10px] font-black uppercase tracking-tight leading-none">{p.name}</p>
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${form.selectedPartners.includes(p.name) ? 'bg-black border-black' : 'border-zinc-200'}`}>
                      {form.selectedPartners.includes(p.name) && <Check className="h-2 w-2 text-white" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step > 3 && (
            <div className="py-32 text-center animate-in fade-in max-w-xl mx-auto space-y-6">
              <div className="w-20 h-20 bg-zinc-50 rounded-full flex items-center justify-center mx-auto">
                <Settings2 className="h-10 w-10 text-zinc-300" />
              </div>
              <h2 className="text-2xl font-bold">Step: {STEPS[step-1].label}</h2>
              <p className="text-zinc-400 font-medium">Standard industrial configuration area. This section is being optimized for real-time validation.</p>
            </div>
          )}
        </div>
      </div>

      {/* RODAPÉ FIXO */}
      <div className="p-12 pt-6 border-t border-zinc-100 shrink-0 bg-white">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <button 
            className="font-bold text-sm text-zinc-900 hover:underline" 
            onClick={() => onComplete()}
          >
            Cancel
          </button>
          
          <div className="flex gap-4">
            {step > 1 && (
              <Button 
                onClick={prev}
                variant="outline"
                className="bg-white border-zinc-200 rounded-md font-bold px-8 h-12 hover:bg-zinc-50 shadow-none text-sm"
              >
                Back
              </Button>
            )}
            <Button 
              onClick={step === 6 ? handleSubmit : next}
              disabled={(step === 1 && tracks.length === 0) || loading}
              className="bg-black text-white rounded-md font-bold px-12 h-12 hover:bg-zinc-800 shadow-2xl text-sm"
            >
              {loading ? "Processing..." : step === 6 ? "Finish & Submit" : "Next Step"}
            </Button>
          </div>
        </div>
      </div>

      {/* MODAL: Select Track */}
      <Dialog open={isSelectModalOpen} onOpenChange={setIsSelectModalOpen}>
        <DialogContent className="bg-white text-zinc-900 max-w-lg rounded-3xl p-0 overflow-hidden border-none shadow-2xl">
          <div className="p-8 space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <DialogTitle className="text-xl font-bold tracking-tight text-black">Select Audio Source</DialogTitle>
                <p className="text-[10px] text-zinc-400 font-bold uppercase mt-1">Import from catalog or upload new.</p>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsSelectModalOpen(false)} className="rounded-full hover:bg-zinc-100">
                <X className="h-4 w-4 text-zinc-400" />
              </Button>
            </div>

            <div className="space-y-4">
              <div className="border-2 border-dashed border-zinc-100 p-8 flex flex-col items-center justify-center gap-3 hover:bg-zinc-50 hover:border-zinc-300 transition-all cursor-pointer relative rounded-2xl group bg-zinc-50/30">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center border border-zinc-100 group-hover:scale-110 transition-transform">
                  <Upload className="h-6 w-6 text-zinc-400 group-hover:text-black" />
                </div>
                <p className="text-[10px] font-black text-zinc-400 group-hover:text-zinc-900 uppercase tracking-widest">UPLOAD FROM COMPUTER</p>
                <p className="text-[9px] text-zinc-300 font-bold">WAV or MP3 (320kbps recommended)</p>
                <input type="file" multiple accept=".mp3,.wav" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleFileUpload} />
              </div>

              {syncedTracks.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 px-2">
                    <Search className="h-3 w-3 text-zinc-300" />
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Recently Synced</span>
                  </div>
                  <ScrollArea className="h-[250px] pr-4">
                    <div className="space-y-2">
                      {syncedTracks.map((t: any) => (
                        <div 
                          key={t.regId || t.id} 
                          className="flex items-center justify-between p-4 hover:bg-zinc-50 cursor-pointer border border-zinc-100 rounded-xl transition-all group" 
                          onClick={() => handleSelectSyncedTrack(t)}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-300 group-hover:bg-black group-hover:text-white transition-colors">
                              <Music className="h-4 w-4" />
                            </div>
                            <div>
                              <span className="font-bold text-xs uppercase block leading-none mb-1 group-hover:text-black">{t.title}</span>
                              <span className="text-[9px] text-zinc-400 font-mono tracking-tighter">{t.isrc || "NO ISRC (GENERATE LATER)"}</span>
                            </div>
                          </div>
                          <Button size="sm" variant="ghost" className="text-[9px] font-black uppercase text-zinc-400 group-hover:text-black">Select</Button>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* MODAL: Edit Track Metadata */}
      {editingTrack && (
        <Dialog open={!!editingTrack} onOpenChange={() => setEditingTrack(null)}>
          <DialogContent className="bg-white text-zinc-900 max-w-3xl rounded-none p-0 overflow-hidden border-none shadow-2xl h-[95vh] flex flex-col">
            <div className="p-10 flex-1 overflow-y-auto space-y-10 selection:bg-zinc-100 custom-scrollbar">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <DialogTitle className="text-3xl font-extrabold tracking-tight text-black">{editingTrack.title}</DialogTitle>
                  <p className="text-[10px] text-zinc-400 font-black uppercase tracking-[0.2em]">Track Metadata Configuration</p>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setEditingTrack(null)} className="rounded-full hover:bg-zinc-100">
                  <X className="h-6 w-6 text-zinc-400" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-2">
                  <Label className="text-[11px] font-black text-zinc-400 uppercase tracking-widest">Track title *</Label>
                  <Input 
                    value={editingTrack.title} 
                    onChange={e => setEditingTrack({...editingTrack, title: e.target.value})}
                    className="bg-zinc-50 border-zinc-200 rounded-none h-14 text-sm font-bold shadow-none focus:border-black focus:ring-0" 
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-[11px] font-black text-zinc-400 uppercase tracking-widest">Version</Label>
                  <Select value={editingTrack.version} onValueChange={v => setEditingTrack({...editingTrack, version: v})}>
                    <SelectTrigger className="bg-zinc-50 border-zinc-200 rounded-none h-14 text-sm font-bold shadow-none">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="Original">Original</SelectItem>
                      <SelectItem value="Radio Edit">Radio Edit</SelectItem>
                      <SelectItem value="Remix">Remix</SelectItem>
                      <SelectItem value="Acoustic">Acoustic</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-black uppercase tracking-widest text-zinc-900">Contributors</h3>
                  <p className="text-[10px] text-zinc-400 font-bold uppercase">Rights Management</p>
                </div>
                <div className="space-y-4">
                  {editingTrack.contributors.map((c, i) => (
                    <div key={c.id} className="grid grid-cols-12 gap-4 items-center">
                      <GripVertical className="col-span-1 h-4 w-4 text-zinc-200" />
                      <div className="col-span-5">
                        <Input value={c.name} className="bg-zinc-50 border-zinc-200 rounded-none h-12 text-sm font-medium" />
                      </div>
                      <span className="col-span-1 text-[10px] font-bold text-zinc-300 text-center uppercase">is</span>
                      <div className="col-span-5">
                        <div className="bg-zinc-100 text-zinc-500 h-12 flex items-center px-4 text-[11px] font-black uppercase italic tracking-tighter">{c.type}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="rounded-none border-zinc-200 text-xs font-black px-6 h-12 hover:bg-zinc-50 shadow-none uppercase tracking-widest">
                  <Plus className="h-4 w-4 mr-2" /> Add a contributor
                </Button>
              </div>

              <div className="space-y-6 pt-10 border-t border-zinc-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                    <Play className="h-5 w-5 text-red-600 fill-red-600" />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-zinc-900">YouTube Content ID</h3>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-3 bg-zinc-50 p-6 border border-zinc-100">
                    <Checkbox id="yt1" checked={editingTrack.youtubeContentId} onCheckedChange={v => setEditingTrack({...editingTrack, youtubeContentId: !!v})} className="rounded-none border-zinc-300 mt-1 data-[state=checked]:bg-black data-[state=checked]:border-black" />
                    <div className="space-y-1">
                      <Label htmlFor="yt1" className="text-sm font-black uppercase leading-tight">Enable this track for YouTube Content ID</Label>
                      <p className="text-[10px] text-zinc-400 font-medium">Protect and monetize your audio across the entire YouTube network.</p>
                    </div>
                  </div>
                  <div className="pl-8 p-6 border-l-2 border-zinc-900 bg-zinc-50/50">
                    <p className="text-[11px] text-zinc-500 leading-relaxed font-medium">
                      To enable Content ID, you must have exclusive rights to the audio. This excludes beats leased from online marketplaces or royalty-free samples (e.g. Splice). Misuse of Content ID may result in permanent account suspension.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 border-t border-zinc-100 bg-zinc-50 flex justify-end gap-4 shrink-0">
              <button className="text-xs font-bold text-zinc-400 hover:text-black uppercase" onClick={() => setEditingTrack(null)}>Cancel</button>
              <Button 
                onClick={() => updateTrack(editingTrack)} 
                className="bg-black text-white font-black rounded-none px-12 h-14 text-sm hover:bg-zinc-800 shadow-2xl uppercase tracking-widest"
              >
                Save and close
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f4f4f5;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d4d4d8;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #a1a1aa;
        }
      `}</style>
    </div>
  );
}

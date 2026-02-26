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
      setLoading(false);
      toast({
        title: "Lançamento Enviado!",
        description: "Seu material está em processamento industrial. ISRC será gerado em 24h.",
      });
      onComplete();
    }, 2000);
  }

  return (
    <div className="min-h-screen bg-white text-zinc-900 -m-8 p-12 font-sans selection:bg-zinc-200">
      {/* Header Navigation */}
      <div 
        className="flex items-center gap-2 mb-10 cursor-pointer group w-fit" 
        onClick={onComplete}
      >
        <div className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-zinc-50 transition-colors">
          <MoveLeft className="h-4 w-4" />
        </div>
        <span className="text-xs font-bold tracking-tight">Back to Distribution</span>
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        {/* Title & Top Actions */}
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-extrabold tracking-tight">
            {form.title || "The Road Back Home"}
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

        {/* Stepper (Identical to Image) */}
        <div className="flex items-center gap-8 py-2">
          {STEPS.map((s) => (
            <div 
              key={s.id} 
              className={`flex items-center gap-3 transition-opacity ${step === s.id ? 'opacity-100' : 'opacity-40 hover:opacity-60 cursor-pointer'}`}
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

        {/* Dynamic Content Area */}
        <div className="min-h-[400px]">
          {step === 1 && (
            <div className="space-y-8 animate-in fade-in duration-300">
              {/* Tracks List (Identical to Image) */}
              <div className="space-y-1">
                {tracks.length > 0 ? tracks.map((t, index) => (
                  <div key={t.id} className="flex items-center gap-6 py-6 border-b border-zinc-100 group">
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
                )) : (
                  <div className="py-20 text-center border-2 border-dashed border-zinc-100 rounded-2xl">
                    <Music className="h-12 w-12 text-zinc-100 mx-auto mb-4" />
                    <p className="text-zinc-400 font-bold">No tracks added yet.</p>
                  </div>
                )}
              </div>

              <div className="pt-4">
                <Button 
                  onClick={() => setIsSelectModalOpen(true)}
                  className="bg-black text-white rounded-md font-bold px-6 h-10 hover:bg-zinc-800 shadow-none"
                >
                  Select tracks
                </Button>
              </div>
            </div>
          )}

          {/* Standard Steps UI Implementation (Light Theme) */}
          {step === 2 && (
            <div className="space-y-10 animate-in fade-in max-w-2xl">
              <div className="space-y-2">
                <Label className="text-xs font-bold text-zinc-500">Release title *</Label>
                <Input value={form.title} onChange={e => setForm({...form, title: e.target.value})} className="h-12 bg-zinc-50 border-zinc-200 rounded-md" />
              </div>
              <div className="space-y-2">
                <Label className="text-xs font-bold text-zinc-500">Main artist *</Label>
                <Input value={form.mainArtist} className="h-12 bg-zinc-50 border-zinc-200 rounded-md" />
              </div>
              <div className="space-y-2">
                <Label className="text-xs font-bold text-zinc-500">Label name</Label>
                <Input value={form.labelName} className="h-12 bg-zinc-50 border-zinc-200 rounded-md" />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 animate-in fade-in">
              {PARTNERS.map(p => (
                <div 
                  key={p.name} 
                  onClick={() => {
                    const exists = form.selectedPartners.includes(p.name);
                    setForm({ ...form, selectedPartners: exists ? form.selectedPartners.filter(x => x !== p.name) : [...form.selectedPartners, p.name] });
                  }}
                  className={`p-6 border rounded-2xl cursor-pointer transition-all ${
                    form.selectedPartners.includes(p.name) ? 'border-zinc-900 bg-zinc-50' : 'border-zinc-100 hover:border-zinc-200'
                  }`}
                >
                  <span className="text-2xl mb-3 block">{p.icon}</span>
                  <p className="text-[10px] font-bold uppercase tracking-tight">{p.name}</p>
                </div>
              ))}
            </div>
          )}

          {/* Placeholder for other steps - matching logic remains consistent */}
          {step > 3 && (
            <div className="py-20 text-center animate-in fade-in">
              <p className="text-zinc-400 font-bold">Standard Configuration Area: {STEPS[step-1].label}</p>
            </div>
          )}
        </div>

        {/* Footer Actions (Identical to Image) */}
        <div className="flex justify-end items-center gap-10 pt-12 border-t border-zinc-100">
          <button 
            className="font-bold text-sm text-zinc-900 hover:underline" 
            onClick={onComplete}
          >
            Cancel
          </button>
          <Button 
            onClick={next}
            disabled={step === 1 && tracks.length === 0}
            className="bg-black text-white rounded-md font-bold px-12 h-12 hover:bg-zinc-800 shadow-none text-sm"
          >
            {step === 6 ? "Finish" : "Next"}
          </Button>
        </div>
      </div>

      {/* MODAL: Select Track (Consistent with Light Theme) */}
      <Dialog open={isSelectModalOpen} onOpenChange={setIsSelectModalOpen}>
        <DialogContent className="bg-white text-zinc-900 max-w-lg rounded-3xl p-0 overflow-hidden border-none shadow-2xl">
          <div className="p-8 space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <DialogTitle className="text-xl font-bold tracking-tight">Select a Track</DialogTitle>
                <p className="text-[10px] text-zinc-400 font-bold uppercase mt-1">Sincronize ou faça o upload manual.</p>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsSelectModalOpen(false)} className="rounded-full hover:bg-zinc-100">
                <X className="h-4 w-4 text-zinc-400" />
              </Button>
            </div>

            <div className="space-y-4">
              <div className="border-2 border-dashed border-zinc-100 p-8 flex flex-col items-center justify-center gap-3 hover:bg-zinc-50 transition-all cursor-pointer relative rounded-2xl group">
                <Upload className="h-6 w-6 text-zinc-200 group-hover:text-black transition-colors" />
                <p className="text-[10px] font-black text-zinc-400 group-hover:text-zinc-900 uppercase">UPLOAD FROM COMPUTER</p>
                <input type="file" multiple accept=".mp3,.wav" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleFileUpload} />
              </div>

              {syncedTracks.length > 0 && (
                <ScrollArea className="h-[300px] pr-4">
                  {syncedTracks.map((t: any) => (
                    <div 
                      key={t.regId || t.id} 
                      className="flex items-center justify-between p-4 hover:bg-zinc-50 cursor-pointer border-b border-zinc-50 last:border-0 rounded-xl transition-colors" 
                      onClick={() => handleSelectSyncedTrack(t)}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-300"><Music className="h-4 w-4" /></div>
                        <div>
                          <span className="font-bold text-xs uppercase block leading-none mb-1">{t.title}</span>
                          <span className="text-[9px] text-zinc-400 font-mono">{t.isrc || "NO ISRC"}</span>
                        </div>
                      </div>
                      <span className="bg-zinc-900 text-white text-[8px] font-black px-2 py-1 rounded-sm uppercase">Select</span>
                    </div>
                  ))}
                </ScrollArea>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* MODAL: Edit Track Metadata */}
      {editingTrack && (
        <Dialog open={!!editingTrack} onOpenChange={() => setEditingTrack(null)}>
          <DialogContent className="bg-white text-zinc-900 max-w-3xl rounded-none p-0 overflow-hidden border-none shadow-2xl h-[95vh] flex flex-col">
            <div className="p-10 flex-1 overflow-y-auto space-y-10 selection:bg-zinc-100">
              <div className="flex justify-between items-start">
                <DialogTitle className="text-3xl font-extrabold tracking-tight">{editingTrack.title}</DialogTitle>
                <Button variant="ghost" size="icon" onClick={() => setEditingTrack(null)} className="rounded-full hover:bg-zinc-100">
                  <X className="h-6 w-6 text-zinc-400" />
                </Button>
              </div>

              {/* Title & Version */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-2">
                  <Label className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest">Track title *</Label>
                  <Input 
                    value={editingTrack.title} 
                    onChange={e => setEditingTrack({...editingTrack, title: e.target.value})}
                    className="bg-zinc-50 border-zinc-200 rounded-none h-14 text-sm font-bold shadow-none" 
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest">Version</Label>
                  <Select value={editingTrack.version} onValueChange={v => setEditingTrack({...editingTrack, version: v})}>
                    <SelectTrigger className="bg-zinc-50 border-zinc-200 rounded-none h-14 text-sm font-bold shadow-none">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="Original">Original</SelectItem>
                      <SelectItem value="Radio Edit">Radio Edit</SelectItem>
                      <SelectItem value="Remix">Remix</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Contributors Area */}
              <div className="space-y-6">
                <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-900">Contributors</h3>
                <div className="space-y-4">
                  {editingTrack.contributors.map((c, i) => (
                    <div key={c.id} className="grid grid-cols-12 gap-4 items-center">
                      <GripVertical className="col-span-1 h-4 w-4 text-zinc-200" />
                      <div className="col-span-5">
                        <Input value={c.name} className="bg-zinc-50 border-zinc-200 rounded-none h-12 text-sm" />
                      </div>
                      <span className="col-span-1 text-[10px] font-bold text-zinc-300 text-center">is the</span>
                      <div className="col-span-5">
                        <div className="bg-zinc-100 text-zinc-500 h-12 flex items-center px-4 text-[11px] font-bold uppercase italic">{c.type}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="rounded-none border-zinc-200 text-xs font-bold px-6 h-10 hover:bg-zinc-50 shadow-none">
                  Add a contributor
                </Button>
              </div>

              {/* YouTube Content ID Logic */}
              <div className="space-y-6 pt-10 border-t border-zinc-100">
                <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-900">YouTube Content ID</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <Checkbox id="yt1" checked={editingTrack.youtubeContentId} onCheckedChange={v => setEditingTrack({...editingTrack, youtubeContentId: !!v})} className="rounded-none border-zinc-300 mt-1" />
                    <Label htmlFor="yt1" className="text-xs font-bold leading-tight">Enable this track for YouTube Content ID</Label>
                  </div>
                  <div className="pl-8 p-6 bg-zinc-50 border-l-2 border-zinc-900">
                    <p className="text-[11px] text-zinc-500 leading-relaxed">
                      To enable Content ID, you must have exclusive rights to the audio. This excludes beats leased from online marketplaces or royalty-free samples (e.g. Splice).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 border-t border-zinc-100 bg-zinc-50 flex justify-start">
              <Button 
                onClick={() => updateTrack(editingTrack)} 
                className="bg-black text-white font-bold rounded-none px-12 h-14 text-sm hover:bg-zinc-800 shadow-none"
              >
                Save and close
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

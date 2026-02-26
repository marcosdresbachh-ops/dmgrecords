
"use client";

import { useState } from "react";
import { 
  Upload, CheckCircle2, Music, Globe, Users, 
  ChevronRight, ChevronLeft, Send, Info,
  Check, Play, AlertCircle, DollarSign,
  HelpCircle, Settings2, FileText, Trash2, Plus, GripVertical, Edit2, Search, X, Link as LinkIcon,
  PlusCircle, FileUp, MoveLeft, Cloud, Calendar as CalendarIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "@/hooks/use-toast";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
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

const PARTNERS_LIST = [
  // Column 1
  { name: "Amazon Music" },
  { name: "Boomplay", region: "NG", info: true },
  { name: "Claro Música" },
  { name: "MediaNet", info: true },
  { name: "Pandora Plus", info: true },
  { name: "7digital", info: true },
  { name: "Tencent", region: "CN" },
  // Column 2
  { name: "AMI Entertainment" },
  { name: "Deezer" },
  { name: "Jaxsta" },
  { name: "Melon Plus", region: "KR", info: true },
  { name: "Peloton", info: true },
  { name: "Shazam" },
  { name: "Tidal" },
  // Column 3
  { name: "Anghami", region: "LB" },
  { name: "Facebook / Instagram", info: true },
  { name: "JOOX" },
  { name: "Napster" },
  { name: "Qobuz", region: "FR" },
  { name: "Sound Exchange", info: true },
  { name: "TikTok", info: true },
  // Column 4
  { name: "Apple Music" },
  { name: "iHeartRadio" },
  { name: "KKBox", region: "TW" },
  { name: "NetEase", region: "CN" },
  { name: "Saavn", region: "IN" },
  { name: "Spotify" },
  { name: "YouTube Music" },
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
    secondaryGenre: "",
    labelName: "",
    releaseDate: "13 March 2026",
    selectedPartners: [] as string[],
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
      contributors: [{ id: "1", name: user.artistName || user.firstName, type: "Main Artist" }],
      explicit: "not_explicit",
      language: track.language || "Portuguese",
      songwriter: "i_wrote",
      songType: [],
      previewStart: 0,
      hasIsrc: track.isrc ? "yes" : "no",
      isrc: track.isrc || "",
      youtubeContentId: true,
      agreedToRules: true,
      fileSize: "Synced",
      isExternal: true
    };
    setTracks(prev => [...prev, newTrack]);
    setIsSelectModalOpen(false);
  };

  const removeTrack = (id: string) => {
    setTracks(prev => prev.filter(t => t.id !== id));
  };

  const updateTrack = (updated: TrackData) => {
    setTracks(prev => prev.map(t => t.id === updated.id ? updated : t));
    setEditingTrack(null);
  };

  const toggleAllPartners = (checked: boolean) => {
    if (checked) {
      setForm({ ...form, selectedPartners: PARTNERS_LIST.map(p => p.name) });
    } else {
      setForm({ ...form, selectedPartners: [] });
    }
  };

  const togglePartner = (name: string) => {
    const current = [...form.selectedPartners];
    if (current.includes(name)) {
      setForm({ ...form, selectedPartners: current.filter(n => n !== name) });
    } else {
      setForm({ ...form, selectedPartners: [...current, name] });
    }
  };

  async function handleSubmit() {
    setLoading(true);
    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem('dmg_hub_users') || '{}');
      const updatedUser = { ...user };
      const newRelease = {
        id: Math.random().toString(36).substr(2, 9),
        title: form.title || "Untitled Release",
        artist: form.mainArtist,
        status: "In Review",
        image: "https://picsum.photos/seed/dmg-new/400/400",
        date: new Date().toLocaleDateString("en-US", { month: 'short', day: 'numeric', year: 'numeric' })
      };
      updatedUser.distributedReleases = [...(updatedUser.distributedReleases || []), newRelease];
      users[user.email] = updatedUser;
      localStorage.setItem('dmg_hub_users', JSON.stringify(users));
      localStorage.setItem('dmg_hub_session', JSON.stringify(updatedUser));

      setLoading(false);
      toast({ title: "Lançamento Enviado!", description: "Seu material está em processamento industrial." });
      onComplete(updatedUser);
    }, 2000);
  }

  return (
    <div className="flex flex-col h-screen bg-white text-zinc-900 -m-8 font-sans selection:bg-zinc-200 overflow-hidden">
      {/* HEADER FIXO */}
      <div className="p-12 pb-6 shrink-0">
        <div 
          className="flex items-center gap-2 mb-8 cursor-pointer group w-fit" 
          onClick={() => onComplete()}
        >
          <MoveLeft className="h-5 w-5" />
          <span className="text-sm font-bold tracking-tight">Back to Distribution</span>
        </div>

        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-extrabold tracking-tight">
              Create your new release
            </h1>
            <div className="flex gap-3">
              <Button variant="outline" className="bg-zinc-100 border-none rounded-md font-bold h-11 px-8 text-zinc-900 hover:bg-zinc-200 shadow-none">
                Save and quit
              </Button>
              <Button variant="outline" className="bg-zinc-100 border-none rounded-md font-bold h-11 px-6 text-zinc-500 hover:bg-zinc-200 shadow-none">
                <Trash2 className="h-4 w-4 mr-2" /> Delete
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-10 py-2 overflow-x-auto no-scrollbar border-b border-zinc-100 pb-6">
            {STEPS.map((s) => (
              <div 
                key={s.id} 
                className={`flex items-center gap-3 transition-opacity shrink-0 ${step === s.id ? 'opacity-100' : 'opacity-40 hover:opacity-60 cursor-pointer'}`}
                onClick={() => step !== s.id && setStep(s.id)}
              >
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black ${
                  step === s.id ? 'bg-black text-white' : 
                  step > s.id ? 'bg-green-50 text-green-600' : 'bg-zinc-200 text-zinc-600'
                }`}>
                  {step > s.id ? <Check className="h-4 w-4" /> : s.id}
                </div>
                <span className={`text-sm font-bold ${step === s.id ? 'text-black' : 'text-zinc-500'}`}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ÁREA DE CONTEÚDO ROLÁVEL */}
      <div className="flex-1 overflow-y-auto p-12 py-4">
        <div className="max-w-7xl mx-auto min-h-full">
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
                          <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-tight">ISRC: {t.isrc || "PENDING"}</p>
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
                          <span className="text-[10px] font-bold text-zinc-400">-0:00</span>
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
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 animate-in fade-in py-10">
              {/* COLUNA 1: ARTWORK */}
              <div className="md:col-span-3 space-y-6">
                <Label className="text-sm font-extrabold text-black uppercase">Album artwork <span className="text-primary">*</span></Label>
                <div className="space-y-4">
                  <div className="aspect-square bg-[#555] rounded-xl flex items-center justify-center text-white relative group overflow-hidden border-2 border-transparent">
                    <Cloud className="h-24 w-24 opacity-40" />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <Button variant="outline" className="w-full h-12 bg-zinc-50 border-none font-bold text-zinc-900 rounded-md">
                    <Upload className="mr-2 h-4 w-4" /> Upload image
                  </Button>
                  <p className="text-[10px] text-zinc-400 font-medium leading-relaxed">
                    (Accepted file types: JPG, JPEG, PNG; Image must be at least: 3000 × 3000)
                  </p>
                </div>
              </div>

              {/* COLUNA 2: BASIC INFO */}
              <div className="md:col-span-5 space-y-10">
                <div className="space-y-2">
                  <Label className="text-sm font-extrabold text-black uppercase">Album title <span className="text-primary">*</span></Label>
                  <Input 
                    value={form.title} 
                    onChange={e => setForm({...form, title: e.target.value})} 
                    className="h-14 bg-zinc-50 border-[#e11d48] rounded-md font-bold text-lg focus-visible:ring-0" 
                    placeholder="Title" 
                  />
                  <p className="text-[11px] font-bold text-[#e11d48]">Title is required</p>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-extrabold text-black uppercase">Genre <span className="text-primary">*</span></Label>
                  <Select value={form.genre} onValueChange={v => setForm({...form, genre: v})}>
                    <SelectTrigger className="h-14 bg-zinc-50 border-[#e11d48] rounded-md font-bold text-zinc-500">
                      <SelectValue placeholder="Select a Genre" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="Pop">Pop</SelectItem>
                      <SelectItem value="Trap">Trap</SelectItem>
                      <SelectItem value="R&B">R&B</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-[11px] font-bold text-[#e11d48]">A primary genre is required</p>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-extrabold text-black uppercase">Secondary Genre</Label>
                  <Select disabled>
                    <SelectTrigger className="h-14 bg-zinc-200 border-none rounded-md font-bold text-zinc-500">
                      <SelectValue placeholder="No secondary genres available" />
                    </SelectTrigger>
                    <SelectContent className="bg-white" />
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-extrabold text-black uppercase flex items-center gap-2">
                    Record Label <span className="text-primary">*</span> <Info className="h-4 w-4 text-zinc-400" />
                  </Label>
                  <Input 
                    value={form.labelName} 
                    onChange={e => setForm({...form, labelName: e.target.value})} 
                    className="h-14 bg-zinc-50 border-[#e11d48] rounded-md font-bold text-lg" 
                    placeholder="Label" 
                  />
                  <p className="text-[11px] font-bold text-[#e11d48]">Label is required</p>
                </div>
              </div>

              {/* COLUNA 3: ADDITIONAL INFO */}
              <div className="md:col-span-4 space-y-10">
                <div className="space-y-4">
                  <Label className="text-sm font-extrabold text-black uppercase">Main Artists <span className="text-primary">*</span></Label>
                  <div className="bg-zinc-200 p-4 rounded-md min-h-[56px] flex items-center">
                    <span className="text-sm font-bold text-zinc-500">No main artists</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="text-sm font-extrabold text-black uppercase">Release Date <span className="text-primary">*</span></Label>
                  <div className="bg-zinc-100 p-4 rounded-md h-14 flex items-center justify-between border-none">
                    <span className="text-sm font-bold text-zinc-900">{form.releaseDate}</span>
                    <CalendarIcon className="h-5 w-5 text-zinc-400" />
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="text-sm font-extrabold text-black uppercase flex items-center gap-2">
                    Is this a re-release? <Info className="h-4 w-4 text-zinc-400" />
                  </Label>
                  <Button variant="outline" className="h-12 bg-zinc-100 border-none font-bold text-zinc-900 px-6 rounded-md shadow-none">
                    Add an original release date
                  </Button>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-10 animate-in fade-in py-6">
              <h3 className="text-xl font-bold tracking-tight">Select Release Partners</h3>
              
              <div className="flex items-center gap-3">
                <Switch 
                  checked={form.selectedPartners.length === PARTNERS_LIST.length} 
                  onCheckedChange={toggleAllPartners}
                  className="data-[state=checked]:bg-zinc-500"
                />
                <span className="text-sm font-bold text-zinc-500">Select all</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-4">
                {PARTNERS_LIST.map((p) => (
                  <div key={p.name} className="flex items-center gap-3 group">
                    <Checkbox 
                      id={`partner-${p.name}`}
                      checked={form.selectedPartners.includes(p.name)}
                      onCheckedChange={() => togglePartner(p.name)}
                      className="w-5 h-5 rounded-[4px] border-zinc-300 data-[state=checked]:bg-black data-[state=checked]:border-black"
                    />
                    <div className="flex items-center gap-1.5 cursor-pointer" onClick={() => togglePartner(p.name)}>
                      <label 
                        htmlFor={`partner-${p.name}`}
                        className="text-sm font-bold cursor-pointer group-hover:text-black transition-colors"
                      >
                        {p.name}
                      </label>
                      {p.region && (
                        <span className="text-[10px] font-black uppercase text-zinc-400 mt-0.5">{p.region}</span>
                      )}
                      {p.info && (
                        <Info className="h-3 w-3 text-zinc-300" />
                      )}
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
              <p className="text-zinc-400 font-medium">This section is being optimized for real-time validation.</p>
            </div>
          )}
        </div>
      </div>

      {/* RODAPÉ FIXO */}
      <div className="p-12 pt-6 shrink-0 bg-white">
        <div className="max-w-7xl mx-auto flex justify-end items-center gap-8">
          <button 
            className="font-extrabold text-sm text-black hover:underline" 
            onClick={prev}
            disabled={step === 1}
          >
            Previous
          </button>
          
          <Button 
            onClick={step === 6 ? handleSubmit : next}
            disabled={(step === 1 && tracks.length === 0) || (step === 3 && form.selectedPartners.length === 0) || loading}
            className="bg-black text-white rounded-md font-black px-12 h-12 hover:bg-zinc-800 shadow-2xl text-sm"
          >
            {loading ? "Processing..." : step === 6 ? "Finish & Submit" : "Next"}
          </Button>
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
                              <span className="text-[9px] text-zinc-400 font-mono tracking-tighter">{t.isrc || "NO ISRC"}</span>
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
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-black uppercase tracking-widest text-zinc-900">Contributors</h3>
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
                </div>
              </div>
            </div>

            <div className="p-8 border-t border-zinc-100 bg-zinc-50 flex justify-end gap-4 shrink-0">
              <button className="text-xs font-bold text-zinc-400 hover:text-black uppercase" onClick={() => setEditingTrack(null)}>Cancel</button>
              <Button 
                onClick={() => updateTrack(editingTrack!)} 
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

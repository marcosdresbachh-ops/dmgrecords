
"use client";

import { Radio, FileText, BarChart3, Globe, Download, Mail } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const FEATURES = [
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: "Alcance Global",
    desc: "Sua música disponível para ouvintes em todo o mundo através da nossa plataforma dedicada."
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-zinc-900" />,
    title: "Gere Insights",
    desc: "Aumente seu engajamento e melhore seus algoritmos nas principais plataformas digitais."
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: "Concessão Necessária",
    desc: "Processo profissional com documento de concessão para segurança de ambas as partes."
  }
];

export function WebRadioSection() {
  return (
    <section id="radio" className="py-32 bg-white relative overflow-hidden border-y border-zinc-100">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <SectionHeading 
              badge="Web Rádio DMG"
              title={<>SUA MÚSICA NA <br /><span className="text-zinc-900 italic underline decoration-primary decoration-8">NOSSA GRADE.</span></>}
            />
            
            <div className="space-y-8">
              <p className="text-2xl text-zinc-500 leading-relaxed font-medium">
                Quer ver sua música tocando na rádio oficial da DMG Records? Nós abrimos espaço para artistas independentes que buscam expandir seu público.
              </p>
              
              <div className="p-8 bg-zinc-50 border-l-[12px] border-primary italic text-lg text-zinc-600 leading-relaxed font-bold uppercase shadow-inner">
                "A DMG permite que sua música seja tocada de forma voluntária, ajudando no insight com as plataformas. Esta reprodução não é remunerada."
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 pt-8">
              {FEATURES.map((item, i) => (
                <div key={i} className="space-y-4">
                  <div className="p-4 bg-zinc-50 inline-block shadow-sm border border-zinc-100">{item.icon}</div>
                  <h4 className="text-zinc-900 font-black text-base uppercase tracking-tighter italic">{item.title}</h4>
                  <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest leading-tight">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="pt-10 flex flex-wrap gap-6">
              <Button asChild className="rounded-none bg-zinc-900 hover:bg-primary text-white font-black h-20 px-12 tracking-tighter text-xl transition-all shadow-xl">
                <a href="#contato">ENVIAR MINHA MÚSICA</a>
              </Button>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="rounded-none border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white font-black h-20 px-12 tracking-tighter text-xl shadow-sm transition-all">
                    <Download className="mr-3 h-7 w-7" /> TERMO DE CONCESSÃO
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-white border-zinc-200 text-zinc-900 rounded-none max-w-md shadow-2xl p-10">
                  <DialogHeader className="space-y-6">
                    <DialogTitle className="text-4xl font-black italic tracking-tighter uppercase text-zinc-900 leading-none">Termos de Concessão</DialogTitle>
                    <DialogDescription className="text-zinc-500 font-bold uppercase text-[10px] tracking-widest leading-relaxed">
                      Escolha o modelo de termo adequado para sua nacionalidade. Após assinar, envie para o e-mail oficial abaixo.
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="grid gap-6 py-10">
                    <Button asChild className="w-full h-20 bg-zinc-900 text-white font-black uppercase tracking-tighter hover:bg-primary rounded-none shadow-lg text-lg italic transition-all">
                      <a href="https://drive.google.com/file/d/1HUoawJqCR5KeP9Bw9gvSs0_Cu2sLc6L4/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        BR CONCESSION TERM
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full h-20 border-zinc-200 text-zinc-900 font-black uppercase tracking-tighter hover:bg-zinc-50 rounded-none text-lg italic transition-all">
                      <a href="https://drive.google.com/file/d/1Gpkd9CnZjgIxXBIhA6zkUcRP9jInBdAo/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        INT CONCESSION TERM
                      </a>
                    </Button>
                  </div>

                  <div className="p-6 bg-zinc-50 border border-zinc-100 space-y-4 shadow-inner">
                    <div className="flex items-center gap-3 text-primary font-black uppercase text-[11px] tracking-[0.3em]">
                      <Mail className="h-5 w-5" /> Instruções de Envio
                    </div>
                    <p className="text-xs text-zinc-500 leading-relaxed font-bold uppercase">
                      Assine e envie o documento para: <br /><span className="text-zinc-900 font-black">radio@dmgrecords.com.br</span>
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-primary/5 blur-[100px] rounded-full animate-pulse" />
            <div className="relative z-10 aspect-square bg-white border border-zinc-100 flex flex-col items-center justify-center p-16 text-center group shadow-2xl">
              <div className="mb-10 p-10 bg-zinc-900 rounded-full shadow-2xl group-hover:scale-110 transition-transform duration-500">
                <Radio className="h-24 w-24 text-white animate-pulse" />
              </div>
              <h4 className="text-5xl font-black text-zinc-900 italic tracking-tighter uppercase mb-4 leading-none">NO AR AGORA</h4>
              <p className="text-primary font-black tracking-[0.5em] text-xs uppercase mb-10">Programação 24 Horas</p>
              <div className="w-full h-2 bg-zinc-50 rounded-full overflow-hidden border border-zinc-100">
                <div className="h-full bg-primary w-2/3 animate-[shimmer_2s_infinite]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

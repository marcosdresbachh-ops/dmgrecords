'use client';

import { useState, useEffect } from 'react';
import { Clock, User, Cpu } from 'lucide-react';
import { Skeleton } from "@/components/ui/skeleton";

const scheduleData: Record<string, Array<{ time: string, show: string, host: string, genre: string, live?: boolean, auto?: boolean }>> = {
    seg:[ {time:'06:00–09:00',show:'Bom Dia DMG',host:'DJ Marcos',genre:'Sertanejo',live:false}, {time:'09:00–12:00',show:'Morning Hits',host:'DJ Letícia',genre:'Pop / R&B',live:false}, {time:'12:50–13:30',show:'Almoço Sertanejo',host:'DJ Carlos',genre:'Sertanejo',live:true}, {time:'15:00–18:00',show:'Tarde Gospel',host:'DJ Ana Lima',genre:'Gospel',live:false}, {time:'18:00–22:00',show:'Prime Time DMG',host:'DJ Rafael',genre:'Pop / Rock',live:false}, {time:'22:00–00:00',show:'Noite Romântica',host:'DJ Sandra',genre:'Sertanejo',live:false}, {time:'00:00–06:00',show:'Madrugada DMG',host:'AutoDJ',genre:'Variado',auto:true}, ],
    ter:[ {time:'06:00–09:00',show:'Rock na Manhã',host:'DJ André',genre:'Rock'}, {time:'09:00–12:00',show:'Gospel Matinal',host:'DJ Ana Lima',genre:'Gospel'}, {time:'12:50–13:30',show:'Almoço Sertanejo',host:'DJ Carlos',genre:'Sertanejo'}, {time:'18:00–22:00',show:'Pop & R&B',host:'DJ Letícia',genre:'Pop / R&B'}, {time:'22:00–06:00',show:'Madrugada DMG',host:'AutoDJ',genre:'Variado',auto:true}, ],
    qua:[{time:'06:00–12:00',show:'Manhã Gospel',host:'DJ Ana Lima',genre:'Gospel'},{time:'12:50–13:30',show:'Almoço Sertanejo',host:'DJ Carlos',genre:'Sertanejo'},{time:'18:00–22:00',show:'Noite Pop',host:'DJ Marcos',genre:'Pop / R&B'},{time:'22:00–06:00',show:'Madrugada DMG',host:'AutoDJ',genre:'Variado',auto:true}],
    qui:[{time:'06:00–09:00',show:'Bom Dia DMG',host:'DJ Marcos',genre:'Sertanejo'},{time:'09:00–12:50',show:'Morning Gospel',host:'DJ Ana Lima',genre:'Gospel'},{time:'12:50-13:30', show:'Almoço Sertanejo', host:'DJ Carlos', genre:'Sertanejo'}, {time:'18:00–22:00',show:'Rock & Pop',host:'DJ André',genre:'Rock/Pop'},{time:'22:00–06:00',show:'Madrugada DMG',host:'AutoDJ',genre:'Variado',auto:true}],
    sex:[{time:'06:00–12:00',show:'Sexta Animada',host:'DJ Rafael',genre:'Pop / R&B'},{time:'12:50–13:30',show:'Sertanejo de Raiz',host:'DJ Carlos',genre:'Sertanejo'},{time:'18:00–22:00',show:'Gospel da Sexta',host:'DJ Ana Lima',genre:'Gospel'},{time:'22:00–06:00',show:'Rock Night',host:'DJ André',genre:'Rock'}],
    sab:[{time:'08:00–18:00',show:'Sabadaço DMG',host:'DJ Rafael',genre:'Variado'}, {time:'18:00–00:00', show:'Noite de Sábado', host:'AutoDJ', genre:'Variado', auto: true}],
    dom:[{time:'08:00–14:00',show:'Domingo Gospel',host:'DJ Ana Lima',genre:'Gospel'},{time:'14:00–18:00',show:'Tarde Sertaneja',host:'DJ Carlos',genre:'Sertanejo'},{time:'18:00–22:00',show:'Noite Romântica',host:'DJ Sandra',genre:'Pop / R&B'},{time:'22:00–08:00',show:'Madrugada DMG',host:'AutoDJ',genre:'Variado',auto:true}],
};

const dayMap = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'];
const daysOfWeek = [
    { id: 'seg', label: 'Segunda' },
    { id: 'ter', label: 'Terça' },
    { id: 'qua', label: 'Quarta' },
    { id: 'qui', label: 'Quinta' },
    { id: 'sex', label: 'Sexta' },
    { id: 'sab', label: 'Sábado' },
    { id: 'dom', label: 'Domingo' },
];

const GenreBadge = ({ genre }: { genre: string }) => {
    let className = 'badge ';
    switch (genre.toLowerCase().split('/')[0].trim()) {
        case 'sertanejo': className += 'b-sert'; break;
        case 'pop': className += 'b-pop'; break;
        case 'gospel': className += 'b-gosp'; break;
        case 'rock': className += 'b-rock'; break;
        default: className += 'b-var'; break;
    }
    return <span className={className}>{genre}</span>
}

export const Schedule = () => {
    const [activeTab, setActiveTab] = useState('seg');
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const today = dayMap[new Date().getDay()];
        setActiveTab(today);
    }, []);

    if (!isMounted) {
        return (
             <div className="fi v">
                <div className="mb-8 flex flex-wrap border-b-2 border-border">
                    {daysOfWeek.map(day => (
                         <Skeleton key={day.id} className="h-10 w-24" />
                    ))}
                </div>
                 <div className="w-full overflow-x-auto">
                    <Skeleton className="h-96 w-full" />
                </div>
            </div>
        );
    }

    const currentSchedule = scheduleData[activeTab] || [];

    return (
        <div className="fi v">
            <div className="mb-8 flex flex-wrap border-b-2 border-border">
                {daysOfWeek.map(day => (
                    <button
                        key={day.id}
                        className={`-mb-0.5 cursor-pointer border-b-2 border-transparent bg-transparent px-5 py-2.5 text-[.8rem] font-semibold text-muted-foreground transition-colors
                        ${activeTab === day.id ? '!border-primary !text-primary' : 'hover:text-foreground'}`}
                        onClick={() => setActiveTab(day.id)}
                    >
                        {day.label}
                    </button>
                ))}
            </div>

            <div className="w-full overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className='border-b-2 border-border'>
                            <th className="bg-muted/50 p-3 text-left font-['DM_Mono',monospace] text-[.58rem] uppercase tracking-[.2em] text-muted-foreground"><Clock className="mb-px mr-1 inline h-3 w-3" />Horário</th>
                            <th className="bg-muted/50 p-3 text-left font-['DM_Mono',monospace] text-[.58rem] uppercase tracking-[.2em] text-muted-foreground">Programa</th>
                            <th className="bg-muted/50 p-3 text-left font-['DM_Mono',monospace] text-[.58rem] uppercase tracking-[.2em] text-muted-foreground">Apresentador</th>
                            <th className="bg-muted/50 p-3 text-left font-['DM_Mono',monospace] text-[.58rem] uppercase tracking-[.2em] text-muted-foreground">Gênero</th>
                            <th className="bg-muted/50 p-3 text-left font-['DM_Mono',monospace] text-[.58rem] uppercase tracking-[.2em] text-muted-foreground">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentSchedule.map((item, index) => (
                            <tr key={index} className={`border-b border-border transition-colors hover:bg-primary/5 ${item.live ? 'border-l-4 border-l-primary bg-primary/10' : ''}`}>
                                <td className="whitespace-nowrap p-3.5 font-['DM_Mono',monospace] text-[.7rem] text-muted-foreground">{item.time}</td>
                                <td className="p-3.5">
                                    <div className="text-[.92rem] font-bold">{item.show}</div>
                                </td>
                                <td className="p-3.5">
                                    <div className="flex items-center gap-1.5 text-[.76rem] text-muted-foreground">
                                        {item.auto ? <Cpu className="h-3 w-3" /> : <User className="h-3 w-3" />}
                                        {item.auto ? "Automático" : item.host}
                                    </div>
                                </td>
                                <td className="p-3.5"><GenreBadge genre={item.genre || ''} /></td>
                                <td className="p-3.5">{item.live ? <span className="inline-flex items-center gap-1.5 rounded-sm bg-green-100 px-2 py-1 font-['DM_Mono',monospace] text-[.56rem] uppercase tracking-[.15em] text-green-700"><span className="live-dot"></span>Ao Vivo</span> : ''}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

'use client';

import { useState, useEffect } from 'react';
import { Clock, User, Cpu } from 'lucide-react';
import { Skeleton } from "@/components/ui/skeleton";

const programacao = [
    {time:'06:00 – 09:00',show:'Amor FM Manhã'},
    {time:'09:00 – 12:00',show:'Manhã do Amor'},
    {time:'12:00 – 14:00',show:'Almoço com Amor'},
    {time:'14:00 – 18:00',show:'Tarde Amor FM'},
    {time:'18:00 – 20:00',show:'Amor no Ar'},
    {time:'20:00 – 22:00',show:'Amor Clássicos'},
    {time:'22:00 – 00:00',show:'Amor Night'},
    {time:'00:00 – 06:00',show:'Amor Madrugada', auto: true},
];

const scheduleData: Record<string, Array<{ time: string, show: string, host: string, genre: string, auto?: boolean }>> = {
    seg: programacao.map(p => ({ ...p, host: 'Amor FM', genre: 'Românticas' })),
    ter: programacao.map(p => ({ ...p, host: 'Amor FM', genre: 'Pop Adulto' })),
    qua: programacao.map(p => ({ ...p, host: 'Amor FM', genre: 'Clássicos' })),
    qui: programacao.map(p => ({ ...p, host: 'Amor FM', genre: 'Românticas' })),
    sex: programacao.map(p => ({ ...p, host: 'Amor FM', genre: 'Pop Adulto' })),
    sab: programacao.map(p => ({ ...p, host: 'Amor FM', genre: 'Clássicos' })),
    dom: programacao.map(p => ({ ...p, host: 'Amor FM', genre: 'Românticas' })),
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

const isLiveNow = (dayId: string, timeRange: string, now: Date): boolean => {
    const currentDayIndex = now.getDay();
    const currentDayId = dayMap[currentDayIndex];

    if (dayId !== currentDayId) {
        return false;
    }

    try {
        const [startStr, endStr] = timeRange.split('–');
        const [startHour, startMinute] = startStr.split(':').map(Number);
        let [endHour, endMinute] = endStr.split(':').map(Number);

        if (endHour === 0 && endMinute === 0) {
            endHour = 24;
        }

        const currentTimeInMinutes = now.getHours() * 60 + now.getMinutes();
        const startTimeInMinutes = startHour * 60 + startMinute;
        const endTimeInMinutes = endHour * 60 + endMinute;

        return currentTimeInMinutes >= startTimeInMinutes && currentTimeInMinutes < endTimeInMinutes;
    } catch (e) {
        console.error("Error parsing time range", timeRange, e);
        return false;
    }
};

const GenreBadge = ({ genre }: { genre: string }) => {
    let className = 'badge ';
    switch (genre.toLowerCase().split('/')[0].trim()) {
        case 'sertanejo': className += 'b-sert'; break;
        case 'pop': className += 'b-pop'; break;
        case 'gospel': className += 'b-gosp'; break;
        case 'rock': className += 'b-rock'; break;
        case 'românticas': className += 'b-pop'; break;
        case 'bailão': className += 'b-sert'; break;
        default: className += 'b-var'; break;
    }
    return <span className={className}>{genre}</span>
}

export const Schedule = () => {
    const [activeTab, setActiveTab] = useState('seg');
    const [now, setNow] = useState<Date | null>(null);

    useEffect(() => {
        setNow(new Date());
        const today = dayMap[new Date().getDay()];
        setActiveTab(today);

        const timer = setInterval(() => {
            setNow(new Date());
        }, 60000); // Update every minute

        return () => clearInterval(timer);
    }, []);

    if (!now) {
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
                            <th className="bg-muted/50 p-3 text-left font-['Poppins',_sans-serif] text-[.58rem] uppercase tracking-[.2em] text-muted-foreground"><Clock className="mb-px mr-1 inline h-3 w-3" />Horário</th>
                            <th className="bg-muted/50 p-3 text-left font-['Poppins',_sans-serif] text-[.58rem] uppercase tracking-[.2em] text-muted-foreground">Programa</th>
                            <th className="bg-muted/50 p-3 text-left font-['Poppins',_sans-serif] text-[.58rem] uppercase tracking-[.2em] text-muted-foreground">Apresentador</th>
                            <th className="bg-muted/50 p-3 text-left font-['Poppins',_sans-serif] text-[.58rem] uppercase tracking-[.2em] text-muted-foreground">Gênero</th>
                            <th className="bg-muted/50 p-3 text-left font-['Poppins',_sans-serif] text-[.58rem] uppercase tracking-[.2em] text-muted-foreground">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentSchedule.map((item, index) => {
                            const live = isLiveNow(activeTab, item.time, now);
                            return (
                                <tr key={index} className={`border-b border-border transition-colors hover:bg-primary/5 ${live ? 'border-l-4 border-l-primary bg-primary/10' : ''}`}>
                                    <td className="whitespace-nowrap p-3.5 font-['Poppins',_sans-serif] text-[.7rem] text-muted-foreground">{item.time}</td>
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
                                    <td className="p-3.5">{live ? <span className="inline-flex items-center gap-1.5 rounded-sm bg-green-100 px-2 py-1 font-['Poppins',_sans-serif] text-[.56rem] uppercase tracking-[.15em] text-green-700"><span className="live-dot"></span>Ao Vivo</span> : ''}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

"use client";

import { useState, useEffect } from 'react';
import { Clock, User, Cpu } from 'lucide-react';

const scheduleData = {
    seg: [
        { time: '06:00 – 09:00', show: 'Bom Dia DMG', host: 'DJ Marcos', genre: 'Sertanejo', live: false },
        { time: '09:00 – 12:00', show: 'Morning Hits', host: 'DJ Letícia', genre: 'Pop / R&B', live: false },
        { time: '12:00 – 15:00', show: 'Almoço Sertanejo', host: 'DJ Carlos', genre: 'Sertanejo', live: true },
        { time: '15:00 – 18:00', show: 'Tarde Gospel', host: 'DJ Ana Lima', genre: 'Gospel', live: false },
        { time: '18:00 – 21:00', show: 'Prime Time DMG', host: 'DJ Rafael', genre: 'Pop / Rock', live: false },
        { time: '21:00 – 00:00', show: 'Noite Romântica', host: 'DJ Sandra', genre: 'Sertanejo', live: false },
        { time: '00:00 – 06:00', show: 'Madrugada DMG', host: 'AutoDJ', genre: 'Variado', live: false, auto: true },
    ],
    ter: [
        { time: "06:00–09:00", show: "Rock na Manhã", host: "DJ André", genre: "Rock" },
        { time: "09:00–12:00", show: "Gospel Matinal", host: "DJ Ana Lima", genre: "Gospel" },
        { time: "12:00–15:00", show: "Almoço Sertanejo", host: "DJ Carlos", genre: "Sertanejo" },
        { time: "15:00–21:00", show: "Pop & R&B", host: "DJ Letícia", genre: "Pop/R&B" },
        { time: "21:00–06:00", show: "Madrugada DMG", host: "AutoDJ", genre: "Variado", auto: true },
    ],
    qua: [
        { time: "06:00–12:00", show: "Manhã Gospel", host: "DJ Ana Lima", genre: "Gospel" },
        { time: "12:00–18:00", show: "Tarde Sertaneja", host: "DJ Carlos", genre: "Sertanejo" },
        { time: "18:00–00:00", show: "Noite Pop", host: "DJ Marcos", genre: "Pop/R&B" },
        { time: "00:00–06:00", show: "Madrugada DMG", host: "AutoDJ", genre: "Variado", auto: true },
    ],
    qui: [
        { time: "06:00–09:00", show: "Bom Dia DMG", host: "DJ Marcos", genre: "Sertanejo" },
        { time: "09:00–15:00", show: "Morning Gospel", host: "DJ Ana Lima", genre: "Gospel" },
        { time: "15:00–21:00", show: "Rock & Pop", host: "DJ André", genre: "Rock/Pop" },
        { time: "21:00–06:00", show: "Madrugada DMG", host: "AutoDJ", genre: "Variado", auto: true },
    ],
    sex: [
        { time: "06:00–12:00", show: "Sexta Animada", host: "DJ Rafael", genre: "Pop/R&B" },
        { time: "12:00–18:00", show: "Sertanejo de Raiz", host: "DJ Carlos", genre: "Sertanejo" },
        { time: "18:00–22:00", show: "Gospel da Sexta", host: "DJ Ana Lima", genre: "Gospel" },
        { time: "22:00–06:00", show: "Rock Night", host: "DJ André", genre: "Rock" },
    ],
    sab: [
        { time: "08:00–12:00", show: "Sábado Gospel", host: "DJ Ana Lima", genre: "Gospel" },
        { time: "12:00–16:00", show: "Churrasco Sertanejo", host: "DJ Carlos", genre: "Sertanejo" },
        { time: "16:00–20:00", show: "Pop Hits Weekend", host: "DJ Letícia", genre: "Pop" },
        { time: "20:00–06:00", show: "Rock Weekend", host: "DJ André", genre: "Rock" },
    ],
    dom: [
        { time: "08:00–14:00", show: "Domingo Gospel", host: "DJ Ana Lima", genre: "Gospel" },
        { time: "14:00–18:00", show: "Tarde Sertaneja", host: "DJ Carlos", genre: "Sertanejo" },
        { time: "18:00–22:00", show: "Noite Romântica", host: "DJ Sandra", genre: "Pop/R&B" },
        { time: "22:00–08:00", show: "Madrugada DMG", host: "AutoDJ", genre: "Variado", auto: true },
    ],
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

export const ScheduleClient = () => {
    const [activeTab, setActiveTab] = useState('seg');

    useEffect(() => {
        const today = dayMap[new Date().getDay()];
        setActiveTab(today);
    }, []);

    const currentSchedule = scheduleData[activeTab as keyof typeof scheduleData] || [];

    return (
        <div className="fi v">
            <div className="grade-tabs">
                {daysOfWeek.map(day => (
                    <button
                        key={day.id}
                        className={`gtab ${activeTab === day.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(day.id)}
                    >
                        {day.label}
                    </button>
                ))}
            </div>

            <div className="grade-panel active">
                <table className="grade-table">
                    <thead>
                        <tr>
                            <th><Clock style={{ width: '11px', height: '11px', verticalAlign: 'middle', display: 'inline' }} /> Horário</th>
                            <th>Programa</th>
                            <th>Apresentador</th>
                            <th>Gênero</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentSchedule.map((item, index) => (
                            <tr key={index} className={item.live ? 'on-now' : ''}>
                                <td className="gt-time">{item.time}</td>
                                <td>
                                    <div className="gt-show">{item.show}</div>
                                    <div className="gt-host">
                                        {item.auto ? <Cpu style={{ width: '11px', height: '11px' }} /> : <User style={{ width: '11px', height: '11px' }} />}
                                        {item.host}
                                    </div>
                                </td>
                                <td>{item.auto ? "Automático" : item.host}</td>
                                <td><GenreBadge genre={item.genre || ''} /></td>
                                <td>{item.live ? <span className="on-now-tag"><span className="live-dot"></span>Ao Vivo</span> : ''}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

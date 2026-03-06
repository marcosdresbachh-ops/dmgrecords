'use client';
import { useState } from 'react';

const filters = ["Todos", "Sertanejo", "Gospel", "Pop / R&B", "Rock", "Rádio", "Entrevistas"];

export function NewsFilters() {
    const [activeFilter, setActiveFilter] = useState('Todos');
    
    return (
        <div className="fi mb-10 flex flex-wrap gap-2">
            {filters.map(filter => (
                <button 
                    key={filter}
                    className={`cursor-pointer rounded-sm border border-border bg-transparent px-4 py-2 font-['DM_Mono',monospace] text-[.62rem] uppercase tracking-[.14em] text-muted-foreground transition-all
                        ${activeFilter === filter ? 'border-primary bg-primary/10 text-primary' : 'hover:border-primary hover:bg-primary/10 hover:text-primary'}`}
                    onClick={() => setActiveFilter(filter)}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
}

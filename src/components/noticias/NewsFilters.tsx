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
                    className={`cursor-pointer rounded-sm border-[1.5px] border-[--line] bg-transparent px-4 py-2 font-['DM_Mono',monospace] text-[.62rem] uppercase tracking-[.14em] text-[--ink3] transition-all
                        ${activeFilter === filter ? 'border-[--red] bg-[--red-light] text-[--red]' : 'hover:border-[--red] hover:bg-[--red-light] hover:text-[--red]'}`}
                    onClick={() => setActiveFilter(filter)}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
}

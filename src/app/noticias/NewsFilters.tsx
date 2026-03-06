'use client';
import { useState } from 'react';

const filters = ["Todos", "Sertanejo", "Gospel", "Pop / R&B", "Rock", "Rádio", "Entrevistas"];

export function NewsFilters() {
    const [activeFilter, setActiveFilter] = useState('Todos');
    
    // In a real app, you would use this state to filter the news articles
    // For this static conversion, it just handles the active state of the button
    
    return (
        <div className="filters fi v">
            {filters.map(filter => (
                <button 
                    key={filter}
                    className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                    onClick={() => setActiveFilter(filter)}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
}

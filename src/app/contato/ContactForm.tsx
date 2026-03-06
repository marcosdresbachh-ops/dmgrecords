'use client'
import { useState } from 'react';
import { Send, Check } from 'lucide-react';

export function ContactForm() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
        // In a real app, you'd handle form submission here,
        // possibly with a server action.
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-row-2">
                <div className="form-row"><label>Nome *</label><input type="text" placeholder="Seu nome completo" required /></div>
                <div className="form-row"><label>E-mail *</label><input type="email" placeholder="seu@email.com" required /></div>
            </div>
            <div className="form-row"><label>WhatsApp</label><input type="tel" placeholder="(55) 99999-9999" /></div>
            <div className="form-row">
                <label>Assunto *</label>
                <select required>
                    <option value="">Selecione o assunto…</option>
                    <option>Publicidade / Anúncio</option>
                    <option>Sugestão de Música</option>
                    <option>Participação no Programa</option>
                    <option>Parceria</option>
                    <option>Reclamação / Elogio</option>
                    <option>Outro</option>
                </select>
            </div>
            <div className="form-row"><label>Mensagem *</label><textarea placeholder="Escreva sua mensagem detalhada aqui…" required></textarea></div>
            {submitted ? (
                 <button type="button" className="btn btn-red" style={{ width: '100%', padding: '14px', justifyContent: 'center', fontSize: '.92rem', background: 'var(--green)' }} disabled>
                    <Check style={{ width: '16px', height: '16px' }} /> Enviado com sucesso!
                 </button>
            ) : (
                <button type="submit" className="btn btn-red" style={{ width: '100%', padding: '14px', justifyContent: 'center', fontSize: '.92rem' }}>
                    <Send style={{ width: '16px', height: '16px' }} /> Enviar Mensagem
                </button>
            )}
        </form>
    );
}

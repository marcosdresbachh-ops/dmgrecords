'use client'
import { useState } from 'react';
import { Send, Check } from 'lucide-react';
import { SectionHeader } from '../shared/SectionHeader';

export function ContactForm() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="fi">
            <SectionHeader
                eyebrow="Formulário"
                title={<>Envie sua <em>mensagem</em></>}
            />
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2">
                    <div className="mb-4">
                        <label className="mb-1.5 block text-left text-[.78rem] font-semibold tracking-wide text-foreground/80">Nome *</label>
                        <input type="text" placeholder="Seu nome completo" required className="w-full rounded border border-input bg-card px-3.5 py-3 text-[.88rem] text-foreground outline-none transition-all focus:border-primary focus:shadow-[0_0_0_3px_rgba(212,36,58,.08)]" />
                    </div>
                    <div className="mb-4">
                        <label className="mb-1.5 block text-left text-[.78rem] font-semibold tracking-wide text-foreground/80">E-mail *</label>
                        <input type="email" placeholder="seu@email.com" required className="w-full rounded border border-input bg-card px-3.5 py-3 text-[.88rem] text-foreground outline-none transition-all focus:border-primary focus:shadow-[0_0_0_3px_rgba(212,36,58,.08)]" />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="mb-1.5 block text-left text-[.78rem] font-semibold tracking-wide text-foreground/80">WhatsApp</label>
                    <input type="tel" placeholder="(51) 98144-6019" className="w-full rounded border border-input bg-card px-3.5 py-3 text-[.88rem] text-foreground outline-none transition-all focus:border-primary focus:shadow-[0_0_0_3px_rgba(212,36,58,.08)]" />
                </div>
                <div className="mb-4">
                    <label className="mb-1.5 block text-left text-[.78rem] font-semibold tracking-wide text-foreground/80">Assunto *</label>
                    <select required className="w-full rounded border border-input bg-card px-3.5 py-3 text-[.88rem] text-foreground outline-none transition-all focus:border-primary focus:shadow-[0_0_0_3px_rgba(212,36,58,.08)]">
                        <option value="">Selecione o assunto…</option>
                        <option>Publicidade / Anúncio</option>
                        <option>Sugestão de Música</option>
                        <option>Participação no Programa</option>
                        <option>Parceria</option>
                        <option>Reclamação / Elogio</option>
                        <option>Outro</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="mb-1.5 block text-left text-[.78rem] font-semibold tracking-wide text-foreground/80">Mensagem *</label>
                    <textarea placeholder="Escreva sua mensagem detalhada aqui…" required rows={5} className="w-full min-h-[110px] resize-y rounded border border-input bg-card px-3.5 py-3 text-[.88rem] text-foreground outline-none transition-all focus:border-primary focus:shadow-[0_0_0_3px_rgba(212,36,58,.08)]"></textarea>
                </div>
                
                {submitted ? (
                     <button type="button" className="btn w-full justify-center bg-green-600 px-3.5 py-3.5 text-[.92rem] text-white" disabled>
                        <Check className="h-4 w-4" /> Enviado com sucesso!
                     </button>
                ) : (
                    <button type="submit" className="btn btn-red w-full justify-center px-3.5 py-3.5 text-[.92rem]">
                        <Send className="h-4 w-4" /> Enviar Mensagem
                    </button>
                )}
            </form>
        </div>
    );
}

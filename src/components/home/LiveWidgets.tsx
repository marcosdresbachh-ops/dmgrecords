import { MessageCircle, Music2, Mic2, ExternalLink } from 'lucide-react';
import { SectionHeader } from '@/components/shared/SectionHeader';
import Link from 'next/link';

const widgets = [
    {
        icon: MessageCircle,
        title: "Chat ao Vivo",
        subtitle: "CONVERSE COM OS OUVINTES",
        src: "https://player.svrdedicado.org/chat/6862"
    },
    {
        icon: Music2,
        title: "Pedidos Automático",
        subtitle: "EXECUTADO PELO AUTODJ",
        src: "https://player.svrdedicado.org/request/auto/6862"
    },
    {
        icon: Mic2,
        title: "Pedidos ao Locutor",
        subtitle: "EXECUTADO AO VIVO",
        src: "https://player.svrdedicado.org/request/manual/6862"
    }
];

const WidgetCard = ({ widget }: { widget: typeof widgets[0] }) => (
     <div className="flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
        <div className="flex items-center gap-2.5 border-b border-border px-5 py-3.5">
            <div className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary'>
                <widget.icon className="h-4 w-4" />
            </div>
            <div>
                <div className="text-[.9rem] font-bold text-foreground">{widget.title}</div>
                <div className="mt-px font-['DM_Mono',monospace] text-[.58rem] tracking-[.12em] text-muted-foreground">{widget.subtitle}</div>
            </div>
        </div>
        <div className="flex flex-grow flex-col p-6 text-center">
             <p className="flex-grow text-[.85rem] text-muted-foreground leading-relaxed">
                Clique no botão abaixo para abrir a janela de {widget.title.toLowerCase()} em uma nova aba e interagir com a nossa programação.
            </p>
            <Link href={widget.src} target="_blank" rel="noopener noreferrer" className="btn btn-outline mt-6 justify-center">
                <ExternalLink className="h-4 w-4" />
                Abrir {widget.title}
            </Link>
        </div>
    </div>
)

export function LiveWidgets() {
    return (
        <section className="sec bg-muted/50" id="ao-vivo">
            <div className="sec-inner">
                <div className="fi">
                    <SectionHeader
                        eyebrow="Interaja"
                        title={<>Ao Vivo & <em>Interação</em></>}
                        subtitle="Ouça ao vivo, converse no chat e peça músicas — tudo em tempo real."
                    />
                </div>
                <div className="fi grid grid-cols-1 gap-5 lg:grid-cols-3">
                    {widgets.map(widget => <WidgetCard key={widget.title} widget={widget} />)}
                </div>
            </div>
        </section>
    );
}

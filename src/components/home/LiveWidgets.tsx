import { MessageCircle, Music2, Mic2 } from 'lucide-react';
import { SectionHeader } from '@/components/shared/SectionHeader';

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
     <div className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
        <div className="flex items-center gap-2.5 border-b border-border px-5 py-3.5">
            <div className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary'>
                <widget.icon className="h-4 w-4" />
            </div>
            <div>
                <div className="text-[.9rem] font-bold text-foreground">{widget.title}</div>
                <div className="mt-px font-['DM_Mono',monospace] text-[.58rem] tracking-[.12em] text-muted-foreground">{widget.subtitle}</div>
            </div>
        </div>
        <iframe src={widget.src} frameBorder="0" width="100%" height="480" title={widget.title}></iframe>
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

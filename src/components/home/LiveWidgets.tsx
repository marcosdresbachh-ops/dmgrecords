import { MessageCircle, Music2, Mic2 } from 'lucide-react';
import { SectionHeader } from '@/components/shared/SectionHeader';

const widgets = [
    {
        icon: MessageCircle,
        iconBg: 'whi-green',
        title: "Chat ao Vivo",
        subtitle: "CONVERSE COM OS OUVINTES",
        src: "https://player.svrdedicado.org/chat/6862"
    },
    {
        icon: Music2,
        iconBg: 'whi-red',
        title: "Pedidos Automático",
        subtitle: "EXECUTADO PELO AUTODJ",
        src: "https://player.svrdedicado.org/request/auto/6862"
    },
    {
        icon: Mic2,
        iconBg: 'whi-accent',
        title: "Pedidos ao Locutor",
        subtitle: "EXECUTADO AO VIVO",
        src: "https://player.svrdedicado.org/request/manual/6862"
    }
];

const WidgetCard = ({ widget }: { widget: typeof widgets[0] }) => (
     <div className="overflow-hidden rounded-lg border border-[--line] bg-[--bg2] shadow-[0_2px_12px_rgba(0,0,0,.05)]">
        <div className="flex items-center gap-2.5 border-b border-[--line] px-5 py-3.5">
            <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full 
                ${widget.iconBg === 'whi-green' ? 'bg-[--green-bg] text-[--green]' : ''}
                ${widget.iconBg === 'whi-red' ? 'bg-[--red-light] text-[--red]' : ''}
                ${widget.iconBg === 'whi-accent' ? 'bg-[#FFF8E1] text-[--accent]' : ''}
            `}>
                <widget.icon className="h-4 w-4" />
            </div>
            <div>
                <div className="text-[.9rem] font-bold">{widget.title}</div>
                <div className="mt-px font-['DM_Mono',monospace] text-[.58rem] tracking-[.12em] text-[--ink3]">{widget.subtitle}</div>
            </div>
        </div>
        <iframe src={widget.src} frameBorder="0" width="100%" height="480" title={widget.title}></iframe>
    </div>
)

export function LiveWidgets() {
    return (
        <section className="sec bg-[--bg3]" id="ao-vivo">
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

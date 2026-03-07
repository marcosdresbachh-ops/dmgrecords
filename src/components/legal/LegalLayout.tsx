import { Calendar } from 'lucide-react';
import { Breadcrumb } from '@/components/shared/Breadcrumb';

interface LegalLayoutProps {
    pageTitle: string;
    lastUpdated: string;
    tableOfContents: { id: string; title: string; }[];
    content: { id: string; title: string; body: React.ReactNode; }[];
}

export function LegalLayout({ pageTitle, lastUpdated, tableOfContents, content }: LegalLayoutProps) {
    return (
        <section className="sec pt-12">
            <div className="sec-inner">
                <div className="fi">
                    <Breadcrumb items={[{ href: '/', label: 'Início' }, { label: pageTitle }]} />
                </div>
                <div className="mx-auto max-w-[820px]">
                    <div className="fi mb-8 inline-flex items-center gap-1.5 rounded-sm bg-muted px-4 py-2 font-['DM_Mono',monospace] text-[.62rem] tracking-[.12em] text-muted-foreground">
                        <Calendar className="h-3 w-3" /> Última atualização: {lastUpdated}
                    </div>

                    <div className="fi mb-12 rounded-lg border border-border bg-muted/50 px-7 py-6">
                        <div className="mb-3.5 font-['DM_Mono',monospace] text-[.6rem] uppercase tracking-[.22em] text-primary">Índice</div>
                        <ol className="list-none p-0" style={{ counterReset: 'toc' }}>
                            {tableOfContents.map((item, index) => (
                                <li key={item.id} className="flex items-center gap-2 border-b border-border py-1 text-[.85rem] last:border-none before:font-['DM_Mono',monospace] before:text-[.62rem] before:font-medium before:text-primary before:content-[counter(toc)'.']">
                                    <a href={`#${item.id}`} className="text-foreground/80 transition-colors hover:text-primary">{item.title}</a>
                                </li>
                            ))}
                        </ol>
                    </div>

                    {content.map((section) => (
                        <div key={section.id} id={section.id} className="mb-11 scroll-mt-40">
                            <h2 className="mb-3.5 flex items-center gap-2.5 font-['Playfair_Display',serif] text-xl font-bold before:block before:h-5 before:w-1 before:rounded-sm before:bg-primary">
                                {section.title}
                            </h2>
                            <div className="space-y-3 text-[.88rem] leading-[1.82] text-muted-foreground [&_a]:text-primary [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
                                {section.body}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

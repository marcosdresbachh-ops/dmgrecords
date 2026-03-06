import { Star, Music, TrendingUp, Zap, MapPin, Radio as RadioIcon, Heart, Disc, Mic, Calendar } from 'lucide-react';

const featured = {
    icon: Star,
    category: "Entrevista Exclusiva",
    title: "Henrique & Juliano falam sobre novo álbum e parceria com a DMG Records Rádio",
    excerpt: "Em papo exclusivo com nossa equipe, a dupla revelou os bastidores do novo projeto e agradeceu ao carinho dos ouvintes ao longo de todos esses anos. Uma conversa emocionante e cheia de revelações surpreendentes sobre o futuro da dupla.",
    date: "15 Jan 2025",
    tag: "Destaque",
    gradient: "linear-gradient(135deg,#1a1a2e,var(--red))",
    emoji: "🎤"
};

const small = [
    { icon: Music, category: "Gospel", title: "Fernandinho lança novo CD gravado ao vivo", date: "10 Jan 2025", gradient: "linear-gradient(135deg,#1B6B35,#25D366)", emoji: "🙏" },
    { icon: TrendingUp, category: "Pop / R&B", title: "Os maiores hits do Pop brasileiro em 2025", date: "08 Jan 2025", gradient: "linear-gradient(135deg,#7B1FA2,#E040FB)", emoji: "🎵" },
];

const secondary = [
    { icon: Zap, category: "Rock", title: "Rock nacional: as bandas que prometem dominar 2025", excerpt: "Da cena underground às grandes arenas, o rock brasileiro está mais vivo do que nunca.", date: "05 Jan 2025", gradient: "linear-gradient(135deg,#AD1457,#E91E63)", emoji: "🎸" },
    { icon: MapPin, category: "Sertanejo", title: "Agenda de shows sertanejos para o primeiro semestre", excerpt: "Confira as principais datas e locais dos shows no Brasil em 2025.", date: "03 Jan 2025", gradient: "linear-gradient(135deg,#B36000,#FFA000)", emoji: "🤠" },
    { icon: RadioIcon, category: "Rádio", title: "DMG Records atinge marca de 15 mil ouvintes simultâneos", excerpt: "Um novo recorde histórico para a nossa web rádio. Obrigado a todos os ouvintes!", date: "01 Jan 2025", gradient: "linear-gradient(135deg,#0D47A1,#42A5F5)", emoji: "📻" },
    { icon: Heart, category: "Gospel", title: "5 músicas gospel que marcaram 2024 e continuam tocando em 2025", excerpt: "Uma seleção especial das canções que mais emocionaram os ouvintes durante o ano passado.", date: "28 Dez 2024", gradient: "linear-gradient(135deg,#1A237E,#7986CB)", emoji: "🎶" },
    { icon: Disc, category: "Lançamentos", title: "Novos lançamentos sertanejos para acompanhar esta semana", excerpt: "As duplas e artistas que lançaram trabalhos novos e estão bombando nas plataformas.", date: "25 Dez 2024", gradient: "linear-gradient(135deg,#880E4F,#F48FB1)", emoji: "💿" },
    { icon: Mic, category: "Bastidores", title: "Conheça os bastidores de uma transmissão ao vivo na DMG Records", excerpt: "Como funciona nossa equipe, equipamentos e a magia que acontece nos bastidores da rádio.", date: "20 Dez 2024", gradient: "linear-gradient(135deg,#004D40,#26A69A)", emoji: "🎙️" },
];

const NewsCard = ({ article, isFeatured, isSmall }: any) => (
    <div className={`overflow-hidden rounded-lg border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(0,0,0,.1)]`}>
        <div 
            className={`flex w-full items-center justify-center overflow-hidden text-5xl md:text-6xl ${isFeatured ? 'aspect-[16/7]' : 'aspect-[16/9]'} ${isSmall ? 'h-[120px]': ''}`} 
            style={{ background: article.gradient }}
        >
            {article.emoji}
        </div>
        <div className="p-5 md:p-6">
            <div className="mb-2 flex items-center gap-1.5 font-['DM_Mono',monospace] text-[.58rem] uppercase tracking-[.2em] text-primary">
                <article.icon className="h-3 w-3" /> {article.category}
            </div>
            <h3 className={`font-['Playfair_Display',serif] font-bold ${isFeatured ? 'text-2xl leading-tight' : 'text-lg leading-tight'}`}>
                {article.title}
            </h3>
            {article.excerpt && <p className="mt-2 text-[.8rem] leading-[1.72] text-muted-foreground">{article.excerpt}</p>}
            <div className="mt-3 flex items-center gap-2.5">
                <span className="flex items-center gap-1 font-['DM_Mono',monospace] text-[.58rem] text-muted-foreground">
                    <Calendar className="h-3 w-3" /> {article.date}
                </span>
                {article.tag && <span className="rounded-sm bg-primary/10 px-2 py-0.5 font-['DM_Mono',monospace] text-[.56rem] uppercase tracking-[.12em] text-primary">{article.tag}</span>}
            </div>
        </div>
    </div>
);

export function NewsGrid() {
    return (
        <div className="fi">
            <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr]">
                <NewsCard article={featured} isFeatured />
                <div className="flex flex-col gap-4">
                    {small.map((article, index) => (
                        <NewsCard key={index} article={article} isSmall />
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                 {secondary.map((article, index) => (
                    <NewsCard key={index} article={article} />
                ))}
            </div>
        </div>
    )
}

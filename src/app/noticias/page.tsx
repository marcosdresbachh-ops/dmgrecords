
import { getAgenciaRadioNews, type AgenciaRadioNewsOutput } from '@/ai/flows/agencia-radio-flow';
import { getRadioTaquaraNews, type RadioTaquaraNewsOutput } from '@/ai/flows/radio-taquara-flow';

import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LeaderboardBanner } from '@/components/banners/LeaderboardBanner';
import Image from 'next/image';
import Link from 'next/link';
import { Rss, Newspaper } from 'lucide-react';

const groupArticlesByCategory = (articles: any[]) => {
  if (!articles) return {};
  return articles.reduce((acc, article) => {
    const { category } = article;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(article);
    return acc;
  }, {} as Record<string, any[]>);
};

export default async function NoticiasPage() {
  const [agenciaNewsData, taquaraNewsData] = await Promise.all([
    getAgenciaRadioNews({ sourceUrl: 'https://brasil61.com/agencia-do-radio' }),
    getRadioTaquaraNews({ sourceUrl: 'https://www.radiotaquara.com.br/' })
  ]);

  const groupedAgenciaArticles = groupArticlesByCategory(agenciaNewsData.articles);
  const groupedTaquaraArticles = groupArticlesByCategory(taquaraNewsData.articles);

  const renderArticleGrid = (articles: any[], source: string) => (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {articles.map((article, index) => (
        <Link href={article.link} key={index} target="_blank" rel="noopener noreferrer" className="group block">
          <Card className="flex h-full flex-col overflow-hidden transition-all group-hover:-translate-y-1 group-hover:border-primary group-hover:shadow-xl">
            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src={article.imageUrl || `https://picsum.photos/seed/${index + source + article.category}/400/225`}
                alt={article.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-base leading-snug">{article.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground line-clamp-3">{article.summary}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );

  return (
    <>
      <PageHero
        eyebrow="Central de Notícias"
        title={<>Fique por <em>Dentro</em></>}
        description="As últimas notícias do Brasil e da sua região, com a credibilidade da Agência do Rádio e Rádio Taquara."
      />

      <LeaderboardBanner />

      <section className="sec">
        <div className="sec-inner">
          <div className="fi">
            <Breadcrumb items={[{ href: '/', label: 'Início' }, { label: 'Notícias' }]} />
          </div>

          <div className="space-y-16">
            {/* Seção Agência Rádio */}
            {Object.keys(groupedAgenciaArticles).length > 0 && (
                <div className="fi">
                <h2 className="mb-8 flex items-center gap-4 font-['Playfair_Display',serif] text-4xl font-black text-foreground">
                    <Rss className="h-8 w-8 text-primary" />
                    Agência do Rádio
                </h2>
                <div className="space-y-12">
                    {Object.entries(groupedAgenciaArticles).map(([category, articles]) => (
                    <div key={category}>
                        <h3 className="mb-6 border-b-2 border-primary/20 pb-2 font-['DM_Mono',monospace] text-sm uppercase tracking-widest text-muted-foreground">{category}</h3>
                        {renderArticleGrid(articles, 'agencia')}
                    </div>
                    ))}
                </div>
                </div>
            )}

            {/* Seção Rádio Taquara */}
            {Object.keys(groupedTaquaraArticles).length > 0 ? (
                <div className="fi">
                <h2 className="mb-8 flex items-center gap-4 font-['Playfair_Display',serif] text-4xl font-black text-foreground">
                    <Newspaper className="h-8 w-8 text-primary" />
                    Rádio Taquara
                </h2>
                <div className="space-y-12">
                    {Object.entries(groupedTaquaraArticles).map(([category, articles]) => (
                        <div key={category}>
                        <h3 className="mb-6 border-b-2 border-primary/20 pb-2 font-['DM_Mono',monospace] text-sm uppercase tracking-widest text-muted-foreground">{category}</h3>
                        {renderArticleGrid(articles, 'taquara')}
                        </div>
                    ))}
                </div>
                </div>
            ) : (
                <div className="fi text-center text-muted-foreground py-12">
                    <h2 className="mb-8 flex items-center justify-center gap-4 font-['Playfair_Display',serif] text-4xl font-black text-foreground">
                        <Newspaper className="h-8 w-8 text-primary" />
                        Rádio Taquara
                    </h2>
                    <p>Não foi possível carregar as notícias da Rádio Taquara no momento.</p>
                    <p>Por favor, tente novamente mais tarde.</p>
                </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

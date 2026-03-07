import { getAgenciaRadioNews } from '@/ai/flows/agencia-radio-flow';
import type { AgenciaRadioNewsOutput } from '@/ai/flows/agencia-radio-flow';
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Rss } from 'lucide-react';

// Group articles by category
const groupArticlesByCategory = (articles: AgenciaRadioNewsOutput['articles']) => {
  if (!articles) return {};
  return articles.reduce((acc, article) => {
    const { category } = article;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(article);
    return acc;
  }, {} as Record<string, AgenciaRadioNewsOutput['articles']>);
};

export default async function AgenciaRadioPage() {
  const newsData = await getAgenciaRadioNews({ sourceUrl: 'https://brasil61.com/agencia-do-radio' });
  const groupedArticles = groupArticlesByCategory(newsData.articles);

  return (
    <>
      <PageHero
        eyebrow="Conteúdo Nacional"
        title={<>Notícias da <em>Agência Rádio</em></>}
        description="Conteúdo jornalístico de credibilidade fornecido pela Agência do Rádio Web, integrado diretamente em nossa programação."
      />

      <section className="sec">
        <div className="sec-inner">
          <div className="fi">
            <Breadcrumb items={[{ href: '/', label: 'Início' }, { label: 'Agência Rádio' }]} />
          </div>
          
          <div className="space-y-12">
            {Object.entries(groupedArticles).map(([category, articles]) => (
              <div key={category} className="fi">
                <h2 className="mb-6 flex items-center gap-3 font-['Playfair_Display',serif] text-3xl font-black text-foreground">
                  <Rss className="h-7 w-7 text-primary" />
                  {category}
                </h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {articles.map((article, index) => (
                    <Link href={article.link} key={index} target="_blank" rel="noopener noreferrer" className="group block">
                      <Card className="flex h-full flex-col overflow-hidden transition-all group-hover:-translate-y-1 group-hover:border-primary group-hover:shadow-xl">
                        <div className="relative aspect-video w-full overflow-hidden">
                          <Image
                            src={article.imageUrl || `https://picsum.photos/seed/${index+category}/400/225`}
                            alt={article.title}
                            fill
                            className="object-cover transition-transform group-hover:scale-105"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle className="text-base leading-snug">{article.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <p className="text-sm text-muted-foreground">{article.summary}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { NewsGrid } from '@/components/noticias/NewsGrid';
import { NewsFilters } from '@/components/noticias/NewsFilters';
import { LeaderboardBanner } from '@/components/banners/LeaderboardBanner';

export default function NoticiasPage() {
  return (
    <>
      <PageHero
        eyebrow="Central de Notícias"
        title={<>Fique por <em>Dentro</em></>}
        description="As últimas notícias, entrevistas exclusivas e novidades do mundo da música e da nossa rádio."
      />

      <LeaderboardBanner />

      <section className="sec">
        <div className="sec-inner">
          <div className="fi">
            <Breadcrumb items={[{ href: '/', label: 'Início' }, { label: 'Notícias' }]} />
          </div>
          <NewsFilters />
          <NewsGrid />
        </div>
      </section>
    </>
  );
}

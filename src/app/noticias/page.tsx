import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { NewsFilters } from '@/components/noticias/NewsFilters';
import { NewsGrid } from '@/components/noticias/NewsGrid';
import { RefreshCw } from 'lucide-react';

const NoticiasPage = () => {
    return (
        <>
            <PageHero
                eyebrow="Blog & Informação"
                title={<>Notícias & <em>Blog</em></>}
                description="Novidades do mundo musical, entrevistas exclusivas e os bastidores da DMG Records Rádio."
            />

            <section className="sec">
                <div className="sec-inner">
                    <div className="fi">
                        <Breadcrumb items={[{ href: '/', label: 'Início' }, { label: 'Notícias' }]} />
                    </div>

                    <NewsFilters />
                    <NewsGrid />

                    <div className="fi mt-11 text-center">
                        <button className="btn btn-outline">
                            <RefreshCw className="h-4 w-4" /> Carregar Mais Notícias
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NoticiasPage;

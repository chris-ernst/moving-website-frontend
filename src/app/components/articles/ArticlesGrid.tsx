// components/articles/ArticlesGrid.tsx
import { ArticleCard } from './ArticleCard';
import type { Article } from '@/app/types';

export function ArticlesGrid({ articles }: { articles: Article[] }) {
    // console.log('ArticlesGrid received:', articles); // Debug log

    return (
        <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles?.map((article) => (
                        <ArticleCard key={article.id} article={article} />
                    ))}
                </div>
            </div>
        </section>
    );
}

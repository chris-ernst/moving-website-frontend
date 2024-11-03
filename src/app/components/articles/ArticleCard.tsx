// components/articles/ArticleCard.tsx
import { Calendar } from 'lucide-react';
import Link from 'next/link';
import type { Article } from '@/app/types';

export function ArticleCard({ article }: { article: Article }) {
    return (
        <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            {article.cover && (
                <div className="relative w-full h-48">
                    <img
                        src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${article.cover.url}`}
                        alt={article.cover.alternativeText || article.title}
                        className="w-full h-full object-cover"
                    />
                </div>
            )}
            <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {article.title}
                </h3>
                <p className="text-gray-600 mb-4">
                    {article.description}
                </p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(article.publishedAt).toLocaleDateString()}
                    </div>
                    <Link
                        href={`/articles/${article.slug}`}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                        Read more →
                    </Link>
                </div>
            </div>
        </article>
    );
}

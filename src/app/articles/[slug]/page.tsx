// app/articles/[slug]/page.tsx
import { fetchAPI } from '@/app/lib/api';
import { Calendar } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function ArticlePage({
                                              params: paramsPromise,
                                          }: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await paramsPromise;

    try {
        const response = await fetchAPI(`/articles?filters[slug][$eq]=${slug}&populate=*`);

        if (!response.data || response.data.length === 0) {
            notFound();
        }

        const article = response.data[0];

        return (
            <main className="min-h-screen bg-gray-50 py-12">
                <article className="max-w-3xl mx-auto px-4 sm:px-6">
                    <header className="mb-8">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            {article.title}
                        </h1>
                        <div className="flex items-center text-gray-600">
                            <Calendar className="w-5 h-5 mr-2" />
                            {new Date(article.publishedAt).toLocaleDateString()}
                        </div>
                    </header>

                    {article.cover && (
                        <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
                            <img
                                src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${article.cover.url}`}
                                alt={article.cover.alternativeText || article.title}
                                className="w-full h-auto"
                            />
                        </div>
                    )}

                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-700 text-lg leading-relaxed">
                            {article.description}
                        </p>
                    </div>

                    <div className="mt-12 pt-6 border-t border-gray-200">
                        <Link
                            href="/"
                            className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                        >
                            ← Back to articles
                        </Link>
                    </div>
                </article>
            </main>
        );
    } catch (error) {
        console.error('Error fetching article:', error);
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-red-500">
                    Failed to load article: {error instanceof Error ? error.message : 'Unknown error'}
                </p>
            </div>
        );
    }
}

// app/page.tsx
import { ArticlesGrid } from '@/app/components/articles/ArticlesGrid';
import { AboutSection } from '@/app/components/about/AboutSection';
import { fetchAPI } from '@/app/lib/api';

export default async function Home() {
    try {
        const [articlesRes, aboutRes] = await Promise.all([
            fetchAPI('/articles?populate=*'),
            fetchAPI('/about?populate=*'),
        ]);

        return (
            <main className="min-h-screen bg-gray-50">
                {aboutRes.data && <AboutSection about={aboutRes.data} />}
                <ArticlesGrid articles={articlesRes.data} />
            </main>
        );
    } catch (error) {
        console.error('Error in page:', error);
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-red-500">
                    Failed to load content: {error instanceof Error ? error.message : 'Unknown error'}
                </p>
            </div>
        );
    }
}

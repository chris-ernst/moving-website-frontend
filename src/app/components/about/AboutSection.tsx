// components/about/AboutSection.tsx
import { About } from '@/app/types';

interface AboutSectionProps {
    about: About;
}

export function AboutSection({ about }: AboutSectionProps) {
    const quote = about.blocks.find(block => block.__component === 'shared.quote');

    return (
        <section className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:flex lg:items-center lg:justify-between lg:space-x-8">
                    <div className="lg:w-1/2 space-y-6">
                        <h1 className="text-4xl font-bold text-gray-900">
                            {about.title}
                        </h1>
                        {quote && (
                            <div className="space-y-4">
                                <h2 className="text-2xl font-semibold text-gray-800">
                                    {quote.title}
                                </h2>
                                <blockquote className="text-xl italic text-gray-600 border-l-4 border-blue-500 pl-4">
                                    {quote.body}
                                </blockquote>
                            </div>
                        )}
                    </div>

                    {about.Portrait && (
                        <div className="mt-8 lg:mt-0 lg:w-1/2">
                            <div className="relative h-64 lg:h-96 overflow-hidden rounded-lg shadow-lg">
                                <img
                                    src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${about.Portrait.url}`}
                                    alt={about.Portrait.alternativeText || 'Portrait image'}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

// app/articles/[slug]/loading.tsx
export default function Loading() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 animate-pulse">
                <div className="h-10 bg-gray-200 rounded mb-4 w-3/4"></div>
                <div className="h-6 bg-gray-200 rounded mb-8 w-1/4"></div>

                <div className="h-96 bg-gray-200 rounded-lg mb-8"></div>

                <div className="space-y-4">
                    <div className="h-6 bg-gray-200 rounded w-full"></div>
                    <div className="h-6 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-6 bg-gray-200 rounded w-4/6"></div>
                </div>
            </div>
        </div>
    );
}

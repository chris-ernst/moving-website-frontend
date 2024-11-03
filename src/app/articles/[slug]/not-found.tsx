// app/articles/[slug]/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Article Not Found
                </h2>
                <p className="text-gray-600 mb-6">
                    The article you are looking for does not exist or has been moved.
                </p>
                <Link
                    href="/"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                >
                    ← Back to articles
                </Link>
            </div>
        </div>
    );
}

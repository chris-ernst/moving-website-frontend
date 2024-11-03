// types/index.ts
export interface CoverImage {
    id: number;
    name: string;
    alternativeText: string | null;
    url: string;
}

export interface Article {
    id: number;
    documentId: string;
    title: string;
    description: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    cover: CoverImage;
}

interface ImageFormat {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    size: number;
    width: number;
    height: number;
}

interface Portrait {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
        small: ImageFormat;
        thumbnail: ImageFormat;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

interface QuoteBlock {
    __component: "shared.quote";
    id: number;
    title: string;
    body: string;
}

export interface About {
    id: number;
    documentId: string;
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    blocks: QuoteBlock[];
    Portrait: Portrait;
}

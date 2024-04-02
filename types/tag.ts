import { ArticleHead } from '@/types/article';

export interface Tag {
    id: number;
    created_at: string;
    name: string;
    color: string;
    articles: ArticleHead[];
}

export interface TagHead {
    id: number;
    created_at: string;
    name: string;
    color: string;
}

export interface TagCreate {
    name: string;
    color: string;
}

export interface TagUpdate {
    name: string;
    color: string;
}

export interface TagDelete {
    id: number;
}
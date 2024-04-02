import { TagHead } from "@/types/tag";
import { User} from "@/types/user";

export interface Article {
    id: number;
    created_at: string;
    title: string;
    thumbnail: string;
    description: string;
    body: string;
    user: User;
    series_id: number;
    tags: TagHead[];
}

export interface ArticleHead {
    id: number;
    created_at: string;
    title: string;
    thumbnail: string;
    description: string;
    user: User;
    series_id: number;
    tags: TagHead[];
}

export interface ArticleCreate {
    title: string;
    thumbnail: string;
    description: string;
    body: string;
    series_id: number;
    tag_ids: string;
}

export interface ArticleUpdate {
    title?: string;
    thumbnail?: string;
    description?: string;
    body?: string;
    series_id?: number;
    tag_ids?: string;
}

export interface ArticleDelete {
    id: number;
}


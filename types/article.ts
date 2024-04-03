import { TagHead } from "./tag";
import { User } from "./user";

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
import type { Article, ArticleHeads, PatchedArticle } from "../types";

export async function getArticles(groupId: number): Promise<ArticleHeads | null> {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/${groupId}/article`, {
        method: "GET",
        credentials: 'include',
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (!response.ok) {
        return null;
    }

    const data = await response.json();
    return data;
}

export async function getArticle(groupId: number, articleId: number): Promise<Article | null> {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/${groupId}/article/${articleId}`, {
        method: "GET",
        credentials: 'include',

        headers: {
            "Content-Type": "application/json"
        }
    });

    if (!response.ok) {
        return null;
    }

    const data = await response.json();
    return data;
}
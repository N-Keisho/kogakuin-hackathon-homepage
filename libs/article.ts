import type { Article, ArticleHeads, PatchedArticle } from "@/types";

export async function getArticles(): Promise<ArticleHeads | null> {
    const response = await fetch(`${process.env.CMS_API_URL}/api/v1/${process.env.GROUP_ID}/article`, {
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

export async function getAllArticles(): Promise<ArticleHeads | null> {
    const response = await fetch(`${process.env.CMS_API_URL}/api/v1/${process.env.GROUP_ID}/article?per_page=10000`, {
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

export async function getArticlesTags(tag_names: string): Promise<ArticleHeads | null> {
    const response = await fetch(`${process.env.CMS_API_URL}/api/v1/${process.env.GROUP_ID}/article?tags=${tag_names}`, {
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

export async function getArticle(articleId: number): Promise<Article | null> {
    const response = await fetch(`${process.env.CMS_API_URL}/api/v1/${process.env.GROUP_ID}/article/${articleId}`, {
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
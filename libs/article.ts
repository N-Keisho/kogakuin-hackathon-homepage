'use server'

import { Article, ArticleHead } from "@/types/article";

export async function getArticles(): Promise<ArticleHead[] | null> {
    try {
        const response = await fetch(String(process.env.CMS_URL) + String(process.env.GROUP_NAME) + "/article");
        const json: ArticleHead[] = await response.json();
        return json;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function getArticle(articleID: string): Promise<Article | null> {
    try {
        const response = await fetch(String(process.env.CMS_URL) + String(process.env.GROUP_NAME) + "/article/" + articleID);
        const json: Article = await response.json();
        return json;
    } catch (error) {
        console.error(error);
        return null;
    }
}

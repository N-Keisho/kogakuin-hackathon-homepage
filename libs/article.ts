'use server'

import { Article, ArticleHead } from "@/types/article";

export async function getArticles(): Promise<ArticleHead[] | null> {
    try {
        const url = String(process.env.CMS_URL) + String(process.env.GROUP_NAME) + "/article";
        const response = await fetch(url, {cache: "no-cache"});
        const json: ArticleHead[] = await response.json();
        return json;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function getArticle(articleID: string): Promise<Article | null> {
    try {
        const url = String(process.env.CMS_URL) + String(process.env.GROUP_NAME) + "/article/" + articleID;
        const response = await fetch(url, {cache: "no-cache"});
        const json: Article = await response.json();
        return json;
    } catch (error) {
        console.error(error);
        return null;
    }
}

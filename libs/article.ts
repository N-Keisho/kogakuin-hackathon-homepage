import { Article, ArticleHead } from "@/types/article";

export async function getArticles(groupName: string): Promise<ArticleHead[] | null> {
    try {
        const response = await fetch(process.env.CMS_URL + groupName + "/article");
        const json: ArticleHead[] = await response.json();
        return json;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function getArticle(groupName: string, articleID: string): Promise<Article | null> {
    try {
        const response = await fetch(process.env.CMS_URL + groupName + "/article/" + articleID);
        const json: Article = await response.json();
        return json;
    } catch (error) {
        console.error(error);
        return null;
    }
}

"use server";

import { Article, ArticleHead } from "@/types/article";
import fs from "fs";
import matter from "gray-matter";

export async function getArticlesInServer(): Promise<ArticleHead[] | null> {
  try {
    const files = await fs.readdirSync("posts");
    const posts : ArticleHead[] = files.map((filename) => {
      const fileCotent = fs.readFileSync(`posts/${filename}`, "utf-8");
      const { data, content } = matter(fileCotent);
      const post: ArticleHead = {
        id: data.id,
        created_at: data.created_at,
        title: data.title,
        thumbnail: data.thumbnail,
        description: data.description,
        user: data.user,
        series_id: data.series_id,
        tags: data.tags,
      };
      return {
        ...post,
      };
    });
    const sortedPosts = posts.sort((a, b) => {
        return a.id - b.id;
    });
    return sortedPosts;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getArticleInServer(
  articleID: string
): Promise<Article | null> {
  try {
    const files = await fs.readdirSync("posts");
    const posts : Article[] = files.map((filename) => {
      const fileCotent = fs.readFileSync(`posts/${filename}`, "utf-8");
      const { data, content } = matter(fileCotent);
      const p: Article = {
        id: data.id,
        created_at: data.created_at,
        title: data.title,
        thumbnail: data.thumbnail,
        description: data.description,
        body: content,
        user: data.user,
        series_id: data.series_id,
        tags: data.tags,
      };
      return {
        ...p,
      };
    });
    if (posts.length === 0) return null;
    const post = posts.find((p) => p.id === Number(articleID));
    if (!post) return null;
    return post;
  } catch (error) {
    console.error(error);
    return null;
  }
}

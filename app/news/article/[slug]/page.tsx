import React from 'react';
import ArticlePage from "@/app/components/ui/Article/ArticlePage";
import { getArticle, getArticles } from '@/libs/article';
import { Metadata } from 'next'
import { getArticleInServer, getArticlesInServer } from '@/libs/articleInServer';

const url = "https://hackathon.kogcoder.com";
export async function generateMetadata(
    { params }: { params: { slug: string } }
  ): Promise<Metadata> {
   
    // fetch data
    // const Article = await getArticle(params.slug);
    const Article = await getArticleInServer(params.slug);

    if (!Article) {
        return {
            title: "ページが見つかりません",
            description: "ページが見つかりません",
            openGraph: {
              images: [`${url}/img/other/noimage.png`],
            },
        }
    }

    const title = Article.title.replace('???', '');
   
    return {
      title: title,
      description: Article.description,
      openGraph: {
        title: title,
        description: Article.description,
        images: [Article.thumbnail],
      },
      twitter: {
        title: title,
        description: Article.description,
        images: [Article.thumbnail],
      }
    }
  }

export async function generateStaticParams(){
    // const allArticles = await getArticles();
    const allArticles = await getArticlesInServer();
    if (!allArticles) {
        return [];
    }

    const Article = allArticles.filter((article) => article.title.slice(0, 3) === '???');
    if (Article.length === 0) {
        return [];
    }

    return Article.map((article) => ({
        slug: article.id.toString()
    }));;
}

export const dynamicParams = false;

export default async function Page ({params} : {params : {slug : string}}){

    // const Article = await getArticle(params.slug);
    const Article = await getArticleInServer(params.slug);
    if (!Article) {
        return { notFound: true }
    }

    return (
        <>
            <ArticlePage Article={Article} />
        </>
    );
};
import React from "react";
import ArticlePage from "@/app/components/ui/Article/ArticlePage";
import { getArticle, getAllArticles } from "@/libs/article";
import { Metadata } from "next";

const url = "https://hackathon.kogcoder.com";
export async function generateMetadata({
  params,
}: {
  params: { slug: number };
}): Promise<Metadata> {
  
  const Article = await getArticle(params.slug);

  if (!Article) {
    return {
      title: "ページが見つかりません",
      description: "ページが見つかりません",
      openGraph: {
        images: [`${url}/img/other/noimage.png`],
      },
    };
  }


  return {
    title: Article.title,
    description: Article.description,
    openGraph: {
      title: Article.title,
      description: Article.description,
      images: [`${Article.thumbnail}`],
    },
    twitter: {
      title: Article.title,
      description: Article.description,
      images: [`${Article.thumbnail}`],
    },
  };
}

export async function generateStaticParams() {
  const allArticles = await getAllArticles();
  if (!allArticles) {
    return [];
  }

  const Article = allArticles?.articles.filter((article) =>
    article.tags?.some((tag) => tag.name === 'news')
  );

  return Article.map((article) => ({
    slug: article.id,
  }));
}

export const dynamicParams = false;

export default async function Page({ params }: { params: { slug: number} }) {
  const Article = await getArticle(params.slug);
  if (!Article) {
    return { notFound: true };
  }

  let isActivated = false;
  if (Article.tags?.some((tag) => tag.name === '開催中')) {
    isActivated = true;
  }

  return (
    <>
      <ArticlePage Article={Article} isActivated={isActivated} Badge={true} />
    </>
  );
}

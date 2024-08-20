import React from "react";
import ArticlePage from "@/app/components/ui/Article/ArticlePage";
import { getArticle, getAllArticles } from "@/libs/article";
import { Metadata } from "next";

const url = "https://hackathon.kogcoder.com";
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  
  const Article = await getArticle(params.slug as unknown as number);

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
    article.tags?.some((tag) => tag.name === 'ニュース')
  );

  return Article.map((article) => ({
    slug: article.id.toString(),
  }));
}

export const dynamicParams = false;

export default async function Page({ params }: { params: { slug: string } }) {
  const Article = await getArticle(params.slug as unknown as number);
  if (!Article) {
    return { notFound: true };
  }

  return (
    <>
      <ArticlePage Article={Article} />
    </>
  );
}

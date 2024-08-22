import React from "react";
import ArticlePage from "@/app/components/ui/Article/ArticlePage";
import { getArticle, getAllArticles } from "@/libs/article";
import { Metadata } from "next";

const url = "https://hackathon.kogcoder.com";

let ArticleNameToId: { [key: string]: number } | null = null;
async function createArticleNameToId() {
  const allArticles = await getAllArticles();
  if (!allArticles) {
    return [];
  }

  const NewsArticle = allArticles?.articles.filter((article) =>
    article.tags?.some((tag) => tag.name === "ニュース")
  );

  ArticleNameToId = NewsArticle.reduce((acc, article) => {
    acc[article.name] = article.id;
    return acc;
  }, {} as { [key: string]: number });
  return ArticleNameToId;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  if (!ArticleNameToId) {
    await createArticleNameToId();
    if (!ArticleNameToId) {
      return {
        title: "ページが見つかりません",
        description: "ページが見つかりません",
        openGraph: {
          images: [`${url}/img/other/noimage.png`],
        },
      };
    }
  }

  const id = ArticleNameToId[params.slug];
  const Article = await getArticle(id);

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
    article.tags?.some((tag) => tag.name === "ニュース")
  );

  return Article.map((article) => ({
    slug: article.name,
  }));
}

export const dynamicParams = false;

export default async function Page({ params }: { params: { slug: string } }) {
  if (!ArticleNameToId) {
    await createArticleNameToId();
    if (!ArticleNameToId) {
      return { notFound: true };
    }
  }

  const id = ArticleNameToId[params.slug];
  const Article = await getArticle(id);
  if (!Article) {
    return { notFound: true };
  }

  return (
    <>
      <ArticlePage Article={Article} />
    </>
  );
}

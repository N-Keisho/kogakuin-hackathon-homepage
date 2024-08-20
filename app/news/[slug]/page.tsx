import React from "react";
import InfoCard from "../../components/ui/infoCard/InfoCard";
import PageButton from "../../components/ui/button/PageButton";
import { getAllArticles } from "@/libs/article";
import { Metadata } from "next";
import BreadcrumbsList from "@/app/components/ui/BreadcrumbsList/BreadcrumbsList";

const url = "https://hackathon.kogcoder.com";
const title = "ニュース";
const description = "工学院ハッカソンのニュース情報を掲載しています．";
const image = "/img/ogp/ogp_news.png";
export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    images: [`${url}${image}`],
  },
  twitter: {
    title: title,
    description: description,
    images: [`${url}${image}`],
  },
};

const onePageContents = 5;

export async function generateStaticParams() {
  const allArticles = await getAllArticles();

  if (!allArticles) {
    return [];
  }

  const Article = allArticles?.articles.filter((article) =>
    article.tags?.some((tag) => tag.name === "ニュース")
  );

  if (Article.length === 0) {
    return [];
  }

  const numOfPages = Math.ceil(Article.length / onePageContents);
  return Array.from({ length: numOfPages }, (_, i) => ({
    slug: (i + 1),
  }));
}

export const dynamicParams = false;

export default async function Page({ params }: { params: { slug: number } }) {
  const allArticles = await getAllArticles();
  if (!allArticles) {
    return { notFound: true };
  }

  const Articles = allArticles.articles
    .filter((article) => article.tags?.some((tag) => tag.name === "ニュース"))
    .map((_, i, a) => a[a.length - i - 1]);

  const length = Articles.length;
  const current = (params.slug as unknown as number) - 1;

  return (
    <div className="flex flex-col justify-center items-center my-5">
      <div className="w-11/12 max-w-2xl">
        <BreadcrumbsList />
        <h1>ニュース</h1>
        <div className="w-full flex flex-col items-center">
          {Articles.map((article, index) => {
            if (
              index >= current * onePageContents &&
              index < (current + 1) * onePageContents
            ) {
              return (
                <InfoCard
                  key={article.id}
                  category="news"
                  id={article.id}
                  title={article.title}
                  description={article.description || ""}
                  thumbnaile={article.thumbnail || '/img/other/noimage.png'}
                  time={article.created_at}
                />
              );
            }
          })}
        </div>
        <PageButton
          numOfDatas={length}
          onePageContents={5}
          pageIndex={current}
          category="news"
        />
      </div>
    </div>
  );
}

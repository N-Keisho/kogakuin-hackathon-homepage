import React from 'react';
import InfoCard from '../../components/ui/infoCard/InfoCard';
import SingleYellowLines from '../../components/ui/decoration/SingleYellowLines';
import PageButton from '../../components/ui/button/PageButton';
import { getAllArticles } from '@/libs/article';
import { Metadata } from 'next';
import BreadcrumbsList from '@/app/components/ui/BreadcrumbsList/BreadcrumbsList';

const url = "https://hackathon.kogcoder.com";
const title = "イベント";
const description = "工学院ハッカソンのイベント情報を掲載しています．";
const image = "/img/ogp/ogp_event.png";
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
    }
}

const onePageContents = 5;

export async function generateStaticParams() {
    const allArticles = await getAllArticles();
    if (!allArticles) {
        return [];
    }

    const Article = allArticles?.articles.filter((article) =>
        article.tags?.some((tag) => tag.name === "イベント")
      );
    if (Article.length === 0) {
        return [];
    }

    const numOfPages = Math.ceil(Article.length / onePageContents);
    return Array.from({ length: numOfPages }, (_, i) => ({
        slug: (i + 1).toString(),
    }));
}

export const dynamicParams = false;

export default async function Page({ params }: { params: { slug: string } }) {

    const allArticles = await getAllArticles();
    if (!allArticles) {
        return { notFound: true }
    }

    const Articles = allArticles.articles
    .filter((article) => article.tags?.some((tag) => tag.name === "イベント"))
    .map((_, i, a) => a[a.length - i - 1]);
    const length = Articles.length;
    const current = (params.slug as unknown as number) - 1;

    return (
        <div className="flex flex-col justify-center items-center my-5">
            <div className="w-11/12 max-w-2xl">
                <BreadcrumbsList />
                <h1>イベント</h1>
                <div className='w-full flex flex-col items-center'>
                    {
                        Articles.map((article, index) => {
                            if (index >= current * onePageContents && index < (current + 1) * onePageContents) {
                                return (
                                    <InfoCard
                                        key={article.id}
                                        category="event"
                                        article={article}
                                    />
                                );
                            }
                        })
                    }
                </div>
                <PageButton numOfDatas={length} onePageContents={5} pageIndex={current} category='event' />
            </div>
        </div>
    );
};
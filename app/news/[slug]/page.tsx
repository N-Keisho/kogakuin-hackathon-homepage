import React from 'react';
import InfoCard from '../../components/InfoCard';
import { SingleYellowLines } from '../../components/Decoration';
import { PageButton } from '../../components/CustomButton';
import { getArticles } from '@/libs/article';
import { Metadata } from 'next';

const title = "ニュース";
const description = "工学院ハッカソンのニュース情報を掲載しています．";
const image = "/img/ogp_news.png";
export const metadata: Metadata = {
    title: title,
    description: description,
    openGraph: {
        title: title,
        description: description,
        images: [image],
    },
    twitter: {
        title: title,
        description: description,
        images: [image],
    }
};

const onePageContents = 5;

export async function generateStaticParams() {
    const allArticles = await getArticles();
    if (!allArticles) {
        return [];
    }

    const Article = allArticles.filter((article) => article.title.slice(0, 3) === '???');
    if (Article.length === 0) {
        return [];
    }

    const numOfPages = Math.ceil(Article.length/ onePageContents);
    return Array.from({length: numOfPages }, (_, i) => ({
        slug: (i+1).toString(),
    }));
}

export const dynamicParams = false;

export default async function Page({ params }: { params: { slug: string } }) {

    const allArticles = await getArticles();
    if (!allArticles) {
        return { notFound: true }
    }

    const Articles = allArticles.filter((article) => article.title.slice(0, 3) === '???').map((_, i, a) => a[a.length - i - 1]);
    const length = Articles.length;
    const current = (params.slug as unknown as number) - 1;

    return (
        <div className='p-5 justify-center flex flex-col items-center w-full'>
            <h1 className="text-2xl md:text-4xl text-primary-700 font-bold underline mt-4 mb-4 decoration-1 underline-offset-8 text-center ">
                ニュース
            </h1>
            {/* <SingleYellowLines /> */}
            <div className='w-full flex flex-col items-center'>
            {
                    Articles.map((article, index) => {
                        if (index >= current * onePageContents && index < (current+ 1) * onePageContents){
                            return (
                                <InfoCard
                                    key={article.id}
                                    category="news"
                                    id={article.id}
                                    title={article.title}
                                    description={article.description}
                                    thumbnaile={article.thumbnail}
                                    time={article.created_at}
                                />
                            );
                        }
                    })
                }
            </div>
            <PageButton numOfDatas={length} onePageContents={5} pageIndex={current} category='event' />
        </div>
    );
};
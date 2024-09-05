import React from 'react';
import ArticlePage from "@/app/components/ui/Article/ArticlePage";
import { getArticle } from '@/libs/article';
import { Metadata } from 'next';

const title = "チュートリアルセッション";
const description = "過去に行ったチュートリアルセッションの資料を掲載しています．";
const image = "/img/ogp/ogp_tutorial.png";
const url = "https://hackathon.kogcoder.com";
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
};

export default async function Page (){

    const Article = await getArticle(8);
    if (!Article) {
        return { notFound: true }
    }

    return (
        <>
            <ArticlePage Article={Article}/>
        </>
    )
};
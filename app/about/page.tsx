import React from 'react';
import ArticlePage from "@/app/components/ui/Article/ArticlePage";
import { getArticle } from '@/libs/article';
import { Metadata } from 'next';
import { getArticleInServer } from '@/libs/articleInServer';

const title = "ハッカソンとは？";
const description = "ハッカソンという言葉を聞いたことのない人向けに解説します．";
const image = "/img/ogp/ogp_whats_hackathon.png";
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

    // const Article = await getArticle("54");
    const Article = await getArticleInServer('1');
    // console.log(Article);
    if (!Article) {
        return { notFound: true }
    }

    return (
        <>
            <ArticlePage Article={Article}/>
        </>
    )
};
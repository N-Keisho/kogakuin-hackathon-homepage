import React from 'react';
import ArticlePage from "@/app/components/ui/Article/ArticlePage";
import { getArticle } from '@/libs/article';
import { Metadata } from 'next';

const title = "過去作品";
const description = "過去のハッカソンで作成された作品を紹介します．";
const image = "/img/ogp/ogp_product.png";
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

    const Article = await getArticle(3);
    if (!Article) {
        return { notFound: true }
    }

    return (
        <>
            <ArticlePage Article={Article}/>
        </>
    )
};
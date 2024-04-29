import React from 'react';
import ArticlePage from '../components/ArticlePage';
import { getArticle } from '@/libs/article';
import { Metadata } from 'next';

const title = "ハッカソンとは？";
const description = "ハッカソンという言葉を聞いたことのない人向けに解説します．";
export const metadata: Metadata = {
    title: title,
    description: description,
    openGraph: {
        title: title,
        description: description,
    }
};

export default async function Page (){

    const Article = await getArticle("54");
    if (!Article) {
        return { notFound: true }
    }

    return (
        <>
            <ArticlePage Article={Article}/>
        </>
    )
};
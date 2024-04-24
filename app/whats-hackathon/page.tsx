import React from 'react';
import ArticlePage from '../components/ArticlePage';
import { getArticle } from '@/libs/article';

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
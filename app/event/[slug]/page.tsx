import React from 'react';
import ArticlePage from '../../components/ArticlePage';
import { getArticle, getArticles } from '@/libs/article';

export async function generateStaticParams() {
    const allArticles = await getArticles();
    if (!allArticles) {
        return [];
    }

    const Article = allArticles.filter((article) => article.title.slice(0, 3) === '!!!');
    if (Article.length === 0) {
        return [];
    }

    return Article.map((article) => ({
        slug: article.id.toString()
    }));;
}

export default async function Page({ params }: { params: { slug: string } }) {

    const Article = await getArticle(params.slug);
    if (!Article) {
        return { notFound: true }
    }

    let isActivated = false;
    if (Article.title.includes('@@')) {
        isActivated = true;
    }

    return (
        <>
            <ArticlePage Article={Article} isActivated={isActivated} Badge={true} />
        </>
    );
};
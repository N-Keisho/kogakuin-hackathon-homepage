import React from 'react';
import ArticlePage from '../../../components/ArticlePage';
import { getArticle, getArticles } from '@/libs/article';
import { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata(
    { params }: { params: { slug: string } },
    parent: ResolvingMetadata
  ): Promise<Metadata> {

    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []
   
    // fetch data
    const Article = await getArticle(params.slug);
    if (!Article) {
        return {
            title: "ページが見つかりません",
            openGraph: {
              images: ['/img/noimage.png', ...previousImages],
            },
        }
    }

    const title = Article.title.replace('!!!', '').replace('@@', '');
   
    return {
      title: title,
      openGraph: {
        images: [Article.thumbnail, ...previousImages],
      },
    }
  }

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

export const dynamicParams = false

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
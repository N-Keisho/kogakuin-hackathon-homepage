'use client'
import { useParams} from 'next/navigation';
import React from 'react';
import DemoData from '../../components/DemoData';
import EventNewsPage from '../../components/EventNewsPage';
import DefaultErrorPage from 'next/error'
import { useState, useEffect } from 'react';
import { getArticles, getArticle } from '@/libs/article';
import { Article } from '@/types/article';

const defalt : Article = {
    id: 0,
    title: '???',
    description: '',
    thumbnail: '',
    body: '',
    created_at: '',
    tags: [],
    user : {
        id: 0,
        username: '',
    },
    series_id : 0,
};

// export async function generateStaticParams() {
//     const articles = await getArticles();
//     if (!articles) {
//         return [];
//     }
//     return articles.map((article) => ({
//         params: {
//             id: String(article.id),
//         },
//     }));

// }


// export default async function Page({ params }: { params: { id: string } }) {
export default function Page() {

    // const Data = await getArticle(params.id);

    const id = useParams().id;
    const [Data, setData] = useState<Article | null>(defalt);
    useEffect(() => {
        getArticle(String(id)).then((data) => {
            setData(data);
        });
    }, []);

    // 識別子に応じて返す内容を変更
    if (String(Data?.title).includes('!!!')){

        let isActivated = false;
        // titleに@@が含まれている場合、isActivatedをtrueにして、@を削除する（開催中のイベント）
        if (Data?.title.includes('@@')) {
            isActivated = true;
        }

        return (
            <>
                <EventNewsPage Data={Data} isActivated={isActivated}/>
            </>
        );
    }

    return (
        <>
            <DefaultErrorPage statusCode={404} />
        </>
    )
};
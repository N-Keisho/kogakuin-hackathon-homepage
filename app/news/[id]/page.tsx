'use client'
import React from 'react';
import { useParams } from 'next/navigation';
import EventNewsPage from '../../components/EventNewsPage';
import DefaultErrorPage from 'next/error'
import { useState, useEffect } from 'react';
import { getArticle } from '@/libs/article';
import { Article } from '@/types/article';
import Loading from '@/app/components/Loding';

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


const Page: React.FC = async () => {

    const id = useParams().id;
    // const Data = await getArticle(String(55));
    const [Data, setData] = useState<Article | null>(defalt);
    useEffect(() => {
        getArticle(String(id)).then((data) => {
            setData(data);
        });
    }, []);

    if (Data === defalt) {
        return (
            <Loading />
        )
    }

    // 識別子に応じて返す内容を変更
    if (String(Data?.title).includes('???')){
        return (
            <>
                <EventNewsPage Data={Data} />
            </>
        );
    }

    return (
        <>
            <DefaultErrorPage statusCode={404} />
        </>
    )
    
};

export default Page;
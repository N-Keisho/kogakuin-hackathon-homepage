'use client'
import { useParams} from 'next/navigation';
import React from 'react';
import DemoData from '../../components/DemoData';
import EventNewsPage from '../../components/EventNewsPage';
import DefaultErrorPage from 'next/error'
import { useState, useEffect } from 'react';
import { getArticle } from '@/libs/article';
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

const Page: React.FC = () => {

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

export default Page;
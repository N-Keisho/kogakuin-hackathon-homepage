'use client'
import { useSearchParams } from 'next/navigation';
import React from 'react';
import DemoData from '../components/DemoData';
import EventNewsPage from '../components/EventNewsPage';
import DefaultErrorPage from 'next/error'

const Page: React.FC = () => {

    const id = useSearchParams().get('id');
    const Data = DemoData[Number(id) - 1];

    let isActivated = false;
    // titleに@@が含まれている場合、isActivatedをtrueにして、@を削除する（開催中のイベント）
    if (Data.Title.includes('@@')) {
        isActivated = true;
    }


    // 識別子に応じて返す内容を変更
    if (Data.Title.includes('!!!')) {
        return (
            <>
                <EventNewsPage Data={Data} Badge={true} isActivated={isActivated} />
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
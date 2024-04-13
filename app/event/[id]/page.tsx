'use client'
import { useParams} from 'next/navigation';
import React from 'react';
import DemoData from '../../components/DemoData';
import EventNewsPage from '../../components/EventNewsPage';
import DefaultErrorPage from 'next/error'

const Page: React.FC = () => {

    const id = useParams().id;
    const Data = DemoData[Number(id)];

    let isActivated = false;
    // titleに@@が含まれている場合、isActivatedをtrueにして、@を削除する（開催中のイベント）
    if (Data.title.includes('@@')) {
        isActivated = true;
    }


    // 識別子に応じて返す内容を変更
    if (Data.title.includes('!!!')) {
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
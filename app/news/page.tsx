'use client'
import React from 'react';
import { useSearchParams } from 'next/navigation';
import DemoData from '../components/DemoData';
import EventNewsPage from '../components/EventNewsPage';
import DefaultErrorPage from 'next/error'

const Page: React.FC = () => {

    const id = useSearchParams().get('id');
    const Data = DemoData[Number(id)];

    // 識別子に応じて返す内容を変更
    if (Data.title.includes('???')){
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
'use client'

import React from 'react';
import InfoCard from '../components/InfoCard';
import { useState } from 'react';
import { PageButton } from '../components/CustomButton';
import { getArticles } from '@/libs/article';
import { useEffect } from 'react';
import { ArticleHead } from '@/types/article';
import Loading from '@/app/components/Loding';


interface PageProps {
    // Define the props for your component here
}

const Page: React.FC<PageProps> = async () => {

    const [pageIndex, setPageIndex] = useState(0);
    const pageHandler = (index: number) => { setPageIndex(index) };
    const onePageContents = 5;

    const [Data, setData] = useState<ArticleHead[] | null>();
    useEffect(() => {
        getArticles().then((data) => {
            const news = data?.filter((data) => data.title.slice(0, 3) === '???');
            const news_reverse = news?.map((_, i, a) => a[a.length - i - 1]);
            setData(news_reverse);
        });
    }, []);
    // const rowData = await getArticles();
    // const Data = rowData?.filter((data) => data.title.slice(0, 3) === '???').map((_, i, a) => a[a.length - i - 1]);

    if (!Data) {
        return (
            <Loading />
        )
    }


    const length = Data?.length || 0;

    return (
        <div className='p-5 justify-center flex flex-col items-center w-full'>
            <h1 className="text-2xl md:text-4xl text-primary-700 font-bold underline mt-4 mb-4 decoration-1 underline-offset-8 text-center ">
                ニュース
            </h1>
            {/* <SingleYellowLines /> */}
            <div className='w-full flex flex-col items-center'>
                {
                    Data?.map((data, index) => {
                        if (index >= pageIndex * onePageContents && index < (pageIndex + 1) * onePageContents)
                            return (
                                <InfoCard 
                                key={data.id} 
                                category="news" 
                                id={data.id} 
                                title={data.title} 
                                description={data.description} 
                                thumbnaile={data.thumbnail} 
                                time={data.created_at} />
                            );
                    })
                }
            </div>
            <PageButton numOfDatas={length} onePageContents={5} pageIndex={pageIndex} pageHandler={pageHandler} />
        </div>
    );
};

export default Page;
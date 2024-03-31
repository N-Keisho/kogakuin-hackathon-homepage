'use client';

import React from 'react';
import InfoCard from '../components/InfoCard';
import DemoData from '../components/DemoData';
import { SingleYellowLines } from '../components/Decoration';
import { useState } from 'react';
import { PageButton } from '../components/CustomButton';


interface PageProps {
    // Define the props for your component here
}

const Page: React.FC<PageProps> = () => {

    const [pageIndex, setPageIndex] = useState(0);
    const pageHandler = (index: number) => { setPageIndex(index) };
    const onePageContents = 5;


    const Data = DemoData.filter((data) => data.Title.slice(0, 3) === '!!!');


    return (
        <div className='p-5 justify-center flex flex-col items-center w-full'>
            <h1 className="text-2xl md:text-4xl text-primary-700 font-bold underline mt-0 md:mt-4 mb-4 decoration-1 underline-offset-8 text-center ">
                イベント
            </h1>
            <SingleYellowLines />
            <div className='w-full flex flex-col items-center'>
                {
                    Data.map((data, index) => {
                        if (index >= pageIndex * onePageContents && index < (pageIndex + 1) * onePageContents){
                            return (
                                <InfoCard
                                    key={data.Id}
                                    category="event"
                                    id={data.Id}
                                    title={data.Title}
                                    description={data.Description}
                                    thumbnaile={data.Thumbnail}
                                    time={data.CreateAt}
                                />
                            );
                        }
                    })
                }
            </div>
            <PageButton numOfDatas={Data.length} onePageContents={5} pageIndex={pageIndex} pageHandler={pageHandler} />
        </div>
    );
};

export default Page;
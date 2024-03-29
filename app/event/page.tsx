'use client'
import { useSearchParams } from 'next/navigation';
import React from 'react';
import DemoData from '../components/DemoData';
import Image from 'next/image';
import CustomReactMarkdown from '../components/CustomReactMarkdown';


const Page: React.FC = () => {

    const id = useSearchParams().get('id');
    const Data = DemoData[Number(id)];

    return (
        <>
            <div className="flex flex-col justify-center items-center p-8 md:p-14">
                <Image src={Data.Thumbnail} alt="Thumbnail" className="object-fit w-11/12 max-w-2xl" width={600} height={600} />
                <div className='bg-secondary-400  w-full mt-5 py-1 md:py-2 px-3 md:px-4 w-11/12 max-w-2xl'>
                    <a className='text-black text-3xl md:text-4xl font-bold'>{Data.Title}</a>
                </div>
                <div className='w-11/12 max-w-2xl'>
                    <CustomReactMarkdown content={Data.Body} />
                </div>

            </div>
        </>
    );
};

export default Page;
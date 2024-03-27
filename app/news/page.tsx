import React from 'react';
import InfoCard from '../components/InfoCard';
import DemoDeta from '../components/DemoDeta';
import { SingleYellowLines } from '../components/Decoration';


interface PageProps {
    // Define the props for your component here
}

const Page: React.FC<PageProps> = () => {


    return (
        <div className='p-5 justify-center flex flex-col items-center w-full'>
            <h1 className="text-2xl md:text-4xl text-primary-700 font-bold underline mt-4 mb-4 decoration-1 underline-offset-8 text-center ">
                ニュース
            </h1>
            <SingleYellowLines />
            {
                DemoDeta.map((data, index) => (
                    <InfoCard key={index} id={index} title={data.titile} description={data.description} image={data.image} time={data.time} />
                ))
            }
        </div>
    );
};

export default Page;
'use client'
import { useSearchParams } from 'next/navigation';
import React from 'react';
import DemoData from '../components/DemoData';

const Page: React.FC = () => {

    const id = useSearchParams().get('id');
    const Data = DemoData[Number(id)];

    return (
        <>
            <h1>Event Page</h1>
            <p>Event ID: {id}</p>
            <p>{Data.Title}</p>
        </>
    );
};

export default Page;
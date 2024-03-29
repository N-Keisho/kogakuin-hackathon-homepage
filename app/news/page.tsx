'use client'
import React from 'react';
import { useSearchParams } from 'next/navigation';

const Page: React.FC = () => {

    const id = useSearchParams().get('id');

    return (
        <div>
            <h1>News Page</h1>
            <p>News ID: {id}</p>
        </div>
    );
};

export default Page;
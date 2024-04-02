'use client'
import { useSearchParams } from 'next/navigation';
import React from 'react';
import DemoData from '../components/DemoData';
import EventNewsPage from '../components/EventNewsPage';
import DefaultErrorPage from 'next/error'
import { Article } from '@/types/database';

const Page: React.FC = () => {

    

    return (
        <>
            <EventNewsPage Data={WhatsHackathonData} />
        </>
    )
};

export default Page;


const WhatsHackathonData : Article = {
    Id: 1,
    Title: 'ハッカソンってなに？',
    UserId: 1,
    Thumbnail: 'img/currentEventDemo.svg',
    Description: 'WhatsHackathonです．WhatsHackathonです．WhatsHackathonです．WhatsHackathonです．WhatsHackathonです．WhatsHackathonです．',
    SeriesId: 1,
    GroupId: 1,
    CreateAt: '2024.4.1',
    Body: `
このページでは**ハッカソンの魅力**を皆様にお伝えします！

# ハッカソンとは？
ハッカソンとは，「ハック」
    
    
    
    
    `,
}
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface InfoCardProps {
    category: string;
    id: number;
    title: string;
    description: string;
    thumbnaile: string;
    time: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ category, id, title, description, thumbnaile, time }) => {
    
    let isActivated = false;

    // titleの識別子の削除
    if (title.includes('!!!')) title = title.replace('!!!', '');
    if (title.includes('???')) title = title.replace('???', '');

    // titleに@@が含まれている場合、isActivatedをtrueにして、@を削除する（開催中のイベント）
    if(title.includes('@@')){
        title = title.replace('@@', '');
        isActivated = true;
    }

    if(title.length > 30) title = title.slice(0, 30) + '...';
    if (description.length > 55) description = description.slice(0, 55) + '...';

    return (
        <>
            <Link href={`${category}?id=${id}`} legacyBehavior>
                <div className="flex flex-col md:flex-row w-11/12 max-w-lg md:h-28 m-2 relative bg-white border border-gray-300 hover:animate-pulse">
                    <div className="md:flex-shrink-0 w-full md:w-1/3 h-32 md:h-auto relative">
                        <Image src={thumbnaile} alt="Image" fill style={{ objectFit: 'cover' }} className="object-fit" sizes="(max-width: 1000px) 100vw" />
                    </div>
                    <div className="p-4">
                        <a className="text-base md:text-lg font-bold text-black mb-2" >{title}</a>
                        <p className="text-xs md:text-sm text-gray-600 my-1">{description}</p>
                        <p className="text-black opacity-60 text-right text-xs absolute right-3 bottom-1 ">{time}</p>
                    </div>
                    <div
                        className={`${category == "event" ? "" : "hidden"} 
                                    ${isActivated ? "bg-secondary-400" : "bg-white"}
                                    text-primary-700 text-xs md:text-sm text-center font-bold absolute -top-2 -right-2 p-1 rounded-sm w-12 md:w-16 border border-primary-700
                                `}
                    >
                        {isActivated ? "開催中" : "終了"}
                    </div>
                </div>
            </Link>
        </>
    );
};

export default InfoCard;
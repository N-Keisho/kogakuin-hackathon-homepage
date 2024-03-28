import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface InfoCardProps {
    category: string;
    id: number;
    title: string;
    description: string;
    image: string;
    time: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ category, id, title, description, image, time }) => {

    if(description.length > 55) description = description.slice(0, 55) + '...';

    return (
        <>
            <Link href={`${category}//${id}`} legacyBehavior>
                <div className="flex flex-col md:flex-row w-11/12 max-w-lg md:h-28 overflow-hidden m-1 relative bg-white border border-gray-300 hover:animate-pulse">
                    <div className="md:flex-shrink-0 w-full md:w-1/3 h-32 md:h-auto relative">
                        <Image src={image} alt="Image" fill style={{ objectFit: 'cover' }} className="object-fit" sizes="(max-width: 1000px) 100vw" />
                    </div>
                    <div className="p-4">
                        <a className="text-base md:text-lg font-bold text-black mb-2" >{title}</a>
                        <p className="text-xs md:text-sm text-gray-600 my-1">{description}</p>
                        <p className="text-black opacity-60 text-right text-xs absolute right-3 bottom-1 ">{time}</p>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default InfoCard;
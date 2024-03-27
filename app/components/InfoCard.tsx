import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface InfoCardProps {
    id: number;
    title: string;
    description: string;
    image: string;
    time: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ id, title, description, image, time }) => {
    return (
        <>
            <Link href={`/events/${id}`} legacyBehavior>
                <div className="flex flex-col md:flex-row w-11/12 max-w-xl md:h-48 overflow-hidden m-1 relative bg-white border border-primary-400 hover:opacity-80">
                    <div className="md:flex-shrink-0 w-full md:w-1/2 h-24 md:h-auto relative md:m-3">
                        <Image src={image} alt="Image" fill style={{ objectFit: 'cover' }} className="object-fit" sizes="(max-width: 1000px) 100vw" />
                    </div>
                    <div className="p-4">
                        <a className="text-base md:text-lg font-bold text-black mb-2" >{title}</a>
                        <p className="text-sm md:text-base text-gray-600 my-1">{description}</p>
                        <p className="text-black opacity-60 text-right text-xs md:text-sm absolute right-3 bottom-1 ">{time}</p>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default InfoCard;
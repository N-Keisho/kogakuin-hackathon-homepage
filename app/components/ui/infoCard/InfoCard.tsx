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
    if (title.includes('@@')) {
        title = title.replace('@@', '');
        isActivated = true;
    }

    if (title.length > 30) title = title.slice(0, 30) + '...';
    if (description.length > 55) description = description.slice(0, 55) + '...';

    if (thumbnaile === "") thumbnaile = "/img/other/noimage.png";

    const _time = time.slice(0, 10);

    return (
        <div className='w-full'>
            <Link href={`/${category}/article/${id}`} legacyBehavior>
                <div className="flex flex-row w-full md:h-36 my-2 relative bg-white border border-gray-300 hover:animate-pulse">
                    <div className="flex-shrink-0 w-1/3 h-auto relative">
                        <Image src={thumbnaile} alt="Image" fill style={{ objectFit: 'cover' }} className="object-fit" sizes="(max-width: 1000px) 100vw" />
                    </div>
                    <div className="p-4 relative">
                        <p className="text-black text-xs opacity-60">{_time}</p>
                        <h4 className="text-black my-1" >{title}</h4>
                        <p className='m-0'>{description}</p>
                    </div>
                    <StatusBadge isActivated={isActivated} category={category} />
                </div>
            </Link>
        </div>
    );
};

export default InfoCard;


// 開催中か終了かを示すバッジ
const StatusBadge: React.FC<{ isActivated: boolean, category: string, className?: string }> = ({ isActivated, category, className }) => {

    return (
        <div
            className={`${category == "event" ? "" : "hidden"} 
                        ${isActivated ? "bg-secondary-400" : "bg-white"}
                        text-black text-xs md:text-sm text-center font-bold absolute -top-2 -right-2 p-1 rounded-sm w-12 md:w-16 border border-black
                    `}
        >
            {isActivated ? "募集中" : "終了"}
        </div>
    );
};
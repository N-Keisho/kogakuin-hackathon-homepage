import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MiniInfoCard: React.FC<{ id: number, title: string, thumbnaile: string, time: string }> = ({ id, title, thumbnaile, time }) => {


    if (thumbnaile === "") thumbnaile = "/img/other/noimage.png";

    let category = "event";

    // titleの識別子の削除
    if (title.includes('!!!')) title = title.replace('!!!', '');
    if (title.includes('???')) {
        title = title.replace('???', '');
        category = "news";
    }

    // titleに@@が含まれている場合@を削除する（開催中のイベント）
    if (title.includes('@@')) {
        title = title.replace('@@', '');
    }

    if (title.length > 9) title = title.slice(0, 9) + '...';

    return (
        <>
            <Link href={`/${category}/article/${id}`} className='' legacyBehavior>
                <div className='w-40 md:w-48 hover:animate-pulse'>
                    <Image src={thumbnaile} alt="Image" sizes="(max-width: 1000px) 100vw" className="w-full" width={300} height={300} />
                    <div className='w-full'>
                        <a className="text-base md:text-lg font-bold text-black text-right mb-2" >{title}</a>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default MiniInfoCard;
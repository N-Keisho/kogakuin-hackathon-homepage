import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MiniInfoCard: React.FC<{ id: number, title: string, thumbnaile: string, created_at:string, }> = ({ id, title, thumbnaile, created_at }) => {


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

    if (title.length > 11) title = title.slice(0, 11) + '...';

    const date = created_at.slice(0, 10);

    return (
        <>
            <Link href={`/${category}/article/${id}`} legacyBehavior>
                <div className='w-40 md:w-48 hover:animate-pulse'>
                    <Image src={thumbnaile} alt="Image" sizes="(max-width: 1000px) 100vw" className="w-full" width={300} height={300} />
                    <div className='w-full'>
                        <p className='text-sm text-left text-slate-500'>{date}</p>
                        <p className="text-black border-none text-left" >{title}</p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default MiniInfoCard;
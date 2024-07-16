import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TopInfoCard: React.FC<{ id: number, thumbnaile: string }> = ({ id, thumbnaile }) => {

    if (thumbnaile === "") thumbnaile = "/img/other/noimage.png";
    return (
        <>
            <Link href={`/event/article/${id}`}>
                <Image src={thumbnaile} alt="Image" sizes="(max-width: 900px) 90vw" className="w-full hover:animate-pulse" width={600} height={600} />
            </Link>
        </>
    )
}

export default TopInfoCard;
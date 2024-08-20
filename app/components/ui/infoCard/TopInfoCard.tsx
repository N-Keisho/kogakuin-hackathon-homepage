import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArticleHead } from "@/types/index";

const TopInfoCard: React.FC<{ article: ArticleHead }> = ({ article }) => {
  let thumbnail = article.thumbnail;
  if (!thumbnail || thumbnail === "") thumbnail = "/img/other/noimage.png";
  return (
    <>
      <Link href={`/event/article/${article.id}`}>
        <Image
          src={thumbnail}
          alt="Image"
          sizes="(max-width: 900px) 90vw"
          className="w-full hover:animate-pulse"
          width={600}
          height={600}
        />
      </Link>
    </>
  );
};

export default TopInfoCard;

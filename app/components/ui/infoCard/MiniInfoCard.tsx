import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArticleHead } from "@/types/index";
import EditIcon from "@mui/icons-material/Edit";

const MiniInfoCard: React.FC<{
  article: ArticleHead;
}> = ({ article }) => {
  let title = article.title;
  let thumbnaile = article.thumbnail;
  const created_at = article.created_at.slice(0, 10);

  if (title.length > 9) title = title.slice(0, 9) + "...";
  if (!thumbnaile || thumbnaile === "") thumbnaile = "/img/other/noimage.png";

  let category = "event";
  if (article.tags?.some((tag) => tag.name === "ニュース")) {
    category = "news";
  }

  return (
    <div className="flex flex-col items-center">
      <Link href={`/${category}/article/${article.id}`} legacyBehavior>
        <div className="w-48 hover:animate-pulse">
          <Image
            src={thumbnaile}
            alt="Image"
            sizes="(max-width: 1000px) 100vw"
            className="w-full"
            width={300}
            height={300}
          />
          <div className="flex items-center">
            <EditIcon className="text-slate-500 text-sm mr-1" />
            <p className="text-sm text-left text-slate-500">{created_at}</p>
          </div>
          <p className="text-black border-none text-left">{title}</p>
        </div>
      </Link>
    </div>
  );
};

export default MiniInfoCard;

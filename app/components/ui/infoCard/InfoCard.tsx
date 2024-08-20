import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArticleHead } from "@/types/index";
import EditIcon from "@mui/icons-material/Edit";
import UpdateIcon from "@mui/icons-material/Update";

interface InfoCardProps {
  category: string;
  article: ArticleHead;
}

const InfoCard: React.FC<InfoCardProps> = ({ category, article }) => {
  const isActivated =
    article.tags?.some((tag) => tag.name === "開催中") || false;
  let title = article.title;
  let description = article.description || "";
  let thumbnail = article.thumbnail;

  if (title.length > 30) title = title.slice(0, 30) + "...";
  if (description.length > 55) description = description.slice(0, 55) + "...";

  if (!thumbnail || thumbnail === "") thumbnail = "/img/other/noimage.png";

  const created_at = article.created_at.slice(0, 10);
  const updated_at = article.updated_at?.slice(0, 10) || null;

  return (
    <div className="w-full">
      <Link href={`/${category}/article/${article.id}`} legacyBehavior>
        <div className="flex flex-row w-full md:h-36 my-2 relative bg-white border border-gray-300 hover:animate-pulse">
          <div className="flex-shrink-0 w-1/3 h-auto relative">
            <Image
              src={thumbnail}
              alt="Image"
              fill
              style={{ objectFit: "cover" }}
              className="object-fit"
              sizes="(max-width: 1000px) 100vw"
            />
          </div>
          <div className="p-4 relative">
            <div className="flex items-center">
              <EditIcon className="text-black text-xs opacity-60 mr-1" />
              <p className="text-black text-xs opacity-60 mr-2">{created_at}</p>
              {updated_at && (
                <>
                  <UpdateIcon className="text-black text-xs opacity-60 mr-1" />
                  <p className="text-black text-xs opacity-60">{updated_at}</p>
                </>
              )}
            </div>
            <h4 className="text-black my-1">{title}</h4>
            <p className="m-0">{description}</p>
          </div>
          <StatusBadge isActivated={isActivated} category={category} />
        </div>
      </Link>
    </div>
  );
};

export default InfoCard;

// 開催中か終了かを示すバッジ
const StatusBadge: React.FC<{
  isActivated: boolean;
  category: string;
  className?: string;
}> = ({ isActivated, category, className }) => {
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

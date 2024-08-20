import React from "react";
import Image from "next/image";
import Link from "next/link";

const MiniInfoCard: React.FC<{
  id: number;
  title: string;
  thumbnaile: string | undefined;
  created_at: string;
}> = ({ id, title, thumbnaile, created_at }) => {
  if (!thumbnaile || thumbnaile === "") thumbnaile = "/img/other/noimage.png";

  let category = "event";

  // titleの識別子の削除
  if (title.includes("!!!")) title = title.replace("!!!", "");
  if (title.includes("???")) {
    title = title.replace("???", "");
    category = "news";
  }

  // titleに@@が含まれている場合@を削除する（開催中のイベント）
  if (title.includes("@@")) {
    title = title.replace("@@", "");
  }

  if (title.length > 9) title = title.slice(0, 9) + "...";

  const date = created_at.slice(0, 10);

  return (
    <div className="flex flex-col items-center">
      <Link href={`/${category}/article/${id}`} legacyBehavior>
        <div className="w-48 hover:animate-pulse">
          <Image
            src={thumbnaile}
            alt="Image"
            sizes="(max-width: 1000px) 100vw"
            className="w-full"
            width={300}
            height={300}
          />
          <p className="text-sm text-left text-slate-500">{date}</p>
          <p className="text-black border-none text-left">{title}</p>
        </div>
      </Link>
    </div>
  );
};

export default MiniInfoCard;

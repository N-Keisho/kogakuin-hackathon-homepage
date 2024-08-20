import Image from "next/image";
import CustomReactMarkdown from "./CustomReactMarkdown";
import Index from "./Index";
import { Article } from "@/types/index";
import BreadcrumbsList from "../BreadcrumbsList/BreadcrumbsList";

const ArticlePage: React.FC<{
  Article: Article;
  Badge?: boolean;
  isActivated?: boolean;
}> = ({ Article, Badge = false, isActivated = false }) => {
  let title = Article.title;

  const _date = Article.created_at.slice(0, 10);

  return (
    <>
      <div className="flex flex-col mt-5 mb-10 flex flex-col items-center">
        <div className="w-11/12 max-w-2xl">
          <BreadcrumbsList title={title} />
          <div className="w-full">
            {Badge && (
              <StatusBadge isActivated={isActivated} category="event" />
            )}
            <Image
              src={Article.thumbnail || "/img/other/noimage.png"}
              alt="Thumbnail"
              className="object-fit w-full"
              width={600}
              height={600}
            />
          </div>
          <div className="w-full mb-0">
            <p className="text-black text-left text-xs md:text-sm mb-0 mt-1">
              {_date}
            </p>
          </div>
          <h1>{title}</h1>
          <div>
            <Index content={Article.body} />
          </div>
          <div>
            <CustomReactMarkdown content={Article.body} />
          </div>
        </div>
      </div>
    </>
  );
};
export default ArticlePage;

// 開催中か終了かを示すバッジ
const StatusBadge: React.FC<{ isActivated: boolean; category: string }> = ({
  isActivated,
  category,
}) => {
  return (
    <div
      className={`${category == "event" ? "" : "hidden"} 
                        ${isActivated ? "bg-secondary-400" : "bg-white"}
                        text-center font-bold relative top-6 right-2 p-1 rounded-sm w-20 border-black border
                        `}
    >
      {isActivated ? "募集中" : "終了"}
    </div>
  );
};

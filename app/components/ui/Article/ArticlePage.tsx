import Image from 'next/image';
import CustomReactMarkdown from './CustomReactMarkdown';
import { Article } from '@/types/article';

const ArticlePage: React.FC<{ Article: Article, Badge?: boolean, isActivated?: boolean }> = ({ Article, Badge = false, isActivated = false }) => {

    let title = Article.title;

    // titleの識別子の削除
    if (Article.title.includes('!!!')) title = title.replace('!!!', '');
    if (Article.title.includes('???')) title = title.replace('???', '');
    if (Article.title.includes('@@')) title = title.replace('@@', '');

    const _time = Article.created_at.slice(0, 10);
    // console.log(Article.thumbnail);

    return (
        <>
            <div className="flex flex-col justify-center items-center py-4 md:p-14">
                <div className='bg-white w-11/12 max-w-4xl flex flex-col justify-center items-center px-4 pt-4 pb-2 md:pb-4 md:pt-12 rounded-lg'>
                    <div className='w-full max-w-3xl'>
                        {Badge && <StatusBadge isActivated={isActivated} category="event" />}
                        <Image src={Article.thumbnail} alt="Thumbnail" className="object-fit w-full" width={600} height={600} />
                    </div>
                    <div className='w-full max-w-3xl mb-0'>
                        <p className="text-black opacity-60 text-right text-xs md:text-sm mb-0 mt-1">🕒{_time}</p>
                    </div>
                    <div className='bg-secondary-400 mt-5 mb-3 py-1 md:py-2 px-3 md:px-4 w-full max-w-3xl'>
                        <a className='text-black text-2xl md:text-3xl font-bold'>{title}</a>
                    </div>
                    <div className='max-w-3xl'>
                        <CustomReactMarkdown content={Article.body} />
                    </div>
                </div>
            </div>
        </>
    );
}
export default ArticlePage;


// 開催中か終了かを示すバッジ
const StatusBadge: React.FC<{ isActivated: boolean, category: string }> = ({ isActivated, category }) => {

    return (
        <div
            className={`${category == "event" ? "" : "hidden"} 
                        ${isActivated ? "bg-secondary-400" : "bg-white"}
                        text-primary-700 text-base md:text-lg text-center font-bold relative top-6 right-2 p-1 rounded-sm w-16 md:w-24 border border-primary-700
                        `}
        >
            {isActivated ? "開催中" : "終了"}
        </div>
    );
};
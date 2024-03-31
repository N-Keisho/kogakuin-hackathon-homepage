import Image from 'next/image';
import CustomReactMarkdown from '../components/CustomReactMarkdown';
import { Article } from '@/types/database';

const EventNewsPage: React.FC<{Data: Article, Badge?:boolean,isActivated?:boolean}> = ({Data, Badge=false,isActivated=false}) => {
    
    let title = Data.Title;

    // titleの識別子の削除
    if (Data.Title.includes('!!!')) title = title.replace('!!!', '');
    if (Data.Title.includes('???')) title = title.replace('???', '');
    if (Data.Title.includes('@@'))  title = title.replace('@@', '');

    return (
        <>
            <div className="flex flex-col justify-center items-center p-8 md:p-14">
                <div className='w-11/12 max-w-2xl'>
                    {Badge && <StatusBadge isActivated={isActivated} category="event" />}
                    <Image src={Data.Thumbnail} alt="Thumbnail" className="object-fit w-full" width={600} height={600} />
                </div>
                <div className='bg-secondary-400 mt-5 py-1 md:py-2 px-3 md:px-4 w-11/12 max-w-2xl'>
                    <a className='text-black text-3xl md:text-4xl font-bold'>{title}</a>
                </div>
                <div className='w-11/12 max-w-2xl'>
                    <CustomReactMarkdown content={Data.Body} />
                </div>
            </div>
        </>
    );
}
export default EventNewsPage;


// 開催中か終了かを示すバッジ
const StatusBadge: React.FC<{ isActivated: boolean, category: string}> = ({ isActivated, category }) => {

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
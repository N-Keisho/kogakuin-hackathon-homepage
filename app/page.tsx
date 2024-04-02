import Image from "next/image";
import SimpleButton from "./components/CustomButton";
import { MiniInfoCard } from "./components/InfoCard";
import DemoData from "./components/DemoData";
import Link from "next/link";

export default function Home() {


  const CurrentEvent = DemoData.filter((data) => data.title.includes('!!!'))[0];
  const NewsData = DemoData.filter((data) => data.title.includes('???'));




  return (
    <>
      <CuttentEvent id={CurrentEvent.id} thumbnaile={CurrentEvent.thumbnail} />
      <Explanation />
      {/* <div className="py-2"></div> */}

      <div className="my-32 md:m-24 flex justify-center items-center">
        <div className={`absolute bg-primary-200 w-full opacity-50 ${NewsData.length > 3 ? 'py-72' : 'py-44'}`} style={{ clipPath: "polygon(0% 100%, 0% 15%, 100% 0%, 100% 85%)" }}></div>
        <div className="text-center relative -top-3">
          <h1 className="text-primary-700 text-2xl md:text-4xl font-bold underline m-2 decoration-1 underline-offset-8">
            最新情報
          </h1>
          <p className="text-sm md:text-lg mt-2 mb-3">最新情報はこちら！</p>
          <div className="w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full justify-center items-center">
              {
                NewsData.map((data, index) => {
                  if (index > 5) return;
                  const titile = data.title.replace('???', '');
                  return (
                    <MiniInfoCard key={index} category="news" id={data.id} title={titile} thumbnaile={data.thumbnail} time={data.created_at} />
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
      <div className="py-4">

      </div>
    </>
  );
}


const CuttentEvent: React.FC<{ id: number, thumbnaile: string }> = ({ id, thumbnaile }) => {
  return (
    <div className="bg-secondary-400 p-8 md:p-14 text-center flex justify-center items-center">
      <div className="animate-shake-vertical">
        <Link href={`event?id=${id}`} legacyBehavior>
          <div className='hover:animate-pulse'>
            <Image src={thumbnaile} alt="Image" sizes="(max-width: 1000px) 100vw" className="w-full" width={600} height={600} />
          </div>
        </Link>
      </div>
    </div>
  )
}


const Explanation: React.FC = () => {
  return (
    <div className="text-primary-700 text-center m-10">
      <div className="my-10">
        <h1 className="text-2xl md:text-4xl font-bold underline my-4 decoration-1 underline-offset-8">
          工学院ハッカソンとは？
        </h1>
        <p className="text-sm md:text-lg m-4">工学院ハッカソンとは</p>
        <p className="text-sm md:text-lg m-4">工学院大学の学生を対象とした</p>
        <p className="text-sm md:text-lg m-4">ものづくりイベントです．</p>
        <p className="text-base md:text-xl font-bold m-2">ワクワクを生み出すのだ！</p>
      </div>
      <div className="my-10">
        <h1 className="text-2xl md:text-4xl font-bold underline m-2 decoration-1 underline-offset-8">
          ハッカソンってなに？
        </h1>
        <p className="text-sm md:text-lg m-4"><span className="font-bold">ハッカソン</span>とは</p>
        <p className="text-sm md:text-lg m-4"><span className="font-bold">「ハック」</span>と<span className="font-bold">「マラソン」</span></p>
        <p className="text-sm md:text-lg m-4">を組み合わせた言葉</p>

        <p className="text-sm md:text-lg m-4 mt-8">短期間でプロジェクトを企画・開発し，</p>
        <p className="text-sm md:text-lg m-4">成果を競い合うイベントです．</p>
      </div>

      <SimpleButton url="whats-hackathon" text="もっと詳しく！" />
    </div>

  )
}
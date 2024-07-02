import Image from "next/image";
import SimpleButton from "./components/ui/button/SimpleButton";
import  MiniInfoCard  from "./components/ui/infoCard/MiniInfoCard";
import  TopInfoCard  from "./components/ui/infoCard/TopInfoCard";
import { getArticles } from "@/libs/article";
import { ArticleHead } from "@/types/article";
import Loading from "./components/ui/Loading/Loading";

export default async function Home() {
  
  const Data = await getArticles();

  if (Data?.length === 0) {
    return (
      <Loading />
    )
  }

  const CurrentEvent = Data?.filter((data) => data.title.includes('!!!')).filter((data) => data.title.includes('@@'))[0];
  const NewsData = Data ? Data?.map((_, i, a) => a[a.length - i - 1]) : null;

  return (
    <>
      <h1>見出しです</h1>
      <h2>見出しです</h2>
      <h3>見出しです</h3>
      <p>見出しです見出しです見出しです見出しです見出しです見出しです</p>
      <CuttentEvent id={CurrentEvent?.id} thumbnaile={CurrentEvent?.thumbnail} />
      <Explanation />
      <News NewsData={NewsData} />
      <Contact />      
    </>
  );
}


const CuttentEvent: React.FC<{ id: number | undefined, thumbnaile: string | undefined }> = ({ id, thumbnaile }) => {
  if (!id || !thumbnaile) return <></>;
  return (
    <div className="bg-secondary-400 p-8 md:p-14 text-center flex justify-center items-center">
      <div className="animate-shake-vertical">
        <TopInfoCard id={id} thumbnaile={thumbnaile} />
      </div>
      
    </div>
  )
}


const Explanation: React.FC = () => {
  return (
    <div className="text-primary-700 text-center flex flex-col items-center mt-4 md:mt-10 mb-10">
      <div className="my-4 md:my-5">
        <h1 className="text-2xl md:text-4xl font-bold underline my-4 decoration-1 underline-offset-8">
          工学院ハッカソンとは？
        </h1>
        <p className="text-lg md:text-xl m-4">工学院ハッカソンとは</p>
        <p className="text-lg md:text-xl m-4">工学院大学の学生を対象とした</p>
        <p className="text-lg md:text-xlg m-4">ものづくりイベントです．</p>
        <p className="text-lg md:text-2xl font-bold m-2">ワクワクを生み出すのだ！</p>
      </div>
      <div className="my-4 md:my-5">
        <h1 className="text-2xl md:text-4xl font-bold underline m-2 decoration-1 underline-offset-8">
          ハッカソンってなに？
        </h1>
        <p className="text-lg md:text-xl m-4"><span className="font-bold">ハッカソン</span>とは</p>
        <p className="text-lg md:text-xl m-4"><span className="font-bold">「ハック」</span>と<span className="font-bold">「マラソン」</span></p>
        <p className="text-lg md:text-xl m-4">を組み合わせた言葉</p>

        <p className="text-lg md:text-xl m-4 mt-8">短期間でプロジェクトを企画・開発し，</p>
        <p className="text-lg md:text-xl m-4">成果を競い合うイベントです．</p>
      </div>

      <SimpleButton url="whats-hackathon" text="もっと詳しく！" />
    </div>

  )
}

const News: React.FC<{ NewsData: ArticleHead[] | null }> = ({ NewsData }) => {

  if (!NewsData) return <></>;

  return (
    <>
      <div className="mt-24 mb-10 md:m-24 flex justify-center items-center">
        <div className={`absolute bg-primary-100 w-full opacity-50 ${NewsData.length > 3 ? 'py-72' : 'py-44'}`} style={{ clipPath: "polygon(0% 100%, 0% 15%, 100% 0%, 100% 85%)" }}></div>
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
                  return (
                    <MiniInfoCard key={index} id={data.id} title={data.title} thumbnaile={data.thumbnail} time={data.created_at} />
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const Contact = () => {
  return (
    <div className="flex flex-col items-center">
        <div className="bg-secondary-400 w-11/12 max-w-lg m-10 md:m-10  p-4 md:p-8 rounded-lg">
          <div className="text-primary-700 text-center flex flex-col items-center">
            <h1 className="text-2xl md:text-4xl font-bold underline m-2 decoration-1 underline-offset-8">
              お問い合わせ
            </h1>
            {/* <p className="text-lg md:text-3xl mt-4">hackathon.kogakuin@gmail.com</p> */}
            <Image src="/img/mail/mail_b.svg" alt="hackathon.kogcoder at gmail.com" className="mt-2" width={280} height={200} />
          </div>
        </div>
      </div>
  )
}
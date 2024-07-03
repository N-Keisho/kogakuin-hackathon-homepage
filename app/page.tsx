import Image from "next/image";
import SimpleButton from "./components/ui/button/SimpleButton";
import MiniInfoCard from "./components/ui/infoCard/MiniInfoCard";
import TopInfoCard from "./components/ui/infoCard/TopInfoCard";
import { getArticles } from "@/libs/article";
import { ArticleHead } from "@/types/article";
import Loading from "./components/ui/Loading/Loading";

export default async function Home() {
  const Data = await getArticles();

  if (Data?.length === 0) {
    return <Loading />;
  }

  const CurrentEvent = Data?.filter((data) =>
    data.title.includes("!!!")
  ).filter((data) => data.title.includes("@@"))[0];
  const NewsData = Data ? Data?.map((_, i, a) => a[a.length - i - 1]) : null;

  return (
    <>
      <CuttentEvent
        id={CurrentEvent?.id}
        thumbnaile={CurrentEvent?.thumbnail}
      />
      <Logo />
      <Explanation />
      <News NewsData={NewsData} />
      <Contact />
    </>
  );
}

const CuttentEvent: React.FC<{
  id: number | undefined;
  thumbnaile: string | undefined;
}> = ({ id, thumbnaile }) => {
  if (!id || !thumbnaile) return <></>;
  return (
    <div className="bg-secondary-400 p-8 md:p-14 text-center flex justify-center items-center">
      <div className="animate-shake-vertical">
        <TopInfoCard id={id} thumbnaile={thumbnaile} />
      </div>
    </div>
  );
};

const Logo: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-5">
      <div className="w-11/12 max-w-2xl flex flex-col justify-center items-center">
        <h1 className="bg-transparent">レッツ ものづくりチャレンジ！</h1>
        <Image
          src="/img/logo/logo_black.svg"
          alt="工学院ハッカソン"
          width={300}
          height={300}
          sizes="(max-width: 900px) 90vw"
          className="w-full"
        />
      </div>
    </div>
  );
};

const Explanation: React.FC = () => {
  return (
    <div className="flex flex-col mt-4 md:mt-10 mb-10 flex flex-col items-center">
      <div className="w-11/12 max-w-2xl">
        <h1>初心者のためのハッカソンです！</h1>
        <div>
          <h2>ハッカソンってなに？</h2>
          <p>
            ハッカソンとは，テーマに沿ったアイディアを考えて，作って発表する大会です．
          </p>
          <p>あなたのアイディアを形にしてみよう！</p>
        </div>
        <div>
          <h2>工学院ハッカソンって？</h2>
          <p>工学院ハッカソンは，工学院大学の学生のためのハッカソンです！</p>
          <p>
            ハッカソンの魅力や，モノづくりの面白さを伝えるために企画された新しいイベントで，ハッカソン初心者の方をターゲットにしています．初心者大歓迎！
          </p>
        </div>
        <div>
          <h2>スキルや技術力は必要ですか？</h2>
          <p>
            必要ありません！プログラムに触れたことがなくても，技術力がなくても大丈夫！
          </p>
          <p>
            本イベントでは，
            <a
              href="https://www.figma.com/ja-jp/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Figma
            </a>
            というツールを使った試作品の作成を目指します．
          </p>
          <p>
            使い方講習や資料も用意しているので，初めて使う方も安心してご参加いただけます．
          </p>
        </div>
        <div>
          <h2>賞金が出るって本当ですか？</h2>
          <p>
            はい，本当です！工学院ハッカソンは，本学の学生チャレンジ奨励金により予算を獲得しています．
          </p>
          <p>この予算から各大会ごとに賞金を授与します．</p>
          <p>詳しい金額は，各イベントのページをご覧ください．</p>
        </div>
        <div>
          <h2>参加費はかかりますか？</h2>
          <p>参加費はかかりません！無料でご参加いただけます．</p>
        </div>
        <div>
          <h2>もっと詳細に知りたいです！</h2>
          <p>
            ハッカソン・工学院ハッカソンについてもっと知りたい方は，下のボタンから特設ページをご覧ください！
          </p>
        </div>
        <SimpleButton url="about" text="もっと詳しく！" />
      </div>
    </div>
  );
};

const News: React.FC<{ NewsData: ArticleHead[] | null }> = ({ NewsData }) => {
  if (!NewsData) return <></>;

  return (
    <>
      <div className="mt-24 mb-10 md:m-24 flex justify-center items-center">
        <div
          className={`absolute bg-primary-100 w-full opacity-50 ${
            NewsData.length > 3 ? "py-72" : "py-44"
          }`}
          style={{ clipPath: "polygon(0% 100%, 0% 15%, 100% 0%, 100% 85%)" }}
        ></div>
        <div className="text-center relative -top-3">
          <h1 className="text-primary-700 text-2xl md:text-4xl font-bold underline m-2 decoration-1 underline-offset-8">
            最新情報
          </h1>
          <p className="text-sm md:text-lg mt-2 mb-3">最新情報はこちら！</p>
          <div className="w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full justify-center items-center">
              {NewsData.map((data, index) => {
                if (index > 5) return;
                return (
                  <MiniInfoCard
                    key={index}
                    id={data.id}
                    title={data.title}
                    thumbnaile={data.thumbnail}
                    time={data.created_at}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Contact = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-secondary-400 w-11/12 max-w-lg m-10 md:m-10  p-4 md:p-8 rounded-lg">
        <div className="text-primary-700 text-center flex flex-col items-center">
          <h1 className="text-2xl md:text-4xl font-bold underline m-2 decoration-1 underline-offset-8">
            お問い合わせ
          </h1>
          {/* <p className="text-lg md:text-3xl mt-4">hackathon.kogakuin@gmail.com</p> */}
          <Image
            src="/img/mail/mail_b.svg"
            alt="hackathon.kogcoder at gmail.com"
            className="mt-2"
            width={280}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

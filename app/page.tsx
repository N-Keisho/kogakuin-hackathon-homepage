import Image from "next/image";
import SimpleButton from "./components/ui/button/SimpleButton";
import MiniInfoCard from "./components/ui/infoCard/MiniInfoCard";
import TopInfoCard from "./components/ui/infoCard/TopInfoCard";
import { getArticles } from "@/libs/article";
import { ArticleHead } from "@/types/article";
import Loading from "./components/ui/Loading/Loading";
import { getArticleInServer } from "@/libs/articleInServer";

export default async function Home() {
  // const t = await getArticleInServer('2');
  // if (!t) return <Loading />;
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
      <Recommendation />
      <Think />
      <News NewsData={NewsData} />
      {/* <Contact /> */}
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

const Recommendation: React.FC = () => {
  return (
    <div className="flex flex-col mt-4 md:mt-10 mb-10 flex flex-col items-center">
      <div className="w-11/12 max-w-2xl">
        <h1>こんな方にオススメ！</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex flex-col items-center">
            <div className="h-56 w-56 relative">
              <Image
                src="/img/top/engineer_man_color.svg"
                alt="engineer man"
                fill
                sizes="(max-width: 900px) 90vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <p>ハッカソンに興味がある人</p>
            <p>学びを活用してみたい人</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-56 w-56 relative">
              <Image
                src="/img/top/suit_woman_color.svg"
                alt="engineer man"
                fill
                sizes="(max-width: 900px) 90vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <p>就活に向けて頑張りたい人</p>
            <p>新しいことに挑戦したい人</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-56 w-56 relative">
              <Image
                src="/img/top/inpiration_man_color.svg"
                alt="engineer man"
                fill
                sizes="(max-width: 900px) 90vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <p>アイディアを形にしたい人</p>
            <p>ものづくりをしてみたい人</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Think: React.FC = () => {
  return (
    <div className="flex flex-col mt-4 md:mt-10 mb-10 flex flex-col items-center">
      <div className="w-11/12 max-w-2xl">
        <h1>主催者の思い</h1>
        <h2>ハッカソンの魅力を広めたい！</h2>
        <p className="mb-5">
          ハッカソンには様々な魅力があります．技術力や社会人基礎力の向上，モノづくりの楽しさ，未知の技術に出会えるワクワクなど，ハッカソンに参加することで，一度にたくさんの経験を得ることができるのです．
        </p>
        <p className="mb-5">
          しかし一方で，工学院大学内でのハッカソンの知名度は低く，知っていても参加のハードルが高いと感じる人が多いようでした．
        </p>
        <p className="mb-5">
          そこで私たちは，ハッカソンの魅力・モノづくりの楽しさを伝えるために，初心者のための学内向けハッカソンを開催することにしました．
        </p>
        <p>
          参加者の皆様には，ぜひともハッカソンの魅力を知ってもらい，モノづくりを楽しんでいただきたいです！
        </p>
      </div>
    </div>
  );
};

const News: React.FC<{ NewsData: ArticleHead[] | null }> = ({ NewsData }) => {
  if (!NewsData) return <></>;

  return (
    <div className="flex flex-col mt-4 md:mt-10 pt-5 pb-10 flex flex-col items-center bg-primary-400/25 ">
      <div className="w-11/12 max-w-2xl">
        <h1 className="bg-primary-700 text-white">最新情報</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {NewsData.map((data, index) => {
            if (index > 5) return;
            return (
              <MiniInfoCard
                key={index}
                id={data.id}
                title={data.title}
                thumbnaile={data.thumbnail}
                created_at={data.created_at}
              />
            );
          })}
        </div>
      </div>
    </div>
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

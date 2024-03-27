import Image from "next/image";
import CustomButon from "./components/CustomButton";
import { OneBlueLine } from "./components/Decoration";

export default function Home() {
  return (
    <>
      <div className="bg-secondary-400 p-8 md:p-14 text-center flex justify-center items-center">
        <div className="animate-shake-vertical">
          <Image
            src="/img/currentEventDemo.svg"
            alt="Next.js Logo"
            width={600}
            height={600}
          />
        </div>
      </div>

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

        <CustomButon url="whats-hackathon" text="もっと詳しく！" />
      </div>

      <div className="my-10">
        <div className="absolute bg-primary-200 py-52 w-full opacity-50" style={{clipPath: "polygon(0% 100%, 0% 15%, 100% 0%, 100% 85%)"}}></div>
        <div className="text-center relative top-14">
          <h1 className="text-primary-700 text-2xl md:text-4xl font-bold underline m-2 decoration-1 underline-offset-8">
            最新情報
          </h1>
          <p className="text-sm md:text-lg m-4">最新情報はこちら！</p>
        </div>
      </div>

      <div className="py-80">

      </div>
    </>
  );
}

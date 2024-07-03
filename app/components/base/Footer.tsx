import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="flex flex-col md:flex-row mx-auto p-5 justify-center items-center">
        <div className="flex-1 mt-2 mb-4 ml-4">
          <Logos />
        </div>
        <div className="flex-auto mb-4 md:m-0">
          <SiteMap />
        </div>
        <div className="flex flex-1 flex-col justify-center items-center">
          <div>
            <Link href="https://twitter.com/KogHack">
              <XIcon className="mx-2" />
            </Link>
            <Link href="https://www.youtube.com/@KogakuinHackathon/">
              <YouTubeIcon className="mx-2" />
            </Link>
          </div>
          {/* <p className="text-xs pt-2">hackathon.kogakuin@gmail.com</p> */}
          <Image
            src="/img/mail/mail_w.svg"
            alt="hackathon.kogcoder at gmail.com"
            className="pt-2"
            width={200}
            height={100}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const Logos = () => {
  return (
    <>
      <Link href="/" legacyBehavior>
        <Image
          src="/img/logo/logo_white.svg"
          alt="Kogakuin Hackathon"
          width={150}
          height={40}
          className="cursor-pointer hover:opacity-80"
        />
      </Link>
      <p className="mt-2">© 2024 KogCoder. All rights reserved.</p>
    </>
  );
};

const SiteMap = () => {
  return (
    <>
      <h3>サイトマップ</h3>
      <ul className="list-none">
        <li className="mb-1">
          <Link href="/">トップ</Link>
        </li>
        <li className="mb-1">
          <Link href="/about">ハッカソンとは</Link>
        </li>
        <li className="mb-1">
          <Link href="/event/1">イベント</Link>
        </li>
        <li className="mb-1">
          <Link href="/news/1">ニュース</Link>
        </li>
        <li className="mb-1">
          <Link href="/faq">FAQ</Link>
        </li>
      </ul>
    </>
  );
};

const SNS = () => {
    return (
        <>
        </>
    )
};
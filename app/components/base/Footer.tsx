import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="flex flex-col md:flex-row p-5 mx-5 md:mx-10">
        <div className="flex-1 mb-1 md:m0-0">
          <SiteMap />
        </div>
        <div className="flex-1 mb-1 md:mb-0">
          <SNS />
        </div>
        <div className="flex-1 flex flex-col mt-5 md:mt-0">
          <Logos />
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
          width={200}
          height={100}
          className="cursor-pointer hover:opacity-80 mt-3"
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
          <Link href="/" className="border-none text-white">トップ</Link>
        </li>
        <li className="mb-1">
          <Link href="/about" className="border-none text-white">ハッカソンとは</Link>
        </li>
        <li className="mb-1">
          <Link href="/event/1" className="border-none text-white">イベント</Link>
        </li>
        <li className="mb-1">
          <Link href="/news/1" className="border-none text-white">ニュース</Link>
        </li>
        <li className="mb-1">
          <Link href="/faq" className="border-none text-white">FAQ</Link>
        </li>
      </ul>
    </>
  );
};

const SNS = () => {
  return (
    <>
      <h3>SNS・お問い合わせ</h3>
      <ul className="list-none">
        <li className="mb-1">
          <Link
            href="https://twitter.com/KogHack"
            className="flex border-none text-white"
            rel="noopener noreferrer"
            target="_blank"
          >
            <XIcon className="mr-3" />
            <p>X (旧Twitter)</p>
          </Link>
        </li>
        <li className="mb-1">
          <Link
            href="https://www.youtube.com/@KogakuinHackathon/"
            className="flex border-none text-white"
            rel="noopener noreferrer"
            target="_blank"
          >
            <YouTubeIcon className="mr-3" />
            <p>YouTube</p>
          </Link>
        </li>
        <li className="mb-1">
          <div className="flex">
            <EmailIcon className="mr-3" />
            <Image
              src="/img/mail/mail_w.svg"
              alt="hackathon.kogcoder at gmail.com"
              width={200}
              height={100}
            />
          </div>
        </li>
      </ul>
    </>
  );
};

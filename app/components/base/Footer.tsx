import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-black text-white text-sm">
            <div className="flex flex-col md:flex-row mx-auto p-5 justify-center items-center">
                <div className="flex-1 mt-2 mb-4 ml-4">
                    <Link href="/" legacyBehavior>
                        <Image src="/img/logo/logo.svg" alt="Kogakuin Hackathon" width={150} height={40} />
                    </Link>
                </div>
                <div className="text-center flex-auto text-xs mb-4 md:m-0">
                    <p>工学院ハッカソンは工学院大学の学生チャレンジ奨励金を活用し，</p>
                    <p>IT系サークル KogCoder が主催するイベントです．</p>
                    <p className='mt-2'>© 2024 KogCoder. All rights reserved.</p>
                </div>
                <div className="flex flex-1 flex-col text-center justify-center items-center">
                    <div>
                        <Link href="https://twitter.com/KogHack">
                            <XIcon className="mx-2" />
                        </Link>
                        <Link href="https://www.youtube.com/@KogakuinHackathon/">
                            <YouTubeIcon className="mx-2" />
                        </Link>
                    </div>
                    {/* <p className="text-xs pt-2">hackathon.kogakuin@gmail.com</p> */}
                    <Image src="/img/mail/mail_w.svg" alt="hackathon.kogcoder at gmail.com" className='pt-2' width={200} height={100} />
                </div>
            </div>
        </footer>
    );
}

export default Footer;

import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-black text-white text-sm">
            <div className="flex flex-col md:flex-row mx-auto p-3 sm:p-5 lg:p-7 justify-center items-center">
                <div className="flex-1 mt-2 mb-4 ml-4">
                    <Link href="/" legacyBehavior>
                        <Image src="/logo.svg" alt="Kogakuin Hackathon" width={100} height={40} />
                    </Link>
                </div>
                <div className="text-center flex-auto text-xs mb-4 md:m-0">
                    <p>工学院ハッカソンは工学院大学の学生チャレンジ奨励金を活用し，</p>
                    <p>IT系サークル KogCoder が主催するイベントです．</p>
                    <p className='mt-2'>© 2024 KogCoder. All rights reserved.</p>
                </div>
                <div className="flex flex-1 flex-col text-center justify-center">
                    <div>
                        <Link href="https://twitter.com/">
                            <XIcon className="mx-2" />
                        </Link>
                        <Link href="https://www.youtube.com/">
                            <YouTubeIcon className="mx-2" />
                        </Link>
                    </div>
                    <p className="text-xs pt-2">hackathon.kogakuin@gmail.com</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
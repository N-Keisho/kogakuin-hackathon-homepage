'use client'

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from 'next/image'
import { usePathname } from "next/navigation";
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from "@mui/material";
import ThreeYellowLines from "../ui/decoration/ThreeYellowLines";

const whats_hackathon = "/whats-hackathon";
const event = "/event/1";
const news = "/news/1";
const faq = "/faq";

// ヘッダー
const Header: React.FC = () => {

    const pathName = usePathname(); // パス名を取得

    const [open, setOpen] = useState(false)
    const toggleHamburger = () => setOpen(!open)

    useEffect(() => {
        // パスが変わったらハンバーガーメニューを閉じる
        setOpen(false)
    }, [pathName])

    return (
        <header className="bg-white text-primary-700 p-5 w-full">
                <nav className="flex items-center justify-between w-full">
                    <Link href="/" legacyBehavior>
                        <Image src="/img/logo/logo_black.svg" alt="Kogakuin Hackathon" width={150} height={100}/>
                    </Link>
                    {/* 以下はスマホだと隠れる */}
                    <NavBar pathName={pathName} />
                    {/* ハンバーガーメニュー スマホだと表示される*/}
                    {/* <HumbargerMenu open={open} toggleHamburger={toggleHamburger} /> */}
                    {/* サイドバー スマホだと表示される*/}
                    {/* <SideBar pathName={pathName} open={open} toggleHamburger={toggleHamburger} /> */}
                </nav>
        </header>
    );
};

export default Header


// ハンバーガーメニュー（スマホ）
const HumbargerMenu: React.FC<{ open: boolean, toggleHamburger: (event: any) => void }> = ({ open, toggleHamburger }) => {
    return (
        <div className="block md:hidden">
            <button onClick={toggleHamburger} className="">
                <MenuIcon className="text-secondary-400" fontSize="large" />
            </button>
        </div>
    )
}


// サイドバー(スマホ)
const SideBar: React.FC<{ pathName: string, open: boolean, toggleHamburger: (event: any) => void }> = ({ pathName, open, toggleHamburger }) => {
    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={toggleHamburger}
        >
            <div className="bg-secondary-400 h-full text-primary-700">
                <div className="bg-primary-700 w-full p-3">
                    <Link href="/" legacyBehavior>
                        <Image src="/img/logo/logo.svg" alt="Kogakuin Hackathon" width={150} height={40} className="m-auto" />
                    </Link>
                </div>
                <ul className="flex flex-col space-y-3 p-3">
                    <li>
                        <Link href={whats_hackathon} legacyBehavior>
                            <a className={`hover:text-primary-500 underline-offset-4 font-bold ${pathName === whats_hackathon ? "underline" : ""}`}>What's Hachathon</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={event} legacyBehavior>
                            <a className={`hover:text-primary-500 underline-offset-4 font-bold ${pathName.includes("event") ? "underline" : ""}`}>Events</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={news} legacyBehavior>
                            <a className={`hover:text-primary-500 underline-offset-4 font-bold ${pathName.includes("news") ? "underline" : ""}`}>News</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={faq} legacyBehavior>
                            <a className={`hover:text-primary-500 underline-offset-4 font-bold ${pathName === faq ? "underline" : ""}`}>FAQ</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </Drawer>
    )
}


// ナビゲーションバー(デスクトップ)
const NavBar: React.FC<{ pathName: string }> = ({ pathName }) => {
    return (
        <div className={`hidden md:flex `}>
            <ul className="flex space-x-3">
                <li>
                    <Link href={whats_hackathon} legacyBehavior>
                        <a className={`hover:text-secondary-200 underline-offset-4 font-bold ${pathName === whats_hackathon ? "underline" : ""}`}>ハッカソンってなに？</a>
                    </Link>
                </li>
                <li className="opacity-75">
                    |
                </li>
                <li>
                    <Link href={event} legacyBehavior>
                        <a className={`hover:text-secondary-200 underline-offset-4 font-bold ${pathName.includes("event") ? "underline" : ""}`}>イベント</a>
                    </Link>
                </li>
                <li className="opacity-75">
                    |
                </li>
                <li>
                    <Link href={news} legacyBehavior>
                        <a className={`hover:text-secondary-200 underline-offset-4 font-bold ${pathName.includes("news") ? "underline" : ""}`}>ニュース</a>
                    </Link>
                </li>
                <li className="opacity-75">
                    |
                </li>
                <li>
                    <Link href={faq} legacyBehavior>
                        <a className={`hover:text-secondary-200 underline-offset-4 font-bold ${pathName === faq ? "underline" : ""}`}>FAQ</a>
                    </Link>
                </li>
            </ul>
        </div>
    )

}



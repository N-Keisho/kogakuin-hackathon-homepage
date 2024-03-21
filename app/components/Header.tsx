'use client'

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from 'next/image'
import { usePathname } from "next/navigation";
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from "@mui/material";
import ThreeYellowLines from "./Decoration";

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
        <header className="bg-primary-700 text-secondary-400 p-3 sm:p-5 lg:p-7">
            <ThreeYellowLines />
            <div className="container mx-auto">
                <nav className="flex items-center justify-between">
                    <Link href="/" legacyBehavior>
                        <Image src="/logo.svg" alt="Kogakuin Hackathon" width={100} height={40} />
                    </Link>

                    {/* 以下はスマホだと隠れる */}
                    <NavBar pathName={pathName} />

                    {/* ハンバーガーメニュー スマホだと表示される*/}
                    <HumbargerMenu open={open} toggleHamburger={toggleHamburger} />

                    {/* サイドバー スマホだと表示される*/}
                    <SideBar pathName={pathName} open={open} toggleHamburger={toggleHamburger} />

                </nav>
            </div>
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
                        <Image src="/logo.svg" alt="Kogakuin Hackathon" width={100} height={40} className="m-auto" />
                    </Link>
                </div>
                <ul className="flex flex-col space-y-3 p-3">
                    <li>
                        <Link href="/whats-hackathon" legacyBehavior>
                            <a className={`hover:text-primary-500 underline-offset-4 font-bold ${pathName === '/whats-hackathon' ? "underline" : ""}`}>What's Hachathon</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/events" legacyBehavior>
                            <a className={`hover:text-primary-500 underline-offset-4 font-bold ${pathName === '/events' ? "underline" : ""}`}>Events</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/news" legacyBehavior>
                            <a className={`hover:text-primary-500 underline-offset-4 font-bold ${pathName === '/news' ? "underline" : ""}`}>News</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/faq" legacyBehavior>
                            <a className={`hover:text-primary-500 underline-offset-4 font-bold ${pathName === '/faq' ? "underline" : ""}`}>FAQ</a>
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
                    <Link href="/whats-hackathon" legacyBehavior>
                        <a className={`hover:text-secondary-200 underline-offset-4 font-bold ${pathName === '/whats-hackathon' ? "underline" : ""}`}>What's Hachathon</a>
                    </Link>
                </li>
                <li className="opacity-75">
                    |
                </li>
                <li>
                    <Link href="/events" legacyBehavior>
                        <a className={`hover:text-secondary-200 underline-offset-4 font-bold ${pathName === '/events' ? "underline" : ""}`}>Events</a>
                    </Link>
                </li>
                <li className="opacity-75">
                    |
                </li>
                <li>
                    <Link href="/news" legacyBehavior>
                        <a className={`hover:text-secondary-200 underline-offset-4 font-bold ${pathName === '/news' ? "underline" : ""}`}>News</a>
                    </Link>
                </li>
                <li className="opacity-75">
                    |
                </li>
                <li>
                    <Link href="/faq" legacyBehavior>
                        <a className={`hover:text-secondary-200 underline-offset-4 font-bold ${pathName === '/faq' ? "underline" : ""}`}>FAQ</a>
                    </Link>
                </li>
            </ul>
        </div>
    )

}



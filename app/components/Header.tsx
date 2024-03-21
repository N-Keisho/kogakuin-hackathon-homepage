// components/header.tsx
'use client'

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from 'next/image'
import { usePathname } from "next/navigation";
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from "@mui/material";


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
            <div className="container mx-auto">
                <nav className="flex items-center justify-between">
                    <Link href="/" legacyBehavior>
                        <Image src="/logo.svg" alt="Kogakuin Hackathon" width={100} height={40} />
                    </Link>

                    {/* 以下はスマホだと隠れる */}
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

                    {/* 以下はスマホだと表示される */}
                    <div className="block md:hidden">
                        <button onClick={toggleHamburger} className="">
                            <MenuIcon className="text-secondary-400" fontSize="large" />
                        </button>
                    </div>

                    {/* サイドバー */}
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

                </nav>
            </div>
        </header>
    );
};

export default Header

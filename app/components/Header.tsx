// components/header.tsx
import Link from "next/link";
import React from "react";


const Header: React.FC = () => {

    return (
        <header className="bg-primary-700 text-secondary-400 p-4">
            <div className="container mx-auto">
                <nav className="flex items-center justify-between">
                    <Link href="/" legacyBehavior>
                        <div className="flex flex-col text-center justify-center">
                            <a className="text-2xl font-bold">KOGAKUIN</a>
                            <a className="text-2xl">HACHATHON</a>
                        </div>
                    </Link>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/whats-hackathon" legacyBehavior>
                                <a className="hover:underline underline-offset-4 font-bold">What's Hachathon</a>
                            </Link>
                        </li>
                        <li className="opacity-75">
                            |
                        </li>
                        <li>
                            <Link href="/events" legacyBehavior>
                                <a className="hover:underline underline-offset-4 font-bold">Events</a>
                            </Link>
                        </li>
                        <li className="opacity-75">
                            |
                        </li>
                        <li>
                            <Link href="/news" legacyBehavior>
                                <a className="hover:underline underline-offset-4 font-bold">News</a>
                            </Link>
                        </li>
                        <li className="opacity-75">
                            |
                        </li>
                        <li>
                            <Link href="/faq" legacyBehavior>
                                <a className="hover:underline underline-offset-4 font-bold">FAQ</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header

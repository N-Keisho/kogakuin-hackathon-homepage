import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kogakuin Hackathon",
  description: "工学院ハッカソンは工学院大学の学生チャレンジ奨励金を活用し，IT系サークル KogCoder が主催するイベントです．",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <Suspense fallback={<div>Loading...</div>}>
            <div className="flex-grow">{children}</div>
          </Suspense>
          <Footer />
        </div>
      </body>
    </html>
  );
}

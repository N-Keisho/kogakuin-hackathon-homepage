import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Suspense } from "react";
import Loading from "./components/Loding";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

const siteName = "工学院ハッカソン";
const description = "工学院ハッカソンは工学院大学の学生チャレンジ奨励金を活用し，IT系サークル KogCoder が主催するイベントです．";
const url = "https://hackathon.kogcoder.com";

export const metadata = {
  title: {
    default:siteName,
    template: (title: string) => `${title} | ${siteName}`,
  },
  description: description,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    handle: "@KogHack",
    site: "@KogHack",
    cardType: "summary_large_image",
    title: siteName,
    description,
    creator: "@KEISHO966",
  },
  alternates:{
    canonical: url,
  }
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
          <Suspense fallback={<Loading />}>
            <div className="flex-grow">{children}</div>
          </Suspense>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/base/Header";
import Footer from "./components/base/Footer";
import { Suspense } from "react";
import Loading from "./components/ui/loading/Loading";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

const siteName = "工学院ハッカソン";
const description = "工学院ハッカソンは工学院大学の学生チャレンジ奨励金を活用し，IT系サークル KogCoder が主催するイベントです．";
export const url = "https://hackathon.kogcoder.com";

export const metadata = {
  metadataBase: {
    title: siteName,
    description,
    url,
    siteName,
  },
  title: {
    default:siteName,
    template: '%s - 工学院ハッカソン',
  },
  description: description,
  openGraph: {
    title: {
      default:siteName,
      template: '%s - 工学院ハッカソン',
    },
    description: {
      default: description,
    },
    url,
    siteName,
    locale: "ja_JP",
    type: "website",
    cardtype: "summary_large_image",
    images: [
      {
        url: `${url}/img/ogp/ogp.png`,
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    handle: "@KogHack",
    site: "@KogHack",
    cardType: "summary_large_image",
    title: {
      default:siteName,
      template: '%s - 工学院ハッカソン',
    },
    description,
    creator: "@KEISHO966",
    image: {
      url: `${url}/img/ogp/ogp.png`,
      alt: siteName,
    },
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

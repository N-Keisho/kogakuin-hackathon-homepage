import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
        <div className="bg-secondary-50 h-screen flex flex-col">
          <Header />
          <div className="flex-grow">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

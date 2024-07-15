"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

interface BreadcrumbsListProps {
  title?: string;
  className?: string;
}

const BreadcrumbsList: React.FC<BreadcrumbsListProps> = ({
  title,
  className,
}) => {
  const pathname = usePathname();

  let category = "";
  let categoryPath = "";
  if (pathname === "/") return null;
  else if (pathname.includes("/event")) {
    category = "イベント";
    categoryPath = "/event/1";
  } else if (pathname.includes("/news")) {
    category = "ニュース";
    categoryPath = "/news/1";
  } else if (pathname.includes("faq")) {
    category = "よくある質問";
    categoryPath = "/faq";
  } else if (pathname.includes("about")) {
    category = "ハッカソンってなに？";
    categoryPath = "/about";
    title = "";
  }

  return (
    <>
      <p
        className={`${className} ${
          (category === "ニュース" && title) ||
          category == "ハッカソンってなに？"
            ? "mb-5"
            : ""
        }`}
      >
        <Link href="/" className="hover:opacity-80">
          トップ
        </Link>
        <KeyboardArrowRightIcon />
        {title ? (
          <Link href={categoryPath} className="hover:opacity-80">
            {category}
          </Link>
        ) : (
          <strong>{category}</strong>
        )}
        {title && title !== "" && (
          <>
            <KeyboardArrowRightIcon />
            <strong>{title}</strong>
          </>
        )}
      </p>
    </>
  );
};

export default BreadcrumbsList;

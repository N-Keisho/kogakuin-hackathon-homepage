import React from "react";
import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

// 単純なボタン
const SimpleButton: React.FC<{ url: string; text: string }> = ({
  url,
  text,
}) => {
  const isExternal = url.startsWith("http");
  return (
    <div className="flex justify-center items-center my-2">
      <Link href={`${url}`} legacyBehavior>
        <a
          className="bg-secondary-400 hover:bg-secondary-300 font-bold text-center rounded-md block w-1/3 py-2 items-center text-black border-none"
          target={isExternal ? "_blanck" : ""}
          rel={isExternal ? "noopener noreferrer" : ""}
        >
          {text}
          {isExternal && <ArrowOutwardIcon className="text-black pb-0.5" />}
        </a>
      </Link>
    </div>
  );
};
export default SimpleButton;

import React from "react";
import Link from "next/link";

// 単純なボタン
const SimpleButton: React.FC<{ url: string; text: string }> = ({
  url,
  text,
}) => {
  return (
    <div className="flex justify-center items-center my-2">
      <Link href={`${url}`} legacyBehavior>
        <a className="bg-secondary-400 hover:bg-secondary-300 font-bold py-2 px-10 my-2 rounded-md block w-fit text-black border-none">
          {text}
        </a>
      </Link>
    </div>
  );
};
export default SimpleButton;

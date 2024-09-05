"use client";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

interface IndexProps {
  content: string;
  className?: string;
}

const Index: React.FC<IndexProps> = ({ content, className }) => {
  const [isOpened, setIsOpened] = useState(true);
  const count = content.match(/# /g)?.length || false;
  if (!count) return <></>;

  return (
    <div className="border-2 border-gray-600 p-2 bg-white mt-3 mb-5">
      <div className="flex items-center justify-between">
        <h4 className="m-0 mb-1">目次</h4>
        <MenuIcon
          className="cursor-pointer"
          onClick={() => setIsOpened(!isOpened)}
        />
      </div>
      {isOpened && (
        <ReactMarkdown
          children={content}
          remarkPlugins={[remarkGfm]}
          className={className}
          allowedElements={["h1", "h2", "h3"]}
          components={{
            h1: ({ children }) => (
              <p className="indent-4">
                <a
                  href={`#${children}`}
                  className="text-black border-none hover:opacity-80 hover:underline"
                >
                  {children}
                </a>
              </p>
            ),
            h2: ({ children }) => (
              <p className="indent-8">
                <a
                  href={`#${children}`}
                  className="font-normal text-black border-none hover:opacity-80 hover:underline"
                >
                  {children}
                </a>
              </p>
            ),
            h3: ({ children }) => (
              <p className="indent-12">
                <a
                  href={`#${children}`}
                  className="font-normal text-black border-none hover:opacity-80 hover:underline"
                >
                  {children}
                </a>
              </p>
            ),
          }}
        />
      )}
    </div>
  );
};

export default Index;

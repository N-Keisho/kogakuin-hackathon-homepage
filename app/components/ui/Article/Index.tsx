import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import SimpleButton from "../button/SimpleButton";

interface IndexProps {
  content: string;
  className?: string;
}

const Index: React.FC<IndexProps> = ({ content, className }) => {
  return (
    <div className="border-2 border-gray-600 p-2 bg-white mt-3 mb-5">
      <h4 className="m-0 mb-1">目次</h4>
      <ReactMarkdown
        children={content}
        remarkPlugins={[remarkGfm]}
        className={className}
        allowedElements={["h1", "h2", "h3"]}
        components={{
          h1: ({ children }) => (
            <p>
              <a href={`#${children}`} className="text-black border-none hover:opacity-80 hover:underline">
                {children}
              </a>
            </p>
          ),
          h2: ({ children }) => (
            <p className="indent-4">
              <a href={`#${children}`} className="text-black border-none hover:opacity-80 hover:underline">
                {children}
              </a>
            </p>
          ),
          h3: ({ children }) => (
            <p className="indent-8">
              <a href={`#${children}`} className="text-black border-none hover:opacity-80 hover:underline">
                {children}
              </a>
            </p>
          ),
        }}
      />
    </div>
  );
};

export default Index;

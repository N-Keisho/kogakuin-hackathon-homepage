import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import SimpleButton from "../button/SimpleButton";

interface CustomReactMarkdownProps {
  content: string;
  className?: string;
}

const CustomReactMarkdown: React.FC<CustomReactMarkdownProps> = ({
  content,
  className,
}) => {
  return (
    <>
      <ReactMarkdown
        children={content}
        remarkPlugins={[remarkGfm]}
        className={className}
        components={{
          h1: ({ children }) => <h2 id={`${children}`}>{children}</h2>,
          h2: ({ children }) => <h3 id={`${children}`}>{children}</h3>,
          h3: ({ children }) => <h4 id={`${children}`}>{children}</h4>,
          // h4: ({ children }) => <h4>{children}</h4>,
          // h5: ({ children }) => <h5 className='text-sm md:text-base text-primary-700 font-bold mt-2 mb-1'>{children}</h5>,
          // h6: ({ children }) => <h6 className='text-sm md:text-base text-primary-700 font-bold mt-2 mb-1'>{children}</h6>,
          ol: ({ children }) => (
            <ol className="list-decimal list-inside">{children}</ol>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside">{children}</ul>
          ),
          li: ({ children }) => (
            <li className="my-2 marker:font-bold">{children}</li>
          ),
          p: ({ children }) => <p>{children}</p>,
          img: ({ src, alt, title }) => (
            <div className="flex flex-col justify-center items-center">
              <Image
                src={String(src)}
                alt={String(alt)}
                className="object-fit w-11/12 max-w-xl rounded-md mt-4 mb-2"
                width={600}
                height={600}
              />
              <p className="text-gray-600">{title}</p>
            </div>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-secondary-400 p-2 pl-4 my-4 bg-secondary-50 rounded-r">
              {children}
            </blockquote>
          ),
          code: ({ children }) => (
            <div className="bg-black border border-primary-700 p-3 my-4 rounded text-white">
              <code>{children}</code>
            </div>
          ),
          strong: ({ children }) => (
            <strong className="font-bold">{children}</strong>
          ),
          em: ({ children }) => <em className="italic">{children}</em>,
          a: ({ node, href, ...props }) => {

            const isButton = node?.children.some(
              (child) =>
                child.type === "text" && child.value.includes("(button)")
            );
            if (isButton) {
              const buttonText = node?.children
                .filter((child) => child.type === "text")
                .map((child) => {
                  if (child.type === "text")
                    return child.value.replace("(button)", "");
                })
                .join("");

              return (
                <SimpleButton url={String(href)} text={String(buttonText)} />
              );
            }

            const isYoutube = href?.includes("youtu.be") || false;
            if (isYoutube) {
              return <Youtube url={String(href)} />;
            }

            // const isPDF = node?.children.some(
            //   (child) =>
            //     child.type === "text" && child.value.includes("(PDF)")
            // );
            // if (isPDF) {
            //   return <PDF url={String(href)} />;
            // }

            return <a className="hover:opacity-80" href={href} {...props} />;
          },
        }}
      />
    </>
  );
};

const Youtube: React.FC<{ url: string }> = ({ url }) => {
  const id = url.split("youtu.be/")[1];
  return (
    <div className="flex justify-center my-2">
      <iframe
        width="560"
        height="315"
        src={`https://youtube.com/embed/${id}&rel=0`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const PDF : React.FC<{ url: string }> = ({ url }) => {
  const id = url.split("/d/")[1].replace("/view?usp=sharing", "");
  return (
    <div className="flex justify-center my-2">
      <embed
        width="560"
        height="315"
        src={`https://drive.google.com/file/d/${id}/preview`}
        type="application/pdf"
      />
    </div>
  );
};

export default CustomReactMarkdown;

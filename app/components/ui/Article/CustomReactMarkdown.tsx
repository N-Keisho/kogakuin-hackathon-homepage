import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Image from 'next/image'
import SimpleButton from '../button/SimpleButton'

interface CustomReactMarkdownProps {
    content: string,
    className?: string
}

const CustomReactMarkdown: React.FC<CustomReactMarkdownProps> = ({ content, className }) => {
    return (
        <>
            <ReactMarkdown
                children={content}
                remarkPlugins={[remarkGfm]}
                className={className}
                components={{
                    h1: ({ children }) => <h1 className='text-2xl md:text-3xl font-bold mt-14 md:mt-16 mb-4 p-1 text-primary-700 border-b-2 border-primary-100 '>
                        {children}
                        </h1>,
                    h2: ({ children }) => <h2 className='text-xl md:text-2xl font-bold mt-8 md:mt-10 mb-3 '>{children}</h2>,
                    h3: ({ children }) => <h3 className='text-lg md:text-xl font-bold mt-6 mb-1'>{children}</h3>,
                    h4: ({ children }) => <h4 className='text-base md:text-lg font-bold mt-2 mb-1'>{children}</h4>,
                    // h5: ({ children }) => <h5 className='text-sm md:text-base text-primary-700 font-bold mt-2 mb-1'>{children}</h5>,
                    // h6: ({ children }) => <h6 className='text-sm md:text-base text-primary-700 font-bold mt-2 mb-1'>{children}</h6>,
                    ol: ({ children }) => <ol className='list-decimal list-inside'>{children}</ol>,
                    ul: ({ children }) => <ul className='list-disc list-inside'>{children}</ul>,
                    li: ({ children }) => <li className='text-base md:text-lg my-2 marker:font-bold'>{children}</li>,
                    p: ({ children }) => <p className='text-base md:text-lg my-3 leading-9'>{children}</p>,
                    img: ({ src, alt, title }) =><div className='flex flex-col justify-center items-center'> 
                        <Image src={String(src)} alt={String(alt)} className='object-fit w-11/12 max-w-xl rounded-md mt-4 mb-2' width={800} height={800} />
                        <p className='text-sm md:text-base text-gray-600'>{title}</p>
                    </div>,
                    blockquote: ({ children }) => <blockquote className='border-l-4 border-secondary-400 p-2 pl-4 my-4 bg-secondary-50 rounded-r'>{children}</blockquote>,
                    code: ({ children }) => <div className='bg-primary-900 border border-primary-700 p-3 my-4 rounded text-white'><code>{children}</code></div>,
                    strong: ({ children }) => <strong className='font-bold'>{children}</strong>,
                    em: ({ children }) => <em className='italic'>{children}</em>,
                    a: ({ node, href, ...props }) => {     
                        const isButton = node?.children.some(
                            (child) => child.type === 'text' && child.value.includes('<button>')
                        );
                        
                        if (isButton) {
                            const buttonText = node?.children
                                .filter((child) => child.type === 'text')
                                .map((child) => {
                                    if (child.type === 'text') return child.value.replace('<button>', '').replace('</button>', '');
                                }).join("");

                            return (
                                <SimpleButton url={String(href)} text={String(buttonText)} />
                            )
                        }

                        return <a href={href} className='text-primary-700 hover:text-primary-400 underline text-sm md:text-base' {...props}/>
                    },
                }}
            />
        </>
    )
}

export default CustomReactMarkdown
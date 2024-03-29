import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Image from 'next/image'
import { ClassNames } from '@emotion/react'
import SimpleButton from './CustomButton'

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
                    h1: ({ children }) => <h1 className='text-2xl md:text-3xl font-bold mt-8 mb-4 p-2 text-primary-700 border-y-2  border-primary-700 border-dashed bg-secondary-200'>{children}</h1>,
                    h2: ({ children }) => <h2 className='text-xl md:text-2xl text-primary-700 font-bold mt-6 mb-3 underline underline-offset-4'>{children}</h2>,
                    h3: ({ children }) => <h3 className='text-lg md:text-xl text-primary-700 font-bold mt-4 mb-2'>{children}</h3>,
                    h4: ({ children }) => <h4 className='text-base md:text-lg text-primary-700 font-bold mt-2 mb-1'>{children}</h4>,
                    h5: ({ children }) => <h5 className='text-sm md:text-base text-primary-700 font-bold mt-2 mb-1'>{children}</h5>,
                    h6: ({ children }) => <h6 className='text-sm md:text-base text-primary-700 font-bold mt-2 mb-1'>{children}</h6>,
                    ol: ({ children }) => <ol className='list-decimal list-inside'>{children}</ol>,
                    ul: ({ children }) => <ul className='list-disc list-inside'>{children}</ul>,
                    li: ({ children }) => <li className='text-sm md:text-base'>{children}</li>,
                    p: ({ children }) => <p className='text-sm md:text-base'>{children}</p>,
                    img: ({ src, alt }) => <Image src={String(src)} alt={String(alt)} className='object-fit w-11/12 max-w-xl' width={300} height={300} />,
                    blockquote: ({ children }) => <blockquote className='border-l-2 border-primary-700 p-2 bg-primary-50 rounded-r'>{children}</blockquote>,
                    code: ({ children }) => <div className='bg-primary-50 border border-primary-700 p-3 my-2 rounded'><code>{children}</code></div>,
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
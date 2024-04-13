import React from 'react';
import questions from './questions';

const Page = () => {
    return (
        <>
            <div className='p-5 justify-center flex flex-col items-center w-full'>
                <h1 className="text-2xl md:text-4xl text-primary-700 font-bold underline mt-4 mb-0 decoration-1 underline-offset-8 text-center ">
                    よくあるご質問
                </h1>
                <div className='flex flex-col w-11/12 max-w-xl items-center'>
                    {questions.map((q, i) => (
                        <div key={i} className='w-full'>
                            <QuestionCategory category={q.category} />
                            {q.questions.map((qa, j) => (
                                <Question key={j} question={qa.question} answer={qa.answer} />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Page;


const QuestionCategory:React.FC<{ category:string }> = ({ category }) => {
    return (
        <div className='bg-secondary-400  w-full mt-10 py-1 md:py-2 px-3 md:px-4'>
            <a className='text-primary-700 text-xl md:text-2xl font-bold'>{category}</a>
        </div>
    );
}

const Question:React.FC<{ question:string, answer:string }> = ({ question, answer}) => {
    return (
        <div className='w-full mt-4'>
            <div className='mb-2'>
                <a className='text-primary-700 font-bold text-xl md:text-2xl'>Q</a>
                <a className='font-bold pl-2 text-lg md:text-xl'>{question}</a>
            </div>
            <div className='pl-6'>
            <a className=' my-4 text-base md:text-lg'>{answer}</a>
            </div>
            <div className='border-b border-black h-0 border-dashed mt-3'></div>
        </div>
    );
}


import React from "react";
import questions from "./questions";
import { Metadata } from "next";
import BreadcrumbsList from "../components/ui/BreadcrumbsList/BreadcrumbsList";

const url = "https://hackathon.kogcoder.com";
const title = "よくあるご質問";
const description = "工学院ハッカソンに関するよくあるご質問をまとめました．";
const image = "/img/ogp/ogp_faq.png";
export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    images: [`${url}${image}`],
  },
  twitter: {
    title: title,
    description: description,
    images: [`${url}${image}`],
  },
};

const Page = () => {
  return (
    <div className="flex flex-col mt-4 md:mt-10 mb-10 flex flex-col items-center">
      <div className="w-11/12 max-w-2xl">
      <BreadcrumbsList />
        <h1>よくあるご質問</h1>
        <div>
          {questions.map((q, i) => (
            <div key={i} className="w-full mb-10">
              <QuestionCategory category={q.category} />
              {q.questions.map((qa, j) => (
                <Question key={j} question={qa.question} answer={qa.answer} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;

const QuestionCategory: React.FC<{ category: string }> = ({ category }) => {
  return <h2>{category}</h2>;
};

const Question: React.FC<{ question: string; answer: string }> = ({
  question,
  answer,
}) => {
  return (
    <div className="w-full mt-4">
      <h3 className="mb-2 border-none">
        <span className="text-primary-700 mr-2">Q</span>
        <span>{question}</span>
      </h3>
      <div className="pl-6">
        <p>{answer}</p>
      </div>
      <div className="border-b border-black h-0 border-dashed mt-3"></div>
    </div>
  );
};

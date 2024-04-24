import React from 'react';
import Link from 'next/link';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

// 単純なボタン
const SimpleButton: React.FC<{ url: string, text: string, }> = ({ url, text }) => {
  return (
      <Link href={`${url}`} legacyBehavior className='my-4'>
        <a className="bg-secondary-400 hover:bg-secondary-300 text-primary-700 font-bold py-2 px-5 my-2 rounded-full block w-fit">
          {text}
        </a>
      </Link>
  );
}
export default SimpleButton;


// ページ送りボタン
export const PageButton: React.FC<{ numOfDatas: number, onePageContents:number, pageIndex: number, category: string}> = ({ numOfDatas, onePageContents, pageIndex, category}) => {
  let lowSkiped = false;
  let highSkiped = false;

  return (
    <div className='text-center'>
      <Link href={`/${category}/${pageIndex-1}`} className={`block pt-0.5 m-2 h-7 w-7 text-white bg-primary-700 hover:bg-primary-400 ${pageIndex == 0 ? "hidden" : ""}`}>
        <KeyboardArrowLeftIcon />
      </Link>
      {
        Array.from({ length: Math.ceil(numOfDatas / onePageContents) }, (_, i) => i).map((i) => {
          if ((i < pageIndex - 1 || i > pageIndex + 1) && i != 0 && i != (Math.ceil(numOfDatas / onePageContents) - 1)){
            // 2ページ以上離れたページはスキップ
            if (!lowSkiped && i < pageIndex - 1){
              lowSkiped = true;
              return (
                <a key={i} className={`m-1 h-7 w-7 text-primary-700 hover:bg-primary-400`} >
                  ...
                </a>
              )
            }
            else if (!highSkiped && i > pageIndex + 1){
              highSkiped = true;
              return (
                <a key={i} className={`m-1 h-7 w-7 text-primary-700 hover:bg-primary-400`} >
                  ...
                </a>
              )
            }
            return null;
          };
          return (
            <Link key={i} href={`/${category}/${i+1}`} className={`block m-1 pt-0.5 h-7 w-7 text-white bg-primary-700  ${pageIndex == i ? "bg-secondary-400 text-primary-700" : "hover:bg-primary-400"}`} >
              {i + 1}
            </Link>
          )
        })
      }
      <Link href={`/${category}/${pageIndex+1}`} className={`block pt-0.5 m-2 h-7 w-7 text-white bg-primary-700 hover:bg-primary-400 ${pageIndex == Math.ceil(numOfDatas / onePageContents) - 1 ? "hidden" : ""}`} >
        <KeyboardArrowRightIcon />
      </Link>
    </div>
  )
}


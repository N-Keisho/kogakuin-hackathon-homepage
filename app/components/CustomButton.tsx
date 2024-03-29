import React from 'react';
import Link from 'next/link';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


// 単純なボタン
const SimpleButton: React.FC<{ url: string, text: string, }> = ({ url, text }) => {
  return (
    <div className='my-4'>
      <Link href={`${url}`} legacyBehavior>
        <a className="bg-secondary-400 hover:bg-secondary-300 text-primary-700 font-bold py-2 px-5 rounded-full">
          {text}
        </a>
      </Link>
    </div>
  );
}
export default SimpleButton;


// ページ送りボタン
export const PageButton: React.FC<{ numOfDatas: number, onePageContents:number, pageIndex: number, pageHandler: (event: any) => void }> = ({ numOfDatas, onePageContents, pageIndex, pageHandler }) => {
  let lowSkiped = false;
  let highSkiped = false;
  return (
    <div >
      <button className={`m-2 h-7 w-7 text-white bg-primary-700 hover:bg-primary-400 ${pageIndex == 0 ? "hidden" : ""}`} onClick={() => pageHandler(pageIndex - 1)}>
        <KeyboardArrowLeftIcon />
      </button>
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
            <button key={i} className={`m-1 h-7 w-7 text-white bg-primary-700  ${pageIndex == i ? "bg-secondary-400 text-primary-700" : "hover:bg-primary-400"}`} onClick={() => pageHandler(i)} >
              {i + 1}
            </button>
          )
        })
      }
      <button className={`m-2 h-7 w-7 text-white bg-primary-700 hover:bg-primary-400 ${pageIndex == Math.ceil(numOfDatas / onePageContents) - 1 ? "hidden" : ""}`} onClick={() => pageHandler(pageIndex + 1)}>
        <KeyboardArrowRightIcon />
      </button>
    </div>
  )
}


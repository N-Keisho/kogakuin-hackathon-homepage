import React from 'react';
import Link from 'next/link';

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





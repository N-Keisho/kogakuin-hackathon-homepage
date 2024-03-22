import React from 'react';
import Link from 'next/link';

const CustomButon: React.FC<{ url:string, text: string, }> = ({url, text}) => {
  return (
    <>
      <button >
        <a href={url} className="bg-secondary-400 hover:bg-secondary-300 text-primary-700 font-bold py-3 px-6 rounded-full">
          {text}
        </a>
      </button>
    </>
  );
}

export default CustomButon;
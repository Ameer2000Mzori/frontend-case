import React from 'react';

import Link from 'next/link';

export const TopicsButtons = () => {
  return (
    <div className="flex h-[72px] w-[90%] flex-col items-start justify-between gap-[16px] text-start xlg:w-[80%]">
      <h1 className="font-Barlow text-[18px] font-bold leading-[24px] text-[#0e1527]">Topics</h1>
      <div className="flex flex-row items-center justify-center gap-[8px] text-center">
        <Link rel="stylesheet" href={`/blogs/`}>
          <button className="topic-btn-styles">ALL BLOGS</button>
        </Link>
        <Link href={`/blogs/${'interview'}`}>
          <button className="topic-btn-styles">INTERVIEW</button>
        </Link>
        <Link href={`/blogs/${'blog'}`}>
          <button className="topic-btn-styles">BLOG</button>
        </Link>
        <Link href={`/blogs/${'whitepaper'}`}>
          <button className="topic-btn-styles">WHITEPAPER</button>
        </Link>
      </div>
    </div>
  );
};

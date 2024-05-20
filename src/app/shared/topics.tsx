import React from 'react';

export const Topics = () => {
  return (
    <div className="xlg:w-[80%] flex h-[72px] w-[90%] flex-col items-start justify-between gap-[16px] text-start ">
      <h1 className="font-Barlow text-[18px] font-bold leading-[24px] text-[#0e1527]">Topics</h1>
      <div className="flex flex-row items-center justify-center gap-[8px] text-center">
        <button className="topic-btn-styles">ALL BLOGS</button>
        <button className="topic-btn-styles">INTERVIEW</button>
        <button className="topic-btn-styles">BLOG</button>
        <button className="topic-btn-styles">WHITEPAPER</button>
      </div>
    </div>
  );
};

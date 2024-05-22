'use client';

import React, { useState } from 'react';

import Link from 'next/link';

import SearchComponent from './searchTermsLogic';

export const TopicsButtons = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <>
      <div className="flex h-[152px] w-[100%] flex-col items-center justify-center border-l-gray-100 bg-[#EFEFF8] text-center ">
        <div className="flex h-[100%] w-[90%] flex-col items-start justify-center  gap-[16px] text-start xlg:w-[80%]">
          <h1 className=" h-[24px] font-Barlow text-[18px] font-bold text-black">
            Search for blogs
          </h1>
          <form className="flex h-[48px] w-[100%] flex-row items-center justify-between gap-[24px] text-start">
            <input
              type="text"
              className="h-[100%] w-[100%] rounded-[3px] pb-[11px] pl-[16px] pr-[36px] pt-[13px] font-[16px] leading-[24px] text-[#0E1527]"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Link className="h-[100%]" rel="stylesheet" href={`/blogs/id?search=${searchTerm}`}>
              <button
                type="submit"
                className="h-[100%] w-[112px] rounded-[3px]  bg-[#371172] text-white">
                Search
              </button>
            </Link>
          </form>
        </div>
      </div>

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
        <SearchComponent />
      </div>
    </>
  );
};

'use client';

import React, { useState } from 'react';

import Link from 'next/link';

import { useDispatch, useSelector } from 'react-redux';

import { setCate, setSearchTerm } from '../lib/features/counter/searchTerm';

export const TopicsButtons = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: any) => state.search.searchTerm);
  let category = useSelector((state: any) => state.search.category);
  if (category === '' || category === undefined || category === null) category = 'id';
  console.log('this is from RTK', category, searchTerm);

  const handleSearchChange = (e: any) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const handleCategoryChange = (data: any) => {
    if (data === '' || data === undefined || data === null) data = 'id';
    dispatch(setCate(data));
  };

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
              onChange={(e) => handleSearchChange(e)}
            />
            <Link
              className="h-[100%]"
              rel="stylesheet"
              href={`/blogs/${category}?search=${searchTerm}`}>
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
          <Link rel="stylesheet" href={`/blogs/id?search=${searchTerm}`}>
            <button className="topic-btn-styles" onClick={() => handleCategoryChange('id')}>
              ALL BLOGS
            </button>
          </Link>
          <Link href={`/blogs/${'interview'}?search=${searchTerm}`}>
            <button className="topic-btn-styles" onClick={() => handleCategoryChange('interview')}>
              INTERVIEW
            </button>
          </Link>
          <Link href={`/blogs/${'blog'}?search=${searchTerm}`}>
            <button className="topic-btn-styles" onClick={() => handleCategoryChange('blog')}>
              BLOG
            </button>
          </Link>
          <Link href={`/blogs/${'whitepaper'}?search=${searchTerm}`}>
            <button className="topic-btn-styles" onClick={() => handleCategoryChange('whitepaper')}>
              WHITEPAPER
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

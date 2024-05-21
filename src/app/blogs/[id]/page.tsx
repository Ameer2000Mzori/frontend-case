import React from 'react';

import Link from 'next/link';

import { HeroComponent } from 'app/shared/heroComponent';
import { pagesTypes } from 'app/types/pagesTypes';

import { TopicsButtons } from '@/src/app/shared/topicsButtons';
import { PreprSdk } from '@/src/server/prepr';

import BlogCard from '../../shared/card';

const bodyInputs: pagesTypes = {
  image: '',
  title: '',
  description: '',
};

export default async function Blog({ params }: { params: { id: string } }) {
  console.log('this is params', params);

  const response = await PreprSdk.pages({ id: '3837c994-0641-410f-bad5-c907db5f35a8' });
  const blogTagResponse = await PreprSdk.search_tag({ where: { _tags_any: params.id } });
  const blogs = blogTagResponse?.Blogs?.items;

  bodyInputs.title = response?.Page?.page_header?.title;
  bodyInputs.description = response?.Page?.page_header?.text;
  bodyInputs.image = response?.Page?.page_header?.image?.url;

  return (
    <>
      <div>
        <div className="  inset-0 flex h-[250px] flex-col items-center justify-center gap-2 overflow-hidden text-center  xlg:h-[300px] ">
          <HeroComponent heroInputs={bodyInputs} />
        </div>
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
              />
              <button
                type="submit"
                className="h-[100%] w-[112px] rounded-[3px]  bg-[#371172] text-white">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className=" flex w-[100%] flex-col items-center justify-center bg-white pb-[32px] pt-[32px] text-center ">
        <TopicsButtons />
      </div>
      <div className="flex h-[auto] w-[100%]  flex-row flex-wrap justify-center gap-[15px] bg-white">
        {blogs?.map((blog) => {
          return (
            <Link rel="stylesheet" href={`/blog/${blog._id}`}>
              <BlogCard cardData={blog} />
            </Link>
          );
        })}
      </div>
    </>
  );
}

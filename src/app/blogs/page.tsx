import React from 'react';

import { HeroComponent } from 'app/shared/heroComponent';
import { Topics } from 'app/shared/topics';
import { pagesTypes } from 'app/types/pagesTypes';

import { PreprSdk } from '@/src/server/prepr';

const bodyInputs: pagesTypes = {
  image: '',
  title: '',
  description: '',
};

export default async function blog() {
  const response = await PreprSdk.pages({ id: '3837c994-0641-410f-bad5-c907db5f35a8' });

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
        <Topics allBlogs={allBlogs} />
      </div>
    </>
  );
}

import React from 'react';

import { HeroComponent } from 'app/shared/heroComponent';
import { blogsInputs } from 'app/types/blogsInputs';

export default function blog() {
  return (
    <div>
      <div className=" mt-[1px] flex h-[300px]  flex-col items-center justify-center gap-2 overflow-hidden  text-center">
        <HeroComponent heroInputs={blogsInputs} />
      </div>
      <div className="flex h-[152px] w-[100%] flex-col items-center justify-center border-l-gray-100 bg-[#EFEFF8] text-center ">
        <div className="flex h-[100%] w-[80%] flex-col items-start  justify-center gap-[16px] text-start">
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
  );
}

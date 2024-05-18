import React from 'react';

import BlogCard from './card';

export default function Cards() {
  return (
    <div className="flex h-[690px] w-[100%] flex-col  items-center justify-center ">
      <div className="ga-[32px]  flex h-[530px] w-[80%] flex-col justify-between  text-[#041527]">
        <h1 className=" m-0 h-[56px] p-0 font-Barlow text-[48px] font-bold leading-[56px] ">
          De nieuwste blogs
        </h1>
        <div className=" flex flex-row items-center justify-center gap-[31px]  text-center">
          <BlogCard />
        </div>
      </div>
    </div>
  );
}

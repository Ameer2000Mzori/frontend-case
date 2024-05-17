import React from 'react';

import Image from 'next/image';

export default function Cards() {
  return (
    <div className="flex h-[840px] w-[100%] flex-col  items-center justify-center bg-white">
      <div className="ga-[32px]  flex h-[540px] w-[75%] flex-col justify-between bg-black">
        <h1 className=" m-0 p-0 font-Barlow text-[48px] font-bold">De nieuwste blogs</h1>
        <div className=" flex flex-row items-center justify-center gap-[31px] text-center">
          <div className=" flex h-[442px] w-[349px] flex-col gap-[24px] bg-slate-500 text-start">
            <Image src="" alt="card image" className="h-[240px] w-[100%] rounded-[6px]" />
            <div className=" flex flex-col items-start justify-between gap-[14px] text-start">
              <h2 className="h-[50px] w-[100%] font-Barlow text-[21px] font-bold leading-[23px]">
                Werken bij Social Brothers, volgens developer Ryence
              </h2>

              <p className="h-[72px] w-[100%] text-[16px] leading-[19px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent luctus velit id ex
                vestibulum, in tristique risus tincidunt.
              </p>

              <button>Lees meer =</button>
            </div>
          </div>
          <div className="h-[442px] w-[349px] bg-white"></div>
          <div className="h-[442px] w-[349px] bg-white"></div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

import Image from 'next/image';

export default function Cards() {
  return (
    <div className="flex h-[840px] w-[100%] flex-col  items-center justify-center bg-white">
      <div className="ga-[32px]  flex h-[530px] w-[80%] flex-col justify-between bg-slate-600">
        <h1 className=" m-0 h-[56px] p-0 font-Barlow text-[48px] font-bold leading-[56px]">
          De nieuwste blogs
        </h1>
        <div className=" flex flex-row items-center justify-center gap-[31px] text-center">
          <div className=" flex h-[440px] w-[349px] flex-col gap-[24px] bg-slate-500 text-start">
            <div className=" relative h-[240px] w-[100%] rounded-[6px] bg-black">
              <Image src="" alt="card image" className=" -z-10" />
              <div className=" absolute bottom-[8px] left-[8px] flex h-[32px] w-[91px] flex-col items-center justify-center rounded-[4px] bg-[#EFEFF8] text-center ">
                <p className=" mb-[4px] ml-[16px] mr-[16px] mt-[4px] text-[12px] font-medium leading-[24px] text-[#0E1527]">
                  INTERVIEW
                </p>
              </div>
            </div>

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

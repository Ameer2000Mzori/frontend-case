import React from 'react';

import Image from 'next/image';

import cardImg from 'public/card_Img.png';

export default function BlogCard() {
  return (
    <>
      <div className=" flex h-[440px] w-[349px] cursor-pointer flex-col  gap-[24px] text-start">
        <div className=" relative h-[240px] w-[100%] overflow-hidden rounded-[6px] bg-black">
          <Image src={cardImg} alt="card image" className=" -z-10 h-[100%] w-[100%] object-cover" />
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
      <div className=" flex h-[440px] w-[349px] cursor-pointer flex-col  gap-[24px] text-start">
        <div className=" relative h-[240px] w-[100%] overflow-hidden rounded-[6px] bg-black">
          <Image src={cardImg} alt="card image" className=" -z-10 h-[100%] w-[100%] object-cover" />
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
      <div className=" flex h-[440px] w-[349px] cursor-pointer flex-col  gap-[24px] text-start">
        <div className=" relative h-[240px] w-[100%] overflow-hidden rounded-[6px] bg-black">
          <Image src={cardImg} alt="card image" className=" -z-10 h-[100%] w-[100%] object-cover" />
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
    </>
  );
}

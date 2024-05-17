import React from 'react';

import Image from 'next/image';

import HomeBanner from 'public/Home_Banner.png';

export default function body() {
  return (
    <div className=" mt-[1px] flex h-[600px]  flex-col items-center justify-center gap-2 overflow-hidden border-t-2 border-white text-center">
      <Image
        src={HomeBanner}
        alt="Home Banner"
        className="  -z-20 h-[100%] w-[100%] bg-center object-cover"
      />
      <div className=" absolute flex w-[100%] flex-col items-center justify-center gap-[32px] text-center">
        <h1 className=" z-10  w-[60%] font-Barlow text-[72px] font-bold leading-[72px] text-white">
          WELCOME TO THE 2DIGITS CASE!
        </h1>
        <p className="w-[70%] text-[18px] font-bold leading-[24px]">
          This case dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Magnis dis parturient montes nascetur ridiculus mus mauris
          vitae ultricies. Commodo odio aenean sed adipiscing diam donec adipiscing tristique risus.
        </p>
      </div>
    </div>
  );
}

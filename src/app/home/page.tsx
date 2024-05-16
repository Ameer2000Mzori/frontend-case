import React from 'react';

import Image from 'next/image';

import HomeBanner from 'public/Home_Banner.png';

export default function body() {
  return (
    <div className=" mt-[1px] flex h-[600px] w-[100vw] flex-col items-center justify-center gap-2 overflow-hidden border-t-2 border-white text-center">
      <Image src={HomeBanner} alt="Home Banner" className="h-[100vh] w-[100vw] " />
    </div>
  );
}

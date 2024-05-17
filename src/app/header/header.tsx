import React from 'react';

import Link from 'next/link';

export default function Header() {
  return (
    <div className="header-bg-gradient-radial-right flex h-[80px]  flex-col items-center  text-center ">
      <div className="flex h-[100%] w-[80%]  flex-row items-center justify-between  text-center">
        <Link href="/home" className="flex h-[36px] flex-row items-end justify-end text-end">
          <p className="nav-text-logo">
            2D<i>I</i>G<i>I</i>TS
          </p>
          <p className="w-[50px] text-start text-[5px]">DEVELOPMENT AGENCY</p>
        </Link>
        <div className=" flex flex-row gap-[32px] leading-[24px] text-white">
          <Link href="/home">
            <p className=" nav-text ">Home</p>
          </Link>
          <Link href="/blogs">
            <p className="nav-text">Blogs</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

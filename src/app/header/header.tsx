import React from 'react';

import Link from 'next/link';

export default function Header() {
  return (
    <div className="flex h-[80px] flex-col items-center bg-gradient-to-r  from-[#01041f] to-[#020365]  text-center ">
      <div className="xlg:w-[80%] flex h-[100%] w-[90%]  flex-row items-center justify-between  text-center">
        <Link href="/home" className="flex h-[36px] flex-row items-end justify-end text-end">
          <p className="nav-text-logo">
            2D<i>I</i>G<i>I</i>TS
          </p>
          <p className="w-[50px] text-start text-[5px]">DEVELOPMENT AGENCY</p>
        </Link>
        <div className=" flex flex-row gap-[32px] text-[18px] leading-[24px] text-white">
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

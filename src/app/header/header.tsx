import React from 'react';

import Link from 'next/link';

export default function Header() {
  return (
    <div className="header-bg-gradient-radial-right flex h-[80px] w-[100vw] flex-col items-center  text-center ">
      <div className="flex h-[100%] w-[75%]  flex-row items-center justify-between  text-center">
        <Link href="/"></Link>
        <div className=" flex flex-row gap-[32px] leading-[24px] text-white">
          <Link href="/home">
            <p className=" nav-text ">Home</p>
          </Link>
          <Link href="/blog">
            <p className="nav-text">About</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

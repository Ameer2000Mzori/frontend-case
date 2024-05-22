import React from 'react';

export const Footer = () => {
  return (
    <div className="flex  h-[80px] flex-col items-center bg-gradient-to-r  from-[#01041f] to-[#020365]  text-center ">
      <div className="flex h-[100%] w-[80%] flex-row items-center justify-start  gap-[46px] text-center text-[12px]  leading-[16px]">
        <p className=" cursor-pointer"> Terms and conditions</p>
        <p className=" cursor-pointer"> Privacy statement</p>
      </div>
    </div>
  );
};

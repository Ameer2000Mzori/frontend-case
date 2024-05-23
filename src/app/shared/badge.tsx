import React from 'react';

export default function Badge({ bageInputs }: string) {
  return (
    <div className=" absolute bottom-[8px]   flex h-[32px] w-[91px] flex-col items-center justify-center rounded-[4px] bg-[#EFEFF8] text-center ">
      <p className=" mb-[4px] ml-[16px] mr-[16px] mt-[4px] text-[12px] font-bold leading-[24px] text-[#0E1527]">
        {bageInputs}
      </p>
    </div>
  );
}

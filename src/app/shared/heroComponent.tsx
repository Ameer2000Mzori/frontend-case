import React from 'react';

import Image from 'next/image';

import { bodyInputsType } from 'app/types';

type HeroComponentProps = {
  heroInputs: bodyInputsType;
};

export const HeroComponent: React.FC<HeroComponentProps> = ({ heroInputs }) => {
  return (
    <>
      <Image
        src={heroInputs.image}
        alt="hero image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="-z-20 h-[100%] w-[100%] bg-center object-cover "
      />

      <div className=" absolute flex w-[100%] flex-col items-center justify-center gap-[32px] text-center">
        <h1 className=" xlg:text-[72px]  xlg:leading-[72px] xlg:w-[60%] z-10  w-[75%] font-Barlow text-[40px] font-bold leading-[35px] text-white">
          {heroInputs.title}
        </h1>

        {heroInputs.description ? (
          <p className="xlg:text-[18px] xlg:w-[70%] w-[90%] text-[14px] font-bold leading-[24px]">
            {heroInputs.description}
          </p>
        ) : null}
      </div>
    </>
  );
};

import React from 'react';

import Image from 'next/image';

import { bodyInputsType } from 'app/types';

type HeroComponentProps = {
  heroInputs: bodyInputsType;
};

export const HeroComponent: React.FC<HeroComponentProps> = ({ heroInputs }) => {
  const imageWidth = 4000; // Specify the width
  const imageHeight = 3000; // Specify the height (ensure this matches the image's aspect ratio)

  return (
    <>
      <Image
        src={heroInputs.image}
        width={imageWidth}
        height={imageHeight}
        alt="hero image"
        className="  -z-20 h-[100%] w-[100%] bg-center object-cover"
      />
      <div className=" absolute flex w-[100%] flex-col items-center justify-center gap-[32px] text-center">
        <h1 className=" z-10  w-[60%] font-Barlow text-[72px] font-bold leading-[72px] text-white">
          {heroInputs.title}
        </h1>

        {heroInputs.description ? (
          <p className="w-[70%] text-[18px] font-bold leading-[24px]"> {heroInputs.description}</p>
        ) : null}
      </div>
    </>
  );
};

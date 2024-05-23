import React from 'react';

import Image from 'next/image';

import { pagesTypes } from 'app/types/pagesTypes';

import toUpperCaseValues from './upperCaseText';

type HeroComponentProps = {
  heroInputs: pagesTypes;
};

// this is hero component, where we use it in three pages to see images and title of page, and text.
export const HeroComponent: React.FC<HeroComponentProps> = ({ heroInputs }) => {
  const { upperCasedTitle } = toUpperCaseValues(heroInputs.title);

  return (
    <>
      <Image
        src={heroInputs.image}
        alt="hero image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="-z-20 h-[100%] w-[100%] bg-center object-cover opacity-50 grayscale"
      />

      <div className=" absolute flex w-[100%] flex-col items-center justify-center gap-[32px] text-center">
        <h1 className=" z-10  w-[75%] font-Barlow text-[40px]  font-bold leading-[35px] text-white xlg:w-[60%] xlg:text-[72px] xlg:leading-[72px]">
          {upperCasedTitle}
        </h1>

        {heroInputs.description ? (
          <p className="w-[85%] text-[14px] font-bold leading-[24px] xlg:w-[70%] xlg:text-[18px]">
            {heroInputs.description}
          </p>
        ) : null}
      </div>
    </>
  );
};

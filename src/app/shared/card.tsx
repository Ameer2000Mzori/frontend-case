import React from 'react';

import Image from 'next/image';

import Badge from './badge';

export default function BlogCard({ cardData }: any) {
  return (
    <>
      <div className=" flex h-[440px] w-[349px] cursor-pointer flex-col  gap-[24px] text-start">
        <div className=" relative  h-[240px] w-[100%] overflow-hidden rounded-[6px] bg-black">
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            src={cardData.banner_image.url}
            alt="card image"
            className=" h-[100%] w-[100%] object-cover"
          />

          <div className="pl-[8px]">
            {cardData.categories.map((category: any) => {
              return <Badge Input={category.body} />;
            })}
          </div>
        </div>

        <div className=" flex flex-col items-start justify-between gap-[14px] text-start text-[#0E1527]">
          <h2 className="h-[50px] w-[100%] overflow-hidden font-Barlow text-[21px] font-bold leading-[23px]">
            {cardData.title}
          </h2>

          <p className=" h-[72px] w-[100%] font-firaSans text-[16px] leading-[19px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent luctus velit id ex
            vestibulum, in tristique risus tincidunt.
          </p>

          <button className="flex  gap-4 font-bold">
            Lees meer
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/ios/50/right--v1.png"
              alt="right--v1"
            />
          </button>
        </div>
      </div>
    </>
  );
}

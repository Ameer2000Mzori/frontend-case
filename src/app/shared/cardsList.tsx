import React from 'react';

import Link from 'next/link';

import BlogCard from './card';

export default async function Cards({ title, cardsData }: any) {
  console.log('dataaaaaaaaa', cardsData);

  return (
    <div className=" xlg:h-[690px] xlg:p-0 flex h-[auto]  w-[100%]  flex-col items-center  justify-center pb-[75px] pt-[15px]">
      <div className="ga-[32px]  xlg:h-[530px] xlg:w-[80%] flex h-[auto] w-[90%] flex-col justify-between  text-[#041527]">
        <h1 className=" xlg:text-[48px] m-0 h-[56px] p-0 font-Barlow text-[35px] font-bold leading-[56px] ">
          {title}
        </h1>
        <div className=" xlg:flex-row flex h-[auto] flex-col   items-center  justify-center gap-[31px] text-center">
          {cardsData.map((data) => {
            return (
              <>
                <Link rel="stylesheet" href={`/selected/${data._id}`}>
                  <BlogCard cardData={data} />
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

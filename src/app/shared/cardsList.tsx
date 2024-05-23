import React from 'react';

import Link from 'next/link';

import BlogCard from './card';

/* this is list of 3 cards only  for new blogs (home page)
or and recommendation (when user click a blog ) */

export default async function Cards({ title, cardsData }: any) {
  return (
    <div className=" flex h-[auto] w-[100%] flex-col  items-center  justify-center pb-[75px]  pt-[15px] xlg:h-[690px] xlg:p-0">
      <div className="ga-[32px]  flex h-[auto] w-[90%] flex-col justify-between text-[#041527] xlg:h-[530px]  xlg:w-[80%]">
        <h1 className=" m-0 h-[56px] p-0 font-Barlow text-[35px] font-bold leading-[56px] xlg:text-[48px] ">
          {title}
        </h1>
        <div className=" flex h-[auto] flex-col items-center   justify-center  gap-[31px] text-center xlg:flex-row">
          {cardsData?.map((data) => {
            return (
              <>
                <Link rel="stylesheet" href={`/blog/${data._id}`}>
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

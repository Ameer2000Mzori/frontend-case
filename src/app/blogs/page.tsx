import React from 'react';

import Link from 'next/link';

import { HeroComponent } from 'app/shared/heroComponent';
import { pagesTypes } from 'app/types/pagesTypes';

import { TopicsButtons } from '@/src/app/shared/topicsButtons';
import { PreprSdk } from '@/src/server/prepr';

import BlogCard from '../shared/card';
import { Pagination } from '../shared/pagination';

const bodyInputs: pagesTypes = {
  image: '',
  title: '',
  description: '',
};

export default async function Blog() {
  const response = await PreprSdk.pages({ id: '3837c994-0641-410f-bad5-c907db5f35a8' });
  const blogTagResponse = await PreprSdk.search_blog({
    where: { _tags_any: null },
    limit: 9,
    skip: 0,
  });
  const blogs = blogTagResponse?.Blogs?.items;
  const blogsTotal = blogTagResponse?.Blogs?.total;

  bodyInputs.title = response?.Page?.page_header?.title;
  bodyInputs.description = response?.Page?.page_header?.text;
  bodyInputs.image = response?.Page?.page_header?.image?.url;

  return (
    <>
      <div>
        <div className="inset-0 flex h-[250px] flex-col items-center justify-center  overflow-hidden text-center  xlg:h-[300px] ">
          <HeroComponent heroInputs={bodyInputs} />
        </div>
      </div>
      <div className=" flex w-[100%] flex-col items-center justify-center gap-[32px] bg-white pb-[32px]  text-center ">
        <TopicsButtons />
      </div>
      <div className="flex h-[auto] w-[100%]  flex-row flex-wrap justify-center gap-[15px] bg-white">
        <div className="flex w-[80%] flex-row  flex-wrap justify-center gap-[31px]">
          {blogs?.length == 0 && <h1>there is no blogs</h1>}
          {blogs?.map((blog) => {
            return (
              <Link rel="stylesheet" href={`/blog/${blog._id}`}>
                <BlogCard cardData={blog} />
              </Link>
            );
          })}
        </div>
      </div>
      <Pagination pagBlogs={blogsTotal} />
    </>
  );
}

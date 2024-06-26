import React from 'react';

import Link from 'next/link';

import BlogCard from 'app/shared/card';
import extractValues from 'app/shared/extractValues';
import { HeroComponent } from 'app/shared/heroComponent';
import { Pagination } from 'app/shared/pagination';
import { pagesTypes } from 'app/types/pagesTypes';

import { TopicsButtons } from '@/src/app/shared/topicsButtons';
import { PreprSdk } from '@/src/server/prepr';

const bodyInputs: pagesTypes = {
  image: '',
  title: '',
  description: '',
};

export default async function Blog({
  ...params
}: {
  params: { id: any };
  searchParams: { search: string };
}) {
  let { id } = params.params;
  let { search } = params.searchParams;

  let { filteredSearch, queryParam } = extractValues(search);

  queryParam === 0 ? (queryParam = 0) : (queryParam = queryParam * 9);

  id === 'id' && (id = null);

  if (search === '' || search === undefined) filteredSearch = null;

  const response = await PreprSdk.pages({ id: '3837c994-0641-410f-bad5-c907db5f35a8' });
  const blogTagResponse = await PreprSdk.search_blog({
    where: { _tags_any: id, _search: filteredSearch },
    limit: 9,
    skip: queryParam,
  });

  const blogs = blogTagResponse?.Blogs?.items;
  const blogsTotal = blogTagResponse?.Blogs?.total;

  bodyInputs.title = response?.Page?.page_header?.title;
  bodyInputs.description = response?.Page?.page_header?.text;
  bodyInputs.image = response?.Page?.page_header?.image?.url;

  return (
    <>
      <div>
        <div className="inset-0 flex h-[250px] flex-col items-center justify-center  overflow-hidden text-center  xlg:h-[300px]">
          <HeroComponent heroInputs={bodyInputs} />
        </div>
      </div>
      <div className=" flex w-[100%] flex-col items-center justify-center gap-[32px] bg-white pb-[32px]  text-center ">
        <TopicsButtons />
      </div>
      <div className="flex h-[auto] w-[100%]  flex-row flex-wrap justify-center gap-[15px] bg-white">
        <div className="flex min-h-[100vh] w-[80%] flex-row  flex-wrap justify-center gap-[31px]">
          {blogs?.length === 0 && (
            <h1 className="w-[75%] text-center font-Barlow text-[40px]  font-bold leading-[35px] text-[#0e1527] xlg:w-[60%] xlg:text-[72px] xlg:leading-[72px]">
              THERE IS NO BLOGS
            </h1>
          )}
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

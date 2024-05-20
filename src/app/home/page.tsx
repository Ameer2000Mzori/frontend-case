import React from 'react';

import Cards from 'app/shared/cardsList';
import { HeroComponent } from 'app/shared/heroComponent';
import { bodyInputs, bodyInputsType } from 'app/types';

import { PreprSdk } from '@/src/server/prepr';

export default async function HomePage() {
  const response = await PreprSdk.pages({ id: '597d4a8e-baaa-4e5a-8712-7ebc55314e11' });
  console.log(response.Page);

  bodyInputs.title = response?.Page?.page_header?.title;
  bodyInputs.description = response?.Page?.page_header?.text;
  bodyInputs.image = response?.Page?.page_header?.image?.url;

  let cardsData: Array<any> = [];

  const cardsResponse = await PreprSdk.latestBlogs({ skip: 0, limit: 3 });
  if (cardsResponse?.Blogs?.items) {
    cardsData = cardsResponse.Blogs.items;
  }

  return (
    <div>
      <div className=" mt-[1px] flex h-[600px]  flex-col items-center justify-center gap-2 overflow-hidden border-t border-white text-center">
        <HeroComponent heroInputs={bodyInputs} />
      </div>
      <div className="bg-white">
        <Cards cardsData={cardsData} />
      </div>
    </div>
  );
}

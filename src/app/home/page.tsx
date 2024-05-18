import React from 'react';

import Cards from 'app/shared/cardsList';
import { HeroComponent } from 'app/shared/heroComponent';
import { bodyInputs } from 'app/types';

import { PreprSdk } from '@/src/server/prepr';

interface PageData {
  Page: {
    page_header: {
      title: string;
      _id: string;
    };
  };
}
export default function HomePage() {
  const fetchData = async () => {
    try {
      const response = await PreprSdk.Example({ Slug: '/blog' });
      console.log(response);
    } catch (err: any) {
      console.log(err);
    } finally {
    }
  };

  fetchData();

  return (
    <div>
      <div className=" mt-[1px] flex h-[600px]  flex-col items-center justify-center gap-2 overflow-hidden border-t border-white text-center">
        <HeroComponent heroInputs={bodyInputs} />
      </div>
      <div className="bg-white">
        <Cards />
      </div>
    </div>
  );
}

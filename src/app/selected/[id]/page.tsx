import React from 'react';

import Image from 'next/image';

import Badge from 'app/shared/badge';
import Cards from 'app/shared/cardsList';
import { HeroComponent } from 'app/shared/heroComponent';
import { blogsInputs } from 'app/types/blogsInputs';

import { PreprSdk } from '@/src/server/prepr';

export default async function BlogPost() {
  let cardsData: Array<any> = [];
  const cardsResponse = await PreprSdk.relatedBlog({
    similarBlogsId: 'f4ae37a2-2a7f-450e-b7b7-2e8a996e2c09',
    limit: 3,
  });
  if (cardsResponse?.Similar_Blogs?.items) {
    cardsData = cardsResponse.Similar_Blogs.items;
  }

  console.log('everything is here', cardsData);

  return (
    <div>
      <div className=" flex h-[300px]  flex-col items-center justify-center gap-2 overflow-hidden  text-center">
        <HeroComponent heroInputs={blogsInputs} />
      </div>

      <div className=" flex h-[auto] w-[100%] flex-col items-center justify-start bg-white pb-[80px]  text-start text-[#0E1527]">
        <div className=" mt-[55px] flex h-[auto] w-[80%] flex-col items-start justify-start pt-[15px] text-start text-[0E1527]">
          <div className=" relative  h-[32px] bg-white">
            <Badge Input="INTERVIEW" />
          </div>
          <h2 className=" title-text w-[70%] text-[48px] leading-[56px]">
            H2 - Working at 2DIGITS, according to developer Ryence
          </h2>

          <p className="description-text mt-[32px] w-[82%] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Magnis dis parturient montes nascetur
            ridiculus mus mauris vitae ultricies. Commodo odio aenean sed adipiscing diam donec
            adipiscing tristique risus. Eu sem integer vitae justo eget magna fermentum. Tellus
            molestie nunc non blandit massa enim nec dui.
          </p>

          <h3 className="title-text mt-[32px]  w-[70%] text-[36px] leading-[56px] ">
            H3 - Wordpress
          </h3>

          <p className="description-text mt-[24px] w-[82%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Magnis dis parturient montes nascetur
            ridiculus mus mauris vitae ultricies. Commodo odio aenean sed adipiscing diam donec
            adipiscing tristique risus. Eu sem integer vitae justo eget magna fermentum. Tellus
            molestie nunc non blandit massa enim nec dui.
            <br />
            <br />
            Tellus id interdum velit laoreet id donec. Eu scelerisque felis imperdiet proin. Blandit
            libero volutpat sed cras ornare arcu dui. Euismod in pellentesque massa placerat duis.
            Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. At elementum eu
            facilisis sed odio morbi quis commodo.
          </p>

          <h4 className="title-text mt-[24px]   w-[70%] text-[21px] leading-[23px]">
            H4 - Wordpress
          </h4>

          <p className="description-text mt-[16px] w-[82%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Magnis dis parturient montes nascetur
            ridiculus mus mauris vitae ultricies. Commodo odio aenean sed adipiscing diam donec
            adipiscing tristique risus. Eu sem integer vitae justo eget magna fermentum. Tellus
            molestie nunc non blandit massa enim nec dui.
            <br />
            <br />
            Tellus id interdum velit laoreet id donec. Eu scelerisque felis imperdiet proin. Blandit
            libero volutpat sed cras ornare arcu dui. Euismod in pellentesque massa placerat duis.
            Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. At elementum eu
            facilisis sed odio morbi quis commodo.
          </p>

          <h4 className="title-text mt-[24px]  w-[70%] text-[18px] leading-[24px]">
            H5 - Wordpress
          </h4>

          <p className="description-text mt-[16px]    w-[82%] text-[16px] leading-[17px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Magnis dis parturient montes nascetur
            ridiculus mus mauris vitae ultricies. Commodo odio aenean sed adipiscing diam donec
            adipiscing tristique risus. Eu sem integer vitae justo eget magna fermentum. Tellus
            molestie nunc non blandit massa enim nec dui.
          </p>

          <ul className="description-text mt-[16px] w-[70%]  list-disc pl-[25px] text-[16px] leading-[17px] ">
            <li>Tellus id interdum velit laoreet id donec. </li>
            <li>
              Eu scelerisque felis imperdiet proin. Blandit libero volutpat sed cras ornare arcu
              dui.
            </li>
            <li>Euismod in pellentesque massa placerat duis.</li>
            <li>Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. </li>
            <li>At elementum eu facilisis sed odio morbi quis commodo.</li>
          </ul>

          <div className="mt-[32px] h-[617px] w-[823px]">
            <Image
              className=" h-[100%] w-[100%] object-cover object-center"
              src={blogsInputs.image}
              alt="blog_image"
            />
          </div>

          <h1 className=" title-text mt-[32px] w-[700] font-Barlow text-[36px]">Table tennis</h1>

          <p className="description-text mt-[24px] w-[82%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Magnis dis parturient montes nascetur
            ridiculus mus mauris vitae ultricies. Commodo odio aenean sed adipiscing diam donec
            adipiscing tristique risus. Eu sem integer vitae justo eget magna fermentum. Tellus
            molestie nunc non blandit massa enim nec dui.
            <br />
            <br />
            Tellus id interdum velit laoreet id donec. Eu scelerisque felis imperdiet proin. Blandit
            libero volutpat sed cras ornare arcu dui. Euismod in pellentesque massa placerat duis.
            Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. At elementum eu
            facilisis sed odio morbi quis commodo.
          </p>
        </div>
      </div>
      <div className="h-[642px] w-[100%] bg-[#EFEFF8]">
        <Cards cardsData={cardsData} />
      </div>
    </div>
  );
}
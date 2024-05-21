import React from 'react';

import Badge from 'app/shared/badge';
import Cards from 'app/shared/cardsList';
import { HeroComponent } from 'app/shared/heroComponent';

import { PreprSdk } from '@/src/server/prepr';

import { pagesTypes } from '../../types/pagesTypes';

const bodyInputs: pagesTypes = {
  image: '',
  title: '',
  description: '',
};

export default async function BlogPost({ params }: { params: { id: string } }) {
  // console.log('this is params', params);

  let cardsData: Array<any> = [];
  const cardsResponse = await PreprSdk.relatedBlog({
    similarBlogsId: params.id,
    limit: 3,
  });

  const cardData = await PreprSdk.oneBlog({ id: params.id });

  if (cardsResponse?.Similar_Blogs?.items) {
    cardsData = cardsResponse.Similar_Blogs.items;
  }

  bodyInputs.image = cardData.Blog?.banner_image?.url;

  return (
    <div>
      <div className=" flex h-[300px]  flex-col items-center justify-center gap-2 overflow-hidden  text-center">
        <HeroComponent heroInputs={bodyInputs} />
      </div>

      <div className=" flex h-[auto] w-[100%] flex-col items-center justify-start bg-white pb-[80px]  text-start text-[#0E1527]">
        <div className=" mt-[55px] flex h-[auto] w-[90%] flex-col items-start justify-start pt-[15px] text-start text-[0E1527] xlg:w-[80%]">
          <div className=" relative  h-[32px] bg-white">
            <Badge Input="INTERVIEW" />
          </div>
          <h2 className=" title-text w-[100%] text-[35px] leading-[56px] xlg:w-[70%] xlg:text-[48px]">
            {cardData.Blog?.title}
          </h2>

          <p className="description-text mt-[32px] w-[90%] xlg:w-[82%] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Magnis dis parturient montes nascetur
            ridiculus mus mauris vitae ultricies. Commodo odio aenean sed adipiscing diam donec
            adipiscing tristique risus. Eu sem integer vitae justo eget magna fermentum. Tellus
            molestie nunc non blandit massa enim nec dui.
          </p>

          <h3 className="title-text mt-[32px]  w-[90%] text-[36px] leading-[56px] xlg:w-[70%] ">
            H3 - Wordpress
          </h3>

          <p className="description-text mt-[24px] w-[90%] xlg:w-[82%]">
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

          <h4 className="title-text mt-[24px] w-[90%] text-[21px] leading-[23px] xlg:w-[70%]">
            H4 - Wordpress
          </h4>

          <p className="description-text mt-[16px] w-[90%] xlg:w-[82%]">
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

          <h4 className="title-text mt-[24px]  w-[90%] text-[18px] leading-[24px] xlg:w-[70%]">
            H5 - Wordpress
          </h4>

          <p className="description-text mt-[16px]  w-[90%] text-[16px] leading-[17px] xlg:w-[82%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Magnis dis parturient montes nascetur
            ridiculus mus mauris vitae ultricies. Commodo odio aenean sed adipiscing diam donec
            adipiscing tristique risus. Eu sem integer vitae justo eget magna fermentum. Tellus
            molestie nunc non blandit massa enim nec dui.
          </p>

          <ul className="description-text mt-[16px] w-[90%]  list-disc pl-[25px] text-[16px] leading-[17px] xlg:w-[70%] ">
            <li>Tellus id interdum velit laoreet id donec. </li>
            <li>
              Eu scelerisque felis imperdiet proin. Blandit libero volutpat sed cras ornare arcu
              dui.
            </li>
            <li>Euismod in pellentesque massa placerat duis.</li>
            <li>Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. </li>
            <li>At elementum eu facilisis sed odio morbi quis commodo.</li>
          </ul>

          <div className=" mt-[32px] flex  h-[250px]  items-center justify-center text-center xlg:h-[617px] xlg:w-[823px] ">
            IMAGE
          </div>

          <h1 className=" title-text mt-[32px] w-[90%] font-Barlow text-[30px] xlg:w-[70%]">
            Table tennis
          </h1>

          <p className="description-text mt-[24px] w-[90%] xlg:w-[82%]">
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
      <div className="h-[auto] w-[100%] bg-[#EFEFF8] xlg:h-[642px]">
        <Cards title={'Gerelateerde blogs'} cardsData={cardsData} />
      </div>
    </div>
  );
}

import React from 'react';

import Badge from '../shared/badge';
import { HeroComponent } from '../shared/heroComponent';
import { blogsInputs } from '../types/blogsInputs';

export default function BlogPost() {
  return (
    <div>
      <div className=" flex h-[300px]  flex-col items-center justify-center gap-2 overflow-hidden  text-center">
        <HeroComponent heroInputs={blogsInputs} />
      </div>

      <div className=" flex h-[auto] w-[100%] flex-col items-center justify-start bg-white  text-start text-[#0E1527]">
        <div className=" mt-[55px] flex h-[auto] w-[80%] flex-col items-start justify-start pt-[15px] text-start text-[0E1527]">
          <div className=" relative  h-[32px]   bg-white ">
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

          <p className="title-text mt-[16px]   w-[70%] text-[16px] leading-[17px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Magnis dis parturient montes nascetur
            ridiculus mus mauris vitae ultricies. Commodo odio aenean sed adipiscing diam donec
            adipiscing tristique risus. Eu sem integer vitae justo eget magna fermentum. Tellus
            molestie nunc non blandit massa enim nec dui.
          </p>

          <ul className="title-text mt-[16px] w-[70%]  list-disc pl-[25px] text-[16px] leading-[17px] ">
            <li>Tellus id interdum velit laoreet id donec. </li>
            <li>
              Eu scelerisque felis imperdiet proin. Blandit libero volutpat sed cras ornare arcu
              dui.
            </li>
            <li>Euismod in pellentesque massa placerat duis.</li>
            <li>Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. </li>
            <li>At elementum eu facilisis sed odio morbi quis commodo.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

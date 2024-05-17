import React from 'react';

import Badge from '../shared/badge';
import { HeroComponent } from '../shared/heroComponent';
import { blogsInputs } from '../types/blogsInputs';

export default function BlogPost() {
  return (
    <div>
      <div className="mt-[1px] flex h-[300px]  flex-col items-center justify-center gap-2 overflow-hidden  text-center">
        <HeroComponent heroInputs={blogsInputs} />
      </div>
      <div className=" flex h-[1000px] w-[100%]  flex-col items-center justify-start bg-white text-start">
        <div className=" relative mt-[62px] h-[40px]  w-[80%] bg-white ">
          <Badge Input="INTERVIEW" />
        </div>

        <div className=" w-[80%]">
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur ullam accusantium
            dicta. Consectetur repellat illum, incidunt laudantium sequi aliquid quo autem quis
            optio quas voluptatem obcaecati impedit! Repellendus, dolorum vero.
          </h1>
        </div>
      </div>
    </div>
  );
}

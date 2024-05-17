import React from 'react';

import { HeroComponent } from '../shared/heroComponent';
import { blogsInputs } from '../types/blogsInputs';

export default function blog() {
  return (
    <div className=" mt-[1px] flex h-[300px]  flex-col items-center justify-center gap-2 overflow-hidden  text-center">
      <HeroComponent heroInputs={blogsInputs} />;
    </div>
  );
}

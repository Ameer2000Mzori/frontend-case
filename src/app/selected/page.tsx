import React from 'react';

import Badge from '../shared/badge';
import { HeroComponent } from '../shared/heroComponent';
import { blogsInputs } from '../types/blogsInputs';

export default function BlogPost() {
  return (
    <div className="flex  flex-col justify-center gap-[62px]">
      <div className="mt-[1px] flex h-[300px]  flex-col items-center justify-center gap-2 overflow-hidden  text-center">
        <HeroComponent heroInputs={blogsInputs} />
      </div>
      <Badge Input="INTERVIEW" />
    </div>
  );
}

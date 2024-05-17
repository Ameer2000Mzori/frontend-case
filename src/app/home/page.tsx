import React from 'react';

import { HeroComponent } from '../shared/heroComponent';
import { bodyInputs } from '../types';
import Cards from './components/cards';

export default function HomePage() {
  return (
    <div>
      <div className=" mt-[1px] flex h-[600px]  flex-col items-center justify-center gap-2 overflow-hidden border-t border-white text-center">
        <HeroComponent heroInputs={bodyInputs} />
      </div>
      <Cards />
    </div>
  );
}

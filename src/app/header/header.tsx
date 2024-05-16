import React from 'react';

import Link from 'next/link';

export default function Header() {
  return (
    <div>
      <Link href="/"></Link>
      <Link href="/blog">
        <p>Home</p>
      </Link>
      <Link href="/blog">
        <p>About</p>
      </Link>
    </div>
  );
}

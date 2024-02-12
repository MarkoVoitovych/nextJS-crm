import MagicButton from '@/app/components/magik-button';
import React from 'react';

export interface PageProps {}

function Page({}: PageProps) {
  return (
    <main>
      <h1 className="text-xl">Dashboard Page Dashboard Page</h1>
      <MagicButton />
    </main>
  );
}

export default Page;

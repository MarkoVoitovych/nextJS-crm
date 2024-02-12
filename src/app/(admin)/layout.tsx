import React from 'react';

import Sidebar from '@/app/components/sidebar';

export interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Sidebar />
      <div>{children}</div>
    </>
  );
}

export default Layout;

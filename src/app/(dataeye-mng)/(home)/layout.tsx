'use client';

import Breadcrumbs from '@/components/common/breadcrumbs';
import Footer from '@/components/common/footer';
import Header from '@/components/common/header';
import Sidebar from '@/components/common/sidebar';
import { useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };

  console.log(isCollapsed);

  return (
    <div className="flex min-h-screen overflow-auto">
      <Sidebar isCollapsed={isCollapsed} />
      <div
        className={`flex flex-col transition-all ${
          isCollapsed ? 'w-full' : 'w-full'
        }`}
      >
        <Header toggleSidebar={toggleSidebar} />
        <Breadcrumbs />
        <div className="flex-grow bg-slate-400">{children}</div>
        <Footer />
      </div>
    </div>
  );
}

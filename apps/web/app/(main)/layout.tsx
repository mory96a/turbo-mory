import type {PropsWithChildren} from 'react';
import {Header} from '@/components/layout/header';

export default function MainLayout({children}: PropsWithChildren) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}

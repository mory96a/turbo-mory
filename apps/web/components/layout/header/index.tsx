import Link from 'next/link';
import {AuthButtons} from './auth-buttons';
import {DesktopNav} from './desktop-nav';
import {MobileNav} from './mobile-nav';

const NAV_LINKS = [
  {href: '/articles', label: 'Articles'},
  {href: '/categories', label: 'Categories'},
  {href: '/about', label: 'About'},
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold">
          Turbo Articles
        </Link>

        <DesktopNav links={NAV_LINKS} />

        <div className="flex items-center gap-4">
          <AuthButtons />
          <MobileNav links={NAV_LINKS} />
        </div>
      </div>
    </header>
  );
}

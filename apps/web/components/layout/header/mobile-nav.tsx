'use client';

import {
  Button,
  MenuIcon,
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  VisuallyHidden,
} from '@repo/ui';
import Link from 'next/link';
import {AuthButtons} from './auth-buttons';

interface NavLink {
  href: string;
  label: string;
}

interface MobileNavProps {
  links: NavLink[];
}

export function MobileNav({links}: MobileNavProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <MenuIcon className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[280px] pt-12">
        <VisuallyHidden>
          <SheetTitle>Navigation Menu</SheetTitle>
        </VisuallyHidden>
        <nav className="flex flex-col gap-2">
          {links.map(link => (
            <SheetClose key={link.href} asChild>
              <Link
                href={link.href}
                className="text-lg font-medium px-4 py-2 rounded-md hover:bg-accent transition-colors"
              >
                {link.label}
              </Link>
            </SheetClose>
          ))}
        </nav>
        <div className="mt-6 border-t pt-4 px-4">
          <AuthButtons mobile />
        </div>
      </SheetContent>
    </Sheet>
  );
}

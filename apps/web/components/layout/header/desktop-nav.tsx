import Link from 'next/link';

interface NavLink {
  href: string;
  label: string;
}

interface DesktopNavProps {
  links: NavLink[];
}

export function DesktopNav({links}: DesktopNavProps) {
  return (
    <nav className="hidden md:flex items-center gap-6">
      {links.map(link => (
        <Link
          key={link.href}
          href={link.href}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

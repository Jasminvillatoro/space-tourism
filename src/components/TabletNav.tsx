'use client';
import { NavLogo } from './NavLogo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const TabletNav = () => {
  const currentPath = usePathname();
  interface Page {
    href: string;
    page: string;
  }

  const pages: Page[] = [
    { href: '/', page: 'HOME' },
    { href: '/destination/1', page: 'DESTINATION' },
    { href: '/crew/1', page: 'CREW' },
    { href: '/technology/1', page: 'TECHNOLOGY' },
  ];

  return (
    <div className='hidden md:block w-[729px] h-24'>
      <div className='flex items-center justify-between mt-4 pl-6 pt-1'>
        <NavLogo />
        <ul className='flex justify-center-safe items-center'>
          {pages.map((page) => {
            return (
              <li key={page.href}>
                <Link
                  href={page.href}
                  className={`${
                    currentPath == page.href
                      ? 'underline decoration-[4px]  underline-offset-[36px]'
                      : 'no-underline'
                  } font-light tracking-[0.1475rem] font-barlow text-base m-2 px-2 `}>
                  {page.page}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

'use client';
import { NavLogo } from './NavLogo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const DesktopNav = () => {
  const currentPath = usePathname();
  interface Page {
    href: string;
    page: string;
  }

  const pages: Page[] = [
    { href: '/', page: '00 HOME' },
    { href: '/destination/1', page: '01 DESTINATION' },
    { href: '/crew/1', page: '02 CREW' },
    { href: '/technology/1', page: '03 TECHNOLOGY' },
  ];

  return (
    <div className='hidden lg:block'>
      <div className='flex justify-center items-center w-[1064px] h-24 mt-10 pl-10'>
        <NavLogo />
        <hr className='w-[110px] border-0 border-b border-white/20' />
        <ul className='h-24 w-[830px] flex justify-around items-center inset-0 bg-gradient-to-r from-transparent to-black/20 backdrop-blur-md'>
          {pages.map((page) => {
            return (
              <li key={page.href}>
                <Link
                  href={page.href}
                  className={`${
                    currentPath == page.href
                      ? 'underline decoration-[4px]  underline-offset-[36px]'
                      : 'no-underline'
                  } font-light tracking-[0.1475rem] font-barlow text-base m-2 px-2  `}>
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

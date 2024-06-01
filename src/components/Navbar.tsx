'use client';
import Image from 'next/image';
import logo from '/Users/jasminvillatoro/space-tourism/public/assets/shared/logo.svg';
import hamburger from '/Users/jasminvillatoro/space-tourism/public/assets/shared/icon-hamburger.svg';
import { SideNavbar } from './SideNavbar';
import { useState } from 'react';
import Link from 'next/link';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  return (
    <header>
      <div className='flex justify-between items-center mt-6 mx-auto max-w-[327px]'>
        <Link href='/'>
          <Image
            src={logo}
            alt='logo'
            width={40}
            height={40}
            className='hover:cursor-pointer'
          />
        </Link>
        <Image
          src={hamburger}
          alt='hamburger menu'
          width={21}
          height={24}
          onClick={toggle}
          className='w-[21px] h-6 hover:cursor-pointer'
        />
      </div>
      <div className='relative'>
        <SideNavbar isOpen={isOpen} toggle={toggle} />
      </div>
    </header>
  );
};

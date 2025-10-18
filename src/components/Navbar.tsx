'use client';
import Image from 'next/image';
import { NavLogo } from './NavLogo';
import { SideNavbar } from './SideNavbar';
import { useState } from 'react';
import hamburger from '../../public/assets/shared/icon-hamburger.svg';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  return (
    <header>
      <div className='flex justify-between items-center mt-6 mx-auto max-w-[327px] md:hidden'>
        <NavLogo />
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

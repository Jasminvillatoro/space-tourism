'use client';
import Image from 'next/image';
import logo from '/Users/jasminvillatoro/space-tourism/public/assets/shared/logo.svg';
import hamburger from '/Users/jasminvillatoro/space-tourism/public/assets/shared/icon-hamburger.svg';
import { SideNavbar } from './SideNavbar';
import { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className='flex justify-between items-center mt-6 mx-auto max-w-[327px]'>
        <Image src={logo} alt='logo' width={40} height={40} />
        <Image
          src={hamburger}
          alt='hamburger menu'
          width={21}
          height={24}
          onClick={toggle}
          className='w-[21px] h-6'
        />
      </div>
      <div className='relative'>
        <SideNavbar isOpen={isOpen} toggle={toggle} />
      </div>
    </>
  );
};

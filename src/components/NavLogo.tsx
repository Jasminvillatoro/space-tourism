import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/assets/shared/logo.svg';
export const NavLogo = () => {
  return (
    <div>
      <Link href='/'>
        <Image
          src={logo}
          alt='logo'
          width={40}
          height={40}
          className='hover:cursor-pointer md:w-[48px] md:h-[48px]'
        />
      </Link>
    </div>
  );
};

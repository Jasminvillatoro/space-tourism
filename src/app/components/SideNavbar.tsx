'import client';
import Image from 'next/image';
import Link from 'next/link';
import hamburgerClose from '/Users/jasminvillatoro/space-tourism/public/assets/shared/icon-close.svg';
export const SideNavbar = () => {
  const openMenu = () => {
    console.log('clicked');
  };
  return (
    <div className='bg-gray-800'>
      <Image
        src={hamburgerClose}
        alt='hamburger menu'
        width={21}
        height={24}
        onClick={openMenu}
        className='w-[21px] h-6'
      />
      <ul>
        <li>
          <Link href='/'>
            <p>00 Home</p>
          </Link>
        </li>
        <li>
          <Link href='/destination'>
            <p>01 Destination</p>
          </Link>
        </li>
        <li>
          <Link href='/crew'>
            <p>02 Crew</p>
          </Link>
        </li>
        <li>
          <Link href='/technology'>
            <p>03 Technology</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

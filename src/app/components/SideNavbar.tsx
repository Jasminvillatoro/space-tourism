'import client';
import Image from 'next/image';
import Link from 'next/link';
import hamburgerClose from '/Users/jasminvillatoro/space-tourism/public/assets/shared/icon-close.svg';
export const SideNavbar = () => {
  const openMenu = () => {
    console.log('clicked');
  };
  return (
    <div className='absolute -top-[64px] right-0'>
      <div className='w-64 h-screen backdrop-blur-xl bg-white/10  flex flex-col'>
        <Image
          src={hamburgerClose}
          alt='hamburger menu'
          width={21}
          height={20}
          onClick={openMenu}
          className='w-[21px] h-6 float-right ml-auto mr-6 mt-6'
        />
        {/* create array of objects later on and map through it */}
        <ul className=' '>
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
    </div>
  );
};

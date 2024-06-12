'import client';
import Image from 'next/image';
import Link from 'next/link';
import hamburgerClose from '../../public/assets/shared/icon-close.svg';
type Props = {
  isOpen: boolean;
  toggle: React.MouseEventHandler;
};
export const SideNavbar = (props: Props) => {
  return (
    <div className='absolute -top-[64px] right-0 font-barlow font-thin uppercase '>
      {props.isOpen ? (
        <div
          className='w-64 h-screen backdrop-blur-2xl flex flex-col'
          onClick={props.toggle}>
          <Image
            src={hamburgerClose}
            alt='hamburger menu'
            width={21}
            height={6}
            className='w-auto h-auto float-right ml-auto mr-6 mt-6 hover:cursor-pointer'
          />
          {/* create array of objects later on and map through it */}
          <ul className='mt-14 ml-10 flex flex-col gap-6'>
            <li>
              <Link href='/' className='tracking-[0.169rem]'>
                <p>
                  <span className='font-bold'>00 </span>Home
                </p>
              </Link>
            </li>
            <li>
              <Link href='/destination/1' className='tracking-[0.169rem]'>
                <p>
                  <span className='font-bold  '>01 </span>
                  Destination
                </p>
              </Link>
            </li>
            <li>
              <Link href='/crew' className='tracking-[0.169rem]'>
                <p>
                  <span className='font-bold  '>02 </span>Crew
                </p>
              </Link>
            </li>
            <li>
              <Link href='/technology' className='tracking-[0.169rem]'>
                <p>
                  <span className='font-bold'>03 </span>
                  Technology
                </p>
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

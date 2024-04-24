import Image from 'next/image';
import logo from '/Users/jasminvillatoro/space-tourism/public/assets/shared/logo.svg';
import hamburger from '/Users/jasminvillatoro/space-tourism/public/assets/shared/icon-hamburger.svg';

export const Navbar = () => {
  return (
    <div className='flex justify-between items-center mt-6 mx-6'>
      <Image src={logo} alt='logo' width={40} height={40} />
      <Image
        src={hamburger}
        alt='hamburger menu'
        width={21}
        height={24}
        className='w-[21px] h-6'
      />
    </div>
  );
};

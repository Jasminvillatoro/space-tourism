'use client';
import Image from 'next/image';
import desktopHomeBg from '../../public/assets/home/background-home-desktop.jpg';
import tabletHomeBg from '../../public/assets/home/background-home-tablet.jpg';
import mobileHomeBg from '../../public/assets/home/background-home-mobile.jpg';

export const Background = () => {
  return (
    <div className='fixed inset-0 -z-10'>
      {/* Mobile */}
      <Image
        src={mobileHomeBg}
        alt='Home background mobile'
        priority
        fill
        className='object-cover block md:hidden'
        sizes='100vw'
      />

      {/* Tablet */}
      <Image
        src={tabletHomeBg}
        alt='Home background tablet'
        priority
        fill
        className='object-cover hidden md:block lg:hidden'
        sizes='100vw'
      />

      {/* Desktop */}
      <Image
        src={desktopHomeBg}
        alt='Home background desktop'
        priority
        className='object-cover hidden lg:block'
        fill
        sizes='100vw'
      />
    </div>
  );
};

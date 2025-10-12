import Image from 'next/image';
import desktopHomeBg from '../../public/assets/home/background-home-desktop.jpg';

export const Background = () => {
  return (
    <div className='h-full w-screen -z-10 fixed'>
      <Image
        src={desktopHomeBg} // fallback (desktop)
        alt='Home space background'
        fill
        priority
        sizes='(max-width: 767px) 100vw,
               (max-width: 1239px) 100vw,
               100vw'
        className='object-cover'
      />
    </div>
  );
};

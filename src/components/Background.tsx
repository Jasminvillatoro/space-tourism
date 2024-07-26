import Image from 'next/image';
import { unstable_getImgProps as getImgProps } from 'next/image';
import mobileHomeBg from '../../public/assets/home/background-home-mobile.jpg';
import tabletHomeBg from '../../public/assets/home/background-home-tablet.jpg';
import desktopHomeBg from '../../public/assets/home/background-home-desktop.jpg';

export const Background = () => {
  const common = { alt: 'Home space background' };

  const {
    props: { srcSet: mobile },
  } = getImgProps({
    ...common,
    src: mobileHomeBg,
    height: '800',
  });

  const {
    props: { srcSet: tablet },
  } = getImgProps({
    ...common,
    src: tabletHomeBg,
    height: '800',
  });

  const {
    props: { srcSet: desktop },
  } = getImgProps({
    ...common,
    src: desktopHomeBg,
    height: '400',
  });
  return (
    <div className='h-full w-screen -z-10 fixed'>
      <picture>
        <source media='(max-width:767px)' srcSet={mobile} />
        <source media='(max-width:1239px)' srcSet={tablet} />
        <source media='(min-width:1240px)' srcSet={desktop} />
        <img
          src='/../../public/assets/home/background-home-desktop.jpg'
          alt='home space background'
          className='w-screen h-full'
        />
      </picture>
    </div>
  );
};

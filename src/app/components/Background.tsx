import Image from 'next/image';
import backGroundImage from '/Users/jasminvillatoro/space-tourism/public/assets/home/background-home-mobile.jpg';

export const Background = () => {
  return (
    <Image
      alt='space background image'
      placeholder='blur'
      src={backGroundImage}
      quality={100}
      fill
      sizes='100vw'
      className='object-cover -z-10'></Image>
  );
};

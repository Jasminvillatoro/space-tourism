import Image from 'next/image';
import backGroundImage from '/Users/jasminvillatoro/space-tourism/public/assets/home/background-home-mobile.jpg';

export const Background = () => {
  return (
    <Image
      alt='space background image'
      src={backGroundImage}
      placeholder='blur'
      quality={100}
      sizes='100vh'
      fill
      className=' object-cover -z-10'></Image>
  );
};

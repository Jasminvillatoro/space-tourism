import Image from 'next/image';
import backGroundImage from '/Users/jasminvillatoro/space-tourism/public/assets/home/background-home-mobile.jpg';

export const Background = () => {
  return (
    <div className='fixed -z-10 overflow-hidden h-screen w-screen -mt-16'>
      <Image
        alt='space background image'
        src={backGroundImage}
        placeholder='blur'
        quality={100}
        fill
        className='object-cover -z-10'></Image>
    </div>
  );
};

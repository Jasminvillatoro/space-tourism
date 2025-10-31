import techbg from '../../public/assets/technology/background-technology-mobile.jpg';
import Image from 'next/image';

export default function TechnologyBg() {
  return (
    <div className='fixed h-full w-screen -z-10 top-0 left-0 right-0 bottom-0'>
      <Image
        src={techbg}
        alt='destination background'
        placeholder='blur'
        quality={100}
        fill
        sizes='100vw'
        className='object-cover -z-10'></Image>
    </div>
  );
}

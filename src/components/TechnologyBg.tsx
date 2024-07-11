import techbg from '../../public/assets/technology/background-technology-mobile.jpg';
import Image from 'next/image';

export default function TechnologyBg() {
  return (
    <div className='h-full w-screen'>
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

import crewbg from '../../public/assets/crew/background-crew-mobile.jpg';
import Image from 'next/image';

export default function CrewBg() {
  return (
    <div className='fixed h-full w-screen top-0 left-0 right-0 bottom-0 -z-10'>
      <Image
        src={crewbg}
        alt='destination background'
        placeholder='blur'
        quality={100}
        fill
        sizes='100vw'
        className='object-cover -z-10'></Image>
    </div>
  );
}

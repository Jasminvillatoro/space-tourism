import destinationMobile from '../../public/assets/destination/background-destination-mobile.jpg';
import Image from 'next/image';
export default function DestinationBackground() {
  return (
    <div className='absolute h-full w-screen top-0 left-0 right-0 bottom-0'>
      <Image
        src={destinationMobile}
        alt='destination background'
        placeholder='blur'
        quality={100}
        sizes='100vw'
        fill
        className='object-cover -z-10'></Image>
    </div>
  );
}

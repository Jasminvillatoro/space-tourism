import destinationMobile from '../../public/assets/destination/background-destination-mobile.jpg';
import Image from 'next/image';
export default function DestinationBackground() {
  return (
    <div className='h-full w-screen'>
      <Image
        src={destinationMobile}
        alt='destination background'
        placeholder='blur'
        quality={100}
        fill
        sizes='100vw'
        className='object-cover -z-10'></Image>
    </div>
  );
}

import destinationMobile from '../../../public/assets/destination/background-destination-mobile.jpg';
import Image from 'next/image';
export default function Destination() {
  return (
    <div className='text-xl text-white relative -z-10 overflow-hidden h-screen w-screen -mt-16'>
      DESTINATION
      <Image
        src={destinationMobile}
        alt='destination background'
        placeholder='blur'
        quality={100}
        fill
        sizes='100vw'
        className='object-cover -z-10  '></Image>
      {/* <div className='w-20 h-20 bg-white '></div> */}
    </div>
  );
}

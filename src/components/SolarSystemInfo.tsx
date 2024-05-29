import Image from 'next/image';
import moon from '../../public/assets/destination/image-moon.png';
import Link from 'next/link';
// import { spaceFacts } from '../app/information/space-info';
// I'm just going to create a new page for every moon or planet I will need a dynamic route
const spaceObjects = ['MOON', 'MARS', 'EUROPA', 'TITAN'];
export const SolarSystemInfo = () => {
  return (
    <div className='pt-44 pb-12 flex flex-col items-center'>
      <h2 className='font-barlow tracking-[0.169rem] text-xs'>
        <span className='opacity-25'>01 </span>PICK YOUR DESTINATION
      </h2>
      <Image src={moon} alt='moon' width={170} height={170} className='mt-6' />
      <ul className='flex gap-x-4 mt-8 font-barlow tracking-[0.169rem] text-xs'>
        {spaceObjects.map((item, index) => {
          return (
            <li
              key={index}
              className='pb-1 border-b-4 border-b-transparent hover:border-b-white'>
              <Link href='/destination'>
                <p className='text-sm text-[#D0D6F9] hover:text-white'>
                  {item}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
      <h1 className='my-4 text-[56px] mt-8'>MOON</h1>
      <p className='w-[327px] px-6 font-barlow text-center text-base bg-opacity-60 text-[#D0D6F9] leading-7 tracking-wide font-extralight border-b-[1px] border-white/30 pb-8'>
        See our planet as you’ve never seen it before. A perfect relaxing trip
        away to help regain perspective and come back refreshed. While you’re
        there, take in some history by visiting the Luna 2 and Apollo 11 landing
        sites.
      </p>

      <h3 className='mt-8 font-barlow  text-sm tracking-[2.36px] text-[#D0D6F9] font-extralight'>
        AVG. DISTANCE
      </h3>
      <h2 className='mt-2 mb-6 text-2xl'>384,400 KM</h2>
      <h3 className='font-barlow text-sm tracking-[2.36px] text-[#D0D6F9] font-extralight'>
        EST. TRAVEL TIME
      </h3>
      <h2 className='mt-2 text-2xl'>3 DAYS</h2>
    </div>
  );
};

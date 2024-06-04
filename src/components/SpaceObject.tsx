import React from 'react';
import Image from 'next/image';
import moon from '../../public/assets/destination/image-moon.png';
import Link from 'next/link';
import { spaceObjects } from '@/app/lib/spaceObjects';
// work on trying to get the date to display

export const SpaceObject = () => {
  return (
    <>
      <Image src={moon} alt='moon' width={170} height={170} className='mt-6' />
      <ul className='flex gap-x-4 mt-8 font-barlow tracking-[0.169rem] text-xs'>
        {spaceObjects.map((item) => {
          return (
            <li
              key={item.id}
              className='pb-1 border-b-4 border-b-transparent hover:border-b-white'>
              <Link href='/destination'>
                <p className='text-sm text-[#D0D6F9] hover:text-white'>
                  {item.name}
                </p>
              </Link>
              <h1 className='my-4 text-[56px] mt-8'>{item.name}</h1>
              <p className='w-[327px] px-6 font-barlow text-center text-base bg-opacity-60 text-[#D0D6F9] leading-7 tracking-wide font-extralight border-b-[1px] border-white/30 pb-8'>
                {item.description}
              </p>

              <h3 className='mt-8 font-barlow  text-sm tracking-[2.36px] text-[#D0D6F9] font-extralight'>
                AVG. DISTANCE
              </h3>
              <h2 className='mt-2 mb-6 text-2xl'>{item.distance}</h2>
              <h3 className='font-barlow text-sm tracking-[2.36px] text-[#D0D6F9] font-extralight'>
                EST. TRAVEL TIME
              </h3>
              <h2 className='mt-2 text-2xl'>{item.travelTime}</h2>
            </li>
          );
        })}
      </ul>
    </>
  );
};

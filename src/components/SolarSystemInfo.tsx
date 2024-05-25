import React from 'react';
import Image from 'next/image';
import moon from '../../public/assets/destination/image-moon.png';
import { spaceInfo } from '../app/information/space-info';
import Link from 'next/link';
// import { spaceFacts } from '../app/information/space-info';
// I'm just going to create a new page for every moon or planet I will need a dynamic route
const spaceObjects = ['MOON', 'MARS', 'EUROPA', 'TITAN'];
export const SolarSystemInfo = () => {
  return (
    <div className='mt-24 flex flex-col items-center relative h-full'>
      <h2 className='font-barlow tracking-[0.169rem] text-xs  hover:bg-violet-600'>
        <span className='opacity-25'>01 </span>PICK YOUR DESTINATION
      </h2>
      <Image src={moon} alt='moon' width={170} height={170} className='mt-6' />
      <ul className='flex gap-x-4 mt-8 font-barlow tracking-[0.169rem] text-xs hover:border-b-2 hover:text-pink-500'>
        {spaceObjects.map((item, index) => {
          return (
            <li key={index}>
              <Link href='/'>
                <p>{item}</p>
              </Link>
            </li>
          );
        })}
      </ul>
      <h1 className='my-8 text-[56px]'>Moon</h1>
      <p className='w-[330px] text-center text-lg mb-4 border-b-2 bg-opacity-70'>
        See our planet as you’ve never seen it before. A perfect relaxing trip
        away to help regain perspective and come back refreshed. While you’re
        there, take in some history by visiting the Luna 2 and Apollo 11 landing
        sites.
      </p>

      <h3>AVG. DISTANCE</h3>
      <h2>384,400 km</h2>
      <h3>Est. travel time</h3>
      <h2>3 days</h2>
    </div>
  );
};

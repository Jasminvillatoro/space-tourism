import React from 'react';
import Image from 'next/image';
import moon from '../../public/assets/destination/image-moon.png';
import { spaceInfo } from '../app/information/space-info';
import Link from 'next/link';
// import { spaceFacts } from '../app/information/space-info';
export const SolarSystemInfo = () => {
  return (
    <div className='mt-14'>
      <h2>01 PICK YOUR DESTINATION</h2>
      <Image src={moon} alt='moon' width={170} height={170} />
      <ul className='flex'>
        <li>
          <Link href='/'>
            <p>Moon</p>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <p>Mars</p>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <p>Europa</p>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <p>Titan</p>
          </Link>
        </li>
      </ul>
      <h1>Moon</h1>
      <p>
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
{
  /* {spaceInfo.map((el, index) => (
        <div key={el.id}>
          <p>
            {el.name}
            {index}
          </p>
          <Image src={el.image} alt='moon' width={50} height={50} /> */
}

{
  /* ))} */
}

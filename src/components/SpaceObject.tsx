import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type images = {
  png: string;
  webp: string;
};
type spaceFacts = {
  id: number;
  images: images;
  name: string;
  description: string;
  distance: string;
  travel: string;
};

const getDestinations = async () => {
  // masked as an api end point using json-server
  const res = await fetch(' http://localhost:4000/destinations');
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }
  return res.json();
};

export const SpaceObject = async () => {
  const destinations = await getDestinations();

  return (
    <>
      <ul className='flex gap-x-4 mt-8 font-barlow tracking-[0.169rem] text-xs'>
        {destinations.map((item: spaceFacts) => {
          return (
            <div
              key={item.id}
              className='flex flex-col justify-center items-center'>
              <Image
                src={`/${item.images.png}`}
                alt='moon'
                width={170}
                height={170}
                className='mt-6'
              />
              <li className='pb-1 border-b-4 border-b-transparent hover:border-b-white '>
                <Link href='/destination'>
                  <p className='font-barlow text-sm text-[#D0D6F9] hover:text-white'>
                    {item.name}
                  </p>
                </Link>
              </li>
              <h1 className='mb-6 font-bellefair text-[56px] mt-8'>
                {item.name}
              </h1>
              <p className='w-[327px] px-6 font-barlow text-center text-base bg-opacity-60 text-[#D0D6F9] leading-7 tracking-wide font-extralight border-b-[1px] border-white/30 pb-8'>
                {item.description}
              </p>

              <h3 className='mt-8 font-barlow text-sm tracking-[2.36px] text-[#D0D6F9] font-extralight'>
                AVG. DISTANCE
              </h3>
              <h2 className='font-bellefair mt-2 mb-6 text-2xl'>
                {item.distance}
              </h2>
              <h3 className='font-barlow text-sm tracking-[2.36px] text-[#D0D6F9] font-extralight'>
                EST. TRAVEL TIME
              </h3>
              <h2 className='font-bellefair mt-2 text-2xl'>{item.travel}</h2>
            </div>
          );
        })}
      </ul>
    </>
  );
};

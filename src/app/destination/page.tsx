import { SpaceObject } from '@/components/SpaceObject';

import DestinationBackground from '@/components/DestinationBackground';

export default function DestinationPage() {
  return (
    <main className='h-full text-xl text-white -z-20 -mt-40'>
      <DestinationBackground />
      <div className='flex flex-col items-center pt-44 pb-12'>
        <h2 className='font-barlow tracking-[0.169rem] text-sm'>
          <span className='opacity-25'>01 </span>PICK YOUR DESTINATION
        </h2>
        <SpaceObject />
      </div>
    </main>
  );
}

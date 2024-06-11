import { SpaceObject } from '@/components/SpaceObject';

import DestinationBackground from '@/components/DestinationBackground';
import DestinationHeader from '@/components/DestinationHeader';

export default function DestinationPage() {
  return (
    <main className=''>
      <DestinationBackground />
      <div className='flex flex-col items-center pt-10 pb-12'>
        <DestinationHeader />
        <SpaceObject />
      </div>
    </main>
  );
}

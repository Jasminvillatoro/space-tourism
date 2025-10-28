import SpaceNavPath from './DestinationNavPath';
import { prisma } from '@/lib/prisma';

export default async function SpaceObjectsNav() {
  const destinations = await prisma.destination.findMany({
    orderBy: {
      id: 'asc',
    },
  });
  return (
    <>
      <ul className='flex justify-center items-center gap-x-4 mt-8 font-barlow tracking-[0.169rem] text-xs'>
        {destinations.map((destination) => (
          <SpaceNavPath
            key={destination.id}
            destination={destination}
            id={destination.id}
          />
        ))}
      </ul>
    </>
  );
}

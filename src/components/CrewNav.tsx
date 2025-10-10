import CrewPath from './CrewPath';
import { prisma } from '@/lib/prisma';

export default async function CrewNav() {
  const crew = await prisma.crew.findMany();

  return (
    <>
      <ul className='flex gap-x-4 mt-8 font-barlow tracking-[0.169rem] text-xs'>
        {crew.map((crew) => (
          <CrewPath key={crew.id} crew={crew} id={crew.id} />
        ))}
      </ul>
    </>
  );
}

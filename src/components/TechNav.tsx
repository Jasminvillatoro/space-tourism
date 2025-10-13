import TechPath from './TechPath';
import { prisma } from '@/lib/prisma';

export default async function TechNav() {
  const technology = await prisma.technology.findMany({
    orderBy: {
      id: 'asc',
    },
  });
  return (
    <>
      <ul className='flex gap-x-4 mt-10 mb-6 font-barlow tracking-[0.169rem] text-xs'>
        {technology.map((technology) => {
          return (
            <TechPath
              key={technology.id}
              id={technology.id}
              technology={technology}
            />
          );
        })}
      </ul>
    </>
  );
}

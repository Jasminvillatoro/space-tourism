import TechnologyBg from '@/components/TechnologyBg';
import Title from '@/components/PageSubHeader';
import Image from 'next/image';
import TechNav from '@/components/TechNav';
import { prisma } from '@/lib/prisma';

export default async function Technology({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const technologyId = Number(id);
  const technology = await prisma.technology.findUnique({
    where: { id: technologyId },
  });

  if (!technology) return <h1>technology not found</h1>;
  return (
    <main className='text-black flex flex-col justify-center items-center pt-10 pb-12'>
      <TechnologyBg />
      <Title order='03' title='SPACE LAUNCH 101' />
      <Image
        src={`/${technology.images}`}
        alt='technology'
        width={170}
        height={170}
        className='mt-8 w-[375px]'
      />
      <TechNav />
      <h2 className='font-barlow text-[#D0D6F9] text-sm tracking-widest font-thin mb-2'>
        THE TERMINOLOGY…
      </h2>
      <h1 className='text-white text-2xl uppercase tracking-wide mb-3'>
        {technology.name}
      </h1>
      <p className='w-[327px] h-[175px] align-top  font-barlow text-center text-base bg-opacity-60 text-[#D0D6F9] leading-7 tracking-wider font-extralight'>
        {technology.description}
      </p>
    </main>
  );
}

import TechnologyBg from '@/components/TechnologyBg';
import Title from '@/components/PageSubHeader';
import Image from 'next/image';
import TechNav from '@/components/TechNav';
import { prisma } from '@/lib/prisma';

export default async function Technology({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const technologyId = Number(id);
  const technology = await prisma.technology.findUnique({
    where: { id: technologyId },
  });

  if (!technology) return <h1>technology not found</h1>;
  return (
    <div className=''>
      <TechnologyBg />
      <main className='md:hidden text-black flex flex-col justify-center items-center pt-10 pb-12'>
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
      {/* TABLET */}
      <div className='hidden md:block'>
        <main className='text-black flex flex-col justify-center items-center pt-10 pb-12'>
          <div className='font-barlow tracking-[0.21125rem] text-white text-center text-xl self-start ml-10 font-thin'>
            <h2>
              <span className='opacity-25 mr-1'>03</span> SPACE LAUNCH 101
            </h2>
          </div>
          <div className='relative w-full h-[310px]'>
            <Image
              src={`/${technology.images}`}
              alt='technology'
              fill
              className='cover mt-8'
            />
          </div>
          <TechNav />
          <h2 className='font-barlow text-[#D0D6F9] text-base tracking-[0.16875rem] font-thin my-2'>
            THE TERMINOLOGY…
          </h2>
          <h1 className='text-white text-[40px] uppercase mb-3'>
            {technology.name}
          </h1>
          <p className='w-[458px] h-[140px] font-barlow text-center text-base bg-opacity-60 text-[#D0D6F9] leading-7 tracking-wider font-extralight'>
            {technology.description}
          </p>
        </main>
      </div>
      {/* DESKTOP */}
      <div className='hidden lg:block'>
        <main className='text-black flex flex-col justify-center items-center pt-10 pb-12'></main>
      </div>
    </div>
  );
}

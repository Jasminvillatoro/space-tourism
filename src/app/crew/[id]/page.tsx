import CrewBg from '@/components/CrewBg';
import Title from '@/components/PageSubHeader';
import Image from 'next/image';
import CrewNav from '@/components/CrewNav';
import { prisma } from '@/lib/prisma';

export default async function CrewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const crewId = Number(id);
  const crew = await prisma.crew.findUnique({
    where: { id: crewId },
  });

  if (!crew) return <h1>Crew not found</h1>;
  return (
    <div>
      <CrewBg />
      <main className='text-black flex flex-col justify-center items-center pt-10 pb-12 md:hidden'>
        <h2 className='font-barlow tracking-[0.169rem] text-lg text-white text-center md:text-xl md:text-left lg:text-3xl lg:tracking-[0.295rem] lg:ml-0 lg:font-thin'>
          <span className='opacity-25'>02</span> MEET YOUR CREW
        </h2>
        <Image
          src={`/${crew.images}`}
          alt={crew.name}
          width={170}
          height={170}
          className='mt-8 ml-8'
        />
        <div className='h-[1px] w-80 bg-white/10'></div>
        <CrewNav />
        <h2 className='mt-8 font-bellefair text-white opacity-50 text-xs text-center uppercase tracking-widest w-[108px]'>
          {crew.role}
        </h2>
        <h1 className='w-[327px] text-white font-bellefair text-2xl text-center uppercase mt-2 mb-3'>
          {crew.name}
        </h1>
        <p className='w-[327px] px-6 font-barlow text-center text-base bg-opacity-60 text-[#D0D6F9] leading-7 tracking-wide font-extralight pb-8'>
          {crew.bio}
        </p>
      </main>
      {/* Tablet */}
      <div className='hidden md:block lg:hidden'>
        <main className=' text-black flex flex-col justify-center items-center pt-10 pb-12 '>
          <div className='font-barlow tracking-[0.21125rem] text-white text-center text-xl self-start ml-10 font-thin lg:text-3xl lg:tracking-[0.295rem]'>
            <h2>
              <span className='opacity-25 mr-1'>02</span> MEET YOUR CREW
            </h2>
          </div>
          <h2 className='mt-8 font-bellefair text-white opacity-50 text-2xl text-center uppercase tracking-widest]'>
            {crew.role}
          </h2>
          <h1 className='text-white font-bellefair text-[40px] text-center uppercase mt-2 mb-3'>
            {crew.name}
          </h1>
          <p className='w-[458px] h-[84px]font-barlow text-center text-base bg-opacity-60 text-[#D0D6F9] leading-7 font-extralight mb-2 px-4'>
            {crew.bio}
          </p>
          <CrewNav />
          <div className='flex justify-center items-center mt-10'>
            <Image
              src={`/${crew.images}`}
              alt={crew.name}
              width={0}
              height={0}
              sizes='100vh'
              className='cover w-[450px] h-[500px]'
            />
          </div>
        </main>
      </div>
      {/* Desktop */}
      <div className='hidden lg:block'>
        <main className='text-black flex justify-around pt-10 pb-12'>
          <div className='text-left w-[600px]'>
            <div className='font-barlow text-white font-thin text-3xl tracking-[0.295rem]'>
              <h2>
                <span className='opacity-25'>02</span> MEET YOUR CREW
              </h2>
            </div>
            <h2 className='mt-28 font-bellefair text-white opacity-50 text-[32px] uppercase tracking-widest'>
              {crew.role}
            </h2>
            <h1 className='text-white font-bellefair text-[56px] uppercase mt-2 mb-3'>
              {crew.name}
            </h1>
            <p className='w-[444px] h-[128px]font-barlow text-lg bg-opacity-60 text-[#D0D6F9] leading-8 font-extralight mb-24'>
              {crew.bio}
            </p>
            <CrewNav />
          </div>
          <div className='flex justify-center items-center'>
            <Image
              src={`/${crew.images}`}
              alt={crew.name}
              width={0}
              height={0}
              sizes='100vh'
              className='cover w-[450px] h-[600px]'
            />
          </div>
        </main>
      </div>
    </div>
  );
}

import DestinationBackground from '@/components/DestinationBackground';
import Title from '@/components/PageSubHeader';
import DestinationNav from '@/components/DestinationNav';
import Image from 'next/image';
import { prisma } from '@/lib/prisma';

export default async function SpaceObjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const destinationId = Number(id);
  const destination = await prisma.destination.findUnique({
    where: { id: destinationId },
  });

  if (!destination) return <h1>Destination not found</h1>;
  return (
    <div>
      <DestinationBackground />
      <main className='pt-10 pb-12 flex flex-col justify-center items-center lg:flex-row'>
        <div
          key={destination.id}
          className='flex flex-col justify-center items-center md:text-left lg:flex-row lg:gap-32'>
          <div>
            <Title order='01' title='PICK YOUR DESTINATION' />
            <div className='flex justify-center items-center lg:mt-12'>
              <Image
                src={`/${destination.images}`}
                alt='Destination Images'
                width={0}
                height={0}
                sizes='100vw'
                className='mt-8 h-[170px] w-[170px] md:h-[300px] md:w-[300px] lg:w-[430px] lg:h-[430px]'
              />
            </div>
          </div>
          <div className='lg:m-0 lg:p-0 lg:flex lg:flex-col lg:justify-start lg:items-start lg:w-[445px] lg:h-[472px] lg:mt-18'>
            <DestinationNav />
            <h1 className='font-bellefair text-[56px] text-center md:block md:my-2 lg:text-[100px]'>
              {destination.name}
            </h1>
            <p className='w-[327px] px-6 font-barlow text-center text-base bg-opacity-60 text-[#D0D6F9] leading-7 tracking-wide font-extralight border-b-[1px] border-white/30 pb-8 md:w-[520px] md:border-white/20 lg:text-lg lg:text-left lg:leading-8 lg:pb-10 lg:pl-0 lg:border-white/30'>
              {destination.description}
            </p>
            {/* Mobile */}
            <div className='block md:hidden text-center'>
              <h3 className='mt-8 font-barlow text-sm tracking-[2.36px] text-[#D0D6F9] font-extralight'>
                AVG. DISTANCE
              </h3>
              <h2 className='font-bellefair mt-2 mb-6 text-2xl'>
                {destination.distance}
              </h2>
              <h3 className='font-barlow text-sm tracking-[2.36px] text-[#D0D6F9] font-extralight'>
                EST. TRAVEL TIME
              </h3>
              <h2 className='font-bellefair mt-2 text-2xl'>
                {destination.travel}
              </h2>
            </div>

            {/* TABLET */}
            <div className='hidden md:flex justify-center text-center lg:text-left'>
              <div className='m-6 lg:ml-0'>
                <h3 className='mt-8 font-barlow text-sm tracking-[2.36px] text-[#D0D6F9] font-extralight md:mt-0 md:mb-2'>
                  AVG. DISTANCE
                </h3>
                <h2 className='font-bellefair mt-2 mb-6 text-2xl md:m-0 lg:text-[28px]'>
                  {destination.distance}
                </h2>
              </div>
              <div className='m-6'>
                <h3 className='font-barlow text-sm tracking-[2.36px] text-[#D0D6F9] font-extralight md:mt-0 md:mb-2'>
                  EST. TRAVEL TIME
                </h3>
                <h2 className='font-bellefair mt-2 text-2xl md:m-0 lg:text-[28px]'>
                  {destination.travel}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

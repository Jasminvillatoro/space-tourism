import TSpaceFacts from '@/app/lib/types/TSpaceFacts';
import DestinationBackground from '@/components/DestinationBackground';
import Title from '@/components/PageSubHeader';
import SpaceObjectsNav from '@/components/SpaceObjectsNav';
import Image from 'next/image';

export async function generateStaticParams() {
  const res = await fetch('http://localhost:4000/destinations/');
  const data = await res.json();

  return data.map((item: TSpaceFacts) => ({
    id: item.id,
  }));
}

async function getDestination(id: string) {
  const res = await fetch(`http://localhost:4000/destinations/${id}`);
  const data = await res.json();
  return data;
}

export default async function SpaceObjectPage({
  params,
}: {
  params: { id: string };
}) {
  const destination = await getDestination(params.id);

  return (
    <div className='flex flex-col justify-center items-center pt-10 pb-12'>
      <DestinationBackground />
      <Title order='01' title='PICK YOUR DESTINATION' />
      <Image
        src={`/${destination.images.png}`}
        alt='crew member'
        width={170}
        height={170}
        className='mt-8'
      />
      <SpaceObjectsNav />
      <h1 className='font-bellefair text-[56px]'>{destination.name}</h1>
      <p className='w-[327px] px-6 font-barlow text-center text-base bg-opacity-60 text-[#D0D6F9] leading-7 tracking-wide font-extralight border-b-[1px] border-white/30 pb-8'>
        {destination.description}
      </p>
      <h3 className='mt-8 font-barlow text-sm tracking-[2.36px] text-[#D0D6F9] font-extralight'>
        AVG. DISTANCE
      </h3>
      <h2 className='font-bellefair mt-2 mb-6 text-2xl'>
        {destination.distance}
      </h2>
      <h3 className='font-barlow text-sm tracking-[2.36px] text-[#D0D6F9] font-extralight'>
        EST. TRAVEL TIME
      </h3>
      <h2 className='font-bellefair mt-2 text-2xl'>{destination.travel}</h2>
    </div>
  );
}

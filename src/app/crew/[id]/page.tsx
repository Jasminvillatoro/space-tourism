import CrewBg from '@/components/CrewBg';
import Title from '@/components/PageSubHeader';
import TCrew from '@/app/lib/types/TCrew';
import Image from 'next/image';
import CrewNav from '@/components/CrewNav';

export async function generateStaticParams() {
  const res = await fetch('http://localhost:4000/crew/');
  const data = await res.json();

  return data.map((item: TCrew) => ({
    id: item.id,
  }));
}

async function getCrew(id: string) {
  const res = await fetch(`http://localhost:4000/crew/${id}`);
  const data = await res.json();
  console.log(data);
  return data;
}
export default async function page({ params }: { params: { id: string } }) {
  const crew = await getCrew(params.id);
  return (
    <main className='text-black flex flex-col justify-center items-center pt-10 pb-12'>
      <CrewBg />
      <Title order='02' title='MEET YOUR CREW' />
      <Image
        src={`/${crew.images.png}`}
        alt='moon'
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
  );
}

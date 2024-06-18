import CrewBg from '@/components/CrewBg';
import Title from '@/components/PageSubHeader';
import TCrew from '@/app/lib/types/TCrew';
import Image from 'next/image';

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
        className='mt-8'
      />
      <h2 className='font-bellefair text-[56px]'>{crew.role}</h2>
      <h1 className='font-bellefair text-[56px]'>{crew.name}</h1>
      <p className='w-[327px] px-6 font-barlow text-center text-base bg-opacity-60 text-[#D0D6F9] leading-7 tracking-wide font-extralight pb-8'>
        {crew.bio}
      </p>
    </main>
  );
}

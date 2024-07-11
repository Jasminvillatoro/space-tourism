import TechnologyBg from '@/components/TechnologyBg';
import Title from '@/components/PageSubHeader';
import TTech from '@/app/lib/types/TTech';
import Image from 'next/image';
import TechNav from '@/components/TechNav';

export async function generateStaticParams() {
  const res = await fetch('http://localhost:4000/technology/');
  const data = await res.json();

  return data.map((item: TTech) => ({
    id: item.id,
  }));
}

async function getTech(id: string) {
  const res = await fetch(`http://localhost:4000/technology/${id}`);
  const data = await res.json();
  console.log(data);
  return data;
}
export default async function Technology({
  params,
}: {
  params: { id: string };
}) {
  const tech = await getTech(params.id);
  return (
    <main className='text-black flex flex-col justify-center items-center pt-10 pb-12'>
      <TechnologyBg />
      <Title order='03' title='SPACE LAUNCH 101' />
      <Image
        src={`/${tech.images.landscape}`}
        alt='technology'
        width={170}
        height={170}
        className='mt-8 w-[375px]'
      />
      <TechNav />
      <h2 className='text-[#D0D6F9]'>THE TERMINOLOGY…</h2>
      <h1 className='text-white'>{tech.name}</h1>
      <p className='w-[327px] px-6 font-barlow text-center text-base bg-opacity-60 text-[#D0D6F9] leading-7 tracking-wide font-extralight pb-8'>
        {tech.description}
      </p>
    </main>
  );
}

import TechnologyBg from '@/components/TechnologyBg';
import Title from '@/components/PageSubHeader';
import TTech from '@/app/lib/types/TTech';
import Image from 'next/image';
import TechNav from '@/components/TechNav';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

async function getTech(id: string) {
  const res = await fetch(`http://localhost:4000/technology/${id}`);
  const data = await res.json();
  return data;
}
export default async function Technology(
  props: {
    params: Promise<{ id: string }>;
  }
) {
  const params = await props.params;
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
      <h2 className='font-barlow text-[#D0D6F9] text-sm tracking-widest font-thin mb-2'>
        THE TERMINOLOGY…
      </h2>
      <h1 className='text-white text-2xl uppercase tracking-wide mb-3'>
        {tech.name}
      </h1>
      <p className='w-[327px] h-[175px] align-top  font-barlow text-center text-base bg-opacity-60 text-[#D0D6F9] leading-7 tracking-wider font-extralight'>
        {tech.description}
      </p>
    </main>
  );
}

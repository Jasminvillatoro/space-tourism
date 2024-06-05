import { SolarSystemInfo } from '@/components/SolarSystemInfo';
import destinationMobile from '../../../../public/assets/destination/background-destination-mobile.jpg';
import Image from 'next/image';

// Make fetch request here
const getDestinations = async () => {
  // masked as an api end point using json-server
  const res = await fetch(' http://localhost:4000/destinations');
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }
  return res.json();
};

export default async function SpaceObjectPage() {
  const destinations = await getDestinations();
  console.log(destinations);

  return (
    // <section className='bg-slate-400 flex flex-col items-center'>
    //   {/* pass down the slug stuff */}
    //   {/* create bg destination component */}
    //   <SpaceObject />
    //   <h1>Space Object</h1>
    // </section>
    <main className='h-full w-screen text-xl text-white -z-20 overflow-hidden -mt-40'>
      <div className='relative h-full w-screen'>
        <Image
          src={destinationMobile}
          alt='destination background'
          placeholder='blur'
          quality={100}
          fill
          sizes='100vw'
          className='object-cover -z-10'></Image>
        <SolarSystemInfo />
      </div>
    </main>
  );
}

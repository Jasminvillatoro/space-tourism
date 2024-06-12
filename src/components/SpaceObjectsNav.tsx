// import Link from 'next/link';
import TSpaceFacts from '@/app/lib/types/TSpaceFacts';
import SpaceNavPath from './SpaceNavPath';

const getDestinations = async () => {
  // masked as an api end point using json-server
  const res = await fetch('http://localhost:4000/destinations/');
  const data = await res.json();
  // console.log(data);
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }
  return data;
};

export default async function SpaceObjectsNav() {
  const data = await getDestinations();

  return (
    <>
      <ul className='flex gap-x-4 mt-8 font-barlow tracking-[0.169rem] text-xs'>
        {data.map((item: TSpaceFacts) => {
          return <SpaceNavPath key={item.id} id={item.id} name={item.name} />;
        })}
      </ul>
    </>
  );
}

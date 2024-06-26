import TCrew from '@/app/lib/types/TCrew';
import CrewPath from './CrewPath';

const getCrew = async () => {
  // masked as an api end point using json-server
  const res = await fetch('http://localhost:4000/crew/');
  const data = await res.json();
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }
  return data;
};

export default async function CrewNav() {
  const data = await getCrew();

  return (
    <>
      <ul className='flex gap-x-4 mt-8 font-barlow tracking-[0.169rem] text-xs'>
        {data.map((item: TCrew) => {
          return <CrewPath key={item.id} id={item.id} name={item.name} />;
        })}
      </ul>
    </>
  );
}

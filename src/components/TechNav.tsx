import TTech from '@/app/lib/types/TTech';
import TechPath from './TechPath';

const getTech = async () => {
  // masked as an api end point using json-server
  const res = await fetch('http://localhost:4000/technology/');
  const data = await res.json();
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }
  return data;
};

export default async function TechNav() {
  const data = await getTech();

  return (
    <>
      <ul className='flex gap-x-4 mt-8 font-barlow tracking-[0.169rem] text-xs'>
        {data.map((item: TTech) => {
          return <TechPath key={item.id} id={item.id} name={item.name} />;
        })}
      </ul>
    </>
  );
}

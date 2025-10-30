'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function CrewPath({
  id,
  crew,
}: {
  id: number;
  crew: {
    id: number;
  };
}) {
  const ref = `/crew/${id}`;
  const pathname = usePathname();
  const isActive = pathname.startsWith(ref);
  return (
    <>
      <li className='pb-1' key={crew.id}>
        <Link href={ref}>
          <div
            className={`rounded-full w-3 h-3 md:w-[10px] md:h-[10px] lg:w-[15px] lg:h-[15px] hover:bg-white ${
              isActive ? 'bg-white' : 'bg-[#979797]'
            }`}></div>
        </Link>
      </li>
    </>
  );
}

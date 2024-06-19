'use client';
import TCrew from '@/app/lib/types/TCrew';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function CrewPath(item: TCrew) {
  const ref = `/crew/${item.id}`;
  const pathname = usePathname();
  const isActive = pathname.startsWith(ref);
  return (
    <>
      <li className='pb-1' key={item.id}>
        <Link href={ref}>
          <div
            className={`rounded-full w-3 h-3 hover:bg-white ${
              isActive ? 'bg-white' : 'bg-[#979797]'
            }`}></div>
        </Link>
      </li>
    </>
  );
}

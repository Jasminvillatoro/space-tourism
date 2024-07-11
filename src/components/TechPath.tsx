'use client';
import TTech from '@/app/lib/types/TTech';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function TechPath(item: TTech) {
  const ref = `/technology/${item.id}`;
  const pathname = usePathname();
  const isActive = pathname.startsWith(ref);
  return (
    <>
      <li className='pb-1' key={item.id}>
        <Link href={ref}>
          <div
            className={`flex justify-center items-center rounded-full w-10 h-10 hover:bg-white border border-['#D0D6F9'] ${
              isActive ? 'bg-white' : 'bg-transparent'
            }`}>
            <div
              className={`text-lg  ${isActive ? 'text-black' : 'text-white'}`}>
              {item.id}
            </div>
          </div>
        </Link>
      </li>
    </>
  );
}

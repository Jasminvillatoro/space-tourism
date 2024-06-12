'use client';
import TSpaceFacts from '@/app/lib/types/TSpaceFacts';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SpaceNavPath(item: TSpaceFacts) {
  const ref = `/destination/${item.id}`;
  const pathname = usePathname();
  const isActive = pathname.startsWith(ref);
  return (
    <>
      <li className='pb-1' key={item.id}>
        <Link href={ref}>
          <p
            className={`font-barlow text-sm text-[#D0D6F9] hover:text-white ${
              isActive ? 'border-b-4' : ''
            }`}>
            {item.name}
          </p>
        </Link>
      </li>
    </>
  );
}

{
  /* <li
className={`pb-1 border-b-4 border-b-transparent border-b-white ${
  destination.href === ref
	? 'active:border-b-white'
	: 'active:border-b-pink-600'
} `}
key={item.id}>
<Link href={ref}>
  <p
	className={`font-barlow text-sm text-[#D0D6F9] hover:text-white`}>
	{item.name}
  </p>
</Link>
</li> */
}

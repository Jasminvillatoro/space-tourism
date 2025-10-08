'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SpaceNavPath({
  id,
  destination,
}: {
  id: number;
  destination: {
    id: number;
    name: string;
  };
}) {
  const ref = `/destination/${id}`;
  const pathname = usePathname();
  const isActive = pathname.startsWith(ref);
  return (
    <>
      <li className='pb-1 ' key={destination.id}>
        <Link href={`/destination/${destination.id}`}>
          <p
            className={`font-barlow text-sm text-[#D0D6F9] hover:text-white text-center ${
              isActive ? 'border-b-4' : ''
            }`}>
            {destination.name}
          </p>
        </Link>
      </li>
    </>
  );
}

'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function TechPath({
  id,
  technology,
}: {
  id: number;
  technology: {
    id: number;
  };
}) {
  const ref = `/technology/${id}`;
  const pathname = usePathname();
  const isActive = pathname.startsWith(ref);
  return (
    <>
      <li className='pb-1' key={technology.id}>
        <Link href={ref}>
          <div
            className={`flex justify-center items-center rounded-full w-10 h-10 hover:bg-white border border-['#D0D6F9'] ${
              isActive ? 'bg-white' : 'bg-transparent'
            }`}>
            <div
              className={`text-lg  ${isActive ? 'text-black' : 'text-white'}`}>
              {technology.id}
            </div>
          </div>
        </Link>
      </li>
    </>
  );
}

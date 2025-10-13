import SpaceNavPath from './SpaceNavPath';
import { prisma } from '@/lib/prisma';

export default async function SpaceObjectsNav() {
  const destinations = await prisma.destination.findMany(); // runs only on server

  return (
    <>
      <ul className='flex justify-center items-center gap-x-4 mt-8 font-barlow tracking-[0.169rem] text-xs'>
        {destinations.map((destination) => (
          <SpaceNavPath
            key={destination.id}
            destination={destination}
            id={destination.id}
          />
        ))}
      </ul>
    </>
  );
}

// <>
//     <ul className='flex gap-x-4 mt-8 font-barlow tracking-[0.169rem] text-xs'>
//       return <SpaceNavPath/>;
//     </ul>
//   </>

// <>
//   <ul className='flex gap-x-4 mt-8 font-barlow tracking-[0.169rem] text-xs'>
//     {destinations.map((destination) => (
//       <div key={destination.id}>
//         <li className='pb-1'>
//           <Link href={`/destination/${destination.id}`}>
//             <p
//               className={`font-barlow text-sm text-[#D0D6F9] hover:text-white`}>
//               {destination.name}
//             </p>
//           </Link>
//         </li>
//       </div>
//     ))}
//   </ul>
// </>

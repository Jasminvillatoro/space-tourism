// import { spaceFacts } from '../app/information/space-info';
// I'm just going to create a new page for every moon or planet I will need a dynamic route
import { SpaceObject } from './SpaceObject';
export const SolarSystemInfo = () => {
  return (
    <main className='pt-44 pb-12 flex flex-col items-center'>
      <h2 className='font-barlow tracking-[0.169rem] text-sm'>
        <span className='opacity-25'>01 </span>PICK YOUR DESTINATION
      </h2>
      <SpaceObject />
    </main>
  );
};

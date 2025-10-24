import { Background } from '../components/Background';
import { HeroText } from '../components/HeroText';
import { HomeCircle } from '../components/HomeCircle';
export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center lg:flex-row lg:mt-24'>
      <Background />
      <HeroText />
      <HomeCircle />
    </main>
  );
}

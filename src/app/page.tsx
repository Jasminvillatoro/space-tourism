import { Background } from '../components/Background';
import { HeroText } from '../components/HeroText';
import { HomeCircle } from '../components/HomeCircle';
export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center'>
      <Background />
      <HeroText />
      <HomeCircle />
    </main>
  );
}

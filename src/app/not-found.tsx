import Link from 'next/link';

export default function NotFound() {
  return (
    <main
      className='text-black w-[200px] h-[200px] flex justify-center items-center flex-col mx-auto
    '>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href='/'>Return Home</Link>
    </main>
  );
}

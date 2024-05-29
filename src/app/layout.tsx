import type { Metadata } from 'next';
import { Bellefair, Barlow_Condensed } from 'next/font/google';
import './globals.css';
import { Navbar } from '../components/Navbar';

const bellefair = Bellefair({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bellefair',
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['100', '200', '400'],
  style: 'normal',
  variable: '--font-barlow-condensed',
});

export const metadata: Metadata = {
  title: 'Space Tourism',
  description: 'Space Tourism Website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`
    ${bellefair.variable}  ${barlowCondensed.variable} `}>
      <body className='text-white mx-auto max-w-[1440px] '>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

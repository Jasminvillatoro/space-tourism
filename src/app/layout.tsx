import type { Metadata } from 'next';
import { Bellefair, Barlow_Condensed } from 'next/font/google';
import './globals.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

const bellefair = Bellefair({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bellefair',
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: '400',
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
    ${bellefair.variable} ${barlowCondensed.variable}`}>
      <body className='text-pink-500'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

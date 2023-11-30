import type { Metadata } from 'next';
import { Bellefair, Barlow_Condensed } from 'next/font/google';
import './globals.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

const bellefair = Bellefair({
  subsets: ['latin-ext'],
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
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`
        ${bellefair.variable} ${barlowCondensed.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

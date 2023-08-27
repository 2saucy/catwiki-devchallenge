import './globals.css';
import 'material-icons/iconfont/material-icons.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import LogoSvg from '@/components/LogoSvg';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CatWiki | Home',
  description: 'App to learn more about your cat breed',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${montserrat.className} flex flex-col justify-between max-lg:px-6 lg:px-24`}
      >
        <header className='py-7'>
          <Link href='/'>
            <LogoSvg fill='black' styles='w-[127px] h-[43px]' />
          </Link>
        </header>
        {children}
        <footer className='flex justify-between gap-4 rounded-t-[42px] bg-black p-7 text-white max-sm:flex-col sm:items-center'>
          <LogoSvg fill='white' styles='w-[127px] h-[42px]' />
          <p className='max-sm:text-sm sm:text-lg'>
            © created by 2saucy - devChallenge.io 2023
          </p>
        </footer>
      </body>
    </html>
  );
}

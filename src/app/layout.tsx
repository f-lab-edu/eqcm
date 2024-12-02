import type { Metadata } from 'next';
import localFont from 'next/font/local';

import MSWProvider from '@/lib/msw';
import AuthProvider from '@/components/authProvider';
import './globals.css';

export const metadata: Metadata = {
  title: '감도 깊은 취향 셀렉트샵',
  description: '29cm clone app',
};

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

const campton = localFont({
  src: [
    {
      path: './fonts/campton/CamptonThin.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/campton/CamptonThinItalic.otf',
      weight: '200',
      style: 'italic',
    },
    {
      path: './fonts/campton/CamptonBook.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/campton/CamptonMedium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/campton/CamptonSemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/campton/CamptonBold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-campton',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${campton.variable} ${pretendard.variable}`}>
      <body className="relative flex flex-col justify-between h-dvh">
        <MSWProvider>
          <AuthProvider>{children}</AuthProvider>
        </MSWProvider>
      </body>
    </html>
  );
}

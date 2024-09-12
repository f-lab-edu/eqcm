import type { Metadata } from 'next';

import Header from '@/components/header';
import Footer from '@/components/footer';

import './globals.css';

export const metadata: Metadata = {
  title: 'eqcm',
  description: '29cm clone app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <Header />
      <body>{children}</body>
      <Footer />
    </html>
  );
}

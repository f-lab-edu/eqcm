'use client';

import { SessionProvider } from 'next-auth/react';
import React from 'react';

import Header from '@/components/header';
import Footer from '@/components/footer';
import BottomMenu from '@/components/bottomMenu';

interface Props {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  return (
    <SessionProvider>
      <Header />
      {children}
      <Footer />
      <BottomMenu />
    </SessionProvider>
  );
};

export default AuthProvider;

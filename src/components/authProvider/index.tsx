'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Header from '@/components/header';
import Footer from '@/components/footer';
import BottomMenu from '@/components/bottomMenu';

interface Props {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

const AuthProvider = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      {children}
      <Footer />
      <BottomMenu />
    </QueryClientProvider>
  );
};

export default AuthProvider;

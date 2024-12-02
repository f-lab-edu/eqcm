'use client';

import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useSetAtom } from 'jotai';

import Header from '@/components/header';
import Footer from '@/components/footer';
import BottomMenu from '@/components/bottomMenu';
import { checkLoginStatus, isLoggedInAtom } from '@/store/auth';

interface Props {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

const AuthProvider = ({ children }: Props) => {
  const setIsLoggedIn = useSetAtom(isLoggedInAtom);

  useEffect(() => {
    setIsLoggedIn(checkLoginStatus());
  }, [setIsLoggedIn]);

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

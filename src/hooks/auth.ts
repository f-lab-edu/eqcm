import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { useSetAtom } from 'jotai';

import { fetchEmailLogin, fetchNaverLogin } from '@/fetch/auth';
import { authTokenManager, isLoggedInAtom } from '@/store/auth';
import { EmailLoginType } from '@/types/join';
import { LoginResponse } from '@/types/response';

export function useEmailLogin(onErrorHandler: (error: string) => void) {
  const router = useRouter();
  const setIsLoggedIn = useSetAtom(isLoggedInAtom);

  return useMutation({
    mutationFn: (data: EmailLoginType) => fetchEmailLogin(data),
    onSuccess: ({ data }: LoginResponse) => {
      authTokenManager.setTokens(data.accessToken, data.refreshToken);
      setIsLoggedIn(true);
      router.push('/');
    },
    onError: (error) => {
      authTokenManager.clearTokens();
      setIsLoggedIn(false);
      onErrorHandler(error.message);
    },
  });
}

export function useNaverLogin(onErrorHandler: (error: string) => void) {
  const setIsLoggedIn = useSetAtom(isLoggedInAtom);

  return useMutation({
    mutationFn: fetchNaverLogin,
    onSuccess: ({ data }: LoginResponse) => {
      authTokenManager.setTokens(data.accessToken, data.refreshToken);
      setIsLoggedIn(true);
    },
    onError: (error) => {
      authTokenManager.clearTokens();
      setIsLoggedIn(false);
      onErrorHandler(error.message);
    },
  });
}

export function useLogout() {
  const setIsLoggedIn = useSetAtom(isLoggedInAtom);

  return () => {
    authTokenManager.clearTokens();
    setIsLoggedIn(false);
  };
}

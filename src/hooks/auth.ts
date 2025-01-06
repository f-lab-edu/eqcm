import { useSetAtom } from 'jotai';

import { fetchEmailLogin, fetchNaverLogin } from '@/fetch/auth';
import { authTokenManager, isLoggedInAtom } from '@/store/auth';
import { EmailLoginType } from '@/types/join';
import { useLoginMutation } from './useAuthMutation';

export function useEmailLogin(onErrorHandler: (error: string) => void) {
  return useLoginMutation<EmailLoginType>(fetchEmailLogin, onErrorHandler);
}

export function useNaverLogin() {
  return useLoginMutation(fetchNaverLogin);
}

export function useLogout() {
  const setIsLoggedIn = useSetAtom(isLoggedInAtom);

  return () => {
    authTokenManager.clearTokens();
    setIsLoggedIn(false);
  };
}

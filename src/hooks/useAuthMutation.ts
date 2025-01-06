import { authTokenManager, isLoggedInAtom } from '@/store/auth';
import { LoginResponse } from '@/types/response';
import { useMutation } from '@tanstack/react-query';
import { useSetAtom } from 'jotai';
import { useRouter } from 'next/navigation';

export function useLoginMutation<T>(
  mutationFn: (data: T) => Promise<LoginResponse>,
  onErrorHandler?: (error: string) => void,
) {
  const router = useRouter();
  const setIsLoggedIn = useSetAtom(isLoggedInAtom);

  return useMutation({
    mutationFn,
    onSuccess: ({ data }: LoginResponse) => {
      authTokenManager.setTokens(data.accessToken, data.refreshToken);
      setIsLoggedIn(true);
      router.push('/');
    },
    onError: (error) => {
      authTokenManager.clearTokens();
      setIsLoggedIn(false);
      onErrorHandler?.(error.message);
    },
  });
}

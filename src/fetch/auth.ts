import { fetchData } from '.';
import { LoginResponse } from '@/types/response';
import { EmailLoginType } from '@/types/join';

export async function fetchNaverLogin() {
  return fetchData<LoginResponse>({ url: '/login/naver', method: 'get' });
}

export async function fetchEmailLogin(body: EmailLoginType) {
  return fetchData<LoginResponse>({
    url: '/login/email',
    method: 'post',
    body,
  });
}

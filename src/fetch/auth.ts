import { fetchData } from '.';
import { LoginResponse } from '@/types/response';
import { EmailLoginType } from '@/types/join';

export async function fetchNaverLogin() {
  return fetchData<LoginResponse>('/login/naver', 'get');
}

export async function fetchEmailLogin(body: EmailLoginType) {
  return fetchData<LoginResponse>('/login/email', 'post', body);
}

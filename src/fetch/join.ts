import { EmailJoinBodyType } from '@/types/join';
import { BaseResponse } from '@/types/response';
import { fetchData } from '.';

export async function fetchEmailJoin(body: EmailJoinBodyType) {
  return fetchData<BaseResponse>({ url: '/join/email', method: 'post', body });
}

export async function fetchSendOTP(body: { phoneNumber: string }) {
  return fetchData<BaseResponse>({
    url: '/join/send/otp/phone',
    method: 'post',
    body,
  });
}

export async function fetchVerifyOTP(body: {
  phoneNumber: string;
  otp: number;
}) {
  return fetchData<BaseResponse>({
    url: '/join/verify/otp/phone',
    method: 'post',
    body,
  });
}

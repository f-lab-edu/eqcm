import { EmailJoinBodyType } from '@/types/join';
import { BaseResponse } from '@/types/response';
import { fetchData } from '.';

export async function fetchEmailJoin(body: EmailJoinBodyType) {
  return fetchData<BaseResponse>('/join/email', 'post', body);
}

export async function fetchSendOTP(body: { phoneNumber: string }) {
  return fetchData<BaseResponse>('/join/send/otp/phone', 'post', body);
}

export async function fetchVerifyOTP(body: {
  phoneNumber: string;
  otp: number;
}) {
  return fetchData<BaseResponse>('/join/verify/otp/phone', 'post', body);
}

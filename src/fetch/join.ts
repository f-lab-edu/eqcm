import { EmailJoinBodyType } from '@/types/join';
import { BaseResponse, DataResponse } from '@/types/response';
import axios from 'axios';

export async function fetchEmailJoin(body: EmailJoinBodyType) {
  return await axios.post<BaseResponse>(
    process.env.NEXT_PUBLIC_API_SERVER + '/join/email',
    body,
  );
}

export async function fetchSendOTP(body: { phoneNumber: string }) {
  return await axios.post<DataResponse>(
    process.env.NEXT_PUBLIC_API_SERVER + '/join/send/otp/phone',
    body,
  );
}

export async function fetchVerifyOTP(body: {
  phoneNumber: string;
  otp: number;
}) {
  return await axios.post<BaseResponse>(
    process.env.NEXT_PUBLIC_API_SERVER + '/join/verify/otp/phone',
    body,
  );
}

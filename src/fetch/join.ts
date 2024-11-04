import { EmailJoinBodyType } from '@/types/join';
import { BaseResponse } from '@/types/response';
import axios from 'axios';

export async function fetchEmailJoin(body: EmailJoinBodyType) {
  return await axios.post<BaseResponse>(
    process.env.NEXT_PUBLIC_API_SERVER + '/join/email',
    body,
  );
}

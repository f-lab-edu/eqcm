import axios from 'axios';
import { EmailLoginType, JoinBodyType, SocialLoginType } from '@/types/join';
import { LoginResponse } from '@/types/response';

export async function fetchNaverAgreement(accessToken: string) {
  try {
    const instance = axios.create({
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const agreementResponse = await instance.get(
      'https://openapi.naver.com/v1/nid/agreement',
    );
    return agreementResponse.data.agreementInfos;
  } catch (error) {
    throw new Error('Failed to fetch agreement info');
  }
}

export async function fetchSocialJoin(body: JoinBodyType) {
  try {
    const response = await axios.post<LoginResponse>(
      process.env.NEXT_PUBLIC_API_SERVER + '/join/social',
      body,
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch social join');
  }
}

export async function fetchSocialLogin(body: SocialLoginType) {
  try {
    const response = await axios.post<LoginResponse>(
      process.env.NEXT_PUBLIC_API_SERVER + '/login/social',
      body,
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch social login');
  }
}

export async function fetchEmailLogin(body: EmailLoginType) {
  try {
    const response = await axios.post<LoginResponse>(
      process.env.NEXT_PUBLIC_API_SERVER + '/login/email',
      body,
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch email login');
  }
}

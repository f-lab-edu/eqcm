import { z } from 'zod';

export const EmailFormSchema = z
  .string()
  .min(3, { message: '이메일(아이디)를 입력해주세요.' })
  .email({ message: '이메일 형식이 올바르지 않습니다.' });

export const PasswordFormSchema = z
  .string()
  .min(1, { message: '비밀번호를 입력해주세요.' })
  .min(8, { message: '비밀번호는 8자 이상이어야 합니다.' });

export const PhoneFormSchema = z
  .string()
  .min(1, { message: '휴대폰 번호를 입력하세요.' })
  .refine((phone) => /^\d{10,11}$/.test(phone), {
    message: '유효한 휴대폰 번호를 입력하세요',
  });

export const SOCIAL_PROVIDER = {
  NAVER: 'NAVER',
};

export const SHOPPING_STEP = {
  SHOPPING_BAG: '01 SHOPPING BAG',
  ORDER: '02 ORDER',
  ORDER_CONFIRM: '03 ORDER CONFIRM',
};

export const API_BASE_URL =
  process.env.NODE_ENV === 'test' ? '' : process.env.NEXT_PUBLIC_API_SERVER;

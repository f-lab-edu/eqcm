import { z } from 'zod';

export const EmailFormSchema = z
  .string()
  .min(3, { message: '이메일(아이디)를 입력해주세요.' })
  .email({ message: '이메일 형식이 올바르지 않습니다.' });

export const PasswordFormSchema = z
  .string()
  .min(1, { message: '비밀번호를 입력해주세요.' })
  .min(8, { message: '비밀번호는 8자 이상이어야 합니다.' });

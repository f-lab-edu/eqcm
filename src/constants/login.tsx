import { Icons } from '@/components/icons';
import { z } from 'zod';
import {
  EmailLoginFormData,
  LoginButtonType,
  LoginMenuType,
} from '@/types/login';
import { InputFieldType } from '@/types/common';
import { EmailFormSchema, PasswordFormSchema } from './common';

export const LOGIN_BUTTON_LIST: LoginButtonType[] = [
  {
    icon: <Icons.naver />,
    text: '네이버로 계속하기',
    link: '',
    style: 'bg-[#03c75a] text-white',
  },
  {
    icon: <Icons.email />,
    text: '이메일로 계속하기',
    link: '/login/email',
    style: 'border border-[#000]',
  },
];

export const LOGIN_HELP_MENU_LIST: LoginMenuType[] = [
  {
    text: '계정 찾기',
    link: '',
  },
  {
    text: '비밀번호 찾기',
    link: '',
  },
  {
    text: '문의하기',
    link: '',
  },
];

export const LoginFormSchema = z.object({
  email: EmailFormSchema,
  password: PasswordFormSchema,
});

export const EmailLoginFieldList: InputFieldType<EmailLoginFormData>[] = [
  {
    type: 'text',
    name: 'email' as keyof EmailLoginFormData,
    title: '이메일(아이디)',
    placeholder: 'abc@email.com',
  },
  {
    type: 'password',
    name: 'password' as keyof EmailLoginFormData,
    title: '비밀번호',
    placeholder: '8자 이상의 비밀번호',
  },
];

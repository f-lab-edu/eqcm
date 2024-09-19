import { Icons } from '@/components/icons';
import { z } from 'zod';
import {
  EmailLoginFieldType,
  EmailLoginFormData,
  LoginButtonType,
  LoginMenuType,
} from '@/types/login';

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
  email: z
    .string()
    .min(3, { message: '이메일(아이디)를 입력해주세요.' })
    .email({ message: '이메일 형식이 올바르지 않습니다.' }),
  password: z
    .string()
    .min(1, { message: '비밀번호를 입력해주세요.' })
    .min(8, { message: '비밀번호는 8자 이상이어야 합니다.' }),
});

export const EmailLoginFieldList: EmailLoginFieldType<EmailLoginFormData>[] = [
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

import { Icons } from '@/components/icons';
import { LoginButtonType, LoginMenuType } from '@/types/login';

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
    link: '',
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

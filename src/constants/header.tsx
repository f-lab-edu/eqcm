import { signOut } from 'next-auth/react';
import { Icons } from '@/components/icons';
import { MyMenuItemType } from '@/types/header';

export const CATEGORIES = [
  'BEST',
  'WOMEN',
  'MEN',
  'INTERIOR',
  'KITCHEN',
  'ELECTRONICS',
  'DIGITAL',
  'BEAUTY',
  'FOOD',
  'LEISURE',
  'KIDS',
  'CULTURE',
  'Event',
  'Lookbook',
] as const;

export const MENUS: string[] = [
  'Special-Order',
  'Showcase',
  'PT',
  'eqMagazine',
] as const;

export const DEFAULT_MENU: MyMenuItemType[] = [
  {
    icon: <Icons.MyPage />,
    title: 'MY PAGE',
    link: '',
    style: 'hidden md:block',
  },
  {
    icon: <Icons.MyLike />,
    title: 'MY LIKE',
    link: '',
    style: 'hidden md:block',
  },
  { icon: <Icons.ShoppingBag />, title: 'SHOPPING BAG', link: '', style: '' },
] as const;

export const USER_STATUS_MENU: { [key: string]: MyMenuItemType } = {
  LOGIN: { icon: <Icons.Login />, title: 'LOGIN', link: '/login' },
  LOGOUT: {
    icon: <Icons.Logout />,
    title: 'LOGOUT',
    link: '',
    callback: () => signOut(),
  },
} as const;

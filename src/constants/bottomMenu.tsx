import { Icons } from '@/components/icons';
import { BottomMenuType } from '@/types/bottomMenu';

export const BOTTOM_MENUS: BottomMenuType[] = [
  {
    title: 'HOME',
    iconOn: <Icons.HomeOn />,
    iconOff: <Icons.HomeOff />,
    link: '/',
  },
  {
    title: 'SHOP',
    iconOn: <Icons.ShopOn />,
    iconOff: <Icons.ShopOff />,
    link: '/shop',
  },
  {
    title: 'SEARCH',
    iconOn: <Icons.SearchOn />,
    iconOff: <Icons.SearchOff />,
    link: '/search',
  },
  {
    title: 'EQMAGAZINE',
    iconOn: <Icons.MagazineOn />,
    iconOff: <Icons.MagazineOff />,
    link: '/eqmagazine',
  },
  {
    title: 'MY',
    iconOn: <Icons.MyOn />,
    iconOff: <Icons.MyOff />,
    link: '/my',
  },
];

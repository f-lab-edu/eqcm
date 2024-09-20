import { Icons } from '@/components/icons';
import { BottomMenuType } from '@/types/bottomMenu';

export const BOTTOM_MENUS: BottomMenuType[] = [
  {
    title: 'HOME',
    iconOn: <Icons.home_on />,
    iconOff: <Icons.home_off />,
    link: '/',
  },
  {
    title: 'SHOP',
    iconOn: <Icons.shop_on />,
    iconOff: <Icons.shop_off />,
    link: '/shop',
  },
  {
    title: 'SEARCH',
    iconOn: <Icons.search_on />,
    iconOff: <Icons.search_off />,
    link: '/search',
  },
  {
    title: 'EQMAGAZINE',
    iconOn: <Icons.magazine_on />,
    iconOff: <Icons.magazine_off />,
    link: '/eqmagazine',
  },
  {
    title: 'MY',
    iconOn: <Icons.my_on />,
    iconOff: <Icons.my_off />,
    link: '/my',
  },
];

import { memo } from 'react';
import { Icons } from '../icons';
import { DEFAULT_MENU, USER_STATUS_MENU } from '@/constants/header';
import MyMenuItem from './myMenuItem';

const MyMenu = memo(function MyMenu() {
  const isLoggedIn = true;
  return (
    <ul className="flex gap-4 text-[10px] font-base">
      {DEFAULT_MENU.map((menu) => (
        <MyMenuItem key={menu.title} menu={menu} />
      ))}

      {isLoggedIn ? (
        <MyMenuItem menu={USER_STATUS_MENU.LOGOUT} />
      ) : (
        <MyMenuItem menu={USER_STATUS_MENU.LOGIN} />
      )}

      <li className="block xl:hidden cursor-pointer">
        <Icons.search_m />
      </li>
    </ul>
  );
});

export default MyMenu;

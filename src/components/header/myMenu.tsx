import { memo } from 'react';
import { useAtomValue } from 'jotai';

import MyMenuItem from './myMenuItem';
import { isLoggedInAtom } from '@/store/auth';
import { useLogout } from '@/hooks/auth';
import { DEFAULT_MENU, USER_STATUS_MENU } from '@/constants/header';
import { Icons } from '../icons';

const MyMenu = memo(function MyMenu() {
  const isLoggedIn = useAtomValue(isLoggedInAtom);

  return (
    <ul className="flex gap-4 text-[10px] font-base">
      {DEFAULT_MENU.map((menu) => (
        <MyMenuItem key={menu.title} menu={menu} />
      ))}

      {isLoggedIn ? (
        <MyMenuItem menu={USER_STATUS_MENU.LOGOUT} onClick={useLogout} />
      ) : (
        <MyMenuItem menu={USER_STATUS_MENU.LOGIN} />
      )}

      <li className="block xl:hidden cursor-pointer">
        <Icons.SearchMobile />
      </li>
    </ul>
  );
});

export default MyMenu;

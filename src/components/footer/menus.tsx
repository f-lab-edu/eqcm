import { memo } from 'react';
import MenuItem from './menuItem';
import {
  NOTICE_LIST,
  ABOUT_US_MENU_LIST,
  HELP_MENU_LIST,
  MY_ACCOUNT_MENU_LIST,
  MY_ORDER_MENU_LIST,
} from '@/constants/footer';

const Menus = memo(function Menu() {
  return (
    <div className="hidden md:flex mt-[17px] pt-[9px] pb-[6px] border-y-[1px]">
      <MenuItem title="NOTICE" list={NOTICE_LIST} style="flex-1 pr-[30px]" />
      <div className="flex justify-around">
        <MenuItem title="ABOUT US" list={ABOUT_US_MENU_LIST} />
        <MenuItem title="MY ORDER" list={MY_ORDER_MENU_LIST} />
        <MenuItem title="MY ACCOUNT" list={MY_ACCOUNT_MENU_LIST} />
        <MenuItem title="HELP" list={HELP_MENU_LIST} />
      </div>
    </div>
  );
});

export default Menus;

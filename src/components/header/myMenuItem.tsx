import Link from 'next/link';
import { memo } from 'react';

import { MyMenuItemType } from '@/types/header';

type Props = {
  menu: MyMenuItemType;
  onClick?: () => void;
};

const MyMenuItem = memo(function MyMenuItem({ menu, onClick }: Props) {
  return (
    <li className={`hidden md:block ${menu?.style}`}>
      {menu.callback ? (
        <button
          type="button"
          onClick={() => onClick?.()}
          className="flex gap-1 items-center"
        >
          {menu.icon}
          <span className="hidden xl:inline-block">{menu.title}</span>
        </button>
      ) : (
        <Link href={menu.link} className="flex gap-1 items-center">
          {menu.icon}
          <span className="hidden xl:inline-block">{menu.title}</span>
        </Link>
      )}
    </li>
  );
});

export default MyMenuItem;

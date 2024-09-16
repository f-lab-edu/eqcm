import Link from 'next/link';
import { memo } from 'react';
import { Icons } from '../icons';
import { MENUS } from '@/constants/header';

const Menu = memo(function Menu() {
  return (
    <nav className="flex my-5 items-start justify-between">
      <ul className="flex md:text-[20px] lg:text-[30px] xl:text-[40px] font-extrabold gap-5 whitespace-nowrap">
        {MENUS.map((menu) => (
          <li key={menu} className="cursor-pointer">
            <Link href="/" className="hover:shadow-[0_6px_0_0_rgba(0,0,0,1)]">
              {menu}
            </Link>
          </li>
        ))}
      </ul>
      <button className="hidden xl:block">
        <Icons.search />
      </button>
    </nav>
  );
});

export default Menu;

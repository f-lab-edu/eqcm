'use client';

import { usePathname } from 'next/navigation';
import { memo } from 'react';
import cn from 'classnames';
import { BOTTOM_MENUS } from '@/constants/bottomMenu';

const BottomMenu = memo(function BottomMenu() {
  const path = usePathname();

  return (
    <nav className="fixed left-0 right-0 bottom-0 h-14 bg-[#EFEFEF] md:hidden">
      <ul className="flex size-full items-center text-[9px]">
        {BOTTOM_MENUS.map(({ title, iconOn, iconOff, link }) => (
          <li key={title} className="w-1/5">
            <a
              href={link}
              className={cn(
                'flex flex-col items-center justify-center gap-[5px] text-[#474747]',
                path === link && 'text-black',
              )}
            >
              <span className="flex items-center h-6">
                {path === link ? iconOn : iconOff}
              </span>
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
});

export default BottomMenu;

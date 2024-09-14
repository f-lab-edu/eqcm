import Link from 'next/link';
import { memo } from 'react';

type MyMenuItem = {
  icon: JSX.Element;
  title: string;
  link: string;
  style?: string;
};

const MyMenuItem = memo(function MyMenuItem({ menu }: { menu: MyMenuItem }) {
  return (
    <li className={`hidden md:block ${menu?.style}`}>
      <Link href={menu.link} className="flex gap-1 items-center">
        {menu.icon}
        <span className="hidden xl:inline-block">{menu.title}</span>
      </Link>
    </li>
  );
});

export default MyMenuItem;

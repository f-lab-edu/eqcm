import Image from 'next/image';
import { memo } from 'react';
import MyMenu from './myMenu';
import Menu from './menu';
import Category from './category';
import Link from 'next/link';

const Header = memo(function Header() {
  return (
    <header className="bg-white sticky w-full top-0 left-0 right-0 px-5 py-2 md:px-6 md:pb-4 md:pt-10 lg:px-12 lg:pb-5">
      <div className="flex justify-between md:mb-6 h-[18px]">
        <Link href={'/'} className="h-4">
          <Image
            src="/static/images/logo.png"
            alt="logo"
            width="60"
            height="16"
          />
        </Link>
        <MyMenu />
      </div>
      <div className="hidden md:block">
        <Menu />
        <Category />
      </div>
    </header>
  );
});

export default Header;

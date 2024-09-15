import { memo } from 'react';
import CsSection from './csSection';
import Menus from './menus';
import Info from './info';

const Footer = memo(function Footer() {
  return (
    <footer className="px-[50px] pb-[50px] min-w-[900px]">
      <CsSection />
      <Menus />
      <Info />
    </footer>
  );
});

export default Footer;

import CsSection from './csSection';
import Menus from './menus';
import Info from './info';

const Footer = function Footer() {
  return (
    <footer className="bg-[#e9e9e9] md:bg-white pt-[10px] px-[15px] pb-[70px] md:pt-[20px] md:px-[50px] md:pb-[50px] md:min-w-[900px]">
      <CsSection />
      <Menus />
      <Info />
    </footer>
  );
};

export default Footer;

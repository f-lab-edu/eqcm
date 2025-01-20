import { LOGIN_HELP_MENU_LIST } from '@/constants/login';
import { LoginMenuType } from '@/types/login';

const LoginHelpMenu = () => {
  return (
    <ul className="flex justify-center gap-[30px] text-[#a0a0a0] text-[14px]">
      {LOGIN_HELP_MENU_LIST.map(({ text, link }: LoginMenuType) => (
        <li
          key={text}
          className="relative before:content-[''] before:absolute before:left-[-15px] before:top-[4px] before:w-[1px] before:h-[14px] before:bg-[#e4e4e4] first:before:hidden"
        >
          <a href={link}>{text}</a>
        </li>
      ))}
    </ul>
  );
};

export default LoginHelpMenu;

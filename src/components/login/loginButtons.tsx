import Link from 'next/link';
import { memo } from 'react';
import cn from 'classnames';
import { LOGIN_BUTTON_LIST } from '@/constants/login';

const LoginButtons = memo(function LoginButtons() {
  return (
    <div className="flex flex-col gap-[8px] pt-[80px] pb-[30px] text-[14px] font-bold">
      {LOGIN_BUTTON_LIST.map(({ icon, text, link, style }) => (
        <Link
          key={text}
          href={link}
          className={cn(
            'flex items-center justify-center gap-1 md:w-[400px] h-[52px] rounded',
            style,
          )}
        >
          {icon}
          {text}
        </Link>
      ))}
    </div>
  );
});

export default LoginButtons;

'use client';

import Link from 'next/link';

import { useNaverLogin } from '@/hooks/auth';
import { Icons } from '../icons';

const LoginButtons = () => {
  const mutateNaverLogin = useNaverLogin();

  return (
    <div className="flex flex-col gap-[8px] pt-[80px] pb-[30px] text-[14px] font-bold">
      <button
        type="button"
        onClick={mutateNaverLogin.mutate}
        className="flex items-center justify-center gap-1 md:w-[400px] h-[52px] rounded bg-[#03c75a] text-white"
      >
        <Icons.Naver />
        네이버로 계속하기
      </button>

      <Link
        href="/login/email"
        className="flex items-center justify-center gap-1 md:w-[400px] h-[52px] rounded border border-[#000]"
      >
        <Icons.Email />
        이메일로 계속하기
      </Link>
    </div>
  );
};

export default LoginButtons;

'use client';

import { memo } from 'react';
import EmailLoginForm from '@/components/login/emailLoginForm';
import LoginHelpMenu from '@/components/login/loginHelpMenu';

const EmailLogin = memo(function EmailLogin() {
  return (
    <div className="w-full py-[50px] px-[20px] md:w-[400px] mx-auto md:px-0 md:pt-[43px] md:pb-[50px] font-pretendard">
      <p className="text-[30px] font-bold">
        이메일로
        <br />
        로그인/회원가입 하기
      </p>
      <EmailLoginForm />
      <LoginHelpMenu />
    </div>
  );
});

export default EmailLogin;

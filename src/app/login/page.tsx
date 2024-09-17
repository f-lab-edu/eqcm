import { memo } from 'react';
import LoginButtons from '@/components/login/loginButtons';
import LoginHelpMenu from '@/components/login/loginHelpMenu';

const Login = memo(function Login() {
  return (
    <div className="w-full py-[50px] px-[20px] md:w-[400px] mx-auto md:px-0 md:pt-[30px] md:pb-[80px] md:text-center font-pretendard">
      <p className="text-[30px] font-bold">
        eqCM에
        <br />
        오신 것을 환영해요!
      </p>
      <LoginButtons />
      <LoginHelpMenu />
    </div>
  );
});

export default Login;

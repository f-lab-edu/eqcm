'use client';

import { memo, useCallback, useState } from 'react';
import TermsAgreement from '@/components/join/termsAgreement';
import EmailJoinForm from '@/components/join/emailJoinForm';
import PasswordJoinForm from '@/components/join/passwordJoinForm';
import { StepType } from '@/types/join';

const Join = memo(function Join() {
  const [step, setStep] = useState(2);

  const [userData, setUserData] = useState({
    term_marketing: false,
    term_ad: false,
    email: '',
    password: '',
  });

  console.log('userData', userData);

  const handleUserData = (id: string, value: boolean | string) => {
    setUserData((state) => ({
      ...state,
      [id]: value,
    }));
  };

  const handleStep = useCallback((step: number) => {
    setStep(step);
  }, []);

  const StepData: { [key: number]: StepType } = {
    0: {
      title: 'eqCM에 이용 약관에\n동의해 주세요',
      component: (
        <TermsAgreement
          onClickNextBtn={handleStep}
          onChangeData={handleUserData}
        />
      ),
    },
    1: {
      title: '로그인에 사용할\n아이디를 입력해 주세요.',
      component: (
        <EmailJoinForm
          onClickNextBtn={handleStep}
          onChangeData={handleUserData}
        />
      ),
    },
    2: {
      title: '로그인에 사용할\n비밀번호를 입력해 주세요.',
      component: (
        <PasswordJoinForm
          onClickNextBtn={handleStep}
          onChangeData={handleUserData}
        />
      ),
    },
  };

  return (
    <div className="flex flex-col w-full min-h-[650px] py-[50px] px-[20px] md:w-[400px] mx-auto md:px-0 md:pt-[43px] font-pretendard">
      <p className="text-[30px] font-bold whitespace-pre-wrap">
        {StepData[step].title}
      </p>
      <div className="h-full">{StepData[step].component}</div>
    </div>
  );
});

export default Join;

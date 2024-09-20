'use client';

import { memo, useCallback, useState } from 'react';
import TermsAgreement from '@/components/join/termsAgreement';
import EmailJoinForm from '@/components/join/emailJoinForm';
import PasswordJoinForm from '@/components/join/passwordJoinForm';
import PhoneJoinForm from '@/components/join/phoneJoinForm';
import PersonalInfoForm from '@/components/join/personalInfoForm';
import JoinSuccess from '@/components/join/joinSuccess';
import { StepType } from '@/types/join';

const Join = memo(function Join() {
  const [step, setStep] = useState(4);

  const [userData, setUserData] = useState({
    term_marketing: false,
    term_ad: false,
    email: '',
    password: '',
    phone: '',
    name: '',
    birth: '',
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
    3: {
      title: '본인인증을\n진행해 주세요',
      subtitle: '이미 가입한 계정이 있다면 알려드릴게요!',
      component: (
        <PhoneJoinForm
          onClickNextBtn={handleStep}
          onChangeData={handleUserData}
        />
      ),
    },
    4: {
      title: '이름과 생년월일을\n입력해 주세요.',
      component: (
        <PersonalInfoForm
          onClickNextBtn={handleStep}
          onChangeData={handleUserData}
        />
      ),
    },
    5: {
      title: '가입 완료!',
      subtitle: '가입을 축하해요!',
      component: <JoinSuccess />,
    },
  };

  return (
    <div className="flex flex-col w-full min-h-[650px] py-[50px] px-[20px] md:w-[400px] mx-auto md:px-0 md:pt-[43px] font-pretendard">
      <p className="text-[30px] font-bold whitespace-pre-wrap">
        {StepData[step].title}
      </p>
      {StepData[step].subtitle && <p>{StepData[step].subtitle}</p>}
      <div className="h-full">{StepData[step].component}</div>
    </div>
  );
});

export default Join;

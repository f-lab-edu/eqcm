'use client';

import { memo, useState } from 'react';
import { produce } from 'immer';

import TermsAgreement from '@/components/join/termsAgreement';
import EmailJoinForm from '@/components/join/emailJoinForm';
import PasswordJoinForm from '@/components/join/passwordJoinForm';
import PhoneJoinForm from '@/components/join/phoneJoinForm';
import PersonalInfoForm from '@/components/join/personalInfoForm';
import JoinSuccess from '@/components/join/joinSuccess';
import { JoinStepType, StepDataType, UserDataType } from '@/types/join';

const Join = memo(function Join() {
  const [userData, setUserData] = useState<UserDataType>({
    term_marketing: false,
    term_ad: false,
    email: null,
    password: null,
    phone: null,
    name: null,
    gender: null,
    birth: null,
  });

  const handleUserData = (id: keyof UserDataType, value: boolean | string) => {
    setUserData(
      produce((draft) => {
        (draft[id] as typeof value) = value;
      }),
    );
  };

  const StepData: { [key in JoinStepType]: StepDataType } = {
    TERMS_AGREEMENT: {
      title: 'eqCM에 이용 약관에\n동의해 주세요',
      component: (
        <TermsAgreement
          onClickNextBtn={() => setStep(StepData.EMAIL_INPUT)}
          onChangeData={handleUserData}
        />
      ),
    },
    EMAIL_INPUT: {
      title: '로그인에 사용할\n아이디를 입력해 주세요.',
      component: (
        <EmailJoinForm
          onClickNextBtn={() => setStep(StepData.PASSWORD_INPUT)}
          onChangeData={handleUserData}
        />
      ),
    },
    PASSWORD_INPUT: {
      title: '로그인에 사용할\n비밀번호를 입력해 주세요.',
      component: (
        <PasswordJoinForm
          onClickNextBtn={() => setStep(StepData.PHONE_VERIFICATION)}
          onChangeData={handleUserData}
        />
      ),
    },
    PHONE_VERIFICATION: {
      title: '본인인증을\n진행해 주세요',
      subtitle: '이미 가입한 계정이 있다면 알려드릴게요!',
      component: (
        <PhoneJoinForm
          onClickNextBtn={() => setStep(StepData.PERSONAL_INFO)}
          onChangeData={handleUserData}
        />
      ),
    },
    PERSONAL_INFO: {
      title: '이름과 성별, 생년월일을\n입력해 주세요.',
      component: (
        <PersonalInfoForm
          userData={userData}
          onChangeData={handleUserData}
          onClickNextBtn={() => setStep(StepData.SUCCESS)}
        />
      ),
    },
    SUCCESS: {
      title: '가입 완료!',
      subtitle: '가입을 축하해요!',
      component: <JoinSuccess />,
    },
  } as const;

  const [step, setStep] = useState(StepData.TERMS_AGREEMENT);

  return (
    <div className="flex flex-col w-full min-h-[650px] py-[50px] px-[20px] md:w-[400px] mx-auto md:px-0 md:pt-[43px] font-pretendard">
      <p className="text-[30px] font-bold whitespace-pre-wrap">{step.title}</p>
      {step.subtitle && <p>{step.subtitle}</p>}
      <div className="h-full">{step.component}</div>
    </div>
  );
});

export default Join;

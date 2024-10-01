'use client';

import { memo, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';
import { produce } from 'immer';
import TermsAgreement from '@/components/join/termsAgreement';
import EmailJoinForm from '@/components/join/emailJoinForm';
import PasswordJoinForm from '@/components/join/passwordJoinForm';
import PhoneJoinForm from '@/components/join/phoneJoinForm';
import PersonalInfoForm from '@/components/join/personalInfoForm';
import JoinSuccess from '@/components/join/joinSuccess';
import { StepType, UserDataType } from '@/types/join';
import { BaseResponse } from '@/types/response';

const Join = memo(function Join() {
  const [step, setStep] = useState(0);

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

  console.log('userData', userData);

  const mutation = useMutation({
    mutationFn: (): Promise<AxiosResponse<BaseResponse>> => {
      return axios.post<BaseResponse>(
        process.env.NEXT_PUBLIC_API_SERVER + '/join/email',
        {
          joinInfo: {
            email: userData.email,
            name: userData.name,
            gender: userData.gender,
            birthday: userData.birth,
            phoneNumber: userData.phone,
          },
          termsAgreements: [
            {
              type: 'SERVICE',
              agreeYn: 'Y',
            },
            {
              type: 'PRIVACY',
              agreeYn: 'Y',
            },
            {
              type: 'MARKETING',
              agreeYn: userData.term_marketing ? 'Y' : 'N',
            },
            {
              type: 'ADVERTISING',
              agreeYn: userData.term_ad ? 'Y' : 'N',
            },
          ],
          password: userData.password,
        },
      );
    },
    onSuccess: () => {
      console.log('join success');
      setStep(5);
    },
    onError: (e) => {
      console.error('join error', e);
    },
  });

  const handleUserData = (id: keyof UserDataType, value: boolean | string) => {
    setUserData(
      produce((draft) => {
        (draft[id] as typeof value) = value;
      }),
    );
  };

  const StepData: StepType[] = [
    {
      title: 'eqCM에 이용 약관에\n동의해 주세요',
      component: (
        <TermsAgreement
          onClickNextBtn={setStep}
          onChangeData={handleUserData}
        />
      ),
    },
    {
      title: '로그인에 사용할\n아이디를 입력해 주세요.',
      component: (
        <EmailJoinForm onClickNextBtn={setStep} onChangeData={handleUserData} />
      ),
    },
    {
      title: '로그인에 사용할\n비밀번호를 입력해 주세요.',
      component: (
        <PasswordJoinForm
          onClickNextBtn={setStep}
          onChangeData={handleUserData}
        />
      ),
    },
    {
      title: '본인인증을\n진행해 주세요',
      subtitle: '이미 가입한 계정이 있다면 알려드릴게요!',
      component: (
        <PhoneJoinForm onClickNextBtn={setStep} onChangeData={handleUserData} />
      ),
    },
    {
      title: '이름과 성별, 생년월일을\n입력해 주세요.',
      component: (
        <PersonalInfoForm
          onChangeData={handleUserData}
          requestJoin={mutation}
        />
      ),
    },
    {
      title: '가입 완료!',
      subtitle: '가입을 축하해요!',
      component: <JoinSuccess />,
    },
  ];

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

'use client';

import { useCallback, useState } from 'react';
import { AGREEMENT_CHECK_IDS, TERMS_AGREEMENT_LIST } from '@/constants/join';
import { UserDataType } from '@/types/join';
import CheckBox from './checkbox';
import NextButton from './nextButton';

type Props = {
  onClickNextBtn: (step: number) => void;
  onChangeData: (id: keyof UserDataType, value: boolean | string) => void;
};

const TermsAgreement = ({ onClickNextBtn, onChangeData }: Props) => {
  const [checkStatus, setCheckStatus] = useState({
    all: false,
    age: false,
    term: false,
    privacy: false,
    marketing: false,
    ad: false,
  });

  const isAllRequiredTermsChecked = Object.entries(checkStatus)
    .filter(([key]) => !['all', 'marketing', 'ad'].includes(key))
    .every(([, value]) => value === true);

  const handleChecked = (id: keyof typeof checkStatus) => {
    setCheckStatus((state) => {
      if (id === 'all') {
        const newState = !state['all'];
        const updatedState = Object.keys(state).reduce(
          (acc, key) => {
            acc[key as keyof typeof state] = newState;
            return acc;
          },
          {} as typeof state,
        );
        return updatedState;
      } else {
        return {
          ...state,
          [id]: !state[id],
          all: Object.entries(state)
            .filter(([key]) => key !== 'all')
            .every(([, value]) => value === true),
        };
      }
    });
  };

  const handleSubmit = useCallback(() => {
    onChangeData('term_marketing', checkStatus.marketing);
    onChangeData('term_ad', checkStatus.ad);
    onClickNextBtn(1);
  }, [checkStatus.marketing, checkStatus.ad, onChangeData, onClickNextBtn]);

  return (
    <form className="flex flex-col h-full pt-[60px] text-[13px]">
      <div className="flex flex-col gap-[9px] flex-grow">
        <CheckBox
          id={AGREEMENT_CHECK_IDS.all}
          text="전체 동의하기 (선택 정보를 포함합니다.)"
          onClick={handleChecked}
          check={checkStatus['all']}
        />
        <div className="my-[5px] h-[1px] bg-[#f4f4f4]" />
        {TERMS_AGREEMENT_LIST.map(({ id, required, text, detail }) => (
          <CheckBox
            key={id}
            id={id}
            check={checkStatus[id]}
            onClick={handleChecked}
            text={(required ? '[필수] ' : '[선택] ') + text}
            detail={detail}
          />
        ))}
      </div>
      <NextButton
        disabled={!isAllRequiredTermsChecked}
        onClick={handleSubmit}
      />
    </form>
  );
};

export default TermsAgreement;

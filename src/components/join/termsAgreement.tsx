'use client';

import { useState } from 'react';
import CheckBox from './checkbox';
import { AGREEMENT_CHECK_IDS, TERMS_AGREEMENT_LIST } from '@/constants/join';

type Props = {
  onClickNextBtn: (step: number) => void;
};

const TermsAgreement = ({ onClickNextBtn }: Props) => {
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

  return (
    <div className="flex flex-col size-full">
      <p className="text-[30px] font-bold">
        eqCM에 이용 약관에
        <br />
        동의해 주세요
      </p>

      <form className="flex flex-col mt-[60px] text-[13px] h-full">
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
        <button
          type="submit"
          disabled={!isAllRequiredTermsChecked}
          className="w-full mt-auto md:w-[400px] h-[52px] rounded bg-[#000] text-white disabled:bg-[#f4f4f4] disabled:text-[#c4c4c4]"
          onClick={() => onClickNextBtn(1)}
        >
          {!isAllRequiredTermsChecked}
          다음
        </button>
      </form>
    </div>
  );
};

export default TermsAgreement;

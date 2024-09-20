'use client';

import { memo, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PhoneJoinFormData } from '@/types/join';
import { PhoneJoinFormSchema } from '@/constants/join';
import Input from '../common/input';
import NextButton from './nextButton';
import { PhoneFormSchema } from '@/constants/common';

type Props = {
  onClickNextBtn: (step: number) => void;
  onChangeData: (id: string, value: boolean | string) => void;
};

function PhoneJoinForm({ onClickNextBtn, onChangeData }: Props) {
  const [isSendMessage, setIsSendMessage] = useState<boolean>(false);

  const {
    getValues,
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<PhoneJoinFormData>({
    resolver: zodResolver(PhoneJoinFormSchema),
  });

  const onClickSendBtn = () => {
    const phoneValue = getValues('phone');
    const result = PhoneFormSchema.safeParse(phoneValue);
    if (!result.success) {
      setError('phone', {
        type: 'phone',
        message:
          result.error.errors[0]?.message || '유효하지 않은 전화번호입니다.',
      });
      return;
    }
    clearErrors('phone');

    // TODO: 인증번호 요청 API 전송
    setIsSendMessage(true);
  };

  const onSubmit: SubmitHandler<PhoneJoinFormData> = (data) => {
    console.log('submit');

    // TODO: 인증번호 확인 API 전송 후 응답에 따른 처리
    if (true) {
      onChangeData('phone', data.phone);
      onClickNextBtn(4);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col h-full pt-[60px] text-[13px]"
    >
      <div className="flex flex-col gap-[9px] flex-grow">
        <label className="mb-1 font-medium">휴대폰 번호</label>
        <div className="flex gap-2">
          <Input
            placeholder="숫자만 입력"
            style={`flex-grow ${errors['phone'] ? 'border-[#ff4800]' : ''} ${isSendMessage && 'disabled'}`}
            register={register('phone', {
              required: true,
            })}
            disabled={isSendMessage}
            maxLength={11}
          />
          <button
            type="button"
            onClick={onClickSendBtn}
            className="px-2 rounded bg-[#000] text-white disabled:bg-[#f4f4f4] disabled:text-[#c4c4c4]"
          >
            인증번호 받기
          </button>
        </div>
        {errors && (
          <span className="mt-1 text-[13px] text-[#ff4800]">
            {errors['phone']?.message}
          </span>
        )}

        {isSendMessage && (
          <>
            <label className="mb-1 font-medium">인증번호 입력</label>
            <Input
              placeholder="6자리 숫자 입력"
              style={errors['validNumber'] ? 'border-[#ff4800]' : ''}
              register={register('validNumber', {
                required: true,
              })}
              maxLength={6}
            />
            {errors && (
              <span className="mt-1 text-[13px] text-[#ff4800]">
                {errors['validNumber']?.message}
              </span>
            )}
          </>
        )}
      </div>

      <NextButton
        text="인증하기"
        disabled={false}
        onClick={() => setIsSendMessage(true)}
      />
    </form>
  );
}

export default memo(PhoneJoinForm);

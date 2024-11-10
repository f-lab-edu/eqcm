'use client';

import { memo, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PhoneJoinFormData, UserDataType } from '@/types/join';
import { PhoneJoinFormSchema } from '@/constants/join';
import Input from '../common/input';
import NextButton from './nextButton';
import { BaseResponse } from '@/types/response';
import { fetchSendOTP, fetchVerifyOTP } from '@/fetch/join';
import { PhoneFormSchema } from '@/constants/common';
import { formatPhoneNumber } from '@/utils/format';

type Props = {
  onClickNextBtn: () => void;
  onChangeData: (id: keyof UserDataType, value: boolean | string) => void;
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

  const sendOtp = useMutation({
    mutationFn: (phoneNumber: string): Promise<AxiosResponse<BaseResponse>> => {
      return fetchSendOTP({ phoneNumber: formatPhoneNumber(phoneNumber) });
    },
    onSuccess: () => {
      setIsSendMessage(true);
    },
    onError: () => {
      setError('phone', {
        type: 'phone',
        message: '인증번호 발급이 실패했습니다. 다시 시도해주세요.',
      });
    },
  });

  const verifyOtp = useMutation({
    mutationFn: ({
      phoneNumber,
      otp,
    }: {
      phoneNumber: string;
      otp: number;
    }): Promise<AxiosResponse<BaseResponse>> => {
      return fetchVerifyOTP({
        phoneNumber: formatPhoneNumber(phoneNumber),
        otp,
      });
    },
    onSuccess: () => {
      const phoneValue = getValues('phone');
      onChangeData('phone', formatPhoneNumber(phoneValue));
      onClickNextBtn();
    },
    onError: () => {
      setError('phone', {
        type: 'phone',
        message: '인증번호가 올바르지 않습니다.',
      });
    },
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

    sendOtp.mutate(phoneValue);
  };

  const onSubmit: SubmitHandler<PhoneJoinFormData> = (data) => {
    verifyOtp.mutate({
      phoneNumber: formatPhoneNumber(data.phone),
      otp: parseInt(data.validNumber),
    });
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
              placeholder="4자리 숫자 입력"
              style={errors['validNumber'] ? 'border-[#ff4800]' : ''}
              register={register('validNumber', {
                required: true,
              })}
              maxLength={4}
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

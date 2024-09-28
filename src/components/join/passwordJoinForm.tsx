import { memo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PasswordJoinFormData, UserDataType } from '@/types/join';
import Input from '../common/input';
import { PasswordJoinFormSchema } from '@/constants/join';
import NextButton from './nextButton';
import OptionCheck from './optionCheck';

type Props = {
  onClickNextBtn: React.Dispatch<React.SetStateAction<number>>;
  onChangeData: (id: keyof UserDataType, value: boolean | string) => void;
};

function PasswordJoinForm({ onClickNextBtn, onChangeData }: Props) {
  const { watch, register, handleSubmit } = useForm<PasswordJoinFormData>({
    resolver: zodResolver(PasswordJoinFormSchema),
  });

  const onSubmit: SubmitHandler<PasswordJoinFormData> = (data) => {
    onChangeData('password', data.password);
    onClickNextBtn(3);
  };

  const isPasswordLengthValid =
    watch('password')?.length >= 8 && watch('password')?.length <= 20;

  const isPasswordComplexityValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,20}$/.test(
      watch('password'),
    );

  const isPasswordMatch =
    watch('password')?.length > 0 && watch('password') === watch('rePassword');

  const isNextButtonEnabled =
    isPasswordLengthValid && isPasswordComplexityValid && isPasswordMatch;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col h-full pt-[60px] text-[13px]"
    >
      <div className="flex flex-col gap-5 flex-grow">
        <div className="flex flex-col">
          <label className="mb-1 font-medium">비밀번호</label>
          <Input
            type="password"
            placeholder="8자 이상의 비밀번호"
            register={register('password', {
              required: true,
            })}
          />
          <div className="flex gap-2 mt-1 text-[13px]">
            {[
              { checkOption: isPasswordLengthValid, text: '8-20자 이내' },
              {
                checkOption: isPasswordComplexityValid,
                text: '대소문자, 숫자, 특수문자 포함',
              },
            ].map(({ checkOption, text }) => (
              <OptionCheck key={text} checkOption={checkOption} text={text} />
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <label className="mb-1 font-medium">비밀번호 확인</label>
          <Input
            type="password"
            placeholder="8자 이상의 비밀번호"
            register={register('rePassword', {
              required: true,
            })}
          />
          <OptionCheck
            checkOption={isPasswordMatch}
            text="비밀번호 일치"
            style="mt-1"
          />
        </div>
      </div>

      <NextButton disabled={!isNextButtonEnabled} />
    </form>
  );
}

export default memo(PasswordJoinForm);

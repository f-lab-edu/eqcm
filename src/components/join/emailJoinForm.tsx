import { memo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { EmailJoinFormData, UserDataType } from '@/types/join';
import { EmailJoinFormSchema } from '@/constants/join';
import Input from '../common/input';
import NextButton from './nextButton';

type Props = {
  onClickNextBtn: () => void;
  onChangeData: (id: keyof UserDataType, value: boolean | string) => void;
};

function EmailJoinForm({ onClickNextBtn, onChangeData }: Props) {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailJoinFormData>({
    resolver: zodResolver(EmailJoinFormSchema),
  });

  const emailValue = watch('email');

  const onSubmit: SubmitHandler<EmailJoinFormData> = (data) => {
    onChangeData('email', data.email);
    onClickNextBtn();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col h-full pt-[60px] text-[13px]"
    >
      <div className="flex flex-col gap-[9px] flex-grow">
        <label className="mb-1 font-medium">이메일(아이디)</label>
        <Input
          placeholder="abc@email.com"
          style={errors['email'] ? 'border-[#ff4800]' : ''}
          register={register('email', {
            required: true,
          })}
        />
        {errors && (
          <span className="mt-1 text-[13px] text-[#ff4800]">
            {errors['email']?.message}
          </span>
        )}
      </div>

      <NextButton disabled={!emailValue || Boolean(errors['email'])} />
    </form>
  );
}

export default memo(EmailJoinForm);

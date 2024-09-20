import { memo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PersonalInfoFormData } from '@/types/join';
import { PersonalInfoFormSchema } from '@/constants/join';
import Input from '../common/input';
import NextButton from './nextButton';

type Props = {
  onClickNextBtn: (step: number) => void;
  onChangeData: (id: string, value: boolean | string) => void;
};

function PersonalInfoForm({ onClickNextBtn, onChangeData }: Props) {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalInfoFormData>({
    resolver: zodResolver(PersonalInfoFormSchema),
  });

  const nameValue = watch('name');
  const birthValue = watch('birth');

  const onSubmit: SubmitHandler<PersonalInfoFormData> = (data) => {
    console.log('🚀 ~ PersonalInfoForm ~ data:', data);
    onChangeData('name', data.name);
    onChangeData('birth', data.birth.toString());
    onClickNextBtn(5);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col h-full pt-[60px] text-[13px]"
    >
      <div className="flex flex-col gap-[9px] flex-grow">
        <label className="mb-1 font-medium">이름</label>
        <Input
          placeholder="이름을 입력하세요"
          style={errors['name'] ? 'border-[#ff4800]' : ''}
          register={register('name', {
            required: true,
          })}
        />
        {errors && (
          <span className="mt-1 text-[13px] text-[#ff4800]">
            {errors['name']?.message}
          </span>
        )}

        <label className="mb-1 font-medium">생일</label>
        <Input
          type="date"
          placeholder="생일을 입력하세요"
          style={errors['birth'] ? 'border-[#ff4800]' : ''}
          register={register('birth', {
            required: true,
          })}
        />
        {errors && (
          <span className="mt-1 text-[13px] text-[#ff4800]">
            {errors['birth']?.message}
          </span>
        )}
      </div>

      <NextButton
        disabled={
          !nameValue ||
          !birthValue ||
          Boolean(errors['name'] || errors['birth'])
        }
      />
    </form>
  );
}

export default memo(PersonalInfoForm);

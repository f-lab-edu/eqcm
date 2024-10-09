import { memo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PersonalInfoFormData, UserDataType } from '@/types/join';
import { GenderFieldList, PersonalInfoFormSchema } from '@/constants/join';
import Input from '../common/input';
import NextButton from './nextButton';
import { UseMutationResult } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { BaseResponse } from '@/types/response';
import { format } from 'date-fns';

type Props = {
  onChangeData: (id: keyof UserDataType, value: boolean | string) => void;
  requestJoin: UseMutationResult<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    AxiosResponse<BaseResponse, any>,
    Error,
    void,
    unknown
  >;
};

function PersonalInfoForm({ onChangeData, requestJoin }: Props) {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalInfoFormData>({
    resolver: zodResolver(PersonalInfoFormSchema),
  });

  const nameValue = watch('name');
  const genderValue = watch('gender');
  const birthValue = watch('birth');

  const onSubmit: SubmitHandler<PersonalInfoFormData> = (data) => {
    onChangeData('name', data.name);
    onChangeData('gender', data.gender);
    onChangeData('birth', format(new Date(data.birth), 'yyyy-MM-dd'));
    requestJoin.mutate();
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

        <label className="mb-1 font-medium">성별</label>
        <div className="flex items-center gap-2">
          {GenderFieldList.map(({ title, value }) => (
            <label
              key={title}
              htmlFor={value}
              className="flex items-center gap-1"
            >
              <Input
                id={value}
                type="radio"
                name="gender"
                value={value}
                register={register('gender')}
              />
              {title}
            </label>
          ))}
        </div>
        {errors && (
          <span className="mt-1 text-[13px] text-[#ff4800]">
            {errors['gender']?.message}
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
          !genderValue ||
          !birthValue ||
          Boolean(errors['name'] || errors['birth'])
        }
      />
    </form>
  );
}

export default memo(PersonalInfoForm);

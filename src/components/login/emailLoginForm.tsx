'use client';

import Link from 'next/link';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Input from '../common/input';
import { useEmailLogin } from '@/hooks/auth';
import { EmailLoginFieldList, LoginFormSchema } from '@/constants/login';
import { EmailLoginFormData } from '@/types/login';
import { EmailLoginType } from '@/types/join';

const EmailLoginForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<EmailLoginFormData>({
    resolver: zodResolver(LoginFormSchema),
  });

  const mutateEmailLogin = useEmailLogin((message: string) => {
    setError('password', {
      type: 'validate',
      message,
    });
  });

  const onSubmit: SubmitHandler<EmailLoginFormData> = (
    data: EmailLoginType,
  ) => {
    const result = mutateEmailLogin.mutate(data);
    console.log(result);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 pt-[60px] text-[14px]"
    >
      {EmailLoginFieldList.map(({ type, name, title, placeholder }) => (
        <div key={title} className="flex flex-col">
          <label className="mb-1 font-medium">{title}</label>
          <Input
            type={type}
            placeholder={placeholder}
            style={errors[name] ? 'border-[#ff4800]' : ''}
            register={register(name, { required: true })}
          />
          {errors[name] && (
            <span className="mt-1 text-[13px] text-[#ff4800]">
              {errors[name]?.message}
            </span>
          )}
        </div>
      ))}

      <div className="flex flex-col gap-[8px] pt-[80px] pb-[30px] text-[14px] font-bold">
        <button
          type="submit"
          className="flex items-center justify-center gap-1 md:w-[400px] h-[52px] rounded bg-[#000] text-white"
        >
          로그인
        </button>

        <Link
          href={'/join'}
          className="flex items-center justify-center gap-1 md:w-[400px] h-[52px] rounded border border-[#dcdfe6]"
        >
          이메일로 가입하기
        </Link>
      </div>
    </form>
  );
};

export default EmailLoginForm;

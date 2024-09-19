import { memo } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import cn from 'classnames';

type Props = {
  type?: HTMLInputElement['type'];
  placeholder: string;
  style?: string;
  register: Partial<UseFormRegisterReturn>;
};

const Input = memo(function Input({
  type = 'text',
  placeholder,
  style = '',
  register,
}: Props) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={cn('h-[44px] border rounded px-[14px]', style)}
      {...register}
    />
  );
});

export default Input;

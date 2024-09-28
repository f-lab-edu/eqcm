import { memo, InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import cn from 'classnames';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  style?: string;
  register: Partial<UseFormRegisterReturn>;
};

const Input = memo(function Input({
  type = 'text',
  placeholder,
  style = '',
  register,
  ...restProps
}: Props) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={cn('h-[44px] border rounded px-[14px]', style)}
      autoComplete="off"
      {...register}
      {...restProps}
    />
  );
});

export default Input;

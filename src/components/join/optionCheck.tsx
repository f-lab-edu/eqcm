import { memo } from 'react';
import cn from 'classnames';
import { Icons } from '../icons';

type Props = {
  checkOption: boolean;
  text: string;
  style?: string;
};

function OptionCheck({ checkOption, text, style }: Props) {
  return (
    <div
      key="text"
      className={cn(
        'flex items-center text-[#a0a0a0]',
        style,
        checkOption && 'text-[#375fff]',
      )}
    >
      <Icons.Check color={checkOption ? '#375fff' : '#dcdfe6'} />
      <span>{text}</span>
    </div>
  );
}

export default memo(OptionCheck);

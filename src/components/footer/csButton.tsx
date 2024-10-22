import React, { memo } from 'react';
import { Icons } from '../icons';

type Props = {
  title: string;
};

const CsButton = memo(function Button({ title }: Props) {
  return (
    <button
      type="button"
      className="flex justify-between items-center w-[94px] h-[30px] leading-[30px] text-[15px] bg-[#303033] text-white pl-[14px] pr-[10px]"
    >
      {title}
      <span className="w-1 h-2">
        <Icons.FooterArrow />
      </span>
    </button>
  );
});

export default CsButton;

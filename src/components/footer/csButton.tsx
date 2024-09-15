import React, { memo } from 'react';
import { Icons } from '../icons';

const CsButton = memo(function Button({ title }: { title: string }) {
  return (
    <button
      type="button"
      className="flex justify-between items-center w-[94px] h-[30px] leading-[30px] text-[15px] bg-[#303033] text-white pl-[14px] pr-[10px]"
    >
      {title}
      <span className="w-1 h-2">
        <Icons.footer_arrow />
      </span>
    </button>
  );
});

export default CsButton;

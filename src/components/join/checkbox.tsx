'use client';

import { memo } from 'react';
import { Icons } from '../icons';
import { AGREEMENT_CHECK_IDS_TYPE } from '@/types/join';

type Props = {
  id: AGREEMENT_CHECK_IDS_TYPE;
  text: string;
  check: boolean;
  detail?: string;
  onClick: (id: AGREEMENT_CHECK_IDS_TYPE) => void;
};

const CheckBox = memo(function CheckBox({
  id,
  text,
  detail,
  check,
  onClick,
}: Props) {
  return (
    <label
      key={id}
      htmlFor={id}
      className="flex items-center gap-2 cursor-pointer"
    >
      <input
        type="checkbox"
        className="hidden peer"
        name={id}
        id={id}
        onChange={() => onClick(id)}
        checked={check}
      />
      <div className="flex items-center justify-center w-[18px] h-[18px] border-[1px] border-[#dcdfe6] peer-checked:bg-black">
        <Icons.Check />
      </div>
      <div className="flex justify-between w-full">
        <p>{text}</p>
        {detail && (
          <button type="button" className="border-b border-[#000]">
            보기
          </button>
        )}
      </div>
    </label>
  );
});

export default CheckBox;

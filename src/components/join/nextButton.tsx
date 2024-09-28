import React, { memo } from 'react';

type Props = {
  disabled?: boolean;
  text?: string;
  onClick?: () => void;
};

function NextButton({ disabled, text, onClick }: Props) {
  return (
    <button
      disabled={disabled || false}
      className="w-full mt-auto md:w-[400px] h-[52px] rounded bg-[#000] text-white disabled:bg-[#f4f4f4] disabled:text-[#c4c4c4]"
      onClick={onClick}
    >
      {text ? text : '다음'}
    </button>
  );
}

export default memo(NextButton);

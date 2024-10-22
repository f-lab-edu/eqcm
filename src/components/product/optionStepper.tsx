import React, { memo } from 'react';

type Props = {
  number: number;
  onChangeCount: (count: number) => void;
};

const OptionStepper = ({ number, onChangeCount }: Props) => {
  return (
    <div className="flex items-center justify-center border">
      <button
        type="button"
        className="size-9"
        onClick={() => {
          if (number - 1 <= 0) return;
          onChangeCount(number - 1);
        }}
      >
        -
      </button>
      <div className="flex items-center justify-center size-9 border-x">
        <input
          type="number"
          value={String(number)}
          min={1}
          max={100}
          className="text-center"
          onChange={(e) => onChangeCount(parseInt(e.target.value))}
        />
      </div>
      <button
        type="button"
        className="size-9"
        onClick={() => onChangeCount(number + 1)}
      >
        +
      </button>
    </div>
  );
};

export default memo(OptionStepper);

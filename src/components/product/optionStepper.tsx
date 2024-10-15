import React, { memo } from 'react';

type Props = {
  index: number;
  number: number;
  onChangeCount: ({ index, count }: { index: number; count: number }) => void;
};

const OptionStepper = ({ index, number, onChangeCount }: Props) => {
  return (
    <div className="flex items-center justify-center border">
      <button
        type="button"
        className="size-9"
        onClick={() => {
          if (number - 1 <= 0) return;
          onChangeCount({ index, count: number - 1 });
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
          onChange={(e) =>
            onChangeCount({ index, count: parseFloat(e.target.value) })
          }
        />
      </div>
      <button
        type="button"
        className="size-9"
        onClick={() => onChangeCount({ index, count: number + 1 })}
      >
        +
      </button>
    </div>
  );
};

export default memo(OptionStepper);

import React, { memo } from 'react';

type Props = {
  number: number;
};

const OptionStepper = ({ number }: Props) => {
  return (
    <div className="flex items-center justify-center border">
      <button type="button" className="size-9">
        +
      </button>
      <div className="flex items-center justify-center size-9 border-x">
        <input
          type="number"
          defaultValue={number}
          min={1}
          max={100}
          className="text-center"
        />
      </div>
      <button type="button" className="size-9">
        -
      </button>
    </div>
  );
};

export default memo(OptionStepper);

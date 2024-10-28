import React from 'react';
import cn from 'classnames';
import { ShoppingStepType } from '@/types/common';
import { SHOPPING_STEP } from '@/constants/common';

type Props = {
  step: ShoppingStepType;
};

const ShoppingStepIndicator = ({ step }: Props) => {
  return (
    <div className="flex gap-2 my-[70px] justify-center font-campton text-[15px] font-[500] text-[#E4E4E4]">
      {Object.entries(SHOPPING_STEP).map(([key, value], idx) => (
        <>
          <div key={key} className={cn(step === key && 'text-black')}>
            {value}
          </div>
          {idx !== 2 && <div>&gt;</div>}
        </>
      ))}
    </div>
  );
};

export default ShoppingStepIndicator;

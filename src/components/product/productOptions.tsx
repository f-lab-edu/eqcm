import React, { memo } from 'react';
import OptionDropdown from './optionDropdown';
import OptionStepper from './optionStepper';
import Skeleton from '../common/skeleton';
import { formatWithCommas } from '@/utils/format';
import { ProductDataType } from '@/types/product';
import { Icons } from '../icons';

type Props = {
  options: ProductDataType['productInfo']['options'];
};

const ProductOptions = ({ options }: Props) => {
  return (
    <div className="my-5">
      {options &&
        Object.entries(options).map(([key, value]) => (
          <OptionDropdown key={key} optionName={key} list={value} />
        ))}
      <div className="flex flex-col">
        <ul className="border-b-2 py-3 border-black text-[14px]">
          <li className="flex justify-between items-center">
            <p className="font-semibold">S</p>
            <div className="flex items-center">
              <OptionStepper number={1} />
              <div className="flex">
                <span className="pl-5 pr-2 font-bold">
                  {formatWithCommas(149296)}원
                </span>
                <button className="relative top-[2px] flex items-center justify-center size-4 border-[#a0a0a0] border rounded-full">
                  <Icons.delete_option />
                </button>
              </div>
            </div>
          </li>
        </ul>
        <div className="flex items-center ml-auto pt-4 pb-2">
          <span className="text-[14px] mr-[10px]">총 상품 금액</span>
          <span className="text-[#ff4800] text-[24px] font-bold">{0}</span>
          <span className="text-[#ff4800]">원</span>
        </div>
      </div>
    </div>
  );
};

export const ProductOptionsSkeleton = () => (
  <div className="my-5">
    <Skeleton style="w-full h-[36px]" />
  </div>
);

export default memo(ProductOptions);

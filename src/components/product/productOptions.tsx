'use client';

import React, { memo, useMemo, useReducer } from 'react';
import cn from 'classnames';
import OptionDropdown from './optionDropdown';
import OptionStepper from './optionStepper';
import Skeleton from '../common/skeleton';
import { productOptionsSlice } from '@/store/useProductOptionsReducer';
import { formatWonPrice } from '@/utils/format';
import {
  Options,
  ProductOptionType,
  TransformedOptionsType,
} from '@/types/product';
import { Icons } from '../icons';

type Props = {
  price: number;
  options: TransformedOptionsType;
};

export type PayloadType = {
  optionType?: Options;
  value?: string | number;
  index?: number;
  count?: number;
};

const ProductOptions = ({ price, options }: Props) => {
  const { reducer, actions } = productOptionsSlice;
  const [state, dispatch] = useReducer(reducer, options, (options) => {
    const initialOptions: ProductOptionType = {};

    Object.keys(options).forEach((optionKey) => {
      initialOptions[optionKey] = null;
    });

    return {
      currentOption: initialOptions,
      selectedOptions: [],
    };
  });

  const onClickOption = (payload: PayloadType) =>
    dispatch(actions.selectOption(payload));
  const onChangeCount = (payload: PayloadType) =>
    dispatch(actions.changeCount(payload));
  const onClickDelete = (payload: PayloadType) =>
    dispatch(actions.deleteOption(payload));

  const makeOptionName = (option: ProductOptionType) => {
    const divide = ' - ';
    const excludeFields = ['count'];

    return Object.keys(option)
      .filter((key) => !excludeFields.includes(key))
      .map((key) => option[key])
      .join(divide);
  };

  const totalPrice = useMemo(
    () =>
      state.selectedOptions.reduce((total: number, option) => {
        if (typeof option.count === 'number') {
          return total + (price * option.count || 0);
        }
        return total;
      }, 0),
    [price, state.selectedOptions],
  );

  return (
    <div className="px-[20px] md:px-0 my-5">
      {options &&
        Object.entries(options).map(([key, value]) => (
          <OptionDropdown
            key={key}
            optionName={key}
            list={value}
            selectedOption={state.currentOption[key] as string}
            onClickOption={onClickOption}
          />
        ))}
      {state.selectedOptions.length > 0 && (
        <div className="flex flex-col">
          <ul className="border-b-2 py-3 border-black text-[14px]">
            {state.selectedOptions.map(
              (
                option: { [key: string]: string | number | null },
                index: number,
              ) => (
                <li
                  key={makeOptionName(option)}
                  className={cn(
                    'flex justify-between items-center py-1',
                    index !== state.selectedOptions.length - 1 &&
                      'border-b border-[#dcdfe6]',
                  )}
                >
                  <p className="font-semibold">{makeOptionName(option)}</p>
                  <div className="flex items-center">
                    <OptionStepper
                      number={option.count as number}
                      onChangeCount={(count: number) =>
                        onChangeCount({ index, count })
                      }
                    />
                    <div className="flex">
                      <span className="pl-5 pr-2 font-bold">
                        {formatWonPrice(price)}원
                      </span>
                      <button
                        type="button"
                        className="relative top-[2px] flex items-center justify-center size-4 border-[#a0a0a0] border rounded-full"
                        onClick={() => onClickDelete({ index })}
                      >
                        <Icons.DeleteOption />
                      </button>
                    </div>
                  </div>
                </li>
              ),
            )}
          </ul>
          <div className="flex items-center ml-auto pt-4 pb-2">
            <span className="text-[14px] mr-[10px]">총 상품 금액</span>
            <span className="text-[#ff4800] text-[24px] font-bold">
              {formatWonPrice(totalPrice)}
            </span>
            <span className="text-[#ff4800]">원</span>
          </div>
        </div>
      )}
    </div>
  );
};

export const ProductOptionsSkeleton = () => (
  <Skeleton style="w-full h-[36px] my-5" />
);

export default memo(ProductOptions);

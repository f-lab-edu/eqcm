import React, { memo, useReducer } from 'react';
import cn from 'classnames';
import OptionDropdown from './optionDropdown';
import OptionStepper from './optionStepper';
import Skeleton from '../common/skeleton';
import { formatWithCommas } from '@/utils/format';
import { ProductDataType, ProductOptionType } from '@/types/product';
import { Icons } from '../icons';

type Props = {
  price: number;
  options: ProductDataType['productInfo']['options'];
};

enum ProductActionType {
  SELECT_OPTION = 'SELECT_OPTION',
  CHANGE_COUNT = 'CHANGE_COUNT',
  DELETE_OPTION = 'DELETE_OPTION',
}

type PayloadType = {
  optionType?: keyof ProductOptionType;
  value?: string | number;
  index?: number;
  count?: number;
};

let defaultOptions: ProductOptionType = {};

const ProductOptions = ({ price, options }: Props) => {
  const init = (productOptions: ProductDataType['productInfo']['options']) => {
    const initialOptions: ProductOptionType = {};

    Object.keys(productOptions).forEach((optionKey) => {
      initialOptions[optionKey] = null;
    });

    defaultOptions = initialOptions;

    return {
      currentOption: initialOptions,
      selectedOptions: [],
      totalPrice: 0,
    };
  };

  const updateTotalPrice = (options: ProductOptionType[]) => {
    return options.reduce((total, option) => {
      if (typeof option.count === 'number') {
        return total + (price * option.count || 0);
      }
      return total;
    }, 0);
  };

  const reducer = (
    state,
    action: {
      type: ProductActionType;
      payload: PayloadType;
    },
  ) => {
    switch (action.type) {
      case ProductActionType.SELECT_OPTION: {
        if (!action.payload.optionType) return state;

        const updatedCurrentOption = {
          ...state.currentOption,
          [action.payload.optionType]: action.payload.value,
        };

        const isOptionComplete = Object.values(updatedCurrentOption).every(
          (option) => option !== null,
        );
        if (!isOptionComplete) {
          return {
            ...state,
            currentOption: updatedCurrentOption,
          };
        }

        const existingOptionIndex = state.selectedOptions.findIndex(
          (option: ProductOptionType) => {
            return Object.keys(updatedCurrentOption).every(
              (key) => updatedCurrentOption[key] === option[key],
            );
          },
        );

        if (existingOptionIndex !== -1) {
          const updatedOptions = state.selectedOptions.map(
            (option: ProductOptionType, index: number) => {
              if (
                index === existingOptionIndex &&
                typeof option.count === 'number'
              ) {
                return { ...option, count: option.count + 1 };
              }
              return option;
            },
          );

          return {
            ...state,
            selectedOptions: updatedOptions,
            totalPrice: updateTotalPrice(updatedOptions),
          };
        }

        const updatedSelectedOptions = [
          ...state.selectedOptions,
          { ...updatedCurrentOption, count: 1 },
        ];

        return {
          ...state,
          currentOption: defaultOptions,
          selectedOptions: updatedSelectedOptions,
          totalPrice: updateTotalPrice(updatedSelectedOptions),
        };
      }

      case ProductActionType.CHANGE_COUNT: {
        const updatedOptions = state.selectedOptions.map(
          (option: ProductOptionType, index: number) => {
            if (index === action.payload.index) {
              return { ...option, count: action.payload.count };
            }
            return option;
          },
        ) as ProductOptionType[];

        return {
          ...state,
          selectedOptions: updatedOptions,
          totalPrice: updateTotalPrice(updatedOptions),
        };
      }

      case ProductActionType.DELETE_OPTION: {
        const updatedOptions = state.selectedOptions.filter(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (_: any, index: number) => index !== action.payload.index,
        );

        return {
          ...state,
          selectedOptions: updatedOptions,
          totalPrice: updateTotalPrice(updatedOptions),
        };
      }

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, init(options));

  const onChangeState = (type: ProductActionType, payload: PayloadType) => {
    dispatch({ type, payload });
  };

  const onClickOption = ({
    optionType,
    value,
  }: {
    optionType: string;
    value: string;
  }) => {
    onChangeState(ProductActionType.SELECT_OPTION, { optionType, value });
  };

  const onChangeCount = (index: number, count: number) => {
    onChangeState(ProductActionType.CHANGE_COUNT, { index, count });
  };

  const makeOptionName = (option: ProductOptionType) => {
    const divide = ' - ';
    const excludeFields = ['count'];

    return Object.keys(option)
      .filter((key) => !excludeFields.includes(key))
      .map((key) => option[key])
      .join(divide);
  };

  return (
    <div className="px-[20px] md:px-0 my-5">
      {options &&
        Object.entries(options).map(([key, value]) => (
          <OptionDropdown
            key={key}
            optionName={key}
            list={value}
            selectedOption={state.currentOption[key]}
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
                        onChangeCount(index, count)
                      }
                    />
                    <div className="flex">
                      <span className="pl-5 pr-2 font-bold">
                        {formatWithCommas(price)}원
                      </span>
                      <button
                        type="button"
                        className="relative top-[2px] flex items-center justify-center size-4 border-[#a0a0a0] border rounded-full"
                        onClick={() => {
                          dispatch({
                            type: ProductActionType.DELETE_OPTION,
                            payload: { index },
                          });
                        }}
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
              {formatWithCommas(state.totalPrice)}
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

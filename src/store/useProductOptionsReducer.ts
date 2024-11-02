import { PayloadType } from '@/components/product/productOptions';
import { ProductOptionType } from '@/types/product';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
  currentOption: ProductOptionType;
  selectedOptions: ProductOptionType[];
};

const initialState: initialStateType = {
  currentOption: {}, // 현재 선택된 옵션
  selectedOptions: [], // 선택 완료된 옵션들
};

export const productOptionsSlice = createSlice({
  name: 'productOption',
  initialState,
  reducers: {
    optionInit: (state, action: PayloadAction<ProductOptionType>) => {
      state.currentOption = action.payload;
    },
    selectOption: (state, action: PayloadAction<PayloadType>) => {
      const { optionType, value } = action.payload;
      if (!optionType || !value) return;

      // 선택한 옵션에 값 추가
      state.currentOption = {
        ...state.currentOption,
        [optionType]: value,
      };

      // 선택해야하는 모든 옵션이 선택되었는지 체크
      const isOptionComplete = Object.values(state.currentOption).every(
        (option) => option !== null,
      );
      if (!isOptionComplete) return;

      // 이미 동일 옵션으로 선택되어있던게 있는지 확인
      const existingOptionIndex = state.selectedOptions.findIndex(
        (option: ProductOptionType) => {
          return Object.keys(state.currentOption).every(
            (key) => state.currentOption[key] === option[key],
          );
        },
      );

      // 동일 옵션으로 선택된게 있다면 수량 추가
      if (existingOptionIndex !== -1) {
        state.selectedOptions[existingOptionIndex] = {
          ...state.selectedOptions[existingOptionIndex],
          count:
            (state.selectedOptions[existingOptionIndex].count as number) + 1,
        };
        // 동일 옵션으로 선택된게 없다면 수량 1로 초기화하여 추가
      } else {
        const updatedSelectedOptions = [
          ...state.selectedOptions,
          { ...state.currentOption, count: 1 },
        ];
        state.selectedOptions = updatedSelectedOptions;
      }

      Object.keys(state.currentOption).map((key) => {
        state.currentOption[key] = null;
      });
    },
    changeCount: (state, action: PayloadAction<PayloadType>) => {
      const { index, count } = action.payload;
      if (!index || !count) return;

      state.selectedOptions[index] = {
        ...state.selectedOptions[index],
        count,
      };
    },
    deleteOption: (state, action: PayloadAction<PayloadType>) => {
      state.selectedOptions = state.selectedOptions.filter(
        (_, index) => index !== action.payload.index,
      );
    },
  },
});

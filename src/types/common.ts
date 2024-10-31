import { SHOPPING_STEP } from '@/constants/common';

export type InputFieldType<T> = {
  type: string;
  name: keyof T;
  title: string;
  placeholder: string;
};

export type ShoppingStepType = keyof typeof SHOPPING_STEP;

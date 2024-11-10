import { OPTION_NAME } from '@/constants/cart';

export type Options = keyof typeof OPTION_NAME;

interface Option {
  id: number;
  name: string;
}

export interface OptionGroupType {
  id: number;
  name: string;
  options: Option[];
}

export interface TransformedOptionsType {
  [key: string]: string[];
}

export type ProductOptionType = {
  [key: string]: string | number | null;
};

export type ProductDataType = {
  category: {
    id: number;
    name: string;
  };
  brand: {
    id: number;
    name: string;
    subCopy: string;
    logoUrl: string;
  };
  product: {
    id: number;
    name: string;
    itemImage: string;
    price: number;
    optionGroups: OptionGroupType[];
  };
  shipping: {
    estimatedTime: string;
    fee: number;
  };
};

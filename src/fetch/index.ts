import { MainDataType } from '@/types/main';
import { ProductDataType } from '@/types/product';

export const fetchMainData = async (): Promise<MainDataType> => {
  return fetch('/main').then((response) => response.json());
};

export const fetchProductData = async (): Promise<ProductDataType> => {
  return fetch('/product').then((response) => response.json());
};

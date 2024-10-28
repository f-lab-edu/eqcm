import { MainDataType } from '@/types/main';
import { ProductDataType } from '@/types/product';
import { CartDataType } from '@/types/cart';

export const fetchMainData = async (): Promise<MainDataType> => {
  return fetch('/main').then((response) => response.json());
};

export const fetchProductData = async (): Promise<ProductDataType> => {
  return fetch('/product').then((response) => response.json());
};

export const fetchCartData = async (): Promise<CartDataType> => {
  return fetch('/cart').then((response) => response.json());
};

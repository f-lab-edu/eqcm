import axios from 'axios';

import { MainDataType } from '@/types/main';
import { CartDataType } from '@/types/cart';
import { ProductDataType } from '@/types/product';
import { ProductData } from '@/mocks/data';

type HttpMethod = 'get' | 'post' | 'put' | 'delete';

type fetchDataParams = {
  url: string;
  method?: HttpMethod;
  body?: object;
};

export async function fetchData<T>({
  url,
  method = 'get',
  body,
}: fetchDataParams): Promise<T> {
  try {
    const config = {
      method,
      url: process.env.NEXT_PUBLIC_API_SERVER + url,
      data: method === 'post' || method === 'put' ? body : undefined,
    };

    const result = await axios(config);

    if (result.data.code === '200') {
      return result.data;
    } else {
      throw new Error(result.data.message);
    }
  } catch (error) {
    throw error;
  }
}

export const fetchMainData = async (): Promise<MainDataType> => {
  return fetch('/main').then((response) => response.json());
};

export const fetchProductData = async (
  id: string,
): Promise<ProductDataType> => {
  return new Promise((resolve) => resolve(ProductData));
};

export const fetchCartData = async (): Promise<CartDataType> => {
  return fetch('/cart').then((response) => response.json());
};

export const updateCartItem = async (
  cartItemId: number,
  count: number,
): Promise<CartDataType> => {
  return fetch('/cart/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ cartItemId, count }),
  }).then((response) => response.json());
};

export const deleteCartItems = async (
  cartItemIds?: number[],
): Promise<CartDataType> => {
  return fetch('/cart', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ cartItemIds }),
  }).then((response) => response.json());
};

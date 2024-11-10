import { MainDataType } from '@/types/main';
import { CartDataType } from '@/types/cart';

export const fetchMainData = async (): Promise<MainDataType> => {
  return fetch('/main').then((response) => response.json());
};

// export const fetchProductData = async (): Promise<ProductDataType> => {
//   return fetch('/product').then((response) => response.json());
// };

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

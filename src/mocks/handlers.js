import { http, HttpResponse } from 'msw';
import { MainData, ProductData, CartData } from './data';

export const handlers = [
  http.get('/main', () => {
    return HttpResponse.json(MainData);
  }),
  http.get('/product', () => {
    return HttpResponse.json(ProductData);
  }),
  http.get('/cart', () => {
    return HttpResponse.json(CartData);
  }),
  http.post('/cart/update', async ({ request }) => {
    const { cartItemId, count } = await request.json();

    const item = CartData.items.find((item) => item.cartItemId === cartItemId);
    CartData.items = CartData.items.map((_item) => {
      if (_item.cartItemId === item.cartItemId) {
        _item.productInfo.count = count;
      }
      return _item;
    });

    return HttpResponse.json(CartData);
  }),
  http.delete('/cart', async ({ request }) => {
    const { cartItemIds } = await request.json();

    if (cartItemIds && cartItemIds.length > 0) {
      CartData.items = CartData.items.filter(
        (item) => !cartItemIds.includes(item.cartItemId),
      );
    } else {
      CartData.items = [];
    }

    return res(ctx.status(200), ctx.json(CartData));
  }),
];

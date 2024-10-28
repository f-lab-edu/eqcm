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
];

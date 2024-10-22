import { http, HttpResponse } from 'msw';
import { MainData, ProductData } from './data';

export const handlers = [
  http.get('/main', () => {
    return HttpResponse.json(MainData);
  }),
  http.get('/product', () => {
    return HttpResponse.json(ProductData);
  }),
];

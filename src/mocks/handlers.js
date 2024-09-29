import { http, HttpResponse } from 'msw';
import { MainData } from './data';

export const handlers = [
  http.get('/main', () => {
    return HttpResponse.json(MainData);
  }),
];

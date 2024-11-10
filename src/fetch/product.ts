import { API_BASE_URL } from '@/constants/common';
import { ProductDataType } from '@/types/product';
import axios from 'axios';

export async function fetchProduct(id: string) {
  try {
    const response = await axios.get<ProductDataType>(
      API_BASE_URL + `/products/${id}`,
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch product');
  }
}

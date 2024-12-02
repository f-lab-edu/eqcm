import { fetchData } from '.';
import { DataResponse } from './../types/response';
import { ProductDataType } from '@/types/product';

export async function fetchProduct(id: string) {
  try {
    const result = await fetchData<DataResponse<ProductDataType>>(
      `/products/${id}`,
    );
    return result.data;
  } catch (error) {
    throw new Error('Failed to fetch product');
  }
}

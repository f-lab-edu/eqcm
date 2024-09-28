export type ProductType = {
  productId: string;
  productImageUrl: string;
  brand: string;
  product: string;
  discountPercentage: number;
  productPrice: number;
  likes: number;
  likeStatus: boolean;
  rate?: number;
  reviews?: number;
};

import { OPTION_NAME } from '@/constants/cart';

export type Options = keyof typeof OPTION_NAME;

export type ProductOptionType = {
  [key: string]: string | number | null;
};

export type ProductDataType = {
  brandInfo: {
    name: string;
    subCopy: string;
    brandId: number;
  };
  productInfo: {
    itemId: number;
    itemName: string;
    itemImage: string;
    isLiked: boolean;
    avgReviewPoint: number;
    reviewCount: number;
    saleInfo: {
      consumerPrice: number;
      totalSalePercent: number;
      totalSalePrice: number;
    };
    options: {
      [key: string]: string[];
    };
  };
  deliveryInfo: {
    estimatedDeliveryTime: string;
    deliveryFee: 'free' | number;
  };
};

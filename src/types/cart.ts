import { Options } from './product';

export type CartDataType = {
  items: {
    cartItemId: number;
    isSoldOut: boolean;
    brandInfo: {
      brandId: number;
      brandName: string;
    };
    productInfo: {
      itemId: number;
      itemName: string;
      itemImage: string;
      saleInfo: {
        consumerPrice: number;
        totalSalePercent: number;
        totalSalePrice: number;
      };
      selectedOptions: {
        [key in Options]: string;
      };
      count: number;
      deliveryFee: number;
    };
  }[];
  deliveryFeeFreeCount?: number;
  totalOrderAmount?: number;
  totalDeliveryFee?: number;
  totalPayment?: number;
};

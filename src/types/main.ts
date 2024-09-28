export enum MainComponentsType {
  BANNER = 'BANNER',
  BOX_BANNER = 'BOX_BANNER',
  BOX_SLIDER = 'BOX_SLIDER',
}

export type BannerType = {
  type: MainComponentsType;
  imgSrc: string;
  imgAlt: string;
  link: string;
};

export type BoxBannerType = {
  type: MainComponentsType;
  bannerImageUrl: string;
  link: string;
  title: string;
  subtitle: string;
  products?: ProductType[];
};

export type BoxSliderType = {
  type: MainComponentsType;
  title: string;
  products: ProductType[];
};

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

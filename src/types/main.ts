export enum MainComponentsType {
  BANNER = 'BANNER',
  BOX_BANNER = 'BOX_BANNER',
  BOX_SLIDER = 'BOX_SLIDER',
}

export type MainDataType = {
  banners: BannerType[];
  boxes: (BannerType | BoxBannerType | BoxSliderType)[] | undefined;
};

export type BannerType = {
  type: MainComponentsType;
  imgSrc: string;
  // mobileImgSrc: string; // mobile 배너 이미지는 글자 별도
  imgAlt: string; // title 존재하면 불필요함
  link: string;
  // title: string;
  // subtitle: string;
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

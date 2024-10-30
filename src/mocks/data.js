export const MainData = {
  banners: [
    {
      type: 'BANNER',
      imgSrc: '/static/images/main-banner-sample-image01.webp',
      imgAlt: 'main banner 01',
      link: '/',
    },
    {
      type: 'BANNER',
      imgSrc: '/static/images/main-banner-sample-image02.webp',
      imgAlt: 'main banner 02',
      link: '/login',
    },
    {
      type: 'BANNER',
      imgSrc: '/static/images/main-banner-sample-image03.webp',
      imgAlt: 'main banner 03',
      link: '/join',
    },
  ],
  boxes: [
    {
      type: 'BANNER',
      imgSrc: '/static/images/box-banner-sample-image01.webp',
      imgAlt: 'sub banner 01',
      link: '/',
    },
    {
      type: 'BANNER',
      imgSrc: '/static/images/box-banner-sample-image02.webp',
      imgAlt: 'sub banner 02',
      link: '/login',
    },
    {
      type: 'BOX_BANNER',
      bannerImageUrl: '/static/images/box-sample-lg-image01.webp',
      link: '/',
      title: '활력을 더하는 가을',
      subtitle:
        '워크웨어의 편안함과 빈티지의 감성을 모두 갖춘 프렌다의 24FALL 컬렉션을 단독 혜택으로 소개해요.',
      products: [
        {
          productId: '0',
          productImageUrl: '/static/images/box-sample-sm-image01.webp',
          brand: '프렌다',
          product: 'PRDA BIG PATCH RAGLAN LONG SLEEVE WHITE',
          discountPercentage: 45,
          productPrice: 32450,
          likes: 764,
          likeStatus: true,
        },
        {
          productId: '1',
          productImageUrl: '/static/images/box-sample-sm-image02.webp',
          brand: '프렌다',
          product: 'SIDE STRIPE WIDE PANTS CHARCOAL',
          discountPercentage: 35,
          productPrice: 51350,
          likes: 14001,
          likeStatus: false,
        },
      ],
    },
    {
      type: 'BOX_SLIDER',
      title: '가을 피부를 완벽하게',
      products: [
        {
          productId: '2',
          productImageUrl: '/static/images/box-slider-sample-image01.webp',
          brand: '디오디너리',
          product: '[모든피부타입] 멀티-펩타이드 +  HA 세럼 30ml (전: 뷔페)',
          discountPercentage: 45,
          productPrice: 26300,
          likes: 5108,
          likeStatus: true,
          rate: 0,
          reviews: 1645,
        },
        {
          productId: '3',
          productImageUrl: '/static/images/box-slider-sample-image02.webp',
          brand: '쌍빠',
          product: '글로우 매직 에센스',
          discountPercentage: 20,
          productPrice: 15200,
          likes: 139,
          likeStatus: false,
          rate: 0,
          reviews: 31,
        },
        {
          productId: '4',
          productImageUrl: '/static/images/box-slider-sample-image03.webp',
          brand: '토니모리',
          product: '프리미엄 알엑스 제비집 에센스',
          discountPercentage: 71,
          productPrice: 18900,
          likes: 1,
          likeStatus: false,
          rate: 0,
          reviews: 2,
        },
      ],
    },
  ],
};

export const ProductData = {
  category: {},
  brandInfo: {
    name: '드로우핏 우먼',
    subCopy:
      '드로우핏 우먼은 클래식을 현대적 감각으로 재해석하여 완성도 있는 뉴 컨템포러리 웨어를 추구합니다.',
    brandId: 26590,
  },
  productInfo: {
    itemId: 2734746,
    itemName: '헤어리 알파카 울 칼라리스 자켓 [BEIGE]',
    itemImage: '/static/images/product-sample-image.jpg',
    isLiked: true,
    avgReviewPoint: 3.5,
    reviewCount: 3,
    saleInfo: {
      consumerPrice: 248000,
      totalSalePercent: 40,
      totalSalePrice: 170624,
    },
    options: {
      size: ['S', 'M'],
      color: ['white', 'yellow', 'pink'],
    },
  },
  deliveryInfo: {
    estimatedDeliveryTime: '3일 이내 출고',
    deliveryFee: 'free',
  },
};

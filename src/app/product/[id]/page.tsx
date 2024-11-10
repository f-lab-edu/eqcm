'use client';

import React, { Suspense } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchProductData } from '@/fetch';
import BrandInfo, { BrandInfoSkeleton } from '@/components/product/brandInfo';
import ProductImageSlider, {
  ProductImageSliderSkeleton,
} from '@/components/product/productImageSlider';
import Categories, {
  CategoriesSkeleton,
} from '@/components/product/categories';
import ProductOptions, {
  ProductOptionsSkeleton,
} from '@/components/product/productOptions';
import ProductInfo, {
  ProductInfoSkeleton,
} from '@/components/product/productInfo';
import ProductButtons, {
  ProductButtonsSkeleton,
} from '@/components/product/productButtons';

export default function Product() {
  return (
    <Suspense fallback={<LoadingSkeletons />}>
      <MainContent />
    </Suspense>
  );
}

const LoadingSkeletons = () => {
  return (
    <div className="w-full">
      <CategoriesSkeleton />
      <div className="max-w-[1300px] m-auto md:pt-10 md:px-[50px]">
        <BrandInfoSkeleton />
        <div className="flex flex-col md:flex-row md:gap-[45px]">
          <ProductImageSliderSkeleton />
          <div className="flex flex-col w-full">
            <ProductInfoSkeleton />
            <ProductOptionsSkeleton />
            <ProductButtonsSkeleton />
          </div>
        </div>
      </div>
    </div>
  );
};

const MainContent = () => {
  const { data } = useSuspenseQuery({
    queryKey: [`product`],
    queryFn: fetchProductData,
    staleTime: 60000,
  });

  return (
    <div className="w-full">
      <Categories />

      <div className="max-w-[1300px] m-auto md:pt-10 md:px-[50px]">
        <BrandInfo
          brandId={data.brandInfo.brandId}
          name={data.brandInfo.name}
          subCopy={data.brandInfo.subCopy}
        />

        <div className="flex flex-col md:flex-row md:gap-[45px] font-pretendard">
          <ProductImageSlider imgSrc={data.productInfo.itemImage} />
          <div className="flex flex-col w-full">
            <ProductInfo data={data} />
            <ProductOptions
              price={data.productInfo.saleInfo.totalSalePrice}
              options={data.productInfo.options}
            />
            <ProductButtons />
          </div>
        </div>
      </div>
    </div>
  );
};

'use client';

import React from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchProductData } from '@/fetch/main';
import BrandInfo from '@/components/product/brandInfo';
import ProductImageSlider from '@/components/product/productImageSlider';
import Categories from '@/components/product/categories';
import ProductOptions from '@/components/product/productOptions';
import ProductInfo from '@/components/product/productInfo';
import ProductButtons from '@/components/product/productButtons';

const Product = () => {
  const { data } = useSuspenseQuery({
    queryKey: [`product`],
    queryFn: fetchProductData,
    staleTime: 60000,
  });

  return (
    <div className="w-full">
      <Categories />

      <div className="max-w-[1300px] m-auto pt-10 px-[50px]">
        <BrandInfo
          brandId={data.brandInfo.brandId}
          name={data.brandInfo.name}
          subCopy={data.brandInfo.subCopy}
        />

        <div className="flex gap-[45px] font-pretendard">
          <ProductImageSlider imgSrc="/static/images/product-sample-image.jpg" />
          <div className="flex flex-col w-full">
            <ProductInfo data={data} />
            <ProductOptions options={data.productInfo.options} />
            <ProductButtons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

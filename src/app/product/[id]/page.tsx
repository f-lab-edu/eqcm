'use client';

import React, { Suspense } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';

import { fetchProduct } from '@/fetch/product';
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
import { OptionGroupType, TransformedOptionsType } from '@/types/product';

type Props = {
  params: { id: string };
};

export default function Product({ params }: Props) {
  return (
    <Suspense fallback={<LoadingSkeletons />}>
      <MainContent id={params.id} />
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

type MainContentProps = {
  id: string;
};

const MainContent = ({ id }: MainContentProps) => {
  const { data } = useSuspenseQuery({
    queryKey: [`products/${id}`],
    queryFn: () => fetchProduct(id),
    staleTime: 60000,
  });

  function transformOptionGroupsToOptions(
    optionGroups: OptionGroupType[],
  ): TransformedOptionsType {
    const options: TransformedOptionsType = {};

    optionGroups.forEach((group) => {
      options[group.name] = group.options.map((option) => option.name);
    });

    return options;
  }

  return (
    <div className="w-full">
      <Categories />

      <div className="max-w-[1300px] m-auto md:pt-10 md:px-[50px]">
        <BrandInfo
          brandId={data.brand.id}
          name={data.brand.name}
          subCopy={data.brand.subCopy}
          thumbnail={data.brand.logoUrl}
        />

        <div className="flex flex-col md:flex-row md:gap-[45px] font-pretendard">
          <ProductImageSlider imgSrc={data.product.itemImage} />
          <div className="flex flex-col w-full">
            <ProductInfo data={data} />
            <ProductOptions
              price={data.product.price}
              options={transformOptionGroupsToOptions(
                data.product.optionGroups,
              )}
            />
            <ProductButtons />
          </div>
        </div>
      </div>
    </div>
  );
};

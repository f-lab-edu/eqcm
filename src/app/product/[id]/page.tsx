import { Metadata } from 'next';

import BrandInfo from '@/components/product/brandInfo';
import ProductImageSlider from '@/components/product/productImageSlider';
import Categories from '@/components/product/categories';
import ProductInfo from '@/components/product/productInfo';
import ProductButtons from '@/components/product/productButtons';

import { fetchProductData } from '@/fetch';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await fetchProductData(params.id);

  return {
    alternates: {
      canonical: `/product/${params.id}`,
    },
    title: product.product.name,
    description: `${product.product.price}원`,
    openGraph: {
      title: product.product.name,
      description: `${product.product.price}원`,
      siteName: 'eqcm',
      locale: 'ko_KR',
      type: 'website',
      url: `http://localhost:3000/product/${params.id}`,
      images: {
        url: product.product.itemImage,
      },
    },
  };
}

export default async function Product({ params }: Props) {
  const data = await fetchProductData(params.id);

  // function transformOptionGroupsToOptions(
  //   optionGroups: OptionGroupType[],
  // ): TransformedOptionsType {
  //   const options: TransformedOptionsType = {};

  //   optionGroups.forEach((group) => {
  //     options[group.name] = group.options.map((option) => option.name);
  //   });

  //   return options;
  // }

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
            {/* <ProductOptions
              price={data.product.price}
              options={transformOptionGroupsToOptions(
                data.product.optionGroups,
              )}
            /> */}
            <ProductButtons />
          </div>
        </div>
      </div>
    </div>
  );
}

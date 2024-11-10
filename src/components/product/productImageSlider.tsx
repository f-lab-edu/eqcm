import React, { memo } from 'react';
import Image from 'next/image';
import Skeleton from '../common/skeleton';

type Props = {
  imgSrc: string;
};

const ProductImageSlider = ({ imgSrc }: Props) => {
  const imageSrc = imgSrc ?? '/static/images/fallback-image.jpg';

  return (
    <div className="relative w-full max-w-[564px]">
      <Image
        sizes="100vw"
        width={0}
        height={0}
        className="w-[100%] h-[auto] rounded"
        src={imageSrc}
        alt="product"
      />
    </div>
  );
};

export const ProductImageSliderSkeleton = () => (
  <div className="relative w-full max-w-[564px]">
    <Skeleton style="aspect-[1/1]" />
  </div>
);

export default memo(ProductImageSlider);

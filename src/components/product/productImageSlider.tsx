import React, { memo } from 'react';
import Image from 'next/image';

type Props = {
  imgSrc: string;
};

const ProductImageSlider = ({ imgSrc }: Props) => {
  return (
    <div className="relative w-full max-w-[564px]">
      <Image
        sizes="100vw"
        width={0}
        height={0}
        className="w-[100%] h-[auto] rounded"
        src={imgSrc}
        alt="product"
      />
    </div>
  );
};

export default memo(ProductImageSlider);

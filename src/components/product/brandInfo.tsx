import React, { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Skeleton from '../common/skeleton';

type Props = {
  brandId: number;
  name: string;
  subCopy: string;
  thumbnail: string;
};

const BrandInfo = ({ brandId, name, subCopy, thumbnail }: Props) => {
  const imageSrc = thumbnail ?? '/static/images/fallback_image.jpg';

  return (
    <div className="desktop-only-flex mb-4 pr-[80px]">
      <div className="min-w-[74px]">
        <Image width={74} height={74} src={imageSrc} alt="brand image" />
      </div>
      <div className="pl-[14px]">
        <p className="text-[16px] font-bold">{name}</p>
        <p className="text-[13px]">{subCopy}</p>
        <Link
          href={`/brand/${brandId}`}
          className="inline-block w-auto mt-[6px] px-[10px] text-[11px] border border-[#dcdfe6] leading-[25px]"
        >
          BRAND HOME
        </Link>
      </div>
    </div>
  );
};

export const BrandInfoSkeleton = () => (
  <div className="desktop-only-flex mb-4 pr-[80px]">
    <Skeleton style="size-[74px]" />
    <div className="flex flex-col gap-4 pl-[14px]">
      {[...Array(3)].map((_, idx) => (
        <Skeleton key={`brand-${idx}`} style="w-[100px] h-[10px]" />
      ))}
    </div>
  </div>
);

export default memo(BrandInfo);

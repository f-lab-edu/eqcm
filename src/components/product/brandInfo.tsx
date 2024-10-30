import React, { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Skeleton from '../common/skeleton';
import { randomUUID } from 'crypto';

type Props = {
  brandId: number;
  name: string;
  subCopy: string;
};

const BrandInfo = ({ brandId, name, subCopy }: Props) => {
  return (
    <div className="desktop-only-flex mb-4 pr-[80px]">
      <div className="min-w-[74px]">
        <Image
          width={74}
          height={74}
          src="/static/images/brand-image-sample.jpg"
          alt="brand image"
        />
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
      {[...Array(3)].map(() => (
        <Skeleton key={randomUUID()} style="w-[100px] h-[10px]" />
      ))}
    </div>
  </div>
);

export default memo(BrandInfo);

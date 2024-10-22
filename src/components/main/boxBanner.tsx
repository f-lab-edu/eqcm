import Image from 'next/image';
import Link from 'next/link';
import BoxBannerItem, { BoxBannerItemSkeleton } from './boxBannerItem';
import { BoxBannerType, ProductType } from '@/types/main';
import Skeleton from '../common/skeleton';

type Props = {
  data: BoxBannerType;
};

const BoxBanner = ({ data }: Props) => {
  return (
    <div className="relative flex flex-col gap-3 px-[32px] py-[24px]">
      <Link href={data.link} className="flex flex-col gap-3">
        <Image
          src={data.bannerImageUrl}
          alt=""
          sizes="100vw"
          width={0}
          height={0}
          objectFit="contain"
          className="w-[100%] h-[auto] rounded"
        />
        <p className="font-bold text-[22px]">{data.title}</p>
        <p className="text-[15px]">{data.subtitle}</p>
      </Link>
      {data.products &&
        data.products.map((product: ProductType) => (
          <BoxBannerItem key={product.productId} product={product} />
        ))}
    </div>
  );
};

export const BoxBannerSkeleton = () => {
  return (
    <div className="relative flex flex-col gap-3 px-[32px] py-[24px]">
      <div className="flex flex-col gap-3">
        <Skeleton style="aspect-[1/1]" />
        <Skeleton style="h-[22px]" />
        <Skeleton style="h-[15px]" />
      </div>
      <BoxBannerItemSkeleton />
    </div>
  );
};

export default BoxBanner;

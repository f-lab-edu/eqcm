import Image from 'next/image';
import Link from 'next/link';
import { ProductType } from '@/types/main';
import BoxBannerItem from './boxBannerItem';

type Props = {
  bannerImageUrl: string;
  link: string;
  title: string;
  subtitle: string;
  products?: ProductType[];
};

const BoxBanner = ({
  bannerImageUrl,
  link,
  title,
  subtitle,
  products,
}: Props) => {
  return (
    <div className="relative flex flex-col gap-3 px-[32px] py-[24px]">
      <Link href={link} className="flex flex-col gap-3">
        <Image
          src={bannerImageUrl}
          alt=""
          sizes="100vw"
          width={0}
          height={0}
          objectFit="contain"
          className="w-[100%] h-[auto]"
        />
        <p className="font-bold text-[22px]">{title}</p>
        <p className="text-[15px]">{subtitle}</p>
      </Link>
      {products &&
        products.map((product) => (
          <BoxBannerItem key={product.productId} product={product} />
        ))}
    </div>
  );
};

export default BoxBanner;

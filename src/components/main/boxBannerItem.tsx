import Image from 'next/image';
import Link from 'next/link';
import { ProductType } from '@/types/main';
import { formatLikesToK, formatWithCommas } from '@/utils/format';
import { Icons } from '../icons';

type Props = {
  product: ProductType;
};

const BoxBannerItem = ({ product }: Props) => {
  return (
    <Link
      href={`/products/${product.productId}`}
      key={product.productId}
      className="flex justify-between items-center py-[10px] h-[76px] gap-2 border-t-[1px] border-[#ccc]"
    >
      <Image
        src={product.productImageUrl}
        alt=""
        width={54}
        height={54}
        objectFit="contain"
      />
      <div className="flex-1 text-[12px] overflow-hidden">
        <p className="font-bold">{product.brand}</p>
        <p className="truncate">{product.product}</p>
        <p className="flex gap-[2px] font-bold">
          <span className="text-[#ff4800]">{product.discountPercentage}%</span>
          {formatWithCommas(product.productPrice)}
        </p>
      </div>
      <div
        role="button"
        className="flex flex-col justify-center items-center min-w-[52px] text-[#a0a0a0]"
      >
        {product.likeStatus ? <Icons.like_on /> : <Icons.like_off />}
        {formatLikesToK(product.likes)}
      </div>
    </Link>
  );
};

export default BoxBannerItem;

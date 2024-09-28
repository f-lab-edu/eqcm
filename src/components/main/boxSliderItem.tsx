import Image from 'next/image';
import Link from 'next/link';
import { ProductType } from '@/types/main';
import { formatWithCommas } from '@/utils/format';
import { Icons } from '../icons';

type Props = {
  product: ProductType;
};

const BoxSliderItem = ({ product }: Props) => {
  return (
    <Link
      href={`/products/${product.productId}`}
      key={product.productId}
      className="flex flex-col gap-2 overflow-hidden"
    >
      <div className="relative">
        <Image
          src={product.productImageUrl}
          alt=""
          objectFit="contain"
          sizes="100vw"
          width={0}
          height={0}
          className="w-[100%] h-[auto] rounded"
        />
        <div
          role="button"
          className="absolute bottom-[10px] right-[10px] flex flex-col justify-center items-center text-[#a0a0a0]"
        >
          {product.likeStatus ? (
            <Icons.like_on />
          ) : (
            <Icons.like_off fillWhite={true} />
          )}
        </div>
      </div>
      <div className="overflow-hidden">
        <p className="text-[11px] font-bold">{product.brand}</p>
        <p className="text-[12px] truncate">{product.product}</p>
        <p className="text-[14px] flex gap-[2px] font-bold">
          <span className="text-[#ff4800]">{product.discountPercentage}%</span>
          {formatWithCommas(product.productPrice)}
        </p>
        <div className="flex gap-1 text-[10px] text-[#a0a0a0] break-words flex-wrap">
          <span className="whitespace-nowrap">
            ♥ {formatWithCommas(product.likes)}
          </span>
          <span className="whitespace-nowrap">
            ★ {product.rate} (
            {product.reviews && formatWithCommas(product.reviews)})
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BoxSliderItem;

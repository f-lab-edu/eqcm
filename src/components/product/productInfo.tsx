import React, { memo } from 'react';
import Skeleton from '../common/skeleton';
import { ProductDataType } from '@/types/product';
import { formatWithCommas } from '@/utils/format';
import { Icons } from '../icons';

type Props = {
  data: ProductDataType;
};

const ProductInfo = ({ data }: Props) => {
  return (
    <div className="w-full px-[20px] md:px-0 md:border-t-2 md:border-black">
      <div className="flex justify-between">
        <p className="text-[20px] font-bold py-6 pr-[34px]">
          {data.product.name}
        </p>
        {/* like */}
        {/* <div className="flex justify-center items-center md:w-[85px] md:border-l-[1px] md:border-[#dcdfe6]">
          <div className="size-[26px] cursor-pointer">
            {data.product.isLiked ? (
              <Icons.DetailLikeOn />
            ) : (
              <Icons.DetailLikeOff />
            )}
          </div>
        </div> */}
      </div>

      {/* review */}
      {/* <div className="desktop-only-flex mb-6 items-center gap-2">
        <RateStars rate={data.product.avgReviewPoint} />
        <span className="text-[11px] underline cursor-pointer">
          {data.product.reviewCount}개 리뷰 보기
        </span>
      </div> */}
      <div className="flex justify-between mb-4">
        <div>
          <div className="flex items-center text-[20px] font-bold">
            {/* <span className="mr-[2px] text-[#ff4800]">
              {data.product.saleInfo.totalSalePercent}%
            </span> */}
            <span>{formatWithCommas(data.product.price)}</span>
            <span className="text-[16px]">원</span>
          </div>
          <div className="text-[13px] text-[#a0a0a0] line-through">
            {/* {formatWithCommas(data.product.saleInfo.consumerPrice)}원 */}
          </div>
        </div>
        {/* <button
          type="button"
          className="flex items-center justify-around w-[94px] h-8 leading-8 text-[11px] bg-black text-white"
        >
          <span>쿠폰받기</span>
          <Icons.CouponDownload />
        </button> */}
      </div>
      {/* <div className="flex justify-between items-center border-y-[1px] border-[#dcdfe6] h-[60px] text-[#474747]">
        <div className="flex items-center gap-1 text-[13px] font-bold">
          나의 구매 가능 가격
        </div>
        <div className="flex items-center gap-1 text-[16px] font-bold">
          <span className="text-[#a0a0a0]">
            {data.product.saleInfo.totalSalePercent}%
          </span>
          <span>
            {formatWithCommas(data.product.saleInfo.totalSalePrice)}원
          </span>
          <Icons.ViewMoreArrow /> 
        </div>
      </div> */}
      <ul className="flex flex-col gap-y-4 my-5 text-[13px]">
        <li className="flex">
          <p className="flex items-center gap-1 min-w-[110px]">
            배송정보 <Icons.Tooltip />
          </p>
          <p className="text-[#375fff]">{data.shipping.estimatedTime}</p>
        </li>
        <li className="flex">
          <p className="min-w-[110px]">배송비</p>
          <div>
            <p className="text-[#375fff]">
              {data.shipping.fee === 0
                ? '무료배송'
                : `${formatWithCommas(data.shipping.fee)}원`}
            </p>
            {/* 제주/도서산간 추가 배송비 없음 */}
          </div>
        </li>
      </ul>
    </div>
  );
};

export const ProductInfoSkeleton = () => (
  <div className="w-full px-[20px] md:px-0 md:border-t-2 md:border-black">
    <div className="flex justify-between">
      <Skeleton style="w-full h-[24px] my-6 mr-[34px]" />
      <div className="flex justify-center items-center md:w-[85px] md:border-l-[1px] md:border-[#dcdfe6]">
        <div className="size-[26px]">
          <Icons.DetailLikeOff />
        </div>
      </div>
    </div>
    <div className="desktop-only-flex mb-6 items-center gap-2">
      <Skeleton style="w-[100px] h-[20px]" />
    </div>
    <div className="flex justify-between mb-4">
      <div>
        <div className="flex items-center mb-1">
          <Skeleton style="w-[100px] h-[20px]" />
          <Skeleton style="w-[100px] h-[20px]" />
        </div>
        <Skeleton style="w-[100px] h-[14px]" />
      </div>
      <Skeleton style="w-[94px] h-8" />
    </div>
    <div className="flex justify-between items-center border-y-[1px] border-[#dcdfe6] h-[60px]">
      <Skeleton style="w-[100px] h-[20px]" />
      <Skeleton style="w-[100px] h-[20px]" />
    </div>
    <ul className="flex flex-col gap-y-4 my-5">
      <li className="flex gap-2">
        <Skeleton style="w-[100px] h-[20px]" />
        <Skeleton style="w-[100px] h-[20px]" />
      </li>
      <li className="flex gap-2">
        <Skeleton style="w-[100px] h-[20px]" />
        <Skeleton style="w-[100px] h-[20px]" />
      </li>
    </ul>
  </div>
);

export default memo(ProductInfo);

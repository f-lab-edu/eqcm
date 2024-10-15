import React, { memo } from 'react';
import RateStars from './rateStars';
import Skeleton from '../common/skeleton';
import { ProductDataType } from '@/types/product';
import { formatWithCommas } from '@/utils/format';
import { Icons } from '../icons';

type Props = {
  data: ProductDataType;
};

const ProductInfo = ({ data }: Props) => {
  return (
    <div className="w-full border-t-2 border-black">
      <div className="flex justify-between">
        <p className="text-[20px] font-bold py-6 pr-[34px]">
          {data.productInfo.itemName}
        </p>
        <div className="flex justify-center items-center w-[85px] border-l-[1px] border-[#dcdfe6]">
          <div className="size-[26px] cursor-pointer">
            {data.productInfo.isLiked ? (
              <Icons.detail_like_on />
            ) : (
              <Icons.detail_like_off />
            )}
          </div>
        </div>
      </div>
      <div className="mb-6 flex items-center gap-2">
        <RateStars rate={data.productInfo.avgReviewPoint} />
        <span className="text-[11px] underline cursor-pointer">
          {data.productInfo.reviewCount}개 리뷰 보기
        </span>
      </div>
      <div className="flex justify-between mb-4">
        <div>
          <div className="flex items-center text-[20px] font-bold">
            <span className="mr-[2px] text-[#ff4800]">
              {data.productInfo.saleInfo.totalSalePercent}%
            </span>
            <span>
              {formatWithCommas(data.productInfo.saleInfo.totalSalePrice)}
            </span>
            <span className="text-[16px]">원</span>
          </div>
          <div className="text-[13px] text-[#a0a0a0] line-through">
            {formatWithCommas(data.productInfo.saleInfo.consumerPrice)}원
          </div>
        </div>
        <button
          type="button"
          className="flex items-center justify-around w-[94px] h-8 leading-8 text-[11px] bg-black text-white"
        >
          <span>쿠폰받기</span>
          <Icons.coupon_download />
        </button>
      </div>
      <div className="flex justify-between items-center border-y-[1px] border-[#dcdfe6] h-[60px] text-[#474747]">
        <div className="flex items-center gap-1 text-[13px] font-bold">
          나의 구매 가능 가격
        </div>
        <div className="flex items-center gap-1 text-[16px] font-bold">
          <span className="text-[#a0a0a0]">
            {data.productInfo.saleInfo.totalSalePercent}%
          </span>
          <span>
            {formatWithCommas(data.productInfo.saleInfo.totalSalePrice)}원
          </span>
          {/* <Icons.view_more_arrow /> */}
        </div>
      </div>
      <ul className="flex flex-col gap-y-4 my-5 text-[13px]">
        <li className="flex">
          <p className="flex items-center gap-1 min-w-[110px]">
            배송정보 <Icons.tooltip />
          </p>
          <p className="text-[#375fff]">
            {data.deliveryInfo.estimatedDeliveryTime}
          </p>
        </li>
        <li className="flex">
          <p className="min-w-[110px]">배송비</p>
          <div>
            <p className="text-[#375fff]">{data.deliveryInfo.deliveryFee}</p>
            제주/도서산간 추가 배송비 없음
          </div>
        </li>
      </ul>
    </div>
  );
};

export const ProductInfoSkeleton = () => (
  <div className="w-full border-t-2 border-black">
    <div className="flex justify-between">
      <Skeleton style="w-full h-[24px] my-6 mr-[34px]" />
      <div className="flex justify-center items-center w-[85px] border-l-[1px] border-[#dcdfe6]">
        <div className="size-[26px]">
          <Icons.detail_like_off />
        </div>
      </div>
    </div>
    <div className="mb-6 flex items-center gap-2">
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

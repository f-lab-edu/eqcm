import React, { memo } from 'react';
import Skeleton from '../common/skeleton';

const ProductButtons = () => {
  return (
    <div className="flex justify-between text-center text-[14px] font-bold">
      <button type="button" className="flex-1 h-[50px] border border-[#dcdfe6]">
        장바구니 담기
      </button>
      <button
        type="button"
        className="flex-1 h-[50px] bg-black text-white hover:bg-[#FF4800] shadow-[10px_10px_16px_0_rgb(0,0,0,0.3)]"
      >
        바로 구매하기
      </button>
    </div>
  );
};

export const ProductButtonsSkeleton = () => {
  return (
    <div className="flex justify-between">
      <Skeleton style="flex-1 h-[50px]" />
      <Skeleton style="flex-1 h-[50px]" />
    </div>
  );
};

export default memo(ProductButtons);

import React, { memo } from 'react';
import CategoryDropdown from './categoryDropdown';
import Skeleton from '../common/skeleton';

const Categories = () => {
  return (
    <div className="flex gap-3 mt-[35px] mb-[5px] justify-center items-center text-[15px] font-semibold">
      <CategoryDropdown
        currentValue="여성의류"
        list={['여성의류', '여성의류', '여성의류']}
      />
      <span className="text-gray-400 text-[20px] font-light">/</span>
      <CategoryDropdown
        currentValue="아우터"
        list={['아우터', '아우터', '아우터']}
      />
      <span className="text-gray-400 text-[20px] font-light">/</span>
      <CategoryDropdown currentValue="재킷" list={['재킷', '재킷', '재킷']} />
    </div>
  );
};

export const CategoriesSkeleton = () => (
  <div className="flex gap-3 mt-[35px] mb-[5px] justify-center items-center">
    <Skeleton style="w-[100px] h-[20px]" />
    <span className="text-gray-400 text-[20px] font-light">/</span>
    <Skeleton style="w-[100px] h-[20px]" />
    <span className="text-gray-400 text-[20px] font-light">/</span>
    <Skeleton style="w-[100px] h-[20px]" />
  </div>
);

export default memo(Categories);

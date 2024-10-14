import React, { memo } from 'react';
import CategoryDropdown from './categoryDropdown';

const Categories = () => {
  // TODO: category 데이터 형태
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

export default memo(Categories);

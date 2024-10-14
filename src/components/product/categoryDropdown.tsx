'use client';

import React, { memo, useState } from 'react';
import cn from 'classnames';
import { Icons } from '../icons';

type Props = {
  currentValue: string;
  list: string[];
};

const CategoryDropdown = ({ currentValue, list }: Props) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {isHover}
      <div className="flex gap-2 items-center">
        <span>{currentValue}</span>
        <div className="relative top-[-2px]">
          <Icons.category_dropdown />
        </div>
      </div>
      <ul
        className={cn(
          'absolute top-6 -left-1/2 border border-black text-[12px] font-light w-[150px] py-2 cursor-pointer bg-white',
          !isHover && 'hidden',
        )}
      >
        {list.map((item) => (
          <li key={item} className="leading-6 px-4 hover:bg-gray-100">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(CategoryDropdown);

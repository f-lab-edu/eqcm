import Link from 'next/link';
import { Fragment, memo } from 'react';
import cn from 'classnames';

import { CATEGORIES } from '@/constants/header';

const Category = memo(function Category() {
  return (
    <nav className="flex">
      <ul className="flex flex-wrap font-bold gap-4 lg:gap-5">
        {CATEGORIES.map((category, idx) => {
          return (
            <Fragment key={category}>
              {idx === CATEGORIES.length - 2 && (
                <div className="border bg-gray-100" />
              )}
              <li
                key={category}
                className={cn(
                  'cursor-pointer hover:shadow-[0_4px_0_0_rgba(0,0,0,1)] text-xs lg:text-base',
                  idx >= CATEGORIES.length - 2 &&
                    'font-extralight italic hover:shadow-none',
                )}
              >
                <Link href="/">{category}</Link>
              </li>
            </Fragment>
          );
        })}
      </ul>
    </nav>
  );
});

export default Category;

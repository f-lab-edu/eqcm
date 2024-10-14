import React, { memo } from 'react';
import { Icons } from '../icons';

type Props = {
  rate: number;
};

const RateStars = ({ rate }: Props) => {
  const totalStars = 5;
  const fullStars = Math.floor(rate);
  const hasHalfStar = rate % 1 >= 0.5;
  const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex gap-[2px]">
      {Array(fullStars)
        .fill()
        .map((_, index) => (
          <span key={`full-${index}`} className="star full">
            <Icons.full_star />
          </span>
        ))}

      {hasHalfStar && (
        <span className="star half">
          <Icons.half_star />
        </span>
      )}

      {Array(emptyStars)
        .fill()
        .map((_, index) => (
          <span key={`empty-${index}`} className="star empty">
            <Icons.empty_star />
          </span>
        ))}
    </div>
  );
};

export default memo(RateStars);

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
        .map((_, idx) => (
          <span key={`full-${idx}`} className="star full">
            <Icons.FullStar />
          </span>
        ))}

      {hasHalfStar && (
        <span className="star half">
          <Icons.HalfStar />
        </span>
      )}

      {Array(emptyStars)
        .fill()
        .map((_, idx) => (
          <span key={`empty-${idx}`} className="star empty">
            <Icons.EmptyStar />
          </span>
        ))}
    </div>
  );
};

export default memo(RateStars);

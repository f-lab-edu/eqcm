import { memo } from 'react';
import cn from 'classnames';

type Props = {
  width?: string | number;
  height?: string | number;
  style?: string;
};

const Skeleton = ({ width, height, style }: Props) => {
  return (
    <div
      className={cn('skeleton bg-gray-200 animate-pulse', style)}
      style={{ width, height }}
    />
  );
};

export default memo(Skeleton);

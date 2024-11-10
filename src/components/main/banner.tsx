import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';
import Skeleton from '../common/skeleton';
import { BannerType } from '@/types/main';

type Props = {
  data: BannerType;
  style?: string;
};

const Banner = ({ data, style }: Props) => {
  if (!data) {
    return null;
  }

  return (
    <Link href={data.link} className={cn('relative w-full h-auto', style)}>
      <Image
        src={data.imgSrc}
        alt={data.imgAlt}
        sizes="100vw"
        width={0}
        height={0}
        objectFit="contain"
        className="w-[100%] h-[auto]"
      />
    </Link>
  );
};

export const BannerSkeleton = () => {
  return <Skeleton style="w-full aspect-[5/9] desktop-only" />;
};

export default Banner;

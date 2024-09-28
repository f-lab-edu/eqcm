import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';
import { BannerType } from '@/types/main';

type Props = {
  data: BannerType;
  style?: string;
};

const Banner = ({ data, style }: Props) => {
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

export default Banner;

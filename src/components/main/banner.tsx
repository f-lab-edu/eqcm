import Image from 'next/image';
import Link from 'next/link';
import { BannerType } from '@/types/main';

type Props = {
  data: BannerType;
};

const Banner = ({ data }: Props) => {
  return (
    <Link href={data.link} className="relative w-full h-auto">
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

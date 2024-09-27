import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  imgSrc: string;
  imgAlt: string;
  link: string;
};

const Banner = ({ imgSrc, imgAlt, link }: Props) => {
  return (
    <Link href={link} className="relative size-full">
      <Image
        src={imgSrc}
        alt={imgAlt}
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

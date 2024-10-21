'use client';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { BannerSkeleton } from './banner';
import { BoxBannerSkeleton } from './boxBanner';

type Props = {
  children: React.ReactNode;
};

const BoxSection = ({ children }: Props) => {
  return (
    <section className="relative w-full md:w-[56%]">
      <ResponsiveMasonry columnsCountBreakPoints={{ 300: 1, 719: 2 }}>
        <Masonry>{children}</Masonry>
      </ResponsiveMasonry>
      <div className="absolute w-[1px] h-full bg-[#ccc] top-0 right-[50%] hidden lg:block" />
    </section>
  );
};

export const BoxSectionSkeleton = () => {
  return (
    <section className="relative w-full md:w-[56%]">
      <ResponsiveMasonry columnsCountBreakPoints={{ 300: 1, 719: 2 }}>
        <Masonry>
          <BannerSkeleton />
          <BannerSkeleton />
          <BoxBannerSkeleton />
          <BoxBannerSkeleton />
        </Masonry>
      </ResponsiveMasonry>
    </section>
  );
};

export default BoxSection;

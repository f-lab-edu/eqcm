'use client';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import BoxRenderer from './boxRenderer';
import Banner, { BannerSkeleton } from './banner';
import BoxBanner, { BoxBannerSkeleton } from './boxBanner';
import BoxSlider from './boxSlider';
import {
  BannerType,
  BoxBannerType,
  BoxSliderType,
  MainComponentsType,
} from '@/types/main';

type Props = {
  data: (BannerType | BoxBannerType | BoxSliderType)[] | undefined;
};

const BoxSection = ({ data }: Props) => {
  if (data === undefined) {
    return null;
  }

  return (
    <section className="relative w-full md:w-[56%]">
      <ResponsiveMasonry columnsCountBreakPoints={{ 300: 1, 719: 2 }}>
        <Masonry>
          {data.map((box, idx) => (
            <BoxRenderer key={idx}>
              {box.type === MainComponentsType.BANNER && (
                <Banner
                  key={idx}
                  data={box as BannerType}
                  style="desktop-only"
                />
              )}
              {box.type === MainComponentsType.BOX_BANNER && (
                <BoxBanner key={idx} data={box as BoxBannerType} />
              )}
              {box.type === MainComponentsType.BOX_SLIDER && (
                <BoxSlider key={idx} data={box as BoxSliderType} />
              )}
            </BoxRenderer>
          ))}
        </Masonry>
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

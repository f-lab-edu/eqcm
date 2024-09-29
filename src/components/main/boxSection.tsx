'use client';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Banner from './banner';
import BoxBanner from './boxBanner';
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
          {data.map((box, idx) => {
            if (box.type === MainComponentsType.BANNER) {
              return (
                <Banner
                  key={idx}
                  data={box as BannerType}
                  style="desktop-only"
                />
              );
            } else if (box.type === MainComponentsType.BOX_BANNER) {
              return <BoxBanner key={idx} data={box as BoxBannerType} />;
            } else if (box.type === MainComponentsType.BOX_SLIDER) {
              return <BoxSlider key={idx} data={box as BoxSliderType} />;
            }
          })}
        </Masonry>
      </ResponsiveMasonry>
      <div className="absolute w-[1px] h-full bg-[#ccc] top-0 right-[50%] hidden lg:block" />
    </section>
  );
};

export default BoxSection;

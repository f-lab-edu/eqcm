'use client';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Banner from './banner';
import BoxBanner from './boxBanner';
import BoxSlider from './boxSlider';
import { MainBoxDummyData } from '@/constants/main';
import {
  BannerType,
  BoxBannerType,
  BoxSliderType,
  MainComponentsType,
} from '@/types/main';

const BoxSection = () => {
  return (
    <section className="relative w-full md:w-[56%]">
      <ResponsiveMasonry columnsCountBreakPoints={{ 300: 1, 719: 2 }}>
        <Masonry>
          {MainBoxDummyData.map((data, idx) => {
            if (data.type === MainComponentsType.BANNER) {
              return <Banner key={idx} data={data as BannerType} />;
            } else if (data.type === MainComponentsType.BOX_BANNER) {
              return <BoxBanner key={idx} data={data as BoxBannerType} />;
            } else if (data.type === MainComponentsType.BOX_SLIDER) {
              return <BoxSlider key={idx} data={data as BoxSliderType} />;
            }
          })}
        </Masonry>
      </ResponsiveMasonry>
      <div className="absolute w-[1px] h-full bg-[#ccc] top-0 right-[50%] hidden lg:block" />
    </section>
  );
};

export default BoxSection;

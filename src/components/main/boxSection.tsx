'use client';

import { useEffect, useState } from 'react';
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
  const [boxes, setBoxes] = useState<
    (BannerType | BoxBannerType | BoxSliderType)[] | null
  >(null);

  useEffect(() => {
    setBoxes(MainBoxDummyData);
  }, []);

  return (
    <section className="relative w-full md:w-[56%]">
      {boxes && (
        <ResponsiveMasonry columnsCountBreakPoints={{ 300: 1, 719: 2 }}>
          <Masonry>
            {boxes?.map((box, idx) => {
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
      )}
      <div className="absolute w-[1px] h-full bg-[#ccc] top-0 right-[50%] hidden lg:block" />
    </section>
  );
};

export default BoxSection;

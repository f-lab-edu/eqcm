'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import BannerSection, {
  BannerSectionSkeleton,
} from '@/components/main/bannerSection';
import BoxSection, { BoxSectionSkeleton } from '@/components/main/boxSection';
import ViewMoreButton from '@/components/main/viewMoreButton';
import { fetchMainData } from '@/fetch';
import { Suspense } from 'react';
import Banner from '@/components/main/banner';
import BoxBanner from '@/components/main/boxBanner';
import BoxSlider from '@/components/main/boxSlider';
import {
  BannerType,
  BoxBannerType,
  BoxSliderType,
  MainComponentsType,
} from '@/types/main';

export default function Home() {
  return (
    <Suspense fallback={<LoadingSkeletons />}>
      <MainContent />
    </Suspense>
  );
}

function LoadingSkeletons() {
  return (
    <div className="flex-1">
      <div className="flex flex-col md:flex-row">
        <BannerSectionSkeleton />
        <BoxSectionSkeleton />
      </div>
    </div>
  );
}

function MainContent() {
  const { data } = useSuspenseQuery({
    queryKey: ['main'],
    queryFn: fetchMainData,
    staleTime: 60000,
  });

  return (
    <div className="flex-1 font-pretendard">
      <div className="flex flex-col md:flex-row">
        <BannerSection data={data.banners} />
        <BoxSection>
          {data.boxes?.map((box, idx) => {
            if (box.type === MainComponentsType.BANNER) {
              return (
                <Banner
                  key={idx}
                  data={box as BannerType}
                  style="desktop-only"
                />
              );
            }
            if (box.type === MainComponentsType.BOX_BANNER) {
              return <BoxBanner key={idx} data={box as BoxBannerType} />;
            }
            if (box.type === MainComponentsType.BOX_SLIDER) {
              return <BoxSlider key={idx} data={box as BoxSliderType} />;
            }
            return null;
          })}
        </BoxSection>
      </div>
      <ViewMoreButton />
    </div>
  );
}

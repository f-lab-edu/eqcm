'use client';

import BannerSection from '@/components/main/bannerSection';
import BoxSection from '@/components/main/boxSection';
import ViewMoreButton from '@/components/main/viewMoreButton';

export default function Home() {
  return (
    <div className="flex-1 font-pretendard">
      <div className="flex">
        <BannerSection />
        <BoxSection />
      </div>
      <ViewMoreButton />
    </div>
  );
}

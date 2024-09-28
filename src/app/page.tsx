'use client';

import BannerSection from '@/components/main/bannerSection';
import BoxSection from '@/components/main/boxSection';
import ViewMoreButton from '@/components/main/viewMoreButton';

export default function Home() {
  return (
    <div className="flex-1 font-pretendard">
      <div className="flex flex-col md:flex-row">
        <BannerSection />
        <BoxSection />
      </div>
      <ViewMoreButton />
    </div>
  );
}

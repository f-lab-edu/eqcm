'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import BannerSection, {
  BannerSectionSkeleton,
} from '@/components/main/bannerSection';
import BoxSection, { BoxSectionSkeleton } from '@/components/main/boxSection';
import ViewMoreButton from '@/components/main/viewMoreButton';
import { fetchMainData } from '@/fetch/main';
import { Suspense } from 'react';

export default function Home() {
  return (
    <Suspense fallback={<LoadingSkeletons />}>
      <MainContent />
    </Suspense>
  );
}

function LoadingSkeletons() {
  return (
    <div className="flex-1 font-pretendard">
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
        <BoxSection data={data.boxes} />
      </div>
      <ViewMoreButton />
    </div>
  );
}

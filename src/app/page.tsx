'use client';

import dynamic from 'next/dynamic';
import { useQuery } from '@tanstack/react-query';
import { BannerSectionSkeleton } from '@/components/main/bannerSection';
import { BoxSectionSkeleton } from '@/components/main/boxSection';
import ViewMoreButton from '@/components/main/viewMoreButton';
import { fetchMainData } from '@/fetch/main';
import { MainDataType } from '@/types/main';

const BannerSection = dynamic(() => import('@/components/main/bannerSection'), {
  loading: () => <BannerSectionSkeleton />,
  ssr: false,
});

const BoxSection = dynamic(() => import('@/components/main/boxSection'), {
  loading: () => <BoxSectionSkeleton />,
  ssr: false,
});

export default function Home() {
  const { data } = useQuery<MainDataType>({
    queryKey: ['main'],
    queryFn: fetchMainData,
    staleTime: 60000,
  });

  if (!data) {
    return (
      <div>
        <BannerSectionSkeleton />
        <BoxSectionSkeleton />
      </div>
    );
  }

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

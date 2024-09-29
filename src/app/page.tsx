'use client';

import { useEffect, useState } from 'react';
import BannerSection from '@/components/main/bannerSection';
import BoxSection from '@/components/main/boxSection';
import ViewMoreButton from '@/components/main/viewMoreButton';
import { BannerType, BoxBannerType } from '@/types/main';

export default function Home() {
  const [data, setData] = useState<{
    banners: BannerType[];
    boxes: BoxBannerType[];
  } | null>(null);

  useEffect(() => {
    fetch('/main')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="flex-1 font-pretendard">
      <div className="flex flex-col md:flex-row">
        <BannerSection data={data?.banners} />
        <BoxSection data={data?.boxes} />
      </div>
      <ViewMoreButton />
    </div>
  );
}

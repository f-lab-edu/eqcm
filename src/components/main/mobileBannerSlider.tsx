'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { BannerType } from '@/types/main';
import Banner from './banner';
import { Icons } from '../icons';

type Props = {
  data: BannerType[];
};

const MobileBannerSlider = ({ data }: Props) => {
  const [swiper, setSwiper] = useState<SwiperCore>();
  const [idx, setIdx] = useState<number>(1);

  return (
    <div className="relative my-2">
      <button
        type="button"
        onClick={() => swiper?.slidePrev()}
        disabled={swiper?.realIndex === 0}
        className="absolute top-1/2 -translate-y-1/2 z-10 left-[10%] flex justify-center items-center size-10 rounded-full hover:border-zinc-100 hover:border disabled:opacity-[0.5] disabled:cursor-not-allowed"
      >
        <Icons.slide_left_arrow fillWhite={true} />
      </button>
      <button
        type="button"
        onClick={() => swiper?.slideNext()}
        disabled={swiper?.realIndex === data.length - 1}
        className="absolute top-1/2 -translate-y-1/2 z-10 right-[10%] flex justify-center items-center size-10 rounded-full hover:border-zinc-100 hover:border disabled:opacity-[0.5] disabled:cursor-not-allowed"
      >
        <Icons.slide_right_arrow fillWhite={true} />
      </button>

      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={1.1}
        centeredSlides={true}
        spaceBetween={10}
        pagination={{ clickable: true, type: 'progressbar' }}
        modules={[Pagination, Autoplay]}
        className="mobile-banner-slider"
        onSwiper={setSwiper}
        onSlideChange={(swiper) => setIdx(swiper.realIndex + 1)}
      >
        {data.map((banner) => (
          <SwiperSlide key={banner.imgSrc}>
            <Banner data={banner} />
          </SwiperSlide>
        ))}
      </Swiper>

      {swiper && (
        <div className="absolute left-[10%] bottom-[5%] translate-y-1/2 z-10 text-[11px] text-white font-bold">
          <span>{idx < 10 ? '0' + idx : idx}</span>
          <span className="text-white opacity-30">
            ㆍ{data.length < 10 ? '0' + data.length : data.length}
          </span>
        </div>
      )}
    </div>
  );
};

export default MobileBannerSlider;

'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import BoxSliderItem from './boxSliderItem';
import { BoxSliderType } from '@/types/main';
import { Icons } from '../icons';

type Props = {
  data: BoxSliderType;
};

const BoxSlider = ({ data }: Props) => {
  const [swiper, setSwiper] = useState<SwiperCore>();
  const [idx, setIdx] = useState<number>(1);

  return (
    <div className="relative pl-[20px] md:px-[32px] py-[24px]">
      <div className="flex flex-row justify-between lg:flex-col items-start xl:flex-row xl:justify-between xl:items-end py-4">
        <p className="font-bold text-[20px] md:pl-0 md:text-[24px]">
          {data.title}
        </p>
        <div className="desktop-only-flex ml-auto xl:ml-0 gap-1">
          <button
            type="button"
            onClick={() => swiper?.slidePrev()}
            disabled={swiper?.realIndex === 0}
            className="flex justify-center items-center size-9 bg-[#f4f4f4] rounded-full disabled:opacity-[0.5]"
          >
            <Icons.SlideLeftArrow />
          </button>
          <button
            type="button"
            onClick={() => swiper?.slideNext()}
            disabled={swiper?.realIndex === data.products.length - 1}
            className="flex justify-center items-center size-9 bg-[#f4f4f4] rounded-full disabled:opacity-[0.5]"
          >
            <Icons.SlideRightArrow />
          </button>
        </div>
      </div>

      <Swiper
        spaceBetween={10}
        breakpoints={{
          300: {
            slidesPerView: 3.5,
            spaceBetween: 6,
          },
          540: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
        }}
        draggable={true}
        onScrollbarDragMove={setSwiper}
        slidesPerView={1.5}
        className="box-slider"
        onSwiper={setSwiper}
        onSlideChange={(swiper) => setIdx(swiper.realIndex + 1)}
      >
        {data.products.map((product) => (
          <SwiperSlide key={product.productId}>
            <BoxSliderItem product={product} />
          </SwiperSlide>
        ))}
        <SwiperSlide />
      </Swiper>

      {swiper && (
        <div className="absolute right-5 bottom-6 text-[34px] desktop-only">
          <span>{idx}</span>
          <span className="relative bottom-[-10px] text-[#a0a0a0]">
            /{data.products.length}
          </span>
        </div>
      )}
    </div>
  );
};

export default BoxSlider;

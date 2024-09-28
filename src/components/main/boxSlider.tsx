'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import BoxSliderItem from './boxSliderItem';
import { ProductType } from '@/types/main';
import { Icons } from '../icons';

type Props = {
  title: string;
  products: ProductType[];
};

const BoxSlider = ({ title, products }: Props) => {
  const [swiper, setSwiper] = useState<SwiperCore>();
  const [idx, setIdx] = useState<number>(1);

  return (
    <div className="relative px-[32px] py-[24px]">
      <div className="flex justify-between items-end py-4">
        <p className="font-bold text-[24px]">{title}</p>
        <div className="flex gap-1">
          <button
            type="button"
            onClick={() => swiper?.slidePrev()}
            disabled={swiper?.realIndex === 0}
            className="flex justify-center items-center size-9 bg-[#f4f4f4] rounded-full disabled:opacity-[0.5]"
          >
            <Icons.slide_left_arrow />
          </button>
          <button
            type="button"
            onClick={() => swiper?.slideNext()}
            disabled={swiper?.realIndex === products.length - 1}
            className="flex justify-center items-center size-9 bg-[#f4f4f4] rounded-full disabled:opacity-[0.5]"
          >
            <Icons.slide_right_arrow />
          </button>
        </div>
      </div>

      <Swiper
        spaceBetween={10}
        slidesPerView={1.5}
        pagination={{ clickable: true }}
        className="box-slider"
        onSwiper={setSwiper}
        onSlideChange={(swiper) => setIdx(swiper.realIndex + 1)}
      >
        {products.map((product) => (
          <SwiperSlide key={product.productId}>
            <BoxSliderItem product={product} />
          </SwiperSlide>
        ))}
        <SwiperSlide />
      </Swiper>

      {swiper && (
        <div className="absolute right-0 bottom-0 text-[34px]">
          <span>{idx}</span>{' '}
          <span className="relative bottom-[-10px] text-[#a0a0a0]">
            / {products.length}
          </span>
        </div>
      )}
    </div>
  );
};

export default BoxSlider;

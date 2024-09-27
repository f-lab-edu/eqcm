import { Icons } from '@/components/icons';
import BoxBanner from '@/components/main/boxBanner';

export default function Home() {
  return (
    <div className="flex-1">
      <div className="flex">
        <section className="flex flex-col w-[44%] pr-[2%]">
          <BoxBanner
            imgSrc="/static/images/box-banner-sample-image01.webp"
            imgAlt="main banner"
            link="/login"
          />
          <BoxBanner
            imgSrc="/static/images/box-banner-sample-image02.webp"
            imgAlt="main banner"
            link="/login"
          />
          <BoxBanner
            imgSrc="/static/images/box-banner-sample-image03.webp"
            imgAlt="main banner"
            link="/login"
          />
        </section>

        <section className="relative w-[56%]">
          <ul className="grid grid-cols-2">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
          <div className="absolute w-[1px] h-full bg-[#ccc] top-0 right-[50%]" />
        </section>
      </div>

      <div className="flex mt-[30px] justify-center">
        <button
          type="button"
          className="flex justify-center items-center pl-4 gap-1 w-[160px] h-[52px] text-[14px] border border-[#ccc] font-bold"
        >
          더보기
          <Icons.view_more_arrow />
        </button>
      </div>
    </div>
  );
}

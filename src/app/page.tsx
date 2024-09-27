import { Icons } from '@/components/icons';
import Banner from '@/components/main/banner';
import BoxBanner from '@/components/main/boxBanner';

export default function Home() {
  return (
    <div className="flex-1 font-pretendard">
      <div className="flex">
        <section className="flex flex-col w-[44%] pr-[2%]">
          <Banner
            imgSrc="/static/images/main-banner-sample-image01.webp"
            imgAlt="main banner"
            link="/login"
          />
          <Banner
            imgSrc="/static/images/main-banner-sample-image02.webp"
            imgAlt="main banner"
            link="/login"
          />
          <Banner
            imgSrc="/static/images/main-banner-sample-image03.webp"
            imgAlt="main banner"
            link="/login"
          />
        </section>

        <section className="relative w-[56%]">
          <div className="grid grid-cols-2">
            <Banner
              imgSrc="/static/images/box-banner-sample-image01.webp"
              imgAlt="sub banner"
              link="/login"
            />
            <Banner
              imgSrc="/static/images/box-banner-sample-image02.webp"
              imgAlt="sub banner"
              link="/login"
            />
            <BoxBanner
              bannerImageUrl="/static/images/box-sample-lg-image01.webp"
              link="/"
              title="활력을 더하는 가을"
              subtitle="워크웨어의 편안함과 빈티지의 감성을 모두 갖춘 프렌다의 24FALL 컬렉션을 단독 혜택으로 소개해요."
              products={[
                {
                  productId: '0',
                  productImageUrl: '/static/images/box-sample-sm-image01.webp',
                  brand: '프렌다',
                  product: 'PRDA BIG PATCH RAGLAN LONG SLEEVE WHITE',
                  discountPercentage: 45,
                  productPrice: 32450,
                  likes: 764,
                },
                {
                  productId: '1',
                  productImageUrl: '/static/images/box-sample-sm-image02.webp',
                  brand: '프렌다',
                  product: 'SIDE STRIPE WIDE PANTS CHARCOAL',
                  discountPercentage: 35,
                  productPrice: 51350,
                  likes: 14001,
                },
              ]}
            />
          </div>
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

import { Icons } from '@/components/icons';
import Banner from '@/components/main/banner';
import BoxBanner from '@/components/main/boxBanner';
import BoxSlider from '@/components/main/boxSlider';

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
                  likeStatus: true,
                },
                {
                  productId: '1',
                  productImageUrl: '/static/images/box-sample-sm-image02.webp',
                  brand: '프렌다',
                  product: 'SIDE STRIPE WIDE PANTS CHARCOAL',
                  discountPercentage: 35,
                  productPrice: 51350,
                  likes: 14001,
                  likeStatus: false,
                },
              ]}
            />
            <BoxSlider
              title="가을 피부를 완벽하게"
              products={[
                {
                  productId: '0',
                  productImageUrl:
                    '/static/images/box-slider-sample-image01.webp',
                  brand: '디오디너리',
                  product:
                    '[모든피부타입] 멀티-펩타이드 +  HA 세럼 30ml (전: 뷔페)',
                  discountPercentage: 45,
                  productPrice: 26300,
                  likes: 5108,
                  likeStatus: true,
                  rate: 0,
                  reviews: 1645,
                },
                {
                  productId: '1',
                  productImageUrl:
                    '/static/images/box-slider-sample-image02.webp',
                  brand: '쌍빠',
                  product: '글로우 매직 에센스',
                  discountPercentage: 20,
                  productPrice: 15200,
                  likes: 139,
                  likeStatus: false,
                  rate: 0,
                  reviews: 31,
                },
                {
                  productId: '1',
                  productImageUrl:
                    '/static/images/box-slider-sample-image03.webp',
                  brand: '토니모리',
                  product: '프리미엄 알엑스 제비집 에센스',
                  discountPercentage: 71,
                  productPrice: 18900,
                  likes: 1,
                  likeStatus: false,
                  rate: 0,
                  reviews: 2,
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

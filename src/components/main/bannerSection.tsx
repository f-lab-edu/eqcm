import MobileBannerSlider, {
  MobileBannerSliderSkeleton,
} from './mobileBannerSlider';
import Banner from './banner';
import Skeleton from '../common/skeleton';
import { BannerType } from '@/types/main';

type Props = {
  data: BannerType[] | undefined;
};

const BannerSection = ({ data }: Props) => {
  return (
    <section className="flex flex-col w-full md:w-[44%] md:pr-[2%]">
      <div className="desktop-only">
        {data?.map((banner) => <Banner key={banner.imgSrc} data={banner} />)}
      </div>
      <div className="mobile-only">
        <MobileBannerSlider data={data} />
      </div>
    </section>
  );
};

export const BannerSectionSkeleton = () => {
  return (
    <section className="flex flex-col w-full md:w-[44%] md:pr-[2%]">
      <div className="flex flex-col gap-4 desktop-only">
        {[...Array(3)].map((_, index) => (
          <Skeleton key={index} style="w-full aspect-[5/6]" />
        ))}
      </div>
      <div className="mobile-only">
        <MobileBannerSliderSkeleton />
      </div>
    </section>
  );
};

export default BannerSection;

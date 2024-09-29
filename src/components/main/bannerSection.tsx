import MobileBannerSlider from './mobileBannerSlider';
import Banner from './banner';
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

export default BannerSection;

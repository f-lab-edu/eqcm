import MobileBannerSlider from './mobileBannerSlider';
import Banner from './banner';
import { MainBannerDummyData } from '@/constants/main';

const BannerSection = () => {
  return (
    <section className="flex flex-col w-full md:w-[44%] md:pr-[2%]">
      <div className="desktop-only">
        {MainBannerDummyData.map((data) => (
          <Banner key={data.imgSrc} data={data} />
        ))}
      </div>
      <div className="mobile-only">
        <MobileBannerSlider data={MainBannerDummyData} />
      </div>
    </section>
  );
};

export default BannerSection;

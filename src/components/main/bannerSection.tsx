import Banner from './banner';
import { MainBannerDummyData } from '@/constants/main';

const BannerSection = () => {
  return (
    <section className="flex flex-col w-[44%] pr-[2%]">
      {MainBannerDummyData.map((data) => (
        <Banner key={data.imgSrc} data={data} />
      ))}
    </section>
  );
};

export default BannerSection;

import Image from 'next/image';
import { memo } from 'react';
import CsButton from './csButton';
import { FOOTER_SNS_LIST } from '@/constants/footer';

const CsSection = memo(function CsSection() {
  return (
    <div className="hidden md:flex flex-col gap-2">
      <div className="font-pretendard">
        <p className="text-[15px] font-bold">고객센터 1644-0560</p>
        <p className="text-[12px]">
          운영시간 : 평일 09:00 ~ 18:00 (점심시간: 12:00 ~ 13:00 제외)
        </p>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-1">
          <CsButton title="FAQ" />
          <CsButton title="1:1 문의" />
        </div>
        <div>
          <ul className="flex gap-2">
            {FOOTER_SNS_LIST.map(({ imgSrc, link, alt }) => (
              <li key={imgSrc}>
                <a href={link}>
                  <Image src={imgSrc} width={30} height={30} alt={alt} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
});

export default CsSection;

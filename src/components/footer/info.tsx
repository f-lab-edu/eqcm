import { INFO_MENU_LIST } from '@/constants/footer';
import { memo } from 'react';

const Info = memo(function Info() {
  return (
    <div className="relative flex">
      <div className="leading-6">
        <ul className="flex text-xs gap-[10px] mt-3 mb-1">
          {INFO_MENU_LIST.map(({ text, link, style }) => (
            <li key={text}>
              <a href={link} className={style}>
                {text}
              </a>
            </li>
          ))}
        </ul>
        <div className="text-[10px] text-[#5d5d5d]">
          <div className="flex flex-col md:flex-row md:gap-[10px]">
            {[
              '상호명 : 주식회사 무신사 (MUSINSA Co., Ltd.)',
              '사업장소재지 : 서울특별시 성동구 아차산로 13길 11, 1층 (성수동2가, 무신사캠퍼스 엔1)',
              '팩스 : 070-8622-7737',
            ].map((text) => (
              <span key={text}>{text}</span>
            ))}
          </div>
          <div className="flex flex-col md:flex-row md:gap-[10px]">
            <span>사업자등록번호 : 211-88-79575</span>
            <div className="flex">
              <span>통신판매업신고 : 2022-서울성동-01952</span>
              <button
                type="button"
                className="bg-[#a4a4a4] text-white px-[7px] h-5 ml-[10px]"
              >
                사업자정보확인
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:gap-[10px]">
            {[
              '전화번호 : 1644-0560',
              '이메일 : customer@29cm.co.kr',
              '대표 : 조만호, 박준모',
              '개인정보 보호책임자 : 정광은',
              '호스팅서비스 : (주)무신사',
            ].map((text) => (
              <span key={text}>{text}</span>
            ))}
          </div>
          <p>
            일부 상품의 경우 29CM는 통신판매의 당사자가 아닌 통신판매중개자로서
            상품, 상품정보, 거래에 대한 책임이 제한될 수 있으므로, 각 상품
            페이지에서 구체적인 내용을 확인하시기 바랍니다.
          </p>
        </div>
      </div>
      <div className="absolute top-[10px] right-[15px] md:top-[42px] md:right-[30px] text-[11px] text-[#999]">
        KG 에스크로
        <br />
        가입 사실 확인
      </div>
    </div>
  );
});

export default Info;

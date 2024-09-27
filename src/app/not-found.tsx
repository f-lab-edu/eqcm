'use client';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center py-[150px]">
      <p className="text-[24px] font-bold mb-10">잘못된 주소 접근</p>
      <p className="text-center">
        존재하지 않는 주소를 입력하셨거나
        <br />
        페이지의 주소가 변경 혹은 삭제되어 찾을 수 없습니다.
      </p>
    </div>
  );
};

export default NotFound;

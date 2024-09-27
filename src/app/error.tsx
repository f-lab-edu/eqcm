'use client';

import { useEffect } from 'react';

const Error = ({ error }: { error: Error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center py-[150px]">
      <p className="text-[24px] font-bold mb-10">서버 점검 안내</p>
      <p>서비스 이용에 불편을 드려 죄송합니다.</p>
    </div>
  );
};

export default Error;

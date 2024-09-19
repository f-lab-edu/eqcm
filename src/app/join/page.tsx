'use client';

import { memo, useCallback, useState } from 'react';
import TermsAgreement from '@/components/join/termsAgreement';

const Join = memo(function Join() {
  const [step, setStep] = useState(0);

  const handleStep = useCallback((step: number) => {
    setStep(step);
  }, []);

  return (
    <div className="w-full min-h-[650px] py-[50px] px-[20px] md:w-[400px] mx-auto md:px-0 md:pt-[43px] font-pretendard">
      {step === 0 && <TermsAgreement onClickNextBtn={handleStep} />}
    </div>
  );
});

export default Join;

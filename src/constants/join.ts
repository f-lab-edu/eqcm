import { TermsAgreementListType } from '@/types/join';

export const AGREEMENT_CHECK_IDS = {
  all: 'all',
  age: 'age',
  term: 'term',
  privacy: 'privacy',
  marketing: 'marketing',
  ad: 'ad',
} as const;

export const TERMS_AGREEMENT_LIST: TermsAgreementListType[] = [
  {
    id: AGREEMENT_CHECK_IDS.age,
    required: true,
    text: '만 14세 이상입니다',
  },
  {
    id: AGREEMENT_CHECK_IDS.term,
    required: true,
    text: '이용약관 동의',
    detail: '보기',
  },
  {
    id: AGREEMENT_CHECK_IDS.privacy,
    required: true,
    text: '개인정보 수집 및 이용 동의',
    detail: '보기',
  },
  {
    id: AGREEMENT_CHECK_IDS.marketing,
    required: false,
    text: '마케팅 목적의 개인정보 수집 및 이용 동의',
    detail: '보기',
  },
  {
    id: AGREEMENT_CHECK_IDS.ad,
    required: false,
    text: '광고성 정보 수신 동의',
  },
];

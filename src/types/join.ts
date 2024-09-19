import { AGREEMENT_CHECK_IDS } from '@/constants/join';

export type AGREEMENT_CHECK_IDS_TYPE = keyof typeof AGREEMENT_CHECK_IDS;

export type TermsAgreementListType = {
  id: AGREEMENT_CHECK_IDS_TYPE;
  required: boolean;
  text: string;
  detail?: string;
};

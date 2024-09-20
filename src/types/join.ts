import { z } from 'zod';
import { AGREEMENT_CHECK_IDS, EmailJoinFormSchema } from '@/constants/join';

export type StepType = {
  title: string;
  component: JSX.Element;
};

export type AGREEMENT_CHECK_IDS_TYPE = keyof typeof AGREEMENT_CHECK_IDS;

export type TermsAgreementListType = {
  id: AGREEMENT_CHECK_IDS_TYPE;
  required: boolean;
  text: string;
  detail?: string;
};

export type EmailJoinFormData = z.infer<typeof EmailJoinFormSchema>;
export type PasswordJoinFormData = z.infer<typeof EmailJoinFormSchema>;

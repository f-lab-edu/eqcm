import { z } from 'zod';
import {
  AGREEMENT_CHECK_IDS,
  EmailJoinFormSchema,
  PasswordJoinFormSchema,
  PersonalInfoFormSchema,
  PhoneJoinFormSchema,
} from '@/constants/join';

export type UserDataType = {
  term_marketing: boolean;
  term_ad: boolean;
  email: string | null;
  password: string | null;
  phone: string | null;
  name: string | null;
  birth: string | null;
};

export type StepType = {
  title: string;
  subtitle?: string;
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
export type PasswordJoinFormData = z.infer<typeof PasswordJoinFormSchema>;
export type PhoneJoinFormData = z.infer<typeof PhoneJoinFormSchema>;
export type PersonalInfoFormData = z.infer<typeof PersonalInfoFormSchema>;

import { JOIN_STEP, GENDER } from './../constants/join';
import { z } from 'zod';
import {
  AGREEMENT_CHECK_IDS,
  EmailJoinFormSchema,
  PasswordJoinFormSchema,
  PersonalInfoFormSchema,
  PhoneJoinFormSchema,
} from '@/constants/join';

export type JoinStepType = keyof typeof JOIN_STEP;

export type StepDataType = {
  title: string;
  subtitle?: string;
  component: React.ReactNode;
};

export type GenderType = GENDER.male | GENDER.female;

export type UserDataType = {
  term_marketing: boolean;
  term_ad: boolean;
  email: string | null;
  password: string | null;
  phone: string | null;
  name: string | null;
  gender: GenderType | null;
  birth: string | null;
};

export type StepType = {
  title: string;
  subtitle?: string;
  component: JSX.Element;
};

export type TermsAgreementListType = {
  id: AGREEMENT_CHECK_IDS;
  required: boolean;
  text: string;
  detail?: string;
};

type JoinInfoType = {
  email: string | null | undefined;
  gender: string | null | undefined;
  name: string | null | undefined;
  birthday: string | null | undefined;
  phoneNumber: string | null | undefined;
};

type JoinBodyType = {
  joinInfoVo: JoinInfoType;
  termsAgreementVos: { type: string; agreeYn: string }[];
};

export type EmailJoinBodyType = JoinBodyType & {
  password: string | null;
};

export type SocialJoinBodyType = JoinBodyType & {
  socialProviderType: string;
  socialId: string;
};

export type EmailLoginType = {
  email: string;
  password: string;
};

export type EmailJoinFormData = z.infer<typeof EmailJoinFormSchema>;
export type PasswordJoinFormData = z.infer<typeof PasswordJoinFormSchema>;
export type PhoneJoinFormData = z.infer<typeof PhoneJoinFormSchema>;
export type PersonalInfoFormData = z.infer<typeof PersonalInfoFormSchema>;

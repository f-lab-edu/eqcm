import { z } from 'zod';
import { LoginFormSchema } from '@/constants/login';

export type LoginMenuType = {
  text: string;
  link: string;
};

export type LoginButtonType = LoginMenuType & {
  id: string;
  icon: JSX.Element;
  style: string;
};

export type EmailLoginFormData = z.infer<typeof LoginFormSchema>;

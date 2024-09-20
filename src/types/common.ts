export type InputFieldType<T> = {
  type: string;
  name: keyof T;
  title: string;
  placeholder: string;
};

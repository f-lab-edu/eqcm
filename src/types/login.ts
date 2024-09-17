export type LoginMenuType = {
  text: string;
  link: string;
};

export type LoginButtonType = LoginMenuType & {
  icon: JSX.Element;
  style: string;
};

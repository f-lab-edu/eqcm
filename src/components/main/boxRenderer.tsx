type Props = {
  children: React.ReactNode;
  style?: string;
};

const BoxRenderer = ({ children, style }: Props) => {
  return <div className={style}>{children}</div>;
};

export default BoxRenderer;

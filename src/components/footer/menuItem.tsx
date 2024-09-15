import { memo } from 'react';
import cn from 'classnames';

const MenuItem = memo(function MenuItem({
  title,
  list,
  style,
}: {
  title: string;
  list: { text: string; link: string }[];
  style?: string;
}) {
  return (
    <div className={cn('flex flex-col gap-3 w-[180px]', style)}>
      <p className="text-[13px] font-bold">{title}</p>
      <ul className="flex flex-col text-xs gap-[10px]">
        {list.map(({ text, link }) => (
          <li key={text} className="truncate">
            <a href={link}>{text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default MenuItem;

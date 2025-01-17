import Link from 'next/link';

import NextButton from './nextButton';

export default function JoinSuccess() {
  return (
    <div className="flex items-end h-full pt-[60px] text-[13px]">
      <Link href={'/'}>
        <NextButton text="쇼핑하러 가기" />
      </Link>
    </div>
  );
}

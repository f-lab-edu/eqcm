import { Icons } from '../icons';

const ViewMoreButton = () => {
  return (
    <div className="flex my-[30px] justify-center">
      <button
        type="button"
        className="flex justify-center items-center pl-4 gap-1 w-[160px] h-[52px] text-[14px] rounded border border-[#e4e4e4] font-bold"
      >
        더보기
        <Icons.view_more_arrow />
      </button>
    </div>
  );
};

export default ViewMoreButton;

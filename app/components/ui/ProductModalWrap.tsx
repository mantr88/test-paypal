import CustomModal from "./CustomModal";
import Cross from "./svgElements/Cross";

interface ProductModalWrapProps {
  children: React.ReactNode;
  onClose: () => void;
}

function ProductModalWrap({children, onClose}: ProductModalWrapProps) {
  return (
    <CustomModal onClose={() => console.log("Clicked")}>
      <div className="no-scrollbar flex h-inherit max-h-[100vh] w-full justify-center overflow-y-auto md:relative md:z-[53] md:max-h-[95vh] md:w-auto md:flex-none md:pt-[40px]">
        <div
          onClick={onClose}
          className="group absolute hidden cursor-pointer md:-right-2 md:top-3 md:block lg:-right-[11px] lg:top-[9px]"
        >
          <Cross className="size-8 text-grey-300 group-hover:text-orange-600 lg:size-10" />
        </div>
        <div className="no-scrollbar container relative z-[53] h-full w-full overflow-y-scroll bg-blue-20 px-5 pt-5 sm:pt-7 md:flex md:h-[760px] md:overflow-hidden md:rounded-[30px] md:bg-white md:px-0 md:pt-0 lg:h-[642px] lg:w-[964px] lg:rounded-6xl xl:h-[780px] xl:w-[1126px]">
          {children}
        </div>
      </div>
    </CustomModal>
  );
}

export default ProductModalWrap;

import {ComponentProps} from "react";
import ArrowBack from "../../ui/svgElements/ArrowBack";
import Arrow2 from "../../ui/svgElements/Arrow2";
import Arrow from "../../ui/svgElements/Arrow";

interface FormButtonProps extends ComponentProps<"button"> {
  children: string;
  addStyles?: string;
  handleClick: () => void;
  isOrderError: boolean;
}

function ButtonOrderNow({
  children,
  addStyles,
  handleClick,
  isOrderError,
}: FormButtonProps) {
  return (
    <button
      className={`${isOrderError && "bg-red-600 hover:bg-red-600"} standart-animation group flex h-[45px] flex-grow flex-row items-center justify-center gap-2 rounded-full bg-blue-700 px-[40px] text-s text-white transition hover:bg-blue-900 sm:h-[50px] sm:gap-[10px] sm:px-[70px] sm:text-xl md:h-11 md:px-[30px] md:text-sm2 lg:h-[50px] lg:text-l xl:h-[76px] xl:px-[60px] xl:text-3xls ${addStyles}`}
      onClick={handleClick}
    >
      {children}
      <Arrow className="stroke-path-2-1 block size-5 sm:size-7 md:hidden" />
    </button>
  );
}

export default ButtonOrderNow;

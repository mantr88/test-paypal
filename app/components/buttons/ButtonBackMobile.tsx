import {ComponentProps} from "react";
import ArrowDown from "../ui/svgElements/ArrowDown";

interface FormButtonProps extends ComponentProps<"button"> {
  addStyles?: string;
  handleClick: () => void;
}

function ButtonBackMobile({addStyles, handleClick}: FormButtonProps) {
  return (
    <button
      className="t block cursor-pointer rounded-9xl text-grey-300 shadow-5xl transition-all duration-300 hover:border-orange-800 hover:text-orange-800 md:hidden"
      onClick={handleClick}
    >
      <ArrowDown className="h-[38px] w-[38px] rotate-90 rounded-9xl sm:size-11" />
    </button>
  );
}

export default ButtonBackMobile;

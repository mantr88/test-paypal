import {ComponentProps, ReactNode} from "react";
import ArrowBack from "../ui/svgElements/ArrowBack";

interface FormButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  addStyles?: string;
  arrowStyles?: string;
  handleClick: () => void;
}

function ButtonBack({
  children,
  addStyles,
  handleClick,
  arrowStyles,
}: FormButtonProps) {
  return (
    <button
      className={`group hidden flex-row items-center gap-1 rounded-full bg-grey-200 font-medium text-grey-500 transition hover:bg-blue-200 hover:text-blue-900 md:flex md:h-11 md:px-[20px] md:text-s xl:h-[76px] xl:gap-[10px] xl:px-[50px] xl:text-2xlm ${addStyles}`}
      onClick={handleClick}
    >
      <ArrowBack
        className={`size-5 text-grey-400 group-hover:text-blue-900 xl:size-[30px] ${arrowStyles}`}
      />
      {children}
    </button>
  );
}

export default ButtonBack;

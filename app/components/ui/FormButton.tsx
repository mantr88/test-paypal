import {ComponentProps} from "react";

interface FormButtonProps extends ComponentProps<"button"> {
  children: string;
  addStyles?: string;
}

function FormButton({children, addStyles}: FormButtonProps) {
  return (
    <button
      className={`w-full rounded-full bg-blue-400 pb-[14px] pt-[10px] text-sm2 text-white transition-all duration-300 ease-linear hover:bg-blue-700 hover:text-white sm:text-2xl1 md:pb-6 md:pt-5 md:text-2xlm ${addStyles}`}
    >
      {children}
    </button>
  );
}

export default FormButton;

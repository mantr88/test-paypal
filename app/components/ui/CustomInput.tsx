import {ComponentPropsWithoutRef, forwardRef, useId} from "react";
import clsx from "clsx";

interface CustomInputProps extends ComponentPropsWithoutRef<"input"> {
  errorMessage?: string | boolean;
  label?: string;
  inputValues?: string;
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({label, inputValues, errorMessage, ...rest}, ref) => {
    const id = useId();
    return (
      <>
        {!!label && (
          <label
            htmlFor={id}
            className={clsx(
              errorMessage && "!text-red-600",
              "text-sm2 text-blue-700 after:content-['*'] sm:text-m md:text-2xlm"
            )}
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          {...rest}
          className={clsx(
            errorMessage &&
              "!mb-1 !border-red-600 !bg-white !text-red-600 placeholder:text-red-600",
            inputValues &&
              "[&:not(:focus-within)]:bg-blue-60 [&:not(:focus-within)]:text-blue-900",
            "mb-3 mt-2 h-[38px] w-full rounded-xl border-2 border-transparent pb-[14px] pl-2 pr-[34px] pt-[9px] text-sm text-textDarkGray placeholder:text-sm placeholder:text-blue-60 focus:border-2 focus:border-blue-900 sm:mb-4 sm:h-[42px] sm:pl-[42px] sm:text-sm2 sm:placeholder:text-sm2 md:mb-5 md:h-[56px] md:rounded-[18px] md:pb-[19px] md:pl-[46px] md:pr-[38px] md:pt-[15px] md:text-l md:placeholder:text-l"
          )}
          autoComplete="email"
        />
        {!!errorMessage && (
          <span className="mt-1 text-s text-red-600 md:mt-[10px] md:text-lg">
            {errorMessage}
          </span>
        )}
      </>
    );
  }
);
CustomInput.displayName = "CustomInput";
export default CustomInput;

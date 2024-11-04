import {ComponentPropsWithoutRef, forwardRef, useId} from "react";
import clsx from "clsx";

interface CustomInputProps extends ComponentPropsWithoutRef<"input"> {
  errorMessage?: string;
  label?: string;
  inputValues?: string;
  addedInfo?: string;
  styles?: string;
}

const PersonalDataInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({label, inputValues, errorMessage, addedInfo, styles, ...rest}, ref) => {
    const id = useId();
    return (
      <>
        {!!label && (
          <div
            className={clsx(
              "mb-2 flex flex-col justify-start sm:flex-row sm:items-center sm:justify-between",
              styles
            )}
          >
            {" "}
            <label
              htmlFor={id}
              className={clsx(
                errorMessage && "!text-red-600",
                "block text-nowrap text-sm2 text-gray-800 sm:text-xl md:text-m lg:text-2xl1"
              )}
            >
              {label}:
            </label>
            {addedInfo && (
              <div
                className="mt-[2px] w-full text-s2 text-grey-60 sm:mt-0 sm:text-right sm:text-s md:text-s2 lg:max-w-[280px] lg:text-sm3 xl:max-w-[322px]"
                style={{textWrap: "balance"}}
              >
                {addedInfo}
              </div>
            )}
          </div>
        )}
        <input
          ref={ref}
          id={id}
          {...rest}
          readOnly
          type="text"
          className={clsx(
            errorMessage &&
              "!mb-1 !border-red-600 !bg-white !text-red-600 placeholder:text-red-600",
            inputValues &&
              "[&:not(:focus-within)]:bg-blue-60 [&:not(:focus-within)]:text-blue-900",
            "h-[37px] w-full rounded-[12px] border-0 px-3 pb-3 pl-2 pt-2 text-s !shadow-5xl placeholder:text-grey-400 sm:h-[45px] sm:px-5 sm:pt-[10px] sm:text-sm sm:placeholder:text-sm2 lg:h-[68px] lg:rounded-[18px] lg:px-[30px] lg:pt-4 lg:placeholder:text-xl xl:text-2xl2 xl:placeholder:text-2xl2"
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
PersonalDataInput.displayName = "PersonalDataInput";
export default PersonalDataInput;

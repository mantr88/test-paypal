import React, {ReactNode} from "react";
import Image, {StaticImageData} from "next/image";

interface PaymentItemProps {
  id: string;
  name: string;
  value: string;
  label: string;
  icon: StaticImageData;
  checked: boolean;
  onChange: () => void;
  children?: ReactNode;
}

const PaymentItem: React.FC<PaymentItemProps> = ({
  id,
  name,
  value,
  label,
  icon,
  checked,
  onChange,
  children,
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          className="hidden"
        />
        <label
          htmlFor={id}
          className="flex flex-grow cursor-pointer items-center"
        >
          <span
            className={`mr-2 inline-block h-5 w-5 flex-shrink-0 rounded-full border-[5px] sm:mr-3 sm:h-7 sm:w-7 sm:border-[7px] lg:mr-5 ${
              !checked ?
                "border-grey-100 bg-grey-100"
              : "border-grey-100 bg-white"
            }`}
          ></span>
          <div className="payment-item-2 mr-1 flex-shrink-0 shadow-5xl lg:mr-2">
            <div className="relative h-[34.5px] w-[51.5px] sm:h-[47px] sm:w-[61.5px] lg:h-[65px] lg:w-[91px]">
              <Image
                src={icon}
                alt={label}
                fill
                quality={100}
                className="object-contain"
              />
            </div>
          </div>
          <div
            className={`flex h-[39px] w-full items-center rounded-[12px] bg-white px-3 !shadow-5xl sm:h-[53px] sm:px-6 lg:h-[73px] lg:rounded-[16px] lg:px-[30px]`}
          >
            <span className="text-darkGrey text-s sm:text-sm md:text-m lg:text-xl xl:text-2xl1">
              {label}
            </span>
          </div>
        </label>
      </div>
      {checked && children}
    </div>
  );
};

export default PaymentItem;

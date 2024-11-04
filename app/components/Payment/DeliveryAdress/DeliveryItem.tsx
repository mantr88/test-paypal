import clsx from "clsx";
import React, {ChangeEvent} from "react";

interface DeliveryItemProps {
  id: string;
  adress: string;
  city: string;
  label: string;
  cityCode: string;
  checked: boolean;
  onChange: () => void;
  changeValue: string;
  handleChangeValue: (event: ChangeEvent<HTMLInputElement>) => void;
}

const DeliveryItem: React.FC<DeliveryItemProps> = ({
  id,
  adress,
  city,
  cityCode,
  label,
  checked,
  onChange,
  changeValue,
  handleChangeValue,
}) => {
  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full items-center">
        <input
          type="radio"
          id={id}
          name="delivery-address"
          checked={checked}
          onChange={onChange}
          className="hidden"
        />
        <label
          htmlFor={id}
          className="flex cursor-pointer items-center"
        >
          <span
            className={`mr-2 inline-block h-5 w-5 flex-shrink-0 rounded-full border-[5px] sm:mr-3 sm:h-6 sm:w-6 sm:border-[7px] lg:mr-5 lg:h-7 lg:w-7 ${
              !checked ?
                "border-grey-100 bg-grey-100"
              : "border-grey-100 bg-white"
            }`}
          ></span>
        </label>

        <div className="grid-rows-auto grid w-full grid-cols-[auto,1fr] items-center rounded-[12px] border-none bg-white px-4 pb-4 pt-[10px] shadow-5xl sm:px-5 sm:pb-5 sm:pt-3 lg:rounded-5xl lg:px-6 lg:pb-6 lg:pt-4">
          <span className="col-span-1 row-span-1 mb-1 text-sm text-grey-500 sm:col-span-2 sm:text-sm2 lg:text-lg xl:text-xl">
            {label}
          </span>

          <span
            className={clsx(
              "order-3 col-span-2 row-span-1 text-sm2 font-medium sm:order-2 sm:col-span-1 sm:text-lg2 lg:text-2xlm xl:text-3xl xl:font-semibold",
              checked ? "text-blue-900" : "text-grey-800"
            )}
          >
            {adress}
          </span>
          <span className="order-2 text-nowrap text-right text-sm text-grey-60 sm:order-3 sm:text-sm2 lg:text-lg xl:text-xl">
            {cityCode}, {city}
          </span>
        </div>
      </div>
      {checked && (
        <div className="ml-7 mt-1 sm:ml-[36px] sm:mt-2 lg:ml-[48px]">
          <input
            id="change"
            typeof="text"
            value={changeValue}
            className="w-full rounded-[12px] border-none bg-white px-5 pb-4 pt-3 text-sm text-textGray shadow-3xl placeholder:text-grey-60 sm:text-m2 md:text-sm2 lg:rounded-5xl lg:px-6 lg:pb-5 lg:pt-4 lg:text-m2"
            placeholder="Ergänzung zu Ihrer Adresse"
            onChange={handleChangeValue}
          ></input>
        </div>
      )}
    </div>
  );
};

export default DeliveryItem;

import React, {useState} from "react";
import clsx from "clsx";
import Clock from "../../ui/svgElements/Clock";
// import {useOrderContext} from "@/app/context/OrderContext";

const TimeOptions = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // const {updateOrderOptions} = useOrderContext();

  const options = ["In 30 min.", "In 1 Stunde", "In 2 Stunden"];

  const handleTimeOptionChange = (option: string) => {
    setSelectedOption(option);
    const now = new Date();
    let timeInFuture;

    const timeOptions: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };

    switch (option) {
      case "In 30 min.":
        timeInFuture = new Date(Date.now() + 30 * 60 * 1000).toLocaleTimeString(
          undefined,
          timeOptions
        );
        break;
      case "In 1 Stunde":
        timeInFuture = new Date(Date.now() + 60 * 60 * 1000).toLocaleTimeString(
          undefined,
          timeOptions
        );
        break;
      case "In 2 Stunden":
        timeInFuture = new Date(
          Date.now() + 120 * 60 * 1000
        ).toLocaleTimeString(undefined, timeOptions);
        break;
      default:
        timeInFuture = now.toLocaleTimeString(undefined, timeOptions);
        break;
    }

    const preOrderDateISO = now.toISOString().split("T")[0]; // Перетворення у ISO 8601 формат
    console.log("preOrderDateISO: ", preOrderDateISO);

    // updateOrderOptions({
    //   preOrderDate: preOrderDateISO,
    //   preOrderTime: timeInFuture,
    // });
  };

  return (
    <div className="mt-2 grid grid-cols-3 gap-x-1 sm:mt-[10px] md:mt-2 xl:mt-3 xl:gap-x-2">
      {options.map((option) => (
        <button
          key={option}
          className={clsx(
            "flex items-center justify-center gap-2 rounded-full border border-transparent bg-white pb-[10px] pt-2 text-grey-500 shadow-5xl hover:border-blue-700 hover:text-blue-700 sm:pb-4 sm:pt-3 md:gap-1 md:pb-3 md:pt-2 lg:gap-2 lg:pb-4 lg:pt-3",
            selectedOption === option && "!bg-grey-200 !text-grey-800"
          )}
          onClick={() => handleTimeOptionChange(option)}
        >
          <Clock className="hidden size-4 md:block lg:size-[19px] xl:size-6" />
          <span className="text-xs2 sm:text-m md:text-sm lg:text-m xl:text-xl">
            {option}
          </span>
        </button>
      ))}
    </div>
  );
};

export default TimeOptions;

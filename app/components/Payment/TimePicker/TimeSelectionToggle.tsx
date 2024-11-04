import React, {useState} from "react";
import clsx from "clsx";

import TooltipForPayment from "../TooltipForPayment";
// import {useOrderContext} from "@/app/context/OrderContext";

const TimeSelectionToggle = () => {
  // const {updateOrderOptions, orderOptions} = useOrderContext();
  const [timeSelection, setTimeSelection] = useState(
    // orderOptions?.isPreOrder && orderOptions?.isPreOrder === true ?
    "Vorbestellung"
    // : "Jetzt"
  );

  const handleTimeSelectionChange = (timeSelection: string) => {
    const isPreOrder = timeSelection === "Vorbestellung";
    setTimeSelection(timeSelection);
    // updateOrderOptions({isPreOrder});
  };

  return (
    <div className="switcher-container-2 relative w-max grid-cols-2">
      <div
        className={clsx(
          "switcher-active-2 absolute h-full w-1/2 before:block before:h-full before:w-full before:rounded-full before:bg-white before:shadow-5xl",
          timeSelection === "Vorbestellung" && "!translate-x-[97%]"
        )}
      ></div>
      <button
        className={clsx(
          "z-10 rounded-full",
          timeSelection === "Jetzt" && "textGray"
        )}
        onClick={() => handleTimeSelectionChange("Jetzt")}
      >
        Jetzt
      </button>

      <TooltipForPayment message="Möchten Sie vorbestellen? Klicken Sie hier und wählen Sie eine Uhrzeit und ein Datum aus.">
        <button
          className={clsx(
            "z-10 rounded-full",
            timeSelection === "Vorbestellung" && "textGray"
          )}
          onClick={() => handleTimeSelectionChange("Vorbestellung")}
        >
          Vorbestellung
        </button>
      </TooltipForPayment>
    </div>
  );
};

export default TimeSelectionToggle;

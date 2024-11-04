import React, {useState} from "react";
import DeliveryMethodToggle from "./DeliveryMethodToggle";
import TimeSelectionToggle from "./TimeSelectionToggle";
import TimeOptions from "./TimeOptions";
import Planner from "./Planner";
import {AnimatePresence, motion} from "framer-motion";

interface ITimePicker {
  isPreOrder: boolean;
}

const TimePicker = ({isPreOrder}: ITimePicker) => {
  const [isPlannerOpen, setIsPlannerOpen] = useState<boolean>(false);

  return (
    <div className="relative">
      <h3 className="mb-1 hidden text-xl font-medium text-textGray md:block lg:text-4m xl:mb-3">
        Wähle eine passende Uhrzeit aus:
      </h3>
      <p className="mb-4 hidden text-sm2 text-grey-60 md:block lg:mb-5 lg:text-xl xl:mb-[30px]">
        Wählen Sie Ihre bevorzugte Zustellmethode aus.
      </p>
      <DeliveryMethodToggle />
      <TimeSelectionToggle />
      <AnimatePresence>
        {!isPlannerOpen && (
          <motion.div
            key="time-options"
            initial={{opacity: 0, height: 0}}
            animate={{opacity: 1, height: "auto"}}
            exit={{opacity: 0, height: 0}}
            transition={{duration: 0.3}}
          >
            <TimeOptions />
          </motion.div>
        )}
      </AnimatePresence>
      {isPreOrder && (
        <Planner
          isPlannerOpen={isPlannerOpen}
          setIsPlannerOpen={setIsPlannerOpen}
        />
      )}
    </div>
  );
};

export default TimePicker;

import React, {useCallback, useEffect, useMemo, useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import clsx from "clsx";
import {format} from "date-fns";

import Calendar from "../../ui/svgElements/Calendar";

import {DateButton} from "./DateButton";
// import {useOrderContext} from "@/app/context/OrderContext";

interface IPlannerProps {
  isPlannerOpen: boolean;
  setIsPlannerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Planner: React.FC<IPlannerProps> = ({
  isPlannerOpen,
  setIsPlannerOpen,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");

  // const {updateOrderOptions} = useOrderContext();

  const times = useMemo(
    () => [
      "14:30 - 15:00",
      "15:30 - 16:00",
      "16:30 - 17:00",
      "17:30 - 18:00",
      "18:30 - 19:00",
    ],
    []
  );

  useEffect(() => {
    if (selectedDate && selectedTime) {
      const formattedDate = format(selectedDate, "dd.MM");
      setInputValue(`${formattedDate} / ${selectedTime}`);
    }
  }, [selectedDate, selectedTime]);

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
  };

  const handleConfirm = () => {
    const date = selectedDate?.toISOString().split("T")[0];
    // updateOrderOptions({
    //   preOrderDate: date ?? undefined,
    //   preOrderTime: selectedTime,
    // });
    setIsPlannerOpen(false);
  };

  const handleButtonClick = useCallback((date: Date) => {
    setSelectedDate(date);
  }, []);

  const today = useMemo(() => new Date(), []);
  const tomorrow = useMemo(
    () => new Date(Date.now() + 24 * 60 * 60 * 1000),
    []
  );

  const dayAfterTomorrow = useMemo(
    () => new Date(Date.now() + 48 * 60 * 60 * 1000),
    []
  );

  const closedDatesSet = useMemo(() => {
    const closedDates = [today]; // Example closed dates
    return new Set(closedDates.map((date) => date.toDateString()));
  }, [today]);

  const isClosed = useCallback(
    (date: Date) => {
      return closedDatesSet.has(date.toDateString());
    },
    [closedDatesSet]
  );

  return (
    <div className="relative mt-2 w-full font-sfProDisplay xl:mt-3">
      <AnimatePresence>
        {isPlannerOpen ?
          <motion.div
            key="planner"
            initial={{opacity: 0, height: 0}}
            animate={{opacity: 1, height: "auto"}}
            exit={{opacity: 0, height: 0}}
            transition={{duration: 0.3}}
            className="relative w-full"
          >
            <div className="flex flex-row justify-between gap-3">
              <div className="flex flex-col justify-between gap-2">
                <DateButton
                  label="Heute"
                  date={today}
                  onClick={handleButtonClick}
                  highlightedButton={selectedDate}
                  disabled={isClosed(today)}
                />
                <DateButton
                  label="Morgen"
                  date={tomorrow}
                  onClick={handleButtonClick}
                  highlightedButton={selectedDate}
                  disabled={isClosed(tomorrow)}
                />
                <DateButton
                  label="Übermorgen"
                  date={dayAfterTomorrow}
                  onClick={handleButtonClick}
                  highlightedButton={selectedDate}
                  disabled={isClosed(dayAfterTomorrow)}
                />
              </div>
              <div className="w-full rounded-5xl border bg-white shadow-5xl">
                <ul className="w-full text-center text-sm text-textGray sm:text-l md:text-s lg:text-l">
                  {times.map((time, index) => (
                    <li
                      key={index}
                      className={clsx(
                        "cursor-pointer border-gray-100 py-[24px] pb-[14px] pt-[10px] hover:bg-blue-300 hover:text-blue-900 [&:first-child]:rounded-t-5xl [&:last-child]:rounded-b-5xl [&:not(:last-child)]:border-b",
                        selectedTime === time && "bg-blue-300 text-blue-900"
                      )}
                      onClick={() => handleTimeClick(time)}
                    >
                      {time}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              className="mt-2 flex h-[40px] w-full items-center justify-center gap-1 rounded-full bg-blue-50 text-s3 text-blue-900 transition duration-300 ease-in-out hover:bg-blue-400 hover:text-white sm:h-[54px] sm:gap-3 sm:text-xl md:h-[48px] md:gap-2 md:text-m lg:h-[54px] lg:gap-3 lg:text-xl"
              onClick={handleConfirm}
            >
              <Calendar className="stroke-path-2-1 size-[20px]" />
              <span>{inputValue ? inputValue : "Bestätigen"}</span>
            </button>
          </motion.div>
        : <motion.button
            key="toggle-button"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, height: 0}}
            transition={{duration: 0.3}}
            onClick={() => setIsPlannerOpen(!isPlannerOpen)}
            className={clsx(
              "relative flex h-[40px] w-full flex-row items-center justify-center gap-1 rounded-full bg-blue-50 text-s3 text-blue-900 transition duration-300 ease-in-out hover:bg-blue-400 hover:text-white sm:h-[54px] sm:gap-3 sm:text-xl md:h-[48px] md:gap-2 md:text-m lg:h-[54px] lg:gap-3 lg:text-xl"
            )}
          >
            <Calendar className="stroke-path-2-1 size-[20px]" />
            <span>Wählen Sie eine andere Uhrzeit aus</span>
          </motion.button>
        }
      </AnimatePresence>
    </div>
  );
};

export default Planner;

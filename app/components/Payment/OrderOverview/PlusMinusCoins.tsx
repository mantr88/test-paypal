import clsx from "clsx";
import {useMemo} from "react";

import Coin from "@/app/components/ui/svgElements/Coin";
import Euro from "@/app/components/ui/svgElements/Euro";
import Advice from "../../ui/svgElements/Advice";
import TooltipForPayment from "../TooltipForPayment";

interface PlusMinusCoinsProps {
  isEuro: boolean;
  euroQuantity: number;
  coinsQuantity: number;
  setEuroQuantity: React.Dispatch<React.SetStateAction<number>>;
  setCoinsQuantity: React.Dispatch<React.SetStateAction<number>>;
  userEuro: number;
  userCoins: number;
  isMinOrderAmount: boolean;
  tooltipMessage?: string;
}

function PlusMinusCoins({
  isEuro,
  euroQuantity,
  coinsQuantity,
  setEuroQuantity,
  setCoinsQuantity,
  userEuro,
  userCoins,
  isMinOrderAmount,
  tooltipMessage,
}: PlusMinusCoinsProps) {
  const maxCoinsLimit = 5000;
  const currentQuantity = isEuro ? euroQuantity : coinsQuantity;
  const maxBalance = isEuro ? userEuro : userCoins;

  const handleIncrement = () => {
    if (!isIncrementDisabled) {
      if (isEuro) {
        setEuroQuantity((prev) => prev + 1);
      } else {
        setCoinsQuantity((prev) => prev + 1);
      }
    }
  };

  const handleDecrement = () => {
    if (currentQuantity > 0) {
      if (isEuro) {
        setEuroQuantity((prev) => prev - 1);
      } else {
        setCoinsQuantity((prev) => prev - 1);
      }
    }
  };

  const isIncrementDisabled = useMemo(() => {
    return (
      maxBalance === 0 ||
      currentQuantity >= maxBalance ||
      (!isEuro && currentQuantity >= maxCoinsLimit) ||
      isMinOrderAmount
    );
  }, [currentQuantity, maxBalance, isEuro, maxCoinsLimit, isMinOrderAmount]);

  return (
    <div
      className={clsx(
        !isEuro && "border-b border-dashed border-grey-100 pb-3",
        "flex items-center justify-between text-blue-600 xl:mt-1"
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-start justify-start text-s2 font-medium sm:text-lg sm:font-normal md:text-s lg:text-lg xl:items-center xl:text-2xl1">
          <p className="w-[100px] sm:w-[135px] md:w-[110px] lg:w-[135px] xl:w-[302px]">
            {!isEuro ? "Coins" : "Euro"}-Guthaben verrechnen:
          </p>
          <TooltipForPayment
            isShowTooltipArrow={true}
            addStyles="!-left-[335%] !bottom-[145%] border-2 !w-[248px] !pr-3 md:!w-[260px] md:!-left-[406%] md:bottom-[140%]"
            message={
              <div>
                {tooltipMessage}
                <a
                  href="/"
                  className="underline"
                >
                  Mehr in den FAQs
                </a>
              </div>
            }
          >
            <Advice className="ml-1 size-6 flex-shrink-0 rounded-full text-blue-900" />
          </TooltipForPayment>
        </div>
      </div>

      <div className="ml-[12%] flex h-[38px] min-w-[94px] items-center justify-center gap-2 rounded-full bg-blue-150 px-[15px] pb-2 pt-[5px] text-lg sm:h-[42px] sm:gap-1 sm:px-5 sm:pb-[10px] sm:pt-[6px] sm:text-l md:h-[38px] md:px-3 md:pb-[10px] md:pt-2 md:text-lg lg:gap-2 lg:px-4 lg:text-l xl:h-[48px] xl:gap-1 xl:px-5 xl:text-2xl1">
        <span
          onClick={handleDecrement}
          className={`cursor-pointer ${currentQuantity === 0 ? "cursor-not-allowed opacity-50" : ""}`}
        >
          -
        </span>
        <span className="ml-[5px] flex items-center justify-center md:ml-[2px] md:mr-[-2px] md:self-baseline lg:mr-[-4px] xl:ml-1 xl:mr-[-5px]">
          <span>{currentQuantity}</span>
          {!isEuro ?
            <Coin className="mt-0.5 size-4 sm:mt-0 sm:size-[18px] md:mt-[3px] md:size-4 lg:mt-0.5 xl:size-5" />
          : <Euro className="mt-[1px] size-4 sm:size-[18px] md:mt-[3px] md:size-4 lg:mt-0.5 xl:size-5" />
          }
        </span>
        <span
          onClick={handleIncrement}
          className={`cursor-pointer ${isIncrementDisabled ? "cursor-not-allowed opacity-50" : ""}`}
        >
          +
        </span>
      </div>
    </div>
  );
}

export default PlusMinusCoins;

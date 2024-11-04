import clsx from "clsx";

import Coin from "@/app/components/ui/svgElements/Coin";
import Euro from "@/app/components/ui/svgElements/Euro";

interface CoinsEuroSwitcherProps {
  isEuro: boolean;
  toggleEuroCoins: () => void;
}

function CoinsEuroSwitcher({isEuro, toggleEuroCoins}: CoinsEuroSwitcherProps) {
  return (
    <div className="flex h-[38px] w-[97px] justify-between rounded-full bg-blue-150 p-1 sm:h-[42px] sm:w-[104px] sm:p-[3px] md:h-[38px] md:w-[78px] md:p-1 lg:w-[92px] xl:h-[48px] xl:w-[106px]">
      <button
        onClick={toggleEuroCoins}
        className={clsx(
          isEuro && "rounded-full bg-white p-1 !text-blue-600 shadow-6xl",
          "standart-animation flex size-[30px] items-center justify-center text-grey-300 sm:size-9 md:size-[30px] xl:size-[40px]"
        )}
      >
        <Euro className={clsx("size-6", isEuro && "size-7")} />
      </button>
      <button
        onClick={toggleEuroCoins}
        className={clsx(
          !isEuro && "rounded-full bg-white p-1 !text-blue-600 shadow-6xl",
          "standart-animation flex size-[30px] items-center justify-center text-grey-300 sm:size-9 md:size-[30px] xl:size-[40px]"
        )}
      >
        <div>
          <Coin className={clsx("size-6", !isEuro && "size-7")} />
        </div>
      </button>
    </div>
  );
}

export default CoinsEuroSwitcher;

import clsx from "clsx";
import {useState} from "react";


const labelTips = [5, 10, 15, 20];
const Tips: React.FC = () => {
  // const {updateOrderOptions, orderOptions} = useOrderContext();

  const [tip, setTip] = useState<number | null>(
null
  );

  const handleClickOnTip = (label: number) => {
    if (label === tip) {
      setTip(null);
      // updateOrderOptions({tipPercentage: 0});
    } else {
      setTip(label);
      // updateOrderOptions({tipPercentage: label});
    }
  };
  return (
    <div className="relative w-full">
      <h4 className="textGray mb-3 text-l font-medium sm:mb-5 sm:text-3xl sm:font-semibold md:text-2xlm md:font-medium md:text-grey-800 lg:text-3xls lg:text-grey-500 xl:mb-[30px] xl:text-3xls">
        Dürfen wir uns über ein Trinkgeld freuen?
      </h4>
      <div className="grid h-[39px] grid-cols-4 gap-1 sm:h-[54px] sm:gap-2 md:gap-1 lg:h-[54px] xl:h-[73px] xl:gap-2">
        {labelTips.map((label, index) => (
          <button
            key={index}
            className={clsx(
              "flex items-center justify-center rounded-[10px] border border-transparent bg-white text-center text-sm2 text-grey-400 shadow-3xl hover:border-blue-700 hover:text-blue-700 sm:rounded-[16px] sm:text-xl md:rounded-[10px] md:text-m lg:rounded-[16px] lg:text-xl xl:rounded-[24px] xl:text-2xl1",
              tip === label &&
                "!bg-grey-200 !text-grey-800 hover:border-transparent"
            )}
            onClick={() => handleClickOnTip(label)}
          >
            {label} %
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tips;

import Image from "next/image";
import React, {useState} from "react";

// import {useOrderContext} from "@/app/context/OrderContext";

const NewsletterSubscription: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  // const {updateOrderOptions} = useOrderContext();

  const handleCheckboxChange = () => {
    // updateOrderOptions({subscribeForDiscount: !isChecked});
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex w-full flex-col gap-3 rounded-[12px] bg-white px-4 pb-5 pt-4 shadow-3xl sm:gap-0 sm:rounded-5xl sm:px-5 sm:pb-6 sm:pt-[18px] md:gap-3 md:pb-5 md:pt-4 lg:gap-4 lg:px-6 lg:pb-7 lg:pt-5 xl:gap-5 xl:rounded-[30px] xl:px-10 xl:pb-10 xl:pt-[30px]">
      <div className="flex-row sm:flex md:inline-block">
        <div className="flex flex-col gap-1 sm:gap-2 md:gap-1 xl:gap-2">
          <h4 className="text-l font-medium text-grey-800 sm:text-2xlm md:text-xl md:font-semibold lg:text-2xlm xl:text-3xls xl:font-medium">
            Erhalten Sie 10% Rabatt :
          </h4>
          <p className="text-sm text-grey-400 sm:text-sm2 md:text-s1 lg:text-m2 xl:text-xl">
            Abonnieren Sie unseren Newsletter und erhalten Sie einen exklusiven
            Rabattcode für Ihren nächsten Einkauf.
          </p>
        </div>
        <Image
          src={"/images/payments/coins.png"}
          alt="Coins"
          width={116}
          height={154}
          className="mr-[-20px] mt-[-45px] hidden sm:block md:hidden"
        />
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="subscribe"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="checkbox-payment reset-styles size-6 rounded lg:size-[34px]"
        />
        <label
          htmlFor="subscribe"
          className="ml-2 text-sm text-gray-700 sm:text-sm2 md:text-s lg:ml-[10px] lg:text-m xl:text-xl"
        >
          Abonnieren Sie unseren Newsletter
        </label>
      </div>
    </div>
  );
};

export default NewsletterSubscription;

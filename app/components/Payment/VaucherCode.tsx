import React from "react";
import Image from "next/image";

// import CartVaucherCode from "../Forms/CartVaucherCode";

const VaucherCode: React.FC = () => {
  return (
    <div className="flex w-full flex-col gap-[10px] rounded-[12px] bg-white px-4 pb-4 pt-[14px] shadow-3xl sm:gap-3 sm:gap-5 sm:rounded-5xl sm:px-5 sm:pb-6 sm:pt-[18px] md:gap-3 md:pb-5 md:pt-4 lg:gap-4 lg:px-6 lg:pb-7 lg:pt-5 xl:gap-5 xl:rounded-[30px] xl:px-10 xl:pb-10 xl:pt-[30px]">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-2 sm:gap-1 sm:gap-2 md:gap-1 xl:gap-2">
          <h4 className="text-l font-medium text-grey-800 sm:text-2xlm md:text-xl md:font-semibold lg:text-2xlm xl:text-3xls xl:font-medium">
            Haben Sie einen Gutscheincode?
          </h4>
          <p className="text-sm text-grey-400 sm:text-sm2 md:text-s1 lg:text-m2 xl:text-xl">
            Hier können Sie Ihren Gutscheincode einlösen!
          </p>
        </div>
        <Image
          src={"/images/payments/promocode.png"}
          alt="Coins"
          width={130}
          height={100}
          className="mr-[-18px] mt-[-26px] block h-[74px] w-[95px] sm:mb-[25px] sm:mr-[-15px] sm:mt-[-30px] sm:h-[100px] sm:w-[130px] md:hidden"
        />
      </div>

      {/* <CartVaucherCode
        stylesInput="sm:!w-[316px] md:!w-[200px] lg:!w-[279px] xl:!w-[400px] !pr-[50px] lg:!pr-[85px] sm:h-[39px]  lg:text-lg xl:h-[55px] lg:h-[44px] xl:text-2xl1"
        stylesButton="!px-5 sm:!px-[25px] xl:h-[55px] lg:h-[44px] lg:text-lg xl:text-2xl1 sm:h-[39px]"
      /> */}
    </div>
  );
};

export default VaucherCode;

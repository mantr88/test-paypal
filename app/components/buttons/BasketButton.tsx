import React, {ComponentProps} from "react";

// import {useWindowScrollPositions} from "@/app/hooks/useWindowScrollPosition";
import BtnArrowUp from "../ui/svgElements/BtnArrowUp";
import Bag from "../ui/svgElements/Bag";

interface IBasketButton extends ComponentProps<"button"> {
  handlerOpenBasket: () => void;
}

const BasketButton = ({handlerOpenBasket}: IBasketButton) => {
  // const {scrollY} = useWindowScrollPositions();

  const buttonClasses = `block md:hidden h-[44px] w-[44px] bg-amber-200 rounded-full p-3 text-orange-700 hover:text-white active:hover:text-white active:background-gradientOrange hover:bg-orange-600  transition-all}`;

  return (
    <button
      className={buttonClasses}
      type="button"
      onClick={handlerOpenBasket}
    >
      <Bag className="stroke-path-1-3 h-[20px] w-[20px]" />
    </button>
  );
};

export default BasketButton;

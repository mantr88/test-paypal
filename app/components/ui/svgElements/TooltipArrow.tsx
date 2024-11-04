import {ISvgProps} from "@/app/interfaces/svg";
import React from "react";

function TooltipArrow({className = ""}: ISvgProps) {
  return (
    <svg
      width="32"
      height="9"
      viewBox="0 0 32 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M30.1667 0.000231981V7.89494C30.1667 7.89494 21.8509 5.51524 16.5142 4.50864C10.4008 3.35554 1 2.81544 1 2.81544V0L30.1667 0.000231981Z"
        fill="white"
      />
      <path
        d="M30.1667 0V6.8947C30.1667 6.8947 21.8509 4.515 16.5142 3.5084C10.4008 2.3553 1 1.8152 1 1.8152"
        stroke="#0094D3"
        stroke-width="2"
      />
    </svg>
  );
}

export default TooltipArrow;

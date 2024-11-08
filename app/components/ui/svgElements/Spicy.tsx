import {ISvgProps} from "@/app/interfaces/svg";
import React from "react";

function Spicy({className = ""}: ISvgProps) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M24.8523 14.8592C25.471 33.2835 9.29846 37.0072 1.13485 36.566C-0.669743 39.2134 16.1 40.3604 23.8211 36.566C32.7945 32.1563 37.7422 20.4182 38 14.8592C33.4628 7.87072 27.3443 11.9474 24.8523 14.8592Z"
        fill="#FF0000"
      />
      <path
        d="M33.9392 8.4023C38.8912 9.9158 39.695 14.1184 39.478 16.0305C39.4831 15.9437 36.894 13.2464 32.096 13.1406C28.3347 13.0577 24.4721 15.613 24.1062 15.6092C24.1606 10.3888 28.9139 8.26291 31.2837 7.85253C30.8542 3.67125 27.0017 2.5869 25.1292 2.56738L25.1482 0.740234C31.2937 1.22197 33.5695 6.049 33.9392 8.4023Z"
        fill="#008B16"
      />
    </svg>
  );
}

export default Spicy;

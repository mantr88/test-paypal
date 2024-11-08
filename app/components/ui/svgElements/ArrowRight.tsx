import {ISvgProps} from "@/app/interfaces/svg";
import React from "react";

function ArrowRight({className = ""}: ISvgProps) {
  return (
    <svg
      width="23"
      height="16"
      viewBox="0 0 23 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1.5 7C0.947715 7 0.5 7.44772 0.5 8C0.5 8.55228 0.947715 9 1.5 9V7ZM22.2071 8.70711C22.5976 8.31658 22.5976 7.68342 22.2071 7.29289L15.8431 0.928932C15.4526 0.538408 14.8195 0.538408 14.4289 0.928932C14.0384 1.31946 14.0384 1.95262 14.4289 2.34315L20.0858 8L14.4289 13.6569C14.0384 14.0474 14.0384 14.6805 14.4289 15.0711C14.8195 15.4616 15.4526 15.4616 15.8431 15.0711L22.2071 8.70711ZM1.5 9H21.5V7H1.5V9Z"
        fill="white"
      />
    </svg>
  );
}

export default ArrowRight;

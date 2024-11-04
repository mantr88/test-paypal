import {ISvgProps} from "@/app/interfaces/svg";

function BtnArrowUp({className = ""}: ISvgProps) {
  return (
    <svg
      width="90"
      height="90"
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_1610_168850)">
        <path
          d="M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z"
          fill="none"
        />
        <path
          d="M46 73.6992V23.6992"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M58.5668 33.9854L45.7424 21.0695L32.918 33.9854"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1610_168850">
          <rect
            width="90"
            height="90"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default BtnArrowUp;

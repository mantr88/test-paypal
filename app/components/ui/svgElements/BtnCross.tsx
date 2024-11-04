import {ISvgProps} from "@/app/interfaces/svg";

function BtnCross({className = ""}: ISvgProps) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_2516_13577)">
        <path
          d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28Z"
          fill="none"
        />
        <path
          d="M9.5896 9.5L18.5891 18.4995"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M9.5896 18.5L18.5891 9.50046"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2516_13577">
          <rect
            width="28"
            height="28"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default BtnCross;

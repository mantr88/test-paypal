import {ISvgProps} from "@/app/interfaces/svg";

function BtnArrowRotate({className = ""}: ISvgProps) {
  return (
    <svg
      width="70"
      height="70"
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_1_5362)">
        <path
          d="M35 70C54.33 70 70 54.33 70 35C70 15.67 54.33 0 35 0C15.67 0 0 15.67 0 35C0 54.33 15.67 70 35 70Z"
          fill="none"
        />
        <path
          d="M25 43.3652L44.023 24.3423M44.023 24.3423L44.0228 37.0238M44.023 24.3423L31.3408 24.3418"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_5362">
          <rect
            width="70"
            height="70"
            fill="currentColor"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default BtnArrowRotate;

import {ISvgProps} from "@/app/interfaces/svg";

function BtnPlus({className = ""}: ISvgProps) {
  return (
    <svg
      width="45"
      height="56"
      viewBox="0 0 45 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        width="45"
        height="56"
        rx="14"
        fill="none"
      />
      <path
        d="M23 37L23 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M14 28L32 28"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default BtnPlus;

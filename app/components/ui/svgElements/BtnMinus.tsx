import {ISvgProps} from "@/app/interfaces/svg";

function BtnMinus({className = ""}: ISvgProps) {
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
        d="M16 28L30 28"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default BtnMinus;

import {ISvgProps} from "@/app/interfaces/svg";

function Arrow({className = ""}: ISvgProps) {
  return (
    <svg
      width="50"
      height="23"
      viewBox="0 0 50 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1 11.5L47 11.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M39 21.5L49 11.5L39 1.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Arrow;

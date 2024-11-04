import {ISvgProps} from "@/app/interfaces/svg";

function Advice({className = ""}: ISvgProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <mask
        id="mask0_1101_27875"
        style={{maskType: "alpha"}}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 17V11H13V17H11ZM11 7V9H13V7H11Z"
          fill="#0A0A0A"
        />
      </mask>
      <g mask="url(#mask0_1101_27875)">
        <rect
          width="24"
          height="24"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default Advice;

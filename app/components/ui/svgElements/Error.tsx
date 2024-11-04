import {ISvgProps} from "@/app/interfaces/svg";

function Error({className = ""}: ISvgProps) {
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
        id="mask0_1067_60092"
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
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 13V7H13V13H11ZM11 15V17H13V15H11Z"
          fill="#0A0A0A"
        />
      </mask>
      <g mask="url(#mask0_1067_60092)">
        <rect
          width="24"
          height="24"
          fill="#FF3419"
        />
      </g>
    </svg>
  );
}

export default Error;

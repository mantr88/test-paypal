import {ISvgProps} from "@/app/interfaces/svg";

function ArrowBack({className = ""}: ISvgProps) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11.25 12.5L5 18.75L11.25 25"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 5V13.75C25 15.0761 24.4732 16.3479 23.5355 17.2855C22.5979 18.2232 21.3261 18.75 20 18.75H5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ArrowBack;

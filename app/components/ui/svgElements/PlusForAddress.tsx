import {ISvgProps} from "@/app/interfaces/svg";

function PlusForAddress({className = ""}: ISvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className={className}
    >
      <path
        d="M6 11L6 1"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M1 6L11 6"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default PlusForAddress;

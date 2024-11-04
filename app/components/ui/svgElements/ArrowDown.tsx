import {ISvgProps} from "@/app/interfaces/svg";

function ArrowDown({className = ""}: ISvgProps) {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        width="44"
        height="44"
        rx="22"
        fill="white"
      />
      <path
        d="M16 19L22 25L28 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ArrowDown;

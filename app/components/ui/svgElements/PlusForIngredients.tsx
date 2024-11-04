import {ISvgProps} from "@/app/interfaces/svg";

function PlusForIngredients({className = ""}: ISvgProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_817_87612)">
        <path
          d="M6.67187 10.0013H10.0052H13.3385M10.0052 6.66797V13.3346M18.3385 10.0013C18.3385 14.6037 14.6076 18.3346 10.0052 18.3346C5.40283 18.3346 1.67188 14.6037 1.67188 10.0013C1.67188 5.39893 5.40283 1.66797 10.0052 1.66797C14.6076 1.66797 18.3385 5.39893 18.3385 10.0013Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_817_87612">
          <rect
            width="20"
            height="20"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default PlusForIngredients;

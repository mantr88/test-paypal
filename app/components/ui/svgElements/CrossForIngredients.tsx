import {ISvgProps} from "@/app/interfaces/svg";

function CrossForIngredients({className = ""}: ISvgProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="#ffffff"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_2790_216995)">
        <path
          d="M7.64298 7.64293L10 9.99995L12.357 12.357M12.357 7.64293L7.64298 12.357M15.8926 15.8925C12.6382 19.1469 7.36181 19.1469 4.10744 15.8925C0.853076 12.6381 0.853076 7.36177 4.10744 4.1074C7.36181 0.853031 12.6382 0.853031 15.8926 4.1074C19.1469 7.36177 19.1469 12.6381 15.8926 15.8925Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2790_216995">
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

export default CrossForIngredients;

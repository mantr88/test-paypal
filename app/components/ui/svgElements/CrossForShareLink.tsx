import {ISvgProps} from "@/app/interfaces/svg";

interface ICloseIcon extends ISvgProps {
  click: () => void;
}

function CrossForShareLink({className = "", click}: ICloseIcon) {
  return (
    <svg
      width="50"
      height="51"
      viewBox="0 0 50 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={click}
    >
      <g clipPath="url(#clip0_668_79966)">
        <path
          d="M19.1074 19.3266L25 25.2191L30.8926 31.1117M30.8926 19.3266L19.1074 31.1117M39.7314 39.9505C31.5955 48.0864 18.4045 48.0864 10.2686 39.9505C2.13269 31.8146 2.13269 18.6237 10.2686 10.4877C18.4045 2.35182 31.5955 2.35182 39.7314 10.4877C47.8673 18.6237 47.8673 31.8146 39.7314 39.9505Z"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_668_79966">
          <rect
            width="50"
            height="50"
            fill="white"
            transform="translate(0 0.219238)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default CrossForShareLink;

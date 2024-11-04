import {ISvgProps} from "@/app/interfaces/svg";

function BtnArrowRotateMobile({className = ""}: ISvgProps) {
  return (
    <svg
      width="54"
      height="54"
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_92_37950)">
        <path
          d="M27 54C41.9117 54 54 41.9117 54 27C54 12.0883 41.9117 0 27 0C12.0883 0 0 12.0883 0 27C0 41.9117 12.0883 54 27 54Z"
          fill="none"
        />
        <path
          d="M18.4697 35.4697C18.1768 35.7626 18.1768 36.2374 18.4697 36.5303C18.7626 36.8232 19.2374 36.8232 19.5303 36.5303L18.4697 35.4697ZM36.7206 19.0294C36.7206 18.6152 36.3848 18.2794 35.9706 18.2794L29.2206 18.2794C28.8063 18.2794 28.4706 18.6152 28.4706 19.0294C28.4706 19.4437 28.8063 19.7794 29.2206 19.7794L35.2206 19.7794L35.2206 25.7794C35.2206 26.1937 35.5563 26.5294 35.9706 26.5294C36.3848 26.5294 36.7206 26.1937 36.7206 25.7794L36.7206 19.0294ZM19.5303 36.5303L36.5009 19.5598L35.4402 18.4991L18.4697 35.4697L19.5303 36.5303Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_92_37950">
          <rect
            width="54"
            height="54"
            fill="currentColor"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default BtnArrowRotateMobile;

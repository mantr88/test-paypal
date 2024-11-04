import {ISvgProps} from "@/app/interfaces/svg";

function Download({className = ""}: ISvgProps) {
  return (
    <svg
      width="30"
      height="31"
      viewBox="0 0 30 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M15 21.75V4.25M15 21.75L7.5 14.25M15 21.75L22.5 14.25M23.75 26.75H6.25"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Download;

import {ISvgProps} from "@/app/interfaces/svg";

interface ShareIconProps extends ISvgProps {
  onClick?: () => void;
}

function Share({className = "", onClick}: ShareIconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        d="M11.75 5.5C12.7855 5.5 13.625 4.66053 13.625 3.625C13.625 2.58947 12.7855 1.75 11.75 1.75C10.7145 1.75 9.875 2.58947 9.875 3.625C9.875 4.66053 10.7145 5.5 11.75 5.5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.25 9.875C5.28553 9.875 6.125 9.03553 6.125 8C6.125 6.96447 5.28553 6.125 4.25 6.125C3.21447 6.125 2.375 6.96447 2.375 8C2.375 9.03553 3.21447 9.875 4.25 9.875Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.75 14.25C12.7855 14.25 13.625 13.4105 13.625 12.375C13.625 11.3395 12.7855 10.5 11.75 10.5C10.7145 10.5 9.875 11.3395 9.875 12.375C9.875 13.4105 10.7145 14.25 11.75 14.25Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.86914 8.94336L10.1379 11.4309"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.1316 4.56836L5.86914 7.05586"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Share;

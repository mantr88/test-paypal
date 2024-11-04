import {ISvgProps} from "@/app/interfaces/svg";

function Arrow2({className = ""}: ISvgProps) {
  return (
    <svg
      width="36"
      height="16"
      viewBox="0 0 36 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM35.7071 8.70711C36.0976 8.31658 36.0976 7.68342 35.7071 7.29289L29.3431 0.928932C28.9526 0.538408 28.3195 0.538408 27.9289 0.928932C27.5384 1.31946 27.5384 1.95262 27.9289 2.34315L33.5858 8L27.9289 13.6569C27.5384 14.0474 27.5384 14.6805 27.9289 15.0711C28.3195 15.4616 28.9526 15.4616 29.3431 15.0711L35.7071 8.70711ZM1 9H35V7H1V9Z"
        fill="white"
      />
    </svg>
  );
}

export default Arrow2;

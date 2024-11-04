import {ISvgProps} from "@/app/interfaces/svg";

function Star({className = ""}: ISvgProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 19.1176L4.66667 23L6.5 15.2353L1 8.76471L8.94444 8.11765L12 1L15.0556 8.11765L23 8.76471L17.5 15.2353L19.3333 23L12 19.1176Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Star;

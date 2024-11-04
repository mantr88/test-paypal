import {ISvgProps} from "@/app/interfaces/svg";

function House({className = ""}: ISvgProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M18.3337 18.333H1.66699"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M1.66699 9.16624L8.43858 3.749C9.35166 3.01856 10.649 3.01856 11.5621 3.749L18.3337 9.16624"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12.917 4.58333V2.91667C12.917 2.68655 13.1036 2.5 13.3337 2.5H15.417C15.6471 2.5 15.8337 2.68655 15.8337 2.91667V7.08333"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M3.33301 18.3337V7.91699"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16.667 18.3337V7.91699"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default House;

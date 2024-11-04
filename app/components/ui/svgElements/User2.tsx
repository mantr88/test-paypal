import {ISvgProps} from "@/app/interfaces/svg";

function User2({className = ""}: ISvgProps) {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M19 21.5V19.5C19 18.4391 18.5786 17.4217 17.8284 16.6716C17.0783 15.9214 16.0609 15.5 15 15.5H9C7.93913 15.5 6.92172 15.9214 6.17157 16.6716C5.42143 17.4217 5 18.4391 5 19.5V21.5M16 7.5C16 9.70914 14.2091 11.5 12 11.5C9.79086 11.5 8 9.70914 8 7.5C8 5.29086 9.79086 3.5 12 3.5C14.2091 3.5 16 5.29086 16 7.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default User2;

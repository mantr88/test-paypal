import {ISvgProps} from "@/app/interfaces/svg";

function Filter({className = ""}: ISvgProps) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11.667 4.58398H6.41699"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.16699 10.416H2.91699"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.91699 12.166C10.8835 12.166 11.667 11.3825 11.667 10.416C11.667 9.44952 10.8835 8.66602 9.91699 8.66602C8.95049 8.66602 8.16699 9.44952 8.16699 10.416C8.16699 11.3825 8.95049 12.166 9.91699 12.166Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.08301 6.33398C5.04951 6.33398 5.83301 5.55048 5.83301 4.58398C5.83301 3.61749 5.04951 2.83398 4.08301 2.83398C3.11651 2.83398 2.33301 3.61749 2.33301 4.58398C2.33301 5.55048 3.11651 6.33398 4.08301 6.33398Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Filter;

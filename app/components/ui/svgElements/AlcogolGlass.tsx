import {ISvgProps} from "@/app/interfaces/svg";

function AlcogolGlass({className = ""}: ISvgProps) {
  return (
    <svg
      width="14"
      height="25"
      viewBox="0 0 14 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M2.6 24H11.4M1.5 10.2H12.5M1.5 10.2C1.5 7.9 2.05 5.6 3.7 1H10.3C11.95 5.6 12.5 7.9 12.5 10.2M1.5 10.2C1.5 11.725 2.07946 13.1875 3.11091 14.2659C4.14236 15.3442 5.54131 15.95 7 15.95M12.5 10.2C12.5 11.725 11.9205 13.1875 10.8891 14.2659C9.85764 15.3442 8.45869 15.95 7 15.95M7 15.95V24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default AlcogolGlass;

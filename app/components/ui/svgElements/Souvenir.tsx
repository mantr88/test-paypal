import {ISvgProps} from "@/app/interfaces/svg";

function Souvenir({className = ""}: ISvgProps) {
  return (
    <svg
      width="24"
      height="23"
      viewBox="0 0 24 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3.375 5.75033L6.25 1.91699H17.75L20.625 5.75033M3.375 5.75033V19.167C3.375 19.6753 3.57693 20.1628 3.93638 20.5223C4.29582 20.8817 4.78334 21.0837 5.29167 21.0837H18.7083C19.2167 21.0837 19.7042 20.8817 20.0636 20.5223C20.4231 20.1628 20.625 19.6753 20.625 19.167V5.75033M3.375 5.75033H20.625M15.8333 9.58366C15.8333 10.6003 15.4295 11.5753 14.7106 12.2942C13.9917 13.0131 13.0167 13.417 12 13.417C10.9833 13.417 10.0083 13.0131 9.28942 12.2942C8.57053 11.5753 8.16667 10.6003 8.16667 9.58366"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Souvenir;

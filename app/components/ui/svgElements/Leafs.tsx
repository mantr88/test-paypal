import {ISvgProps} from "@/app/interfaces/svg";

function Leafs({className = ""}: ISvgProps) {
  return (
    <svg
      width="40"
      height="33"
      viewBox="0 0 40 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M32.0405 8.07823C29.1373 9.53831 24.5368 13.0421 21.4064 18.4203M21.4064 18.4203C20.0197 20.8029 18.9217 23.5533 18.3874 26.6569M21.4064 18.4203C26.4438 21.9165 36.9661 23.3916 38.7571 1.32234C30.1751 1.08585 14.6901 4.17437 21.4064 18.4203ZM18.3874 26.6569C18.1126 28.2532 17.9871 29.9428 18.0481 31.7239M18.3874 26.6569L12.4513 20.6859M12.4513 20.6859L7.414 15.619M12.4513 20.6859C16.3692 17.0859 15.4737 8.52877 0.697611 8.07823C0.511049 14.2315 3.49725 25.5308 12.4513 20.6859Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default Leafs;

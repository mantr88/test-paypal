import {ISvgProps} from "@/app/interfaces/svg";

function Pizzas({className = ""}: ISvgProps) {
  return (
    <svg
      width="27"
      height="26"
      viewBox="0 0 27 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16.7498 11.917H16.7607M12.4165 16.2503H12.4273M17.8332 17.3337H17.844M6.68567 18.5362C7.56482 15.6181 9.15274 12.9632 11.3077 10.8082C13.4627 8.65322 16.1176 7.06531 19.0357 6.18616M2.6665 17.3337L24.3332 23.8337L17.8332 2.16699C14.2063 3.16137 10.9007 5.08266 8.24141 7.7419C5.58217 10.4011 3.66088 13.7068 2.6665 17.3337Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Pizzas;

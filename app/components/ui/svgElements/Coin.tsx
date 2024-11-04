import {ISvgProps} from "@/app/interfaces/svg";

function Coin({className = ""}: ISvgProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.90346 0H7.67269V2.97508C5.01282 3.17019 3.3335 5.2012 3.3335 8.33223C3.3335 11.4846 5.00061 13.5038 7.67269 13.6968V16.0001H8.90346V13.6615C10.8568 13.4067 12.1705 12.2002 12.521 10.301H10.9128C10.5883 11.5558 9.55705 12.2986 8.10753 12.2986C6.19648 12.2986 4.98494 10.7625 4.98494 8.33223C4.98494 5.92358 6.2109 4.3731 8.10032 4.3731C9.51378 4.3731 10.6244 5.24569 10.9128 6.57983H12.5138C12.2718 4.66332 10.855 3.30897 8.90346 3.01809V0Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default Coin;

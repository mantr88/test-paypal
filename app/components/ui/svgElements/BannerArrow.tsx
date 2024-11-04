import {ISvgProps} from "@/app/interfaces/svg";

function BannerArrow({className = ""}: ISvgProps) {
  return (
    <svg
      width="33"
      height="22"
      viewBox="0 0 33 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1 11H31M22 21L32 11L22 1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default BannerArrow;

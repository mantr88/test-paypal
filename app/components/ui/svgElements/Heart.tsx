import {ISvgProps} from "@/app/interfaces/svg";

function Heart({className = ""}: ISvgProps) {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M15.0413 11.8753C16.2209 10.7195 17.4163 9.33408 17.4163 7.52116C17.4163 6.36636 16.9576 5.25886 16.141 4.4423C15.3245 3.62573 14.217 3.16699 13.0622 3.16699C11.6688 3.16699 10.6872 3.56283 9.49967 4.75033C8.31217 3.56283 7.33051 3.16699 5.93717 3.16699C4.78238 3.16699 3.67488 3.62573 2.85831 4.4423C2.04175 5.25886 1.58301 6.36636 1.58301 7.52116C1.58301 9.34199 2.77051 10.7274 3.95801 11.8753L9.49967 17.417L15.0413 11.8753Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Heart;

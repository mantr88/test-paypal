import {ISvgProps} from "@/app/interfaces/svg";

function Cross2({className = ""}: ISvgProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" className={className}>
    <path d="M0.5 11.5L11.5 0.500001" stroke="currentColor" strokeLinecap="round"/>
    <path d="M0.5 0.5L11.5 11.5" stroke="currentColor" strokeLinecap="round"/>
  </svg>
  );
}

export default Cross2;

import {ISvgProps} from "@/app/interfaces/svg";

function Cross({className = "", onClick}: ISvgProps & {onClick?: () => void}) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11.7506 28.2496L28.2497 11.7504M11.7506 11.7504L28.2497 28.2496"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Cross;

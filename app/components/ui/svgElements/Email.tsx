import {ISvgProps} from "@/app/interfaces/svg";

function Email({className = ""}: ISvgProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M22 6.99609L13.03 12.6961C12.7213 12.8895 12.3643 12.9921 12 12.9921C11.6357 12.9921 11.2787 12.8895 10.97 12.6961L2 6.99609M4 3.99609H20C21.1046 3.99609 22 4.89152 22 5.99609V17.9961C22 19.1007 21.1046 19.9961 20 19.9961H4C2.89543 19.9961 2 19.1007 2 17.9961V5.99609C2 4.89152 2.89543 3.99609 4 3.99609Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Email;

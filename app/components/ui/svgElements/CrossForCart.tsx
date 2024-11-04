import {ISvgProps} from "@/app/interfaces/svg";
import {on} from "events";

interface CrossProps extends ISvgProps {
  onClick?: (e: React.MouseEvent) => void;
}

function CrossForCart({className = "", onClick}: CrossProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      className={className}
      onClick={onClick}
    >
      <path
        d="M8.81218 21.1872L21.1866 8.81282M8.81218 8.81282L21.1866 21.1872"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CrossForCart;

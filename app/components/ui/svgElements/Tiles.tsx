import {ISvgProps} from "@/app/interfaces/svg";

function Tiles({className = ""}: ISvgProps) {
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
        d="M5.66667 1H1.77778C1.34822 1 1 1.34822 1 1.77778V5.66667C1 6.09622 1.34822 6.44444 1.77778 6.44444H5.66667C6.09622 6.44444 6.44444 6.09622 6.44444 5.66667V1.77778C6.44444 1.34822 6.09622 1 5.66667 1Z"
        stroke="#FFA100"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.2222 1H10.3333C9.90378 1 9.55556 1.34822 9.55556 1.77778V5.66667C9.55556 6.09622 9.90378 6.44444 10.3333 6.44444H14.2222C14.6518 6.44444 15 6.09622 15 5.66667V1.77778C15 1.34822 14.6518 1 14.2222 1Z"
        stroke="#FFA100"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.2222 9.55556H10.3333C9.90378 9.55556 9.55556 9.90378 9.55556 10.3333V14.2222C9.55556 14.6518 9.90378 15 10.3333 15H14.2222C14.6518 15 15 14.6518 15 14.2222V10.3333C15 9.90378 14.6518 9.55556 14.2222 9.55556Z"
        stroke="#FFA100"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.66667 9.55556H1.77778C1.34822 9.55556 1 9.90378 1 10.3333V14.2222C1 14.6518 1.34822 15 1.77778 15H5.66667C6.09622 15 6.44444 14.6518 6.44444 14.2222V10.3333C6.44444 9.90378 6.09622 9.55556 5.66667 9.55556Z"
        stroke="#FFA100"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Tiles;

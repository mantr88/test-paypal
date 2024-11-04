import {ISvgProps} from "@/app/interfaces/svg";

function WrongFormField({className = ""}: ISvgProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9.99996 4.99996C9.99996 7.1153 9.99996 9.13462 9.99996 11.25M9.99996 14.1666V14.5833M18.3333 9.99996C18.3333 14.6023 14.6023 18.3333 9.99996 18.3333C5.39759 18.3333 1.66663 14.6023 1.66663 9.99996C1.66663 5.39759 5.39759 1.66663 9.99996 1.66663C14.6023 1.66663 18.3333 5.39759 18.3333 9.99996Z"
        stroke="#FF3419"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default WrongFormField;

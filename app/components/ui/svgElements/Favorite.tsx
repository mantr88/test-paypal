import {ISvgProps} from "@/app/interfaces/svg";

function Favorite({className = ""}: ISvgProps) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M19.773 15.6816C20.7889 14.6862 21.8185 13.493 21.8185 11.9316C21.8185 10.9371 21.4234 9.98325 20.7201 9.27999C20.0169 8.57673 19.0631 8.18164 18.0685 8.18164C16.8685 8.18164 16.023 8.52255 15.0003 9.54528C13.9776 8.52255 13.1321 8.18164 11.9321 8.18164C10.9376 8.18164 9.98374 8.57673 9.28048 9.27999C8.57722 9.98325 8.18213 10.9371 8.18213 11.9316C8.18213 13.4998 9.20486 14.693 10.2276 15.6816L15.0003 20.4544L19.773 15.6816Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Favorite;

import {ISvgProps} from "@/app/interfaces/svg";

function TilesAndRows({className = ""}: ISvgProps) {
  return (
    <svg
      width="19"
      height="16"
      viewBox="0 0 19 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11 2H18M11 5.75H18M11 10.25H18M11 14H18M2 1.25H6C6.55228 1.25 7 1.58579 7 2V5.75C7 6.16421 6.55228 6.5 6 6.5H2C1.44772 6.5 1 6.16421 1 5.75V2C1 1.58579 1.44772 1.25 2 1.25ZM2 9.5H6C6.55228 9.5 7 9.83579 7 10.25V14C7 14.4142 6.55228 14.75 6 14.75H2C1.44772 14.75 1 14.4142 1 14V10.25C1 9.83579 1.44772 9.5 2 9.5Z"
        stroke="#FFA100"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default TilesAndRows;

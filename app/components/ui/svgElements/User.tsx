import {ISvgProps} from "@/app/interfaces/svg";

function User({className = ""}: ISvgProps) {
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
        d="M19.773 19.7727V18.4091C19.773 17.6858 19.4857 16.9921 18.9742 16.4806C18.4627 15.9692 17.769 15.6818 17.0457 15.6818H12.9548C12.2315 15.6818 11.5378 15.9692 11.0263 16.4806C10.5149 16.9921 10.2275 17.6858 10.2275 18.4091V19.7727M17.7275 10.2273C17.7275 11.7335 16.5065 12.9545 15.0003 12.9545C13.494 12.9545 12.273 11.7335 12.273 10.2273C12.273 8.72104 13.494 7.5 15.0003 7.5C16.5065 7.5 17.7275 8.72104 17.7275 10.2273Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default User;

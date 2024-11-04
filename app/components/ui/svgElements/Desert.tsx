import {ISvgProps} from "@/app/interfaces/svg";

function Desert({className = ""}: ISvgProps) {
  return (
    <svg
      width="22"
      height="21"
      viewBox="0 0 22 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5.93333 6.17222L1.5 9.44444V18.9444C1.5 19.5778 1.92222 20 2.55556 20H19.4444C20.0778 20 20.5 19.5778 20.5 18.9444V9.44444C20.5 7.33333 17.3333 3.11111 13.1111 1L9.31111 3.74444M15.2222 11.5556H1.5M15.2222 15.7778H1.5M9.94444 5.22222C9.94444 6.38816 8.99927 7.33333 7.83333 7.33333C6.6674 7.33333 5.72222 6.38816 5.72222 5.22222C5.72222 4.05629 6.6674 3.11111 7.83333 3.11111C8.99927 3.11111 9.94444 4.05629 9.94444 5.22222Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Desert;
